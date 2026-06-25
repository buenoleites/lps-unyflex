import type { ReactNode } from "react";

export interface NavLink {
  href: string;
  label: string;
}

export interface LpContent {
  navbar: {
    logoSrc: string;
    logoAlt: string;
    links: NavLink[];
    ctaLabel: string;
  };
  hero: {
    bgSrc: string;
    title: ReactNode;
    subtitle: string;
    tags: string;
    ctaLabel: string;
    microcopy: string;
  };
  paraQuem: {
    band: { bgSrc: string; title: string; text: string };
    cards: { imgSrc: string; title: string; items: string[] }[];
    closing: ReactNode;
    ctaLabel: string;
  };
  oCurso: {
    heading: string;
    lead: string;
    items: { title: string; desc: string }[];
    imgSrc: string;
    imgAlt: string;
    ctaLabel: string;
  };
  abordagem: {
    band: { bgSrc: string; title: string; text: string };
    slides: { title: string; desc: string }[];
    carouselAriaLabel: string;
  };
  modulos: {
    heading: string;
    modulos: { n: string; title: string; desc: string }[];
    imgSrc: string;
    imgAlt: string;
    ctaLabel: string;
  };
  presencial: {
    imgSrc: string;
    imgAlt: string;
    title: string;
    text: string;
    lead: string;
    items: string[];
  };
  resultados: {
    heading: string;
    text: string;
    municipios: { slug: string; nome: string; bgSrc: string; logoSrc: string }[];
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  ctaFinal: {
    bgSrc: string;
    title: string;
    text: string;
    microcopy: string;
    formId: string;
    submitLabel: string;
  };
  footer: {
    logoSrc: string;
    logoAlt: string;
    copyright: string;
  };
  stickyCta: {
    label: string;
  };
}
