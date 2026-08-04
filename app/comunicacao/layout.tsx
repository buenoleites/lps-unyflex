import type { Metadata } from "next";
import Script from "next/script";
import "../lp2.css";
import "./theme.css";

/* ROTA DE TESTE do Comunicação Pública 360º no template lp2. Na promoção a
   definitivo: remover o `robots` de noindex abaixo e trocar o formId em
   content.tsx (ver TODO lá). */

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem para /licitacao/comunicacao.
  // Aqui a base é a origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: "Comunicação Pública 360º — Estratégias e Impacto | Unyflex",
  description:
    "4 dias e 17 horas em Curitiba (e online ao vivo): crises, fake news, redes sociais e período eleitoral na comunicação pública. 01 a 04 de setembro. Aceitamos nota de empenho.",
  keywords: [
    "Comunicação Pública 360º",
    "comunicação pública",
    "curso de comunicação pública",
    "assessoria de imprensa órgão público",
    "social media institucional",
    "gestão de crise",
    "fake news",
    "desinformação",
    "período eleitoral",
    "publicidade institucional",
    "LGPD",
    "media training",
  ],
  // TODO na promoção a definitivo: remover este robots (URL de teste, não indexar).
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/comunicacao",
  },
  openGraph: {
    title: "Comunicação Pública 360º — Estratégias e Impacto | Unyflex",
    description:
      "Em ano de eleição, tire a comunicação do seu órgão do improviso. 4 dias, 17 horas, Curitiba e online ao vivo, 01 a 04 de setembro de 2026.",
    url: "/comunicacao",
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comunicação Pública 360º — Estratégias e Impacto | Unyflex",
    description:
      "Em ano de eleição, tire a comunicação do seu órgão do improviso. 4 dias, 17 horas, Curitiba e online ao vivo, 01 a 04 de setembro de 2026.",
  },
};

// O root layout injeta um EducationEvent de outra LP (dívida conhecida); este
// schema é o que descreve o Comunicação Pública 360º de verdade, com datas,
// endereço e ofertas.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Comunicação Pública 360º",
  description:
    "Curso presencial de comunicação pública para órgãos públicos: crises, fake news, redes sociais e período eleitoral. 4 dias e 17 horas, presencial em Curitiba e online ao vivo.",
  url: "https://mkt.unyflex.com.br/comunicacao",
  startDate: "2026-09-01",
  endDate: "2026-09-04",
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
    url: "https://mkt.unyflex.com.br/comunicacao",
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function ComunicacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lpc-theme: os tokens de cor da LP (theme.css) valem só sob este wrapper.
    <div className="lpc-theme">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-comunicacao" strategy="afterInteractive">{`
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
