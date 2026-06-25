import type { Metadata } from "next";
import Script from "next/script";
import "../lp.css";

export const metadata: Metadata = {
  title: "IA na Fase Preparatória de Licitações | Curso Presencial | Unyflex",
  description:
    "Curso presencial em Curitiba para servidores e profissionais de licitação. Aprenda a usar IA na elaboração de DFD, ETP, TR, PCA e mapa de riscos com segurança técnica e conformidade com a Lei 14.133.",
  keywords: [
    "licitação",
    "lei 14.133",
    "ETP",
    "TR",
    "PCA",
    "DFD",
    "mapa de riscos",
    "inteligência artificial",
    "compras públicas",
    "fase preparatória",
    "curso presencial",
    "Curitiba",
  ],
  openGraph: {
    title: "IA na Fase Preparatória de Licitações | Unyflex",
    description:
      "Domine DFD, ETP, TR, PCA e mapa de riscos com apoio de IA. Curso presencial em Curitiba, 28 a 31 de julho de 2025.",
    type: "website",
  },
};

export default function LicitacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1168799437651546');
      `}</Script>
      {children}
    </>
  );
}
