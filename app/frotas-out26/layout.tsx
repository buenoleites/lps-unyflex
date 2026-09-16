import type { Metadata } from "next";
import Script from "next/script";
import "../lp2.css";
import "./theme.css";

/* Frotas Públicas — Transformação Digital, Auditoria e I.A. na Gestão de
   Veículos Oficiais, no template lp2 (turma de 20 a 23/10/2026 — rota
   /frotas-out26). */

/* Subtítulo do hero. É a única descrição desta rota: metadata, Open Graph,
   Twitter e JSON-LD apontam todos para cá. Se mudar, muda aqui e em
   app/frotas-out26/content.tsx (hero.subtitle) — as duas cópias são
   propositais: uma é a página, a outra é o que os buscadores leem. */
const SUBTITULO =
  "Auditoria digital, painéis de fiscalização, diário de bordo digital, contratos por desempenho na Lei 14.133 e IA aplicada à frota — em 4 dias, com quem implantou isso em cerca de 40 prefeituras.";

const TITULO = "Frotas Públicas: Transformação Digital, Auditoria e IA | Unyflex";

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem errado. Aqui a base é a
  // origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: TITULO,
  description: SUBTITULO,
  // Termos levantados literalmente do documento do curso.
  keywords: [
    "gestão de frotas públicas",
    "veículos oficiais",
    "diário de bordo digital",
    "auditoria de frota",
    "telemetria",
    "Lei 14.133",
    "terceirização de frota",
    "descarbonização",
    "frota verde",
    "inteligência artificial na gestão pública",
  ],
  alternates: {
    canonical: "/frotas-out26",
  },
  openGraph: {
    title: TITULO,
    description: SUBTITULO,
    url: "/frotas-out26",
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
  name: "Frotas Públicas — Transformação Digital, Auditoria e I.A. na Gestão de Veículos Oficiais",
  description: SUBTITULO,
  url: "https://mkt.unyflex.com.br/frotas-out26",
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
    url: "https://mkt.unyflex.com.br/frotas-out26",
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function FrotasOut26Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lpfr-theme: os tokens de cor da LP (theme.css) valem só sob este wrapper.
    <div className="lpfr-theme">
      {/* O hero é background-image em CSS (MediaBackdrop) e o browser só o
          descobre tarde — preload derruba o LCP mobile. React hoisteia o
          <link> para o <head>. */}
      <link
        rel="preload"
        as="image"
        href="/frotas-out26/hero.jpg"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-frotas-out26" strategy="afterInteractive">{`
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
