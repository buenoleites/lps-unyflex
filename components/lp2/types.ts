import type { ReactNode } from "react";

/**
 * O contrato do template de LP de evento (sistema lp2).
 *
 * Regras do design system que o TypeScript não consegue impor:
 * - accent é EXCLUSIVO para ação (botões, links, destaque de plano) e para UMA
 *   palavra-chave por headline (via <Kw>). Nunca como fundo de seção.
 * - Todo texto visível vive na config — componentes não têm copy própria.
 * - Seções opcionais (quote, speakers, gallery, reviews, compare) ligam pela
 *   presença da chave.
 * - A ordem das seções é fixa no template (EventLp), não configurável.
 */
export interface EventLpContent {
  /** Sobrescreve --accent no .lp2-root para variar a cor de ação por produto. */
  theme?: { accent?: string };

  nav: {
    logoSrc: string;
    logoAlt: string;
    /** Somente âncoras internas da própria página (href começando com "#"). */
    links: { href: string; label: string }[];
    cta: { href: string; label: string };
  };

  /** 01 — hero. Copy integral do produto; título aceita <Kw> na palavra-chave. */
  hero: {
    eyebrow: string;
    title: ReactNode;
    subtitle: string;
    /** Linha de públicos, peso 600. */
    audiences: string;
    /** href opcional (âncora interna); sem ele o CTA vai para "#inscricao". */
    cta: { label: string; href?: string };
    /** Linha de meta (dias, horas, cidade, datas) em small muted. */
    meta: string;
    bgSrc?: string;
  };

  /** 02 — ticker de prova: 4 métricas (número grande accent + label small). */
  ticker: {
    metrics: { value: string; label: string }[];
  };

  /** 03 — para quem: abas no desktop, acordeão no mobile. */
  audience: {
    title: ReactNode;
    lead?: string;
    groups: { id: string; label: string; description: string }[];
    closing?: ReactNode;
  };

  /** 04 — o problema: grid bento, aceita 6–10 cards, 1º com largura dupla. */
  problem: {
    title: ReactNode;
    items: { title: string; desc: string }[];
  };

  /** 05 — programação como jornada: timeline horizontal/vertical. */
  schedule: {
    title: ReactNode;
    days: { label: string; hours: string; panels: ReactNode }[];
  };

  /** 06 — citação única sobre foto (OPCIONAL). `author` é opcional (manifesto
   *  sem atribuição). */
  quote?: {
    text: string;
    author?: { name: string; role?: string };
    /** Linha de apoio opcional abaixo da citação. */
    support?: string;
    bgSrc: string;
  };

  /** 07 — bancada (OPCIONAL até a confirmação dos professores): 4 a 8
   *  professores. Instituição vem antes do nome de propósito. */
  speakers?: {
    title: ReactNode;
    lead?: string;
    items: {
      name: string;
      institution: string;
      photoSrc: string | null;
      bio: string;
    }[];
  };

  /** 08 — experiência presencial (OPCIONAL): colagem de fotos com legendas. */
  gallery?: {
    title: ReactNode;
    photos: { src: string; alt: string; caption?: string }[];
  };

  /** 09 — planos: 2 a 4 cards; destaque via `highlighted`. */
  plans: {
    title: ReactNode;
    lead?: string;
    note?: string;
    items: {
      name: string;
      price: string;
      /** Selo informativo acima do nome (ex.: "100% online · ao vivo"). */
      badge?: string;
      highlighted?: boolean;
      highlightLabel?: string;
      features: { label: string; included: boolean }[];
    }[];
    /** Linha própria e legível abaixo dos cards (formas de pagamento). */
    paymentNote: string;
    /** Regra de virada de lote, em small muted. */
    batchNote: string;
    ctaLabel: string;
  };

  /** 10 — avaliações (OPCIONAL até existirem dados reais). */
  reviews?: {
    /** Ex.: "4,9" — exibida em display. */
    rating: string;
    /** Fração usada para preencher as estrelas (ex.: 4.9). */
    ratingValue: number;
    volume: string;
    sourceLabel: string;
    items: { text: string; author: string; role?: string }[];
  };

  /** 11 — presencial vs online (OPCIONAL): 2 colunas com check/traço. */
  compare?: {
    title: ReactNode;
    columns: [string, string];
    rows: { label: string; a: boolean; b: boolean }[];
  };

  /** 12 — FAQ: acordeão, uma aberta por vez, 6 itens. */
  faq: {
    title: ReactNode;
    items: { q: string; a: ReactNode }[];
  };

  /** 13 — formulário sobre foto; os campos são fixos (LeadForm, alimenta o CRM). */
  form: {
    title: ReactNode;
    meta?: string;
    bgSrc: string;
    formId: string;
    submitLabel: string;
    thankYou: { url: string; withPii: boolean };
  };

  footer: {
    logoSrc: string;
    logoAlt: string;
    /** Legenda acima dos logos de parceiros (ex.: "Uma iniciativa X, com Y e Z."). */
    partnersLabel?: string;
    partners: { src: string; alt: string; invert?: boolean }[];
    legal: { href: string; label: string }[];
    social: {
      kind: "google" | "instagram" | "linkedin" | "youtube";
      href: string;
      /** Texto visível ao lado do ícone (ex.: "400+ avaliações" no Google). */
      label?: string;
    }[];
    copyright: string;
  };

  /** Barra fixa no rodapé da viewport em mobile, após o hero. */
  stickyCta: {
    priceAnchor: string;
    label: string;
    href: string;
  };
}
