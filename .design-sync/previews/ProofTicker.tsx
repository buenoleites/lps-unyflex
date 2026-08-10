import { ProofTicker } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame, injectCss } from "../preview-lib/Frame";

/* A faixa é uma grade de 4 colunas fixas acima de 800px e 2 colunas abaixo
   disso. Como o card é largo, o segundo estado só aparece se a regra do mobile
   for reaplicada com especificidade maior — é o caso de uso do `injectCss`
   documentado no Frame. */
injectCss(
  "pv-ticker-mobile",
  `.pv-ticker-mobile .lp2-ticker__list {
     grid-template-columns: repeat(2, 1fr);
     gap: 32px 16px;
   }`,
);

/** A faixa de prova como a /comunicacao usa: 4 métricas em linha sobre o
 *  `--bg-dark`, número em accent e label em small muted. É a única seção do
 *  template com padding reduzido (40px) e filetes em cima e embaixo. */
export const QuatroMetricas = () => (
  <Frame>
    <ProofTicker content={C.ticker} />
  </Frame>
);

/** O mesmo conteúdo na largura de um telefone (a coluna de 420px sobre a
 *  página branca): as 4 métricas viram 2x2. A grade é fixa em 4 colunas no
 *  desktop, então a variação real do componente é a de viewport — mudar o
 *  número de métricas desalinha a faixa. */
export const EmpilhadoNoMobile = () => (
  <Frame style={{ background: "#ffffff", padding: 24 }}>
    <div
      className="pv-ticker-mobile"
      style={{ maxWidth: 420, marginInline: "auto" }}
    >
      <ProofTicker content={C.ticker} />
    </div>
  </Frame>
);
