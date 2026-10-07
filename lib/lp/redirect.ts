/* Redirect client-side de uma rota para outra. O site é `output: 'export'`
   (sem servidor), então não existe redirect HTTP: a página carrega vazia e o
   browser é mandado embora no primeiro efeito. Este helper carrega a query
   (UTMs, fbclid, ?c=) e o hash (#inscricao) para o destino — antes cada
   page.tsx chamava `window.location.replace("<destino>")` e perdia os dois. */
export function redirectPreserving(to: string): void {
  const { search, hash } = window.location;
  window.location.replace(`${to}${search}${hash}`);
}
