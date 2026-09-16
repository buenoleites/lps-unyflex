import type { Metadata } from "next";
import Script from "next/script";
import "../lp2.css";
import "./theme.css";

/* Dispensa e Inexigibilidade Eletrônicas + MEI por Credenciamento + Estrutura
   do SICX, no template lp2 (turma de 13 a 16/10/2026 — rota /dispensa-out26). */

/* Subtítulo do hero. É a única descrição desta rota: metadata, Open Graph,
   Twitter e JSON-LD apontam todos para cá. Se mudar, muda aqui e em
   app/dispensa-out26/content.tsx (hero.subtitle) — as duas cópias são
   propositais: uma é a página, a outra é o que os buscadores leem. */
const SUBTITULO =
  "Contrata+Brasil, credenciamento de MEI, dispensa e inexigibilidade eletrônicas na Lei 14.133 e a estrutura do SICX (Lei 15.266/2025): o roteiro formal da compra direta, passo a passo, em 4 dias, com quem emite o parecer e opera a plataforma.";

const TITULO = "Dispensa e Inexigibilidade Eletrônicas | Unyflex";

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem errado. Aqui a base é a
  // origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: TITULO,
  description: SUBTITULO,
  // Termos levantados literalmente do documento do curso.
  keywords: [
    "dispensa de licitação",
    "inexigibilidade",
    "Lei 14.133",
    "Contrata+Brasil",
    "IN 52/2025",
    "credenciamento de MEI",
    "SICX",
    "Lei 15.266/2025",
    "compras diretas",
    "contratação direta",
  ],
  alternates: {
    canonical: "/dispensa-out26",
  },
  openGraph: {
    title: TITULO,
    description: SUBTITULO,
    url: "/dispensa-out26",
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
  name: "Dispensa e Inexigibilidade Eletrônicas + MEI por Credenciamento + Estrutura do SICX",
  description: SUBTITULO,
  url: "https://mkt.unyflex.com.br/dispensa-out26",
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
    url: "https://mkt.unyflex.com.br/dispensa-out26",
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function DispensaOut26Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lpdi-theme: os tokens de cor da LP (theme.css) valem só sob este wrapper.
    <div className="lpdi-theme">
      {/* O hero é background-image em CSS (MediaBackdrop) e o browser só o
          descobre tarde — preload derruba o LCP mobile. React hoisteia o
          <link> para o <head>. */}
      <link
        rel="preload"
        as="image"
        href="/dispensa-out26/hero.jpg"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-dispensa-out26" strategy="afterInteractive">{`
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
