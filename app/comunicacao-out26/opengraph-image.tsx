import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Seminário Comunicação Pública e Mídias Sociais · 2ª edição · presencial em Curitiba · 27 a 30/10 · 17 horas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* A ImageResponse não lê CSS — os valores abaixo espelham os tokens desta LP
   (--bg-dark #0a0e14 do lp2.css, --accent #4faef7 do theme.css). Os três
   textos são o eyebrow (com o selo), o nome do seminário e o H1 da página. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0e14",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            color: "#4faef7",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              background: "#4faef7",
              color: "#071016",
              padding: "6px 14px",
              borderRadius: "999px",
              marginRight: "16px",
            }}
          >
            2ª edição
          </span>
          Seminário presencial em Curitiba · 27 a 30/10 · 17 horas
        </div>
        <div
          style={{
            fontSize: "54px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: "28px",
            maxWidth: "1020px",
          }}
        >
          Comunicação Pública e Mídias Sociais
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "980px",
            lineHeight: 1.4,
          }}
        >
          Publicidade institucional tem limite. Impulsionamento tem regra. A
          fronteira entre informar e promover é onde o órgão é autuado.
        </div>
      </div>
    ),
    { ...size }
  );
}
