import { StickyCta } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame, injectCss } from "../preview-lib/Frame";

/* Duas coisas escondem a barra num card e nenhuma delas é do componente:
   1. o lp2.css a esconde com `display: none` acima de 800px (ela é mobile-only);
   2. a classe `.is-visible` só entra quando dois IntersectionObserver acham
      `#topo` e `#inscricao` na página — que num card isolado não existem.
   O CSS abaixo força o estado visível no <head> (nunca como <style> no JSX: o
   render check lê o textContent da raiz da célula e um <style> ali cegaria o
   gate). */
injectCss(
  "lp2-preview-sticky",
  `.lp2-sticky {
     display: flex !important;
     transform: none !important;
     pointer-events: auto !important;
   }
   /* A barra é a única peça do lp2 que precisa da largura REAL do aparelho: a
      âncora de preço é \`nowrap\`, então os 24px de respiro do card em cada lado
      estreitariam a faixa a ponto de empurrar o botão para fora. */
   body { padding: 0 !important; }`
);

/* A barra é `position: fixed`, então precisa de um bloco contentor com altura —
   sem isso ela ancoraria no topo do card. O palco simula a página por trás, na
   altura de um aparelho. */
function Palco({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "relative",
        transform: "translateZ(0)",
        height: 760,
        overflow: "hidden",
        background: "var(--bg-dark)",
        paddingTop: 32,
      }}
    >
      <div className="lp2-container">
        <p className="lp2-eyebrow">Planos</p>
        <h2 className="lp2-h2" style={{ marginTop: 16 }}>
          {C.plans.title}
        </h2>
        <p style={{ marginTop: 16, color: "var(--text-on-dark-muted)" }}>
          {C.plans.lead}
        </p>
      </div>
      {children}
    </div>
  );
}

/** O estado visível da barra: âncora de preço à esquerda, CTA pílula à direita,
 *  sobre a superfície elevada com borda superior. É o que o visitante vê depois
 *  que o hero sai da tela e antes de chegar ao formulário. */
export const BarraVisivel = () => (
  <Frame>
    <Palco>
      <StickyCta content={C.stickyCta} />
    </Palco>
  </Frame>
);

/** A âncora de preço tem `white-space: nowrap`: uma faixa de valores em vez de
 *  um "a partir de" empurra o botão e encolhe o espaço do rótulo. Vale conferir
 *  no menor aparelho antes de escolher a copy. */
export const AncoraLonga = () => (
  <Frame>
    <Palco>
      <StickyCta
        content={{
          priceAnchor: "R$ 2.000 a R$ 3.800",
          label: "Ver planos",
          href: "#planos",
        }}
      />
    </Palco>
  </Frame>
);
