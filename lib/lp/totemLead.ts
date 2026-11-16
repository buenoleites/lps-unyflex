import { buildLeadTitle, getDevice, nowStamp, WEBHOOK_URL } from "./lead";

/* Envio do lead do TOTEM (quiosque do estande). Mesmo webhook e mesmas chaves
 * de payload do submitLead (lib/lp/lead.ts), com cinco diferenças de propósito:
 *
 * - Nada lido nem gravado no navegador: o tracking é FIXO (utm_source=totem,
 *   utm_campaign=totem50, pedido do Sistemas em 16/11) — não passa por
 *   getTracking(), que usa sessionStorage.
 * - Sem ipwho.is: o IP do quiosque é o do pavilhão, não do lead.
 * - Sem keepalive: a página não navega depois do envio, e o status importa.
 * - Timeout de 10 s (AbortController).
 * - LANÇA erro em resposta não-2xx, timeout ou falha de rede. Quem chama mostra
 *   a tela de erro e NÃO redireciona (o oposto das LPs, que redirecionam no
 *   finally mesmo com o webhook fora do ar).
 *
 * Sem Orgao_Publico: o totem não tem o toggle "É servidor público?", e o n8n
 * fechava como "Perdido" quem chegava com "Não" (mesmo motivo do `vinculo`). */

export interface TotemLeadValues {
  nome: string;
  email: string;
  /** Só dígitos, 13: 55 + DDD + 9 dígitos (decisão do Gustavo, 16/11). */
  telefone: string;
  cargo: string;
  /** Órgão e município num campo só, como no briefing → Orgao_Municipio. */
  orgaoMunicipio: string;
}

export interface TotemLeadConfig {
  formId: string;
  produto: string;
  paginaOrigem: string;
  utmSource: string;
  utmCampaign: string;
  /** Valor da chave `consentimento` (mesma chave das outras LPs). */
  consentimento: string;
  timeoutMs: number;
}

export async function submitTotemLead(v: TotemLeadValues, cfg: TotemLeadConfig): Promise<void> {
  const tracking = { utm_source: cfg.utmSource, utm_campaign: cfg.utmCampaign };

  const payload = {
    Nome: v.nome,
    E_mail: v.email,
    WhatsApp: v.telefone,
    Cargo_Setor: v.cargo,
    Orgao_Municipio: v.orgaoMunicipio,
    produto: cfg.produto,
    pagina_origem: cfg.paginaOrigem,
    titulo: buildLeadTitle(tracking, cfg.produto, cfg.formId),
    Referral_Source: "",
    Dispositivo: getDevice(),
    URL: window.location.origin + window.location.pathname,
    IP_do_usuario: "",
    Data_da_conversao: nowStamp(),
    Id_do_formulario: cfg.formId,
    Pais_do_usuario: "",
    Regiao_do_usuario: "",
    Cidade_do_usuario: "",
    UTM_Source: cfg.utmSource,
    UTM_Medium: "",
    UTM_Campaign: cfg.utmCampaign,
    UTM_Id: "",
    UTM_Term: "",
    UTM_Content: "",
    utm_source: cfg.utmSource,
    utm_medium: "",
    utm_campaign: cfg.utmCampaign,
    utm_content: "",
    utm_term: "",
    utm_id: "",
    fbclid: "",
    gclid: "",
    consentimento: cfg.consentimento,
  };

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), cfg.timeoutMs);
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      credentials: "omit",
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error(`Webhook respondeu ${res.status}`);
  } finally {
    clearTimeout(timer);
  }
}
