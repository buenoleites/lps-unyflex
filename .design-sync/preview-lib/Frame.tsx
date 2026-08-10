/**
 * Helper compartilhado dos previews. Não é um componente do design system e
 * não vai para o bundle — mora fora de `.design-sync/previews/` de propósito
 * (o conversor trata tudo lá dentro como um preview de componente).
 *
 * Por que existe: o `app/lp2.css` deixa todo `[data-reveal]` em `opacity: 0`
 * até o `useReveal` marcar a seção como `.is-visible` via IntersectionObserver.
 * Num card isso dá dois problemas — as células abaixo da dobra nunca
 * intersectam (o screenshot é fullPage, não rola), e a transição de 400ms
 * disputa com a captura, o que faria a mesma preview passar num run e falhar
 * no seguinte. Aqui o reveal é neutralizado para o card mostrar o estado
 * final, que é o que interessa a quem está escolhendo um componente.
 *
 * O CSS vai para o <head>, NUNCA como um <style> dentro do preview: o render
 * check lê `textContent` da raiz de cada célula para decidir se o card tem
 * conteúdo (package-validate.mjs:534). Um <style> ali dentro faria toda
 * preview parecer preenchida, inclusive uma que não renderizou nada — ou
 * seja, cegaria o gate nos 21 componentes.
 */

const BASE_CSS = `
  /* estado final do reveal — ver comentário acima */
  .lp2-root [data-reveal] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
`;

/** Injeta CSS no <head>, idempotente por id. Use no escopo do módulo de uma
 *  preview que precise forçar um estado que só existe em outra viewport. */
export function injectCss(id: string, css: string) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}

injectCss("lp2-preview-base", BASE_CSS);

export function Frame({
  children,
  style,
}: {
  children: React.ReactNode;
  /** Wrapper com estilo inline; sem isso o filho renderiza direto. */
  style?: React.CSSProperties;
}) {
  return style ? <div style={style}>{children}</div> : <>{children}</>;
}
