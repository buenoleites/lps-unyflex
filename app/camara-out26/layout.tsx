import type { Metadata } from "next";
import Script from "next/script";
import "../lp2.css";
import "./theme.css";

/* Câmaras Municipais — Orçamento/LOA 2027: Pontos de Atenção Máxima, no
   template lp2 (turma de 13 a 16/10/2026 — rota /camara-out26). */

/* Subtítulo do hero. É a única descrição desta rota: metadata, Open Graph,
   Twitter e JSON-LD apontam todos para cá. Se mudar, muda aqui e em
   app/camara-out26/content.tsx (hero.subtitle) — as duas cópias são
   propositais: uma é a página, a outra é o que os buscadores leem. */
const SUBTITULO =
  "Ler o projeto do Executivo com olho de auditor: receita superestimada, dotação global sem especificação, emendas exequíveis e o acompanhamento da execução em 2027 — em 4 dias, com quem audita isso no município.";

const TITULO = "Câmaras Municipais: Orçamento/LOA 2027 | Unyflex";

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem errado. Aqui a base é a
  // origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: TITULO,
  description: SUBTITULO,
  // Termos levantados literalmente do documento do curso.
  keywords: [
    "LOA 2027",
    "orçamento municipal",
    "Câmara Municipal",
    "PPA",
    "LDO",
    "Lei de Responsabilidade Fiscal",
    "emendas parlamentares",
    "Comissão de Finanças e Orçamento",
    "superestimativa de receitas",
    "dotação global",
  ],
  alternates: {
    canonical: "/camara-out26",
  },
  openGraph: {
    title: TITULO,
    description: SUBTITULO,
    url: "/camara-out26",
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: SUBTITULO,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Câmaras Municipais — Orçamento/LOA 2027: Pontos de Atenção Máxima",
  description: SUBTITULO,
  url: "https://mkt.unyflex.com.br/camara-out26",
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
    url: "https://mkt.unyflex.com.br/camara-out26",
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function CamaraOut26Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lpca-theme: os tokens de cor da LP (theme.css) valem só sob este wrapper.
    <div className="lpca-theme">
      {/* O hero é background-image em CSS (MediaBackdrop) e o browser só o
          descobre tarde — preload derruba o LCP mobile. React hoisteia o
          <link> para o <head>. */}
      <link
        rel="preload"
        as="image"
        href="/camara-out26/hero.jpg"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-camara-out26" strategy="afterInteractive">{`
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
