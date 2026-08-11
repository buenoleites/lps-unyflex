import type { Metadata } from "next";
import Script from "next/script";
import "../lp2.css";
import "./theme.css";

/* Licitações — DFD, ETP, TR e Mapa de Riscos com Inteligência Artificial,
   no template lp2 (turma de 15 a 18/09/2026). */

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem errado. Aqui a base é a
  // origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title:
    "Licitações: DFD, ETP, TR e Mapa de Riscos com Inteligência Artificial | Unyflex",
  description:
    "17 horas em Curitiba (e online ao vivo): a fase de planejamento da Lei nº 14.133/2021 com IA aplicada — DFD, ETP, TR, Mapa de Riscos e PCA. 15 a 18 de setembro de 2026. Aceitamos nota de empenho.",
  keywords: [
    "licitações com inteligência artificial",
    "IA nas licitações",
    "inteligência artificial na Lei 14.133",
    "fase de planejamento da contratação",
    "DFD com IA",
    "ETP com IA",
    "termo de referência com IA",
    "mapa de riscos com IA",
    "plano de contratações anual",
    "PCA Lei 14.133",
  ],
  alternates: {
    canonical: "/licitacao",
  },
  openGraph: {
    title:
      "Licitações: DFD, ETP, TR e Mapa de Riscos com Inteligência Artificial | Unyflex",
    description:
      "A fase de planejamento da Lei nº 14.133/2021, do jeito que o Tribunal de Contas espera — com a IA acelerando o trabalho. 17 horas, Curitiba e online ao vivo, 15 a 18 de setembro de 2026.",
    url: "/licitacao",
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Licitações: DFD, ETP, TR e Mapa de Riscos com Inteligência Artificial | Unyflex",
    description:
      "A fase de planejamento da Lei nº 14.133/2021, do jeito que o Tribunal de Contas espera — com a IA acelerando o trabalho. 17 horas, Curitiba e online ao vivo, 15 a 18 de setembro de 2026.",
  },
};

// O EducationEvent desta rota (o root layout não injeta mais schema nenhum —
// o antigo, com datas de 2025, foi removido junto com esta migração).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Licitações — DFD, ETP, TR e Mapa de Riscos com Inteligência Artificial",
  description:
    "Curso da fase de planejamento da Lei nº 14.133/2021 com IA aplicada: DFD, ETP, TR, Mapa de Riscos e PCA. 17 horas, presencial em Curitiba e online ao vivo.",
  url: "https://mkt.unyflex.com.br/licitacao",
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
    { name: "Combo: os três produtos de ensino", price: "2980" },
    { name: "Curso avulso", price: "2900" },
    { name: "Online ao vivo", price: "2000" },
  ].map((plano) => ({
    "@type": "Offer",
    name: plano.name,
    price: plano.price,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: "https://mkt.unyflex.com.br/licitacao",
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function LicitacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lpl-theme: os tokens de cor da LP (theme.css) valem só sob este wrapper.
    <div className="lpl-theme">
      {/* O hero é background-image em CSS (MediaBackdrop) e o browser só o
          descobre tarde — preload derruba o LCP mobile. React hoisteia o
          <link> para o <head>. */}
      <link
        rel="preload"
        as="image"
        href="/licitacao/hero.jpg"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-licitacao" strategy="afterInteractive">{`
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
