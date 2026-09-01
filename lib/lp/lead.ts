import { getTracking } from "./utm";

const WEBHOOK_URL = "https://n8n.unyflex.com.br/webhook/lp-leads-unyflex";
const REDIRECT_URL = "/obrigado";

function nowStamp(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

function getDevice(): string {
  if (typeof navigator === "undefined") return "Desktop";
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)
    ? "Mobile"
    : "Desktop";
}

async function getGeo(): Promise<Record<string, string>> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 1500);
    const res = await fetch("https://ipwho.is/", { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) return {};
    const d = await res.json();
    if (d && d.success === false) return {};
    return {
      ip: d.ip || "",
      country_code: d.country_code || "",
      region: d.region || "",
      city: d.city || "",
    };
  } catch {
    return {};
  }
}

export interface LeadForm {
  nome: string;
  email: string;
  whatsapp: string;
  cargo: string;
  orgao: string;
  /** Toggle "É servidor público?" (Sim/Não). Existe em todas as LPs que NÃO
   *  configuram o campo `vinculo`; vira Orgao_Publico no payload. */
  servidorPublico?: string;
  /** Select "Seu vínculo" (servidor/terceirizado/fornecedor/outro). Só existe
   *  quando a LP configura o campo — e aí SUBSTITUI servidorPublico: o payload
   *  manda `vinculo` e não manda Orgao_Publico (o n8n fechava como "Perdido"
   *  quem marcava "Não" no toggle, inclusive lead qualificado). */
  vinculo?: string;
  /** Só existe quando a LP configura o campo de modalidade (ex.: /patrimonio).
   *  A presença da chave — não o valor — decide se Modalidade_Preferida entra
   *  no payload; LPs sem o campo seguem enviando o payload de sempre. */
  modalidade?: string;
}

export interface SubmitOptions {
  /** Slug do curso/turma no mapa de cursos do n8n (ex.: "licitacao-out26").
   *  Entra no payload como `produto` só quando definido. */
  produto?: string;
  /** Slug da página de origem; entra como `pagina_origem` só quando definido. */
  paginaOrigem?: string;
}

export async function submitLead(
  form: LeadForm,
  formId: string,
  opts: SubmitOptions = {}
): Promise<void> {
  // Query atual com fallback no sessionStorage (lib/lp/utm.ts): a atribuição
  // sobrevive à navegação entre páginas antes da conversão.
  const t = getTracking();
  const geo = await getGeo();

  const payload = {
    Nome: form.nome,
    E_mail: form.email,
    WhatsApp: form.whatsapp,
    Cargo_Setor: form.cargo,
    Orgao_Municipio: form.orgao,
    ...(form.vinculo !== undefined
      ? { vinculo: form.vinculo }
      : { Orgao_Publico: form.servidorPublico ?? "" }),
    ...(form.modalidade !== undefined
      ? { Modalidade_Preferida: form.modalidade }
      : {}),
    ...(opts.produto ? { produto: opts.produto } : {}),
    ...(opts.paginaOrigem ? { pagina_origem: opts.paginaOrigem } : {}),
    Referral_Source: document.referrer || "",
    Dispositivo: getDevice(),
    URL: window.location.href,
    IP_do_usuario: geo.ip || "",
    Data_da_conversao: nowStamp(),
    Id_do_formulario: formId,
    Pais_do_usuario: geo.country_code || "",
    Regiao_do_usuario: geo.region || "",
    Cidade_do_usuario: geo.city || "",
    // Chaves legadas (o n8n atual mapeia estas) — agora com fallback de sessão.
    UTM_Source: t.utm_source ?? "",
    UTM_Medium: t.utm_medium ?? "",
    UTM_Campaign: t.utm_campaign ?? "",
    UTM_Id: t.utm_id ?? "",
    UTM_Term: t.utm_term ?? "",
    UTM_Content: t.utm_content ?? "",
    // Mesmos nomes da query string, para atribuição por criativo sem depender
    // do relatório do Meta.
    utm_source: t.utm_source ?? "",
    utm_medium: t.utm_medium ?? "",
    utm_campaign: t.utm_campaign ?? "",
    utm_content: t.utm_content ?? "",
    utm_term: t.utm_term ?? "",
    utm_id: t.utm_id ?? "",
    fbclid: t.fbclid ?? "",
    gclid: t.gclid ?? "",
  };

  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  });
}

export interface ThankYouOptions {
  url?: string;
  /** Anexa nome, e-mail e WhatsApp na query string. O Pixel dispara na página de
   *  destino, então isso manda PII no event_source_url — use false em LPs novas. */
  withPii?: boolean;
}

export function redirectToThankYou(
  form: LeadForm,
  opts: ThankYouOptions = {}
): void {
  const { url = REDIRECT_URL, withPii = true } = opts;

  if (!withPii) {
    window.location.href = url;
    return;
  }

  const params = new URLSearchParams({
    Nome: form.nome,
    E_mail: form.email,
    WhatsApp: form.whatsapp,
    Cargo_Setor: form.cargo,
    Orgao_Municipio: form.orgao,
  });
  window.location.href = `${url}?${params.toString()}`;
}
