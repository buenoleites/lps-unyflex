import type { Metadata } from "next";
import Script from "next/script";
import "../lp.css";

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que faria o
  // canonical e a OG desta rota resolverem para /licitacao/licitaexpo. Aqui a base é a
  // origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: "LicitaExpo | Seminário presencial de licitações e contratos em Curitiba",
  description:
    "Seminário presencial em Curitiba para servidores públicos: os pontos onde o certame e a execução contratual travam, mapeados para você decidir com respaldo. 4 dias, 17 horas, 23 a 26 de novembro de 2026. Inscrições abrem em setembro — entre na lista e seja avisado.",
  keywords: [
    "LicitaExpo",
    "seminário de licitações",
    "licitações Curitiba",
    "Lei 14.133",
    "agente de contratação",
    "pregoeiro",
    "pesquisa de preços",
    "ETP",
    "termo de referência",
    "execução contratual",
    "segregação de funções",
    "controle interno",
  ],
  alternates: {
    canonical: "/licitaexpo",
  },
  openGraph: {
    title: "LicitaExpo | Seminário presencial de licitações em Curitiba",
    description:
      "Todo erro no processo tem um nome no papel. 4 dias, 17 horas, Curitiba, 23 a 26 de novembro de 2026. Inscrições abrem em setembro — seja avisado da abertura.",
    url: "/licitaexpo",
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LicitaExpo | Seminário presencial de licitações em Curitiba",
    description:
      "Todo erro no processo tem um nome no papel. 4 dias, 17 horas, Curitiba, 23 a 26 de novembro de 2026. Inscrições abrem em setembro.",
  },
};

export default function LicitaexpoLayout({
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
