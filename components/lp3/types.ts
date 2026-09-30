import type { ReactNode } from "react";

/* Contrato de conteúdo do template lp3 (visual novo, piloto na
   /tesouraria-nov26). Cada componente recebe UMA prop `content`, fatiada
   daqui — nenhum componente carrega texto próprio. Tudo que é opcional liga
   pela presença da chave (mesmo padrão do lp2). */

export interface Lp3Plan {
  name: string;
  price: string;
  sub?: string;
  highlighted?: boolean;
  highlightLabel?: string;
  features: { label: string; included: boolean }[];
  ctaLabel: string;
}

export interface Lp3Content {
  nav: {
    logoSrc: string;
    logoAlt: string;
    cta: { href: string; label: string };
  };

  hero: {
    badge: string;
    title: string;
    subtitle: string;
    /** Linha de data em destaque, ex. "10 a 13 de novembro". */
    dates: string;
    /** Local, em accent, ex. "Curitiba-PR". */
    place: string;
    /** Linha de fatos "4 dias · 17 horas · 6 painéis · certificado". */
    facts: string[];
    /** Foto real de turma, escurecida pelo scrim. */
    bgSrc: string;
    bgAlt: string;
    ctaPrimary: { href: string; label: string };
    ctaSecondary?: { href: string; label: string };
  };

  /** Ficha do curso: lista rótulo → valor, com filetes (sem cards). */
  facts: {
    items: { label: string; value: string }[];
  };

  /** Descrição do curso (fundo claro). */
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };

  /** Programação em acordeão numerado. */
  modules: {
    eyebrow: string;
    title: string;
    lead?: string;
    items: { title: string; topics: string[] }[];
  };

  /** Bloco de destaque em accent, com itens numerados. */
  highlight: {
    eyebrow: string;
    title: string;
    items: string[];
  };

  /** Público-alvo (opcional). */
  audience?: {
    eyebrow: string;
    title: string;
    items: string[];
    note?: string;
  };

  plans: {
    eyebrow: string;
    title: string;
    lead?: string;
    items: Lp3Plan[];
    featured?: {
      highlightLabel: string;
      title: string;
      desc: string;
      chips: string[];
      priceLabel: string;
      price: string;
      priceNote?: string;
      /** Plano que o botão primário seleciona no formulário. */
      plan: string;
      ctaPrimary: string;
      ctaSecondary?: string;
    };
    comparison?: {
      itemsLabel: string;
      columns: { name: string; price: string; sub?: string; highlighted?: boolean }[];
      rows: { label: string; cells: (boolean | string)[] }[];
    };
    paymentNote?: string;
    footnote?: string;
  };

  form: {
    eyebrow: string;
    title: string;
    meta?: string;
    formId: string;
    produto?: string;
    paginaOrigem?: string;
    tituloProduto?: string;
    /** Slug enviado como `c` quando a URL não traz `?c=`. */
    campaignFallback: string;
    planOptions: string[];
    submitLabel: string;
    consent: { label: ReactNode; value: string };
    thankYou: { url: string; withPii: false };
  };

  footer: {
    logoSrc: string;
    logoAlt: string;
    partnersLabel?: string;
    partners: { src: string; alt: string }[];
    legal: { href: string; label: string }[];
    social: {
      kind: "google" | "linkedin" | "instagram" | "youtube";
      href: string;
      label?: string;
    }[];
    copyright: string;
  };

  stickyCta: {
    priceAnchor: string;
    label: string;
    href: string;
  };
}
