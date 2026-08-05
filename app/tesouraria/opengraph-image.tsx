import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "A Nova Era da Tesouraria e Contabilidade Municipal — curso presencial e online em Curitiba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* A ImageResponse não lê CSS — os valores abaixo espelham os tokens desta LP
   (--bg-dark #0a0e14 do lp2.css, --accent #69acf1 do theme.css). */
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
            color: "#69acf1",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          Curso presencial e online ao vivo · Curitiba
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
          Uma conciliação atrasada hoje é a ressalva de amanhã.
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
          A Nova Era da Tesouraria e Contabilidade Municipal — execução
          orçamentária, conciliação automatizada, mapa de riscos e IA aplicada.
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#ffffff",
            fontWeight: 700,
          }}
        >
          4 dias · 17 horas · Curitiba-PR · 15 a 18 de setembro de 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
