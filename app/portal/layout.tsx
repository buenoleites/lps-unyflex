import type { Metadata } from "next";
import Script from "next/script";
import "../lp3.css";
import "./theme.css";

/* Portal, LGPD, e-SIC e Ouvidoria, no template lp3 (turma de 20 a
   23/10/2026 — a de setembro não aconteceu; ver content.tsx). Migrada do
   lp2 para o lp3 em 30/09/2026. */

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem errado. Aqui a base é a
  // origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: "Portal da Transparência, LGPD, e-SIC e Ouvidoria | Unyflex",
  description:
    "20 horas em Curitiba (presencial ou ao vivo): Portal da Transparência, LGPD, e-SIC e Ouvidoria para o município e a Câmara — LAI e Lei nº 13.709 cumpridas ao mesmo tempo. 20 a 23 de outubro de 2026. Aceitamos nota de empenho.",
  keywords: [
    "portal da transparência",
    "LGPD no setor público",
    "e-SIC",
    "ouvidoria municipal",
    "Lei de Acesso à Informação",
    "LAI",
    "encarregado de dados DPO",
    "RIPD relatório de impacto",
    "ANPD",
    "adequação LGPD município",
  ],
  alternates: {
    canonical: "/portal",
  },
  openGraph: {
    title: "Portal da Transparência, LGPD, e-SIC e Ouvidoria | Unyflex",
    description:
      "O portal manda publicar; a LGPD manda proteger. O caminho para cumprir as duas — portal, e-SIC, ouvidoria e adequação de dados na prática do município. 20 horas, Curitiba, presencial ou ao vivo, 20 a 23 de outubro de 2026.",
    url: "/portal",
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal da Transparência, LGPD, e-SIC e Ouvidoria | Unyflex",
    description:
      "O portal manda publicar; a LGPD manda proteger. O caminho para cumprir as duas — portal, e-SIC, ouvidoria e adequação de dados na prática do município. 20 horas, Curitiba, presencial ou ao vivo, 20 a 23 de outubro de 2026.",
  },
};

// O EducationEvent desta rota.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Portal, LGPD, e-SIC e Ouvidoria",
  description:
    "Curso de Portal da Transparência, LGPD, e-SIC e Ouvidoria para municípios e Câmaras: LAI, adequação à Lei nº 13.709/2018 e ferramentas de IA aplicadas à gestão municipal. 20 horas, presencial em Curitiba ou ao vivo.",
  url: "https://mkt.unyflex.com.br/portal",
  startDate: "2026-10-20",
  endDate: "2026-10-23",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Curitiba",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Voluntários da Pátria, 547 — Centro",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
  },
  offers: [
    { name: "BasicClass", price: "2980" },
    { name: "MasterClass", price: "3200" },
    { name: "PremiumClass", price: "3980" },
  ].map((plano) => ({
    "@type": "Offer",
    name: plano.name,
    price: plano.price,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: "https://mkt.unyflex.com.br/portal",
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lppo-theme: o accent azul da LP (theme.css) vale só sob este wrapper.
    <div className="lppo-theme">
      {/* O hero é background-image em CSS (MediaBackdrop) e o browser só o
          descobre tarde — preload derruba o LCP mobile. React hoisteia o
          <link> para o <head>. */}
      <link
        rel="preload"
        as="image"
        href="/portal/hero.jpg"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-portal" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1168799437651546');
      `}</Script>
      {children}
    </div>
  );
}
