/* Parâmetro `c=` da URL (campanha), lido na carga e guardado na sessão.
 *
 * Os anúncios da /tesouraria-nov26 chegam com `?c=<campanha>` em vez de
 * utm_campaign. lib/lp/utm.ts só conhece utm_* + fbclid + gclid e NÃO é alterado
 * (regra: nada compartilhado muda além do opt-in em lib/lp/lead.ts). Aqui é o
 * mesmo contrato: na carga a query vence e vai para o sessionStorage; no
 * submit lê-se a query atual com fallback no storage e, por último, no slug da
 * página. Best-effort — sem storage o lead sai do mesmo jeito.
 *
 * Só chamar em useEffect ou em handler: nunca durante o render. */

const STORAGE_KEY = "unyflex.campaign";

function fromQuery(): string {
  if (typeof window === "undefined") return "";
  const value = new URLSearchParams(window.location.search).get("c");
  return value ? value.trim() : "";
}

function fromStorage(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

/** Na carga: `?c=` presente substitui o que estava guardado. */
export function captureCampaign(): void {
  const c = fromQuery();
  if (!c) return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, c);
  } catch {
    /* best-effort */
  }
}

/** No submit: query → sessão → fallback (o slug da LP). Nunca vazio. */
export function getCampaign(fallback: string): string {
  return fromQuery() || fromStorage() || fallback;
}
