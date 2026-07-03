// Backfill manual de eventos "Lead" perdidos no Meta Conversions API.
//
// Por que existe: até a correção de REDIRECT_URL em lib/lp/lead.ts, o redirect
// pós-formulário apontava para um domínio (landingpages.unyflex.com.br) que não
// dispara o pixel deste app, então o evento Lead nunca chegava ao Meta mesmo com
// o lead salvo no n8n. Este script reenvia esses eventos retroativamente
// (Meta aceita event_time de até 7 dias atrás).
//
// Uso:
//   META_ACCESS_TOKEN=xxx node scripts/backfill-meta-leads.mjs leads.json
//
// leads.json: array de objetos exportados do n8n, formato:
// [
//   {
//     "nome": "Fulano",
//     "email": "fulano@exemplo.com",
//     "whatsapp": "41999998888",
//     "ip": "200.1.2.3",
//     "url": "https://mkt.unyflex.com.br/licitacao",
//     "dataConversao": "2026-07-02 14:35:00"
//   },
//   ...
// ]

import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const PIXEL_ID = "1168799437651546";
const CAPI_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

const token = process.env.META_ACCESS_TOKEN;
if (!token) {
  console.error("Defina META_ACCESS_TOKEN no ambiente.");
  process.exit(1);
}

const file = process.argv[2];
if (!file) {
  console.error("Uso: META_ACCESS_TOKEN=xxx node scripts/backfill-meta-leads.mjs leads.json");
  process.exit(1);
}

const leads = JSON.parse(readFileSync(file, "utf8"));

function sha256(value) {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function normalizePhone(raw) {
  const digits = raw.replace(/\D/g, "");
  return digits.startsWith("55") ? digits : `55${digits}`;
}

function toEventTime(dataConversao) {
  // "YYYY-MM-DD HH:mm:ss" horário local -> epoch seconds
  const iso = dataConversao.replace(" ", "T");
  return Math.floor(new Date(iso).getTime() / 1000);
}

function extractFbc(url, eventTime) {
  try {
    const fbclid = new URL(url).searchParams.get("fbclid");
    if (!fbclid) return undefined;
    return `fb.1.${eventTime}.${fbclid}`;
  } catch {
    return undefined;
  }
}

async function sendLead(lead) {
  const eventTime = toEventTime(lead.dataConversao);
  const sevenDaysAgo = Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60;
  if (eventTime < sevenDaysAgo) {
    console.warn(`Pulando ${lead.email}: event_time fora da janela de 7 dias aceita pelo Meta.`);
    return;
  }

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: eventTime,
        action_source: "website",
        event_source_url: lead.url,
        user_data: {
          em: [sha256(lead.email)],
          ph: [sha256(normalizePhone(lead.whatsapp))],
          client_ip_address: lead.ip || undefined,
          client_user_agent: lead.userAgent || undefined,
          fbc: extractFbc(lead.url, eventTime),
        },
      },
    ],
  };

  const res = await fetch(`${CAPI_URL}?access_token=${token}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const body = await res.json();
  if (!res.ok) {
    console.error(`Falhou (${lead.email}):`, body);
  } else {
    console.log(`OK (${lead.email}):`, body);
  }
}

for (const lead of leads) {
  await sendLead(lead);
}
