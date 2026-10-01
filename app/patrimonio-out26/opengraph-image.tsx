import { ImageResponse } from "next/og";
import { SUBTITULO, TITULO } from "./content";

export const dynamic = "force-static";
export const alt = `${TITULO} · curso presencial em Curitiba · 20 a 23/10 · 17 horas`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* A ImageResponse não lê CSS — os valores espelham os tokens do lp3.css
   (--bg-0 #0a0e14, --accent #84C776, --accent-ink #1f2a1c). Textos: os do
   topo do briefing, na composição dos criativos. */
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
            background: "#84C776",
            color: "#1f2a1c",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "8px 18px",
            borderRadius: "999px",
            marginBottom: "32px",
          }}
        >
          Inscrições abertas
        </div>
        <div style={{ fontSize: "56px", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-1px", maxWidth: "1000px" }}>
          {TITULO}
        </div>
        <div style={{ fontSize: "26px", color: "rgba(247,245,240,0.74)", marginTop: "16px" }}>{SUBTITULO}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "20px", marginTop: "40px" }}>
          <div style={{ fontSize: "40px", fontWeight: 800 }}>20 a 23 de outubro</div>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#84C776" }}>Curitiba-PR</div>
        </div>
        <div style={{ fontSize: "20px", fontWeight: 600, marginTop: "12px" }}>4 dias · 17 horas · 6 painéis · certificado</div>
      </div>
    ),
    { ...size }
  );
}
