import type { Metadata } from "next";
import Script from "next/script";
import "../lp3.css";
import { DESCRICAO, NOME_OFICIAL, SLUG } from "./content";

/* Seminário Encerramento do Exercício — presencial em Curitiba-PR, 08 a
   11/12/2026. Template lp3 (padrão da /licitaexpo) com o âmbar de Finanças
   (accent default do lp3.css; não precisa de theme.css). */

const PAGE_TITLE = `${NOME_OFICIAL} | Unyflex`;
const PAGE_URL = `https://mkt.unyflex.com.br/${SLUG}`;
const META_DESCRIPTION = `Seminário presencial em Curitiba-PR, 08 a 11 de dezembro de 2026 (4 dias · 20 horas). ${DESCRICAO}`;

export const metadata: Metadata = {
  // O root layout embute /licitacao no metadataBase; aqui a base é a origem.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: PAGE_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
    url: `/${SLUG}`,
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
  },
};

// O root layout injeta um EducationEvent de outra LP (dívida conhecida); este
// schema descreve o seminário de verdade.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: NOME_OFICIAL,
  description: META_DESCRIPTION,
  url: PAGE_URL,
  startDate: "2026-12-08",
  endDate: "2026-12-11",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
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
  offers: [
    { name: "BasicClass", price: "3300" },
    { name: "MasterClass", price: "3600" },
    { name: "PremiumClass", price: "3900" },
  ].map((plano) => ({
    "@type": "Offer",
    name: plano.name,
    price: plano.price,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: PAGE_URL,
  })),
  organizer: { "@type": "Organization", name: "Unyflex", url: "https://unyflex.com.br" },
};

export default function EncerramentoDez26Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* O hero é background-image em CSS; o preload derruba o LCP mobile. */}
      <link rel="preload" as="image" href={`/${SLUG}/hero.jpg`} fetchPriority="high" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      {/* id único por rota: next/script deduplica silenciosamente por id (o /obrigado usa "meta-pixel"). */}
      <Script id="meta-pixel-encerramento-dez26" strategy="afterInteractive">{`
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
