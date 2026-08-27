/* Rastreamento de origem (UTMs + click ids) com persistência de sessão.
 *
 * Problema que resolve: as UTMs eram lidas de `window.location.search` só no
 * submit. Quem navegava entre páginas (ou perdia a query string em um
 * redirect) convertia sem atribuição — e o relatório do Meta já se mostrou
 * errado para esse fim.
 *
 * Regra: na carga da página, a query string vence e o sessionStorage completa
 * o que faltar; no submit, lê-se a query atual com fallback no storage. Tudo
 * best-effort — sessionStorage pode não existir (Safari privado, quota) e o
 * lead nunca pode deixar de sair por causa disso.
 *
 * Só chamar em useEffect ou em handler: nunca durante o render (hidratação). */

export const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "fbclid",
  "gclid",
] as const;

export type TrackingKey = (typeof TRACKING_KEYS)[number];
export type TrackingParams = Partial<Record<TrackingKey, string>>;

const STORAGE_KEY = "unyflex.tracking";

function fromQuery(): TrackingParams {
  if (typeof window === "undefined") return {};
  const q = new URLSearchParams(window.location.search);
  const out: TrackingParams = {};
  for (const key of TRACKING_KEYS) {
    const value = q.get(key);
    if (value) out[key] = value;
  }
  return out;
}

function fromStorage(): TrackingParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    const out: TrackingParams = {};
    for (const key of TRACKING_KEYS) {
      const value = (parsed as Record<string, unknown>)[key];
      if (typeof value === "string" && value) out[key] = value;
    }
    return out;
  } catch {
    return {};
  }
}

/* O conjunto é ATÔMICO, nunca mesclado chave a chave: uma chegada nova
   SUBSTITUI o que estava guardado. Mesclar produziria atribuição Frankenstein
   — quem chega por um anúncio do Google com utm_source+gclid herdaria o
   utm_campaign e o fbclid da visita anterior pelo Meta, e o lead entraria
   creditado a duas campanhas. Sem parâmetro nenhum na query (navegação
   interna), o que estava guardado permanece. */

/** Na carga da página: se a query traz rastreamento, ele passa a ser O
 *  conjunto da sessão. Query vazia não toca no que já está guardado. */
export function captureTracking(): void {
  const q = fromQuery();
  if (Object.keys(q).length === 0) return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(q));
  } catch {
    /* best-effort: sem storage, o submit ainda lê a query atual */
  }
}

/** No submit: a query da página vence inteira; sem query, o que ficou da
 *  sessão. */
export function getTracking(): TrackingParams {
  const q = fromQuery();
  return Object.keys(q).length > 0 ? q : fromStorage();
}
