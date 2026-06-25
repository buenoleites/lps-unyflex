import type { Metadata } from "next";
import Script from "next/script";
import "../lp.css";

export const metadata: Metadata = {
  title: "Reforma Tributária nos Municípios | Curso Presencial | Unyflex",
  description:
    "Curso presencial em Curitiba para equipes municipais. Aprenda como IBS, CBS e o novo sistema tributário impactam arrecadação, fiscalização e gestão do seu município.",
  keywords: [
    "reforma tributária",
    "IBS",
    "CBS",
    "IVA dual",
    "arrecadação municipal",
    "fiscalização",
    "gestão tributária",
    "curso presencial",
    "Curitiba",
    "municípios",
  ],
  openGraph: {
    title: "Reforma Tributária nos Municípios | Unyflex",
    description:
      "Passo a passo para preparar seu município para a Reforma Tributária. Curso presencial em Curitiba, 04 a 07 de agosto de 2026.",
    type: "website",
  },
};

export default function ReformaLayout({
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
