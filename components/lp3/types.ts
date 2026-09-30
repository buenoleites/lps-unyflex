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

export interface Lp3Outcomes {
  eyebrow?: string;
  title: string;
  items: { title: string; text: string }[];
  /** Âncora da seção (padrão "o-que-muda"). */
  id?: string;
  /** Tom de fundo (padrão "elevated"). */
  tone?: "dark" | "elevated" | "paper";
  cta?: { label: string; href: string };
}

export interface Lp3Content {
  nav: {
    logoSrc: string;
    logoAlt: string;
    cta: { href: string; label: string };
  };

  hero: {
    badge: string;
    /** Frase de promessa acima do título (o que a pessoa ganha). */
    promise?: string;
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

  /** Faixa de prova social (números CONFIRMADOS pelo cliente), repetida no
   *  hero e ao lado do formulário. */
  proof?: {
    items: string[];
  };

  /** Ficha do curso: lista rótulo → valor, com filetes (sem cards). Opcional:
   *  a /tesouraria-nov26 levou a ficha para a linha de fatos do hero. */
  facts?: {
    items: { label: string; value: string }[];
  };

  /** Descrição do curso (fundo claro). Opcional (ver `outcomes`). */
  about?: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };

  /** "O que muda": 4 resultados concretos (título + frase), lista com filete. */
  outcomes?: Lp3Outcomes;

  /** Mesmo layout de "O que muda" (título + frase, filete), para a seção de
   *  desafios do Portal. Migração do `problem` do lp2. */
  problem?: Lp3Outcomes;

  /** Mesmo layout, com botão opcional: "Como seu órgão contrata". */
  procurement?: Lp3Outcomes;

  /** Professores: nome, linha de instituição, foto 4:5 e bio. Sem nota. */
  speakers?: {
    eyebrow?: string;
    title: string;
    items: { name: string; institution?: string; photoSrc?: string; bio: string }[];
  };

  /** Galeria de fotos reais da sala de aula. */
  gallery?: {
    eyebrow?: string;
    title: string;
    photos: { src: string; alt: string; width: number; height: number }[];
  };

  /** Depoimentos públicos (texto integral e nomes como publicados). */
  reviews?: {
    eyebrow?: string;
    rating: string;
    volume: string;
    sourceLabel: string;
    photo?: { src: string; alt: string; width: number; height: number };
    items: { text: string; author: string }[];
  };

  /** Programação em acordeão numerado. */
  modules: {
    eyebrow: string;
    title: string;
    lead?: string;
    /** `result`: frase de resultado visível com o acordeão fechado. */
    items: { title: string; result?: string; topics: string[] }[];
  };

  /** Bloco de destaque em accent, com itens numerados. */
  highlight?: {
    eyebrow: string;
    title: string;
    lead?: string;
    items: string[];
  };

  /** Público-alvo (opcional). */
  audience?: {
    eyebrow: string;
    title: string;
    /** Texto simples, ou rótulo + descrição (Portal). */
    items: (string | { label: string; description: string })[];
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
    /** Campo opcional (toggle obrigatório → `Modalidade_Preferida`). */
    modalidade?: { label: string; options: [string, string] };
    submitLabel: string;
    /** "Como funciona": passos numerados na coluna ao lado do formulário. */
    steps?: { title: string; items: string[] };
    consent: { label: ReactNode; value: string };
    thankYou: { url: string; withPii: false };
  };

  /** Perguntas frequentes em acordeão (depois do formulário). */
  faq?: {
    eyebrow?: string;
    title: string;
    items: { q: string; a: ReactNode }[];
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
