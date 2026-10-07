import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Portal, LGPD, e-SIC e Ouvidoria — curso presencial em Curitiba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* TODO: "20 horas" aguarda a Gestão (17 ou 20).
   A ImageResponse não lê CSS — os valores abaixo espelham os tokens desta LP
   (--bg-dark #0a0e14 do lp2.css, --accent #05CCCC do theme.css). */
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
            color: "#05CCCC",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          Curso presencial em Curitiba
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
          Portal, LGPD, e-SIC e Ouvidoria
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: "44px",
            maxWidth: "860px",
            lineHeight: 1.5,
          }}
        >
          Guia atualizado para municípios
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#ffffff",
            fontWeight: 700,
          }}
        >
          4 dias · 20 horas · 16 a 19 de novembro de 2026 · presencial ou ao vivo
        </div>
      </div>
    ),
    { ...size }
  );
}
