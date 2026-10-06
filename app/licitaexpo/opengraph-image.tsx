import { ImageResponse } from "next/og";
import { GANCHO, NOME_OFICIAL } from "./content";

export const dynamic = "force-static";
export const alt = `${NOME_OFICIAL} · seminário presencial em Curitiba · 24 a 27/11/2026 · 17 horas`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* A ImageResponse não lê CSS — os valores espelham os tokens do lp3.css
   (--bg-0 #0a0e14) e do theme.css da rota (--accent #4EABE9, --accent-ink #061a27). */
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
          padding: "72px 80px",
          color: "#f7f5f0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: "#4EABE9",
            color: "#061a27",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "8px 18px",
            borderRadius: "999px",
            marginBottom: "32px",
          }}
        >
          Seminário presencial · Curitiba-PR
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "#4EABE9",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          {NOME_OFICIAL}
        </div>
        <div
          style={{
            fontSize: "58px",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-1px",
            marginBottom: "36px",
            maxWidth: "980px",
          }}
        >
          {GANCHO}
        </div>
        <div style={{ fontSize: "20px", fontWeight: 700, color: "#f7f5f0" }}>
          4 dias · 17 horas · 24 a 27 de novembro de 2026 · presencial ou ao vivo
        </div>
      </div>
    ),
    { ...size }
  );
}
