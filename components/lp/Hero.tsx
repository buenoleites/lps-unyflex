"use client";
import { handleAnchorClick } from "@/lib/lp/scroll";
import type { LpContent } from "./types";

export default function Hero({ content }: { content: LpContent["hero"] }) {
  const { bgSrc, title, subtitle, tags, ctaLabel, microcopy } = content;

  return (
    <section className="hero" id="topo">
      <div
        className="hero__media"
        style={{ "--media-bg": `url(${bgSrc})` } as React.CSSProperties}
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>

          <p className="hero__subtitle">{subtitle}</p>

          <p className="hero__tags">{tags}</p>

          <a
            className="btn btn--primary btn--lg hero__cta"
            href="#inscricao"
            onClick={handleAnchorClick}
          >
            {ctaLabel}
          </a>

          <p className="hero__microcopy">{microcopy}</p>
        </div>
      </div>
    </section>
  );
}
