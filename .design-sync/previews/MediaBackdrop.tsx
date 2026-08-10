import { MediaBackdrop } from "lps-unyflex";
import { Frame } from "../preview-lib/Frame";
import heroJpg from "../assets/hero.jpg";

/* Os dois elementos que o MediaBackdrop renderiza são `position: absolute;
   inset: 0` — sozinho ele não ocupa espaço nenhum. Ele só existe dentro de uma
   seção `tone="photo"` (que é quem dá altura, `position: relative` e
   `overflow: hidden`), com o conteúdo por cima no `.lp2-container`. O palco
   abaixo reproduz essa seção com altura fixa, para o card mostrar o gradiente. */
function Palco({
  textSide,
  align,
}: {
  textSide: "left" | "right" | "center";
  align: "flex-start" | "flex-end" | "center";
}) {
  return (
    <section
      className="lp2-section lp2-section--photo"
      style={{
        position: "relative",
        height: 320,
        padding: 0,
        display: "flex",
        alignItems: "center",
      }}
    >
      <MediaBackdrop src={heroJpg} textSide={textSide} />

      <div className="lp2-container" style={{ width: "100%" }}>
        <div
          style={{
            maxWidth: 560,
            marginInlineStart: align === "flex-start" ? 0 : "auto",
            marginInlineEnd: align === "flex-end" ? 0 : "auto",
            textAlign: textSide === "center" ? "center" : undefined,
          }}
        >
          <p className="lp2-eyebrow">CURSO PRESENCIAL E ONLINE · CURITIBA</p>
          <h2 className="lp2-h2" style={{ marginTop: 16 }}>
            Um post errado não se apaga.
          </h2>
        </div>
      </div>
    </section>
  );
}

/** `textSide="left"`: o scrim fica forte (0.85) à esquerda e fraco (0.25) à
 *  direita — é a variante que o Hero usa, com o texto sobre a parte escura. */
export const TextoAEsquerda = () => (
  <Frame>
    <Palco textSide="left" align="flex-start" />
  </Frame>
);

/** `textSide="right"` espelha o gradiente: a foto respira à esquerda e o texto
 *  ganha contraste à direita. */
export const TextoADireita = () => (
  <Frame>
    <Palco textSide="right" align="flex-end" />
  </Frame>
);

/** `textSide="center"` troca o gradiente linear por um radial — usado pela
 *  citação e pelo formulário, onde o bloco de texto é centralizado. */
export const TextoAoCentro = () => (
  <Frame>
    <Palco textSide="center" align="center" />
  </Frame>
);
