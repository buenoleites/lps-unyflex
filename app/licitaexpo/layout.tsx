import type { Metadata } from "next";
import Script from "next/script";
import "../lp3.css";
import "./theme.css";
import { DESCRICAO, NOME_OFICIAL, SLUG } from "./content";

/* LicitaExpo · Blindagem nas Licitações e Contratos — seminário presencial em
   Curitiba, 24 a 27/11/2026. Template lp3 com o ciano de Licitações (theme.css). */

const PAGE_TITLE = `${NOME_OFICIAL} | Unyflex`;
const PAGE_URL = `https://mkt.unyflex.com.br/${SLUG}`;
const META_DESCRIPTION = `Seminário presencial em Curitiba-PR, 24 a 27 de novembro de 2026 (4 dias · 17 horas), presencial ou ao vivo. ${DESCRICAO}`;

export const metadata: Metadata = {
  // O root layout embute /licitacao no metadataBase; aqui a base é a origem.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: PAGE_TITLE,
  description: META_DESCRIPTION,
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
// schema é o que descreve o LicitaExpo de verdade.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: NOME_OFICIAL,
  description: META_DESCRIPTION,
  url: PAGE_URL,
  startDate: "2026-11-24",
  endDate: "2026-11-27",
  // Há o plano Online Ao Vivo, então o evento é misto.
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
  offers: [
    { name: "Online Ao Vivo", price: "2000" },
    { name: "BasicClass", price: "3300" },
    { name: "MasterClass", price: "3800" },
    { name: "PremiumClass", price: "5200" },
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

export default function LicitaexpoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* O hero é background-image em CSS; o preload derruba o LCP mobile. */}
      <link rel="preload" as="image" href={`/${SLUG}/hero.jpg`} fetchPriority="high" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      {/* id único por rota: next/script deduplica silenciosamente por id (o /obrigado usa "meta-pixel"). */}
      <Script id="meta-pixel-licitaexpo" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1168799437651546');
      `}</Script>
      {/* .lplx-theme: o ciano de Licitações (theme.css) vale só sob este wrapper. */}
      <div className="lplx-theme">{children}</div>
    </>
  );
}
