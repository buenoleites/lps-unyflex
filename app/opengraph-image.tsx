import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Licitações com Inteligência Artificial — Curso presencial Unyflex em Curitiba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
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
            width: "48px",
            height: "4px",
            background: "#1565c0",
            borderRadius: "2px",
            marginBottom: "32px",
          }}
        />
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          Licitações com Inteligência Artificial
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#a3a3a3",
            marginBottom: "48px",
            maxWidth: "750px",
            lineHeight: 1.5,
          }}
        >
          Curso presencial para servidores públicos. Use IA em DFD, ETP, TR e
          mapa de riscos com segurança técnica.
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#1565c0",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Unyflex · Curitiba · 28–31 de julho
        </div>
      </div>
    ),
    { ...size }
  );
}
