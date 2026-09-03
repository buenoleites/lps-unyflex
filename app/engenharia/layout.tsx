import type { Metadata } from "next";
import Script from "next/script";
import "../lp2.css";
import "./theme.css";

/* Soluções Práticas de Engenharia e Urbanismo, no template lp2
   (turma de 22 a 25/09/2026 — rota /engenharia). */

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem errado. Aqui a base é a
  // origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: "Soluções Práticas de Engenharia e Urbanismo | Unyflex",
  description:
    "17 horas em Curitiba (e online ao vivo): contratação emergencial e atas preventivas para eventos climáticos na Lei 14.133 — mais BIM, drones, orçamentação SINAPI/SICRO e IA aplicada ao projeto. 22 a 25 de setembro de 2026. Aceitamos nota de empenho.",
  keywords: [
    "engenharia e urbanismo na gestão pública",
    "contratação emergencial Lei 14.133",
    "eventos climáticos contratação pública",
    "ata de registro de preços preventiva",
    "orçamentação SINAPI SICRO",
    "fiscalização de obras públicas",
    "BIM na prefeitura",
    "drones em obras públicas",
    "IA aplicada à engenharia",
    "plano diretor cidades inteligentes",
  ],
  alternates: {
    canonical: "/engenharia",
  },
  openGraph: {
    title: "Soluções Práticas de Engenharia e Urbanismo | Unyflex",
    description:
      "Contratação emergencial, ata preventiva e fiscalização pós-evento na Lei 14.133 — mais BIM, drones, SINAPI/SICRO e IA aplicada ao projeto. 17 horas, Curitiba e online ao vivo, 22 a 25 de setembro de 2026.",
    url: "/engenharia",
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluções Práticas de Engenharia e Urbanismo | Unyflex",
    description:
      "Contratação emergencial, ata preventiva e fiscalização pós-evento na Lei 14.133 — mais BIM, drones, SINAPI/SICRO e IA aplicada ao projeto. 17 horas, Curitiba e online ao vivo, 22 a 25 de setembro de 2026.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Soluções Práticas de Engenharia e Urbanismo",
  description:
    "Curso de engenharia e urbanismo para a gestão municipal na Lei 14.133: contratação emergencial e atas preventivas para eventos climáticos, orçamentação SINAPI/SICRO, fiscalização de obras, BIM, drones e IA aplicada ao projeto. 17 horas, presencial em Curitiba e online ao vivo.",
  url: "https://mkt.unyflex.com.br/engenharia",
  startDate: "2026-09-22",
  endDate: "2026-09-25",
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
    { name: "Combo: os três produtos de ensino", price: "2980" },
    { name: "Curso avulso", price: "2900" },
    { name: "Online ao vivo", price: "2000" },
  ].map((plano) => ({
    "@type": "Offer",
    name: plano.name,
    price: plano.price,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: "https://mkt.unyflex.com.br/engenharia",
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function EngenhariaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lpe-theme: os tokens de cor da LP (theme.css) valem só sob este wrapper.
    <div className="lpe-theme">
      {/* O hero é background-image em CSS (MediaBackdrop) e o browser só o
          descobre tarde — preload derruba o LCP mobile. React hoisteia o
          <link> para o <head>. */}
      <link
        rel="preload"
        as="image"
        href="/engenharia/hero.jpg"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-engenharia" strategy="afterInteractive">{`
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
