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
    "Seminário presencial em Curitiba para servidores públicos: os pontos onde o certame e a execução contratual travam, mapeados para você decidir com respaldo. 4 dias, 17 horas, 24 a 27 de novembro de 2026.",
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
      "Todo erro no processo tem um nome no papel. 4 dias, 17 horas, Curitiba, 24 a 27 de novembro de 2026.",
    url: "/licitaexpo",
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LicitaExpo | Seminário presencial de licitações em Curitiba",
    description:
      "Todo erro no processo tem um nome no papel. 4 dias, 17 horas, Curitiba, 24 a 27 de novembro de 2026.",
  },
};

// O root layout injeta um EducationEvent de outra LP (dívida conhecida); este schema
// é o que descreve o LicitaExpo de verdade, com as datas corretas do evento.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "LicitaExpo",
  description:
    "Seminário de licitações e contratos para servidores públicos: 4 dias, 17 horas, 6 painéis. Presencial em Curitiba, com plano de acesso online à transmissão ao vivo.",
  url: "https://mkt.unyflex.com.br/licitaexpo",
  startDate: "2026-11-24",
  endDate: "2026-11-27",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Curitiba",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function LicitaexpoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
