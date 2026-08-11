import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Portal, LGPD, e-SIC e Ouvidoria — curso presencial em Curitiba";
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
          O portal manda publicar; a LGPD manda proteger. O caminho para
          cumprir a LAI e a Lei nº 13.709 ao mesmo tempo, na prática do
          município.
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#ffffff",
            fontWeight: 700,
          }}
        >
          17 horas · Curitiba-PR · 15 a 18/09 de 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
