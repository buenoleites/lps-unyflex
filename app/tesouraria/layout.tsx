import type { Metadata } from "next";
import Script from "next/script";
import "../lp2.css";
import "./theme.css";

/* A Nova Era da Tesouraria e Contabilidade Municipal no template lp2. */

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem para /licitacao/tesouraria.
  // Aqui a base é a origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title:
    "A Nova Era da Tesouraria e Contabilidade Municipal — Com Apoio da IA | Unyflex",
  description:
    "4 dias e 17 horas em Curitiba (e online ao vivo): execução orçamentária, conciliação automatizada, mapa de riscos e IA aplicada à tesouraria municipal. 15 a 18 de setembro. Aceitamos nota de empenho.",
  keywords: [
    "tesouraria municipal",
    "contabilidade pública municipal",
    "curso de tesouraria",
    "MCASP",
    "MSC",
    "Siconfi",
    "conciliação bancária OFX",
    "restos a pagar",
    "LRF",
    "execução orçamentária e financeira",
    "encerramento de exercício",
    "IA na gestão pública",
  ],
  alternates: {
    canonical: "/tesouraria",
  },
  openGraph: {
    title:
      "A Nova Era da Tesouraria e Contabilidade Municipal — Com Apoio da IA | Unyflex",
    description:
      "Uma conciliação atrasada hoje é a ressalva de amanhã. 4 dias, 17 horas, Curitiba e online ao vivo, 15 a 18 de setembro de 2026.",
    url: "/tesouraria",
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "A Nova Era da Tesouraria e Contabilidade Municipal — Com Apoio da IA | Unyflex",
    description:
      "Uma conciliação atrasada hoje é a ressalva de amanhã. 4 dias, 17 horas, Curitiba e online ao vivo, 15 a 18 de setembro de 2026.",
  },
};

// O root layout injeta um EducationEvent de outra LP (dívida conhecida); este
// schema é o que descreve este curso de verdade, com datas, endereço e ofertas.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "A Nova Era da Tesouraria e Contabilidade Municipal",
  description:
    "Curso de tesouraria e contabilidade municipal com IA aplicada: execução orçamentária, conciliação automatizada, mapa de riscos. 4 dias e 17 horas, presencial em Curitiba e online ao vivo.",
  url: "https://mkt.unyflex.com.br/tesouraria",
  startDate: "2026-09-15",
  endDate: "2026-09-18",
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
    url: "https://mkt.unyflex.com.br/tesouraria",
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function TesourariaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lpt-theme: os tokens de cor da LP (theme.css) valem só sob este wrapper.
    <div className="lpt-theme">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-tesouraria" strategy="afterInteractive">{`
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
