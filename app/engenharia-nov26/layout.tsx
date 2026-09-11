import type { Metadata } from "next";
import Script from "next/script";
import "../lp2.css";
import "./theme.css";

/* Soluções Práticas de Engenharia e Urbanismo, no template lp2
   (turma de 24 a 27/11/2026 — rota /engenharia-nov26). */

/* Subtítulo do hero, VERBATIM do briefing §1. É a única descrição desta rota:
   metadata, Open Graph, Twitter e JSON-LD apontam todos para cá, para que não
   exista na página nenhum texto escrito pelo agente. Se o briefing mudar, muda
   aqui e em app/engenharia-nov26/content.tsx (hero.subtitle) — as duas cópias são
   propositais: uma é a página, a outra é o que os buscadores leem. */
const BRIEFING_SUBTITULO =
  "Ata de registro de preços preventiva, especificações técnicas, contratação emergencial e fiscalização pós-evento na Lei 14.133 — mais BIM, drones, orçamentação SINAPI/SICRO e IA aplicada ao projeto. Para quem responde por obras, urbanismo e infraestrutura no município.";

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem errado. Aqui a base é a
  // origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: "Soluções Práticas de Engenharia e Urbanismo | Unyflex",
  // Todas as descrições desta rota (aqui, OG, twitter e JSON-LD) são o
  // SUBTÍTULO DO HERO, verbatim do briefing §1 — a página não carrega texto de
  // autoria do agente (regra do Gustavo, 03/09/2026). Uso o subtítulo inteiro
  // de propósito: escolher onde cortar já seria decisão editorial. O Google
  // trunca no que couber.
  description: BRIEFING_SUBTITULO,
  // Termos levantados literalmente do briefing, não frases compostas.
  keywords: [
    "Lei 14.133",
    "contratação emergencial",
    "eventos climáticos",
    "ata de registro de preços preventiva",
    "SINAPI",
    "SICRO",
    "BIM",
    "fiscalização de obras públicas",
    "Plano Diretor",
    "cidades inteligentes",
  ],
  alternates: {
    canonical: "/engenharia-nov26",
  },
  openGraph: {
    title: "Soluções Práticas de Engenharia e Urbanismo | Unyflex",
    description: BRIEFING_SUBTITULO,
    url: "/engenharia-nov26",
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluções Práticas de Engenharia e Urbanismo | Unyflex",
    description: BRIEFING_SUBTITULO,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Soluções Práticas de Engenharia e Urbanismo",
  description: BRIEFING_SUBTITULO,
  url: "https://mkt.unyflex.com.br/engenharia-nov26",
  startDate: "2026-11-24",
  endDate: "2026-11-27",
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
    url: "https://mkt.unyflex.com.br/engenharia-nov26",
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function EngenhariaNov26Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lpen-theme: os tokens de cor da LP (theme.css) valem só sob este wrapper.
    <div className="lpen-theme">
      {/* O hero é background-image em CSS (MediaBackdrop) e o browser só o
          descobre tarde — preload derruba o LCP mobile. React hoisteia o
          <link> para o <head>. */}
      <link
        rel="preload"
        as="image"
        href="/engenharia-nov26/hero.jpg"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-engenharia-nov26" strategy="afterInteractive">{`
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
