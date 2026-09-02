import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Soluções Práticas de Engenharia e Urbanismo — curso presencial e online em Curitiba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* A ImageResponse não lê CSS — os valores abaixo espelham os tokens desta LP
   (--bg-dark #0a0e14 do lp2.css, --accent #00aeef do theme.css). */
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
          Curso presencial em Curitiba · também online ao vivo
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
          Soluções Práticas de Engenharia e Urbanismo
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
          Contratação emergencial e atas preventivas para eventos climáticos na
          Lei 14.133 — mais BIM, drones, SINAPI/SICRO e IA aplicada ao projeto.
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#ffffff",
            fontWeight: 700,
          }}
        >
          17 horas · Curitiba-PR · 22 a 25/09 de 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
