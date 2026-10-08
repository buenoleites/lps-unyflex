import type { Metadata } from "next";
import Script from "next/script";
import "../lp3.css";
import "./theme.css";
import { DESCRICAO, SLUG, SUBTITULO, TITULO } from "./content";

/* Patrimônio & Frotas — turma 2330, 16 a 19/11/2026 (rota /patrimonio-nov26, clone da /patrimonio-out26).
   Template lp3 com o accent verde do setor (theme.css). */

const PAGE_TITLE = `${TITULO} | Unyflex`;
const PAGE_URL = `https://mkt.unyflex.com.br/${SLUG}`;

export const metadata: Metadata = {
  // O root layout embute /licitacao no metadataBase; aqui a base é a origem.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: PAGE_TITLE,
  description: DESCRICAO,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: PAGE_TITLE,
    description: DESCRICAO,
    url: `/${SLUG}`,
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: DESCRICAO,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: `${TITULO} ${SUBTITULO}`,
  description: DESCRICAO,
  url: PAGE_URL,
  startDate: "2026-11-16",
  endDate: "2026-11-19",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Sede da Unyflex",
    // Endereço da sede conforme o briefing de 30/09; sem CEP.
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Voluntários da Pátria, 547",
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
    url: PAGE_URL,
  })),
  organizer: { "@type": "Organization", name: "Unyflex", url: "https://unyflex.com.br" },
};

export default function PatrimonioNov26Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* O hero é background-image em CSS; o preload derruba o LCP mobile. */}
      <link rel="preload" as="image" href={`/${SLUG}/hero.jpg`} fetchPriority="high" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      {/* id único por rota: next/script deduplica silenciosamente por id. */}
      <Script id="meta-pixel-patrimonio-nov26" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1168799437651546');
      `}</Script>
      {/* .lppan-theme: o accent verde da LP (theme.css) vale só sob este wrapper. */}
      <div className="lppan-theme">{children}</div>
    </>
  );
}
