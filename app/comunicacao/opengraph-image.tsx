import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Comunicação Pública 360º — Curso presencial e online de comunicação pública em Curitiba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* A ImageResponse não lê CSS — os valores abaixo espelham os tokens desta LP
   (--bg-dark #0a0e14 do lp2.css, --accent #4faef7 do theme.css). */
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
            color: "#4faef7",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          Curso presencial e online · Curitiba
        </div>
        <div
          style={{
            fontSize: "54px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: "28px",
            maxWidth: "1000px",
          }}
        >
          Em ano de eleição, um post errado não se apaga. Alguém responde por
          ele — e o nome é o seu.
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
          Comunicação Pública 360º — crises, fake news, redes sociais e período
          eleitoral, com protocolo, técnica e critério jurídico.
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#ffffff",
            fontWeight: 700,
          }}
        >
          4 dias · 17 horas · Curitiba-PR · 01 a 04 de setembro de 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
