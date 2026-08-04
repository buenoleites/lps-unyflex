import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "LicitaExpo — Seminário presencial de licitações e contratos em Curitiba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* A ImageResponse não lê CSS — os valores abaixo espelham os tokens do lp2.css
   (--bg-dark #0a0e14, --accent #00aeef, --text-on-dark-muted). */
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
          Seminário presencial · Curitiba
        </div>
        <div
          style={{
            fontSize: "60px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-1px",
            marginBottom: "28px",
            maxWidth: "960px",
          }}
        >
          Todo erro no processo tem um nome no papel. Geralmente é o seu.
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: "44px",
            maxWidth: "820px",
            lineHeight: 1.5,
          }}
        >
          LicitaExpo — os pontos onde o certame e a execução contratual travam,
          mapeados para você decidir com respaldo.
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#ffffff",
            fontWeight: 700,
          }}
        >
          4 dias · 17 horas · Curitiba-PR · 24 a 27 de novembro de 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
