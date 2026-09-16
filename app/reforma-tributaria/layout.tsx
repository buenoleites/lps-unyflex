import type { Metadata } from "next";
import Script from "next/script";
import "../lp2.css";
import "./theme.css";

/* Passo a Passo da Reforma Tributária, no template lp2 (turma de 13 a
   16/10/2026 — rota /reforma-tributaria). */

/* Subtítulo do hero. Até 16/09 era VERBATIM do briefing §1; foi condensado
   para caber em 3 linhas a >=1440px (decisão do Gustavo) — é texto do agente,
   listado na PR para auditoria. É a única descrição desta rota: metadata,
   Open Graph, Twitter e JSON-LD apontam todos para cá. Se mudar, muda aqui e
   em ./content.tsx (hero.subtitle) — as duas cópias são propositais: uma é a
   página, a outra é o que os buscadores leem. */
const SUBTITULO =
  "A transição vai de 2026 a 2033. IBS, CBS, Imposto Seletivo, split payment e Comitê Gestor: o que muda na arrecadação do seu município e o que fazer agora para não perder receita.";

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem errado.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: "Passo a Passo da Reforma Tributária | Unyflex",
  description: SUBTITULO,
  keywords: [
    "reforma tributária",
    "IBS",
    "CBS",
    "Imposto Seletivo",
    "split payment",
    "Comitê Gestor",
    "Cadastro Nacional",
    "arrecadação municipal",
    "curso presencial",
    "Curitiba",
  ],
  alternates: {
    canonical: "/reforma-tributaria",
  },
  openGraph: {
    title: "Passo a Passo da Reforma Tributária | Unyflex",
    description: SUBTITULO,
    url: "/reforma-tributaria",
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Passo a Passo da Reforma Tributária | Unyflex",
    description: SUBTITULO,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Passo a Passo da Reforma Tributária",
  description: SUBTITULO,
  url: "https://mkt.unyflex.com.br/reforma-tributaria",
  startDate: "2026-10-13",
  endDate: "2026-10-16",
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
    url: "https://mkt.unyflex.com.br/reforma-tributaria",
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function ReformaTributariaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lprt-theme: os tokens de cor da LP (theme.css) valem só sob este wrapper.
    <div className="lprt-theme">
      {/* O hero é background-image em CSS (MediaBackdrop) e o browser só o
          descobre tarde — preload derruba o LCP mobile. React hoisteia o
          <link> para o <head>. */}
      <link
        rel="preload"
        as="image"
        href="/reforma/hero-sede.jpg"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-reforma-tributaria" strategy="afterInteractive">{`
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
