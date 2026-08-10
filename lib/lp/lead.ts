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
  servidorPublico: string;
  /** Só existe quando a LP configura o campo de modalidade (ex.: /patrimonio).
   *  A presença da chave — não o valor — decide se Modalidade_Preferida entra
   *  no payload; LPs sem o campo seguem enviando o payload de sempre. */
  modalidade?: string;
}

export async function submitLead(form: LeadForm, formId: string): Promise<void> {
  const q = new URLSearchParams(window.location.search);
  const geo = await getGeo();

  const payload = {
    Nome: form.nome,
    E_mail: form.email,
    WhatsApp: form.whatsapp,
    Cargo_Setor: form.cargo,
    Orgao_Municipio: form.orgao,
    Orgao_Publico: form.servidorPublico,
    ...(form.modalidade !== undefined
      ? { Modalidade_Preferida: form.modalidade }
      : {}),
    Referral_Source: document.referrer || "",
    Dispositivo: getDevice(),
    URL: window.location.href,
    IP_do_usuario: geo.ip || "",
    Data_da_conversao: nowStamp(),
    Id_do_formulario: formId,
    Pais_do_usuario: geo.country_code || "",
    Regiao_do_usuario: geo.region || "",
    Cidade_do_usuario: geo.city || "",
    UTM_Source: q.get("utm_source") || "",
    UTM_Medium: q.get("utm_medium") || "",
    UTM_Campaign: q.get("utm_campaign") || "",
    UTM_Id: q.get("utm_id") || "",
    UTM_Term: q.get("utm_term") || "",
    UTM_Content: q.get("utm_content") || "",
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
