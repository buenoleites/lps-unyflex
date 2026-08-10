import { Kw } from "lps-unyflex";
import { Frame } from "../preview-lib/Frame";

/** Uma palavra-chave por headline, em accent. É o único destaque de cor
 *  permitido dentro de um título. */
export const EmHeadline = () => (
  <Frame style={{ padding: 24, maxWidth: 820 }}>
    <h2 className="lp2-h2">
      Em ano de eleição, um post errado não se apaga. Alguém responde por ele —{" "}
      <Kw>e o nome é o seu</Kw>.
    </h2>
  </Frame>
);

/** Também funciona no display do hero, que é o uso mais comum. */
export const NoDisplay = () => (
  <Frame style={{ padding: 24, maxWidth: 820 }}>
    <h1 className="lp2-display">
      Licitação sem <Kw>improviso</Kw>.
    </h1>
  </Frame>
);
