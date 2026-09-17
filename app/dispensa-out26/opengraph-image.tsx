import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Dispensa e Inexigibilidade Eletrônicas · curso presencial em Curitiba · 13 a 16/10 · 17 horas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* A ImageResponse não lê CSS — os valores abaixo espelham os tokens desta LP
   (--bg-dark #0a0e14 do lp2.css, --accent #00aeef do theme.css). Os três
   textos são o eyebrow, o nome do curso e o H1 da página. */
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
            fontSize: "18px",
            color: "#00aeef",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          Curso presencial em Curitiba · 13 a 16/10 · 17 horas
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
          Dispensa e Inexigibilidade Eletrônicas
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "980px",
            lineHeight: 1.4,
          }}
        >
          A IN 52/2025 e o SICX mudaram a compra direta. Quem seguir o roteiro
          antigo erra o processo — e assina embaixo.
        </div>
      </div>
    ),
    { ...size }
  );
}
