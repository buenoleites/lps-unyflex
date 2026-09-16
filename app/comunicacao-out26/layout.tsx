import type { Metadata } from "next";
import Script from "next/script";
import "../lp2.css";
import "./theme.css";

/* Seminário Comunicação Pública e Mídias Sociais — 2ª edição, no template lp2
   (27 a 30/10/2026 — rota /comunicacao-out26). A 1ª edição é a /comunicacao. */

/* Subtítulo do hero. É a única descrição desta rota: metadata, Open Graph,
   Twitter e JSON-LD apontam todos para cá. Se mudar, muda aqui e em
   app/comunicacao-out26/content.tsx (hero.subtitle) — as duas cópias são
   propositais: uma é a página, a outra é o que os buscadores leem. */
const SUBTITULO =
  "Imprensa, redação institucional, mídias sociais, gestão de crise, publicidade institucional e impulsionamento pago: seis painéis em 4 dias, com quem faz comunicação pública todo dia na Câmara, na Prefeitura e nos eventos do setor.";

const TITULO = "Seminário Comunicação Pública e Mídias Sociais — 2ª edição | Unyflex";

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem errado. Aqui a base é a
  // origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: TITULO,
  description: SUBTITULO,
  // Termos levantados literalmente do documento do seminário.
  keywords: [
    "comunicação pública",
    "mídias sociais",
    "publicidade institucional",
    "impulsionamento",
    "assessoria de imprensa",
    "gestão de crises",
    "media training",
    "período eleitoral",
    "condutas vedadas",
    "LGPD",
  ],
  alternates: {
    canonical: "/comunicacao-out26",
  },
  openGraph: {
    title: TITULO,
    description: SUBTITULO,
    url: "/comunicacao-out26",
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
  name: "Seminário Comunicação Pública e Mídias Sociais — Ferramentas, restrições e impulsionamento (2ª edição)",
  description: SUBTITULO,
  url: "https://mkt.unyflex.com.br/comunicacao-out26",
  startDate: "2026-10-27",
  endDate: "2026-10-30",
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
    url: "https://mkt.unyflex.com.br/comunicacao-out26",
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function ComunicacaoOut26Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lpco-theme: os tokens de cor da LP (theme.css) valem só sob este wrapper.
    <div className="lpco-theme">
      {/* O hero é background-image em CSS (MediaBackdrop) e o browser só o
          descobre tarde — preload derruba o LCP mobile. React hoisteia o
          <link> para o <head>. */}
      <link
        rel="preload"
        as="image"
        href="/comunicacao-out26/hero.jpg"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-comunicacao-out26" strategy="afterInteractive">{`
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
