import type { Metadata } from "next";
import Script from "next/script";
import "../lp2.css";
import "./theme.css";

/* Patrimônio Público — Gestão de Ativos, Inventário Contábil e IA Aplicada,
   no template lp2. */

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem para /licitacao/patrimonio.
  // Aqui a base é a origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title:
    "Patrimônio Público: Gestão de Ativos, Inventário Contábil e IA Aplicada | Unyflex",
  description:
    "17 horas em Curitiba (e online ao vivo): gestão de ativos, inventário físico, contabilidade patrimonial conforme NBC TSP e MCASP e IA aplicada ao patrimônio público. 29 e 30/09, 01 e 02/10. Aceitamos nota de empenho.",
  keywords: [
    "patrimônio público",
    "gestão de ativos",
    "inventário patrimonial",
    "inventário físico",
    "contabilidade patrimonial",
    "NBC TSP",
    "MCASP",
    "depreciação de bens públicos",
    "conciliação físico-contábil",
    "tombamento de bens",
    "regularização de bens imóveis",
    "IA na gestão pública",
  ],
  alternates: {
    canonical: "/patrimonio",
  },
  openGraph: {
    title:
      "Patrimônio Público: Gestão de Ativos, Inventário Contábil e IA Aplicada | Unyflex",
    description:
      "Faça o inventário bater com a contabilidade — antes que o Tribunal de Contas aponte primeiro. 17 horas, Curitiba e online ao vivo, 29 e 30/09, 01 e 02/10 de 2026.",
    url: "/patrimonio",
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Patrimônio Público: Gestão de Ativos, Inventário Contábil e IA Aplicada | Unyflex",
    description:
      "Faça o inventário bater com a contabilidade — antes que o Tribunal de Contas aponte primeiro. 17 horas, Curitiba e online ao vivo, 29 e 30/09, 01 e 02/10 de 2026.",
  },
};

// O root layout injeta um EducationEvent de outra LP (dívida conhecida); este
// schema é o que descreve este curso de verdade, com datas, endereço e ofertas.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Patrimônio Público — Gestão de Ativos, Inventário Contábil e IA Aplicada",
  description:
    "Curso de gestão de ativos, inventário físico e contabilidade patrimonial conforme NBC TSP e MCASP, com IA aplicada ao patrimônio público. 17 horas, presencial em Curitiba e online ao vivo.",
  url: "https://mkt.unyflex.com.br/patrimonio",
  startDate: "2026-09-29",
  endDate: "2026-10-02",
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
    { name: "Online Ao Vivo", price: "2000" },
    { name: "BasicClass", price: "2980" },
    { name: "MasterClass", price: "3200" },
    { name: "PremiumClass", price: "3800" },
  ].map((plano) => ({
    "@type": "Offer",
    name: plano.name,
    price: plano.price,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: "https://mkt.unyflex.com.br/patrimonio",
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function PatrimonioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lpp-theme: os tokens de cor da LP (theme.css) valem só sob este wrapper.
    <div className="lpp-theme">
      {/* O hero é background-image em CSS (MediaBackdrop) e o browser só o
          descobre tarde — preload derruba o LCP mobile. React hoisteia o
          <link> para o <head>. */}
      <link
        rel="preload"
        as="image"
        href="/patrimonio/hero.jpg"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-patrimonio" strategy="afterInteractive">{`
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
