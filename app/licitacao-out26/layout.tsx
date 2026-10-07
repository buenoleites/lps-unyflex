import type { Metadata } from "next";
import Script from "next/script";
import "../lp3.css";
import "./theme.css";
import { SLUG } from "./content";

/* Licitações — DFD, ETP, TR e Mapa de Riscos com Inteligência Artificial,
   turma de 27 a 30/10/2026 (rota /licitacao-out26). Migrada do lp2 para o
   lp3 em 07/10/2026 (ciano #4EABE9, 20 horas, presencial ou ao vivo). */

const PAGE_TITLE =
  "Licitações: DFD, ETP, TR e Mapa de Riscos com Inteligência Artificial | Unyflex";
const PAGE_URL = `https://mkt.unyflex.com.br/${SLUG}`;

export const metadata: Metadata = {
  // O root layout define metadataBase com o path /licitacao embutido, o que
  // faria o canonical e a OG desta rota resolverem errado. Aqui a base é a
  // origem, como deveria ser.
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: PAGE_TITLE,
  description:
    "20 horas em Curitiba (presencial ou ao vivo): a fase de planejamento da Lei nº 14.133/2021 com IA aplicada — DFD, ETP, TR, Mapa de Riscos e PCA. 27 a 30 de outubro de 2026. Aceitamos nota de empenho.",
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
    canonical: `/${SLUG}`,
  },
  openGraph: {
    title: PAGE_TITLE,
    description:
      "A fase de planejamento da Lei nº 14.133/2021, do jeito que o Tribunal de Contas espera — com a IA acelerando o trabalho. 20 horas, Curitiba, presencial ou ao vivo, 27 a 30 de outubro de 2026.",
    url: `/${SLUG}`,
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "A fase de planejamento da Lei nº 14.133/2021, do jeito que o Tribunal de Contas espera — com a IA acelerando o trabalho. 20 horas, Curitiba, presencial ou ao vivo, 27 a 30 de outubro de 2026.",
  },
};

// O EducationEvent desta rota.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Licitações — DFD, ETP, TR e Mapa de Riscos com Inteligência Artificial",
  description:
    "Curso da fase de planejamento da Lei nº 14.133/2021 com IA aplicada: DFD, ETP, TR, Mapa de Riscos e PCA. 20 horas, presencial em Curitiba ou ao vivo.",
  url: PAGE_URL,
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
    url: PAGE_URL,
  })),
  organizer: {
    "@type": "Organization",
    name: "Unyflex",
    url: "https://unyflex.com.br",
  },
};

export default function LicitacaoOut26Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // .lplo-theme: os tokens de cor da LP (theme.css) valem só sob este wrapper.
    <div className="lplo-theme">
      {/* O hero é background-image em CSS e o browser só o descobre tarde —
          preload derruba o LCP mobile. React hoisteia o <link> para o <head>. */}
      <link
        rel="preload"
        as="image"
        href={`/${SLUG}/hero.jpg`}
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* id único: o next/script deduplica silenciosamente por id entre layouts. */}
      <Script id="meta-pixel-licitacao-out26" strategy="afterInteractive">{`
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
