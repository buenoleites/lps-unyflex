"use client";
import { handleAnchorClick } from "@/lib/lp/scroll";
import MediaBackdrop from "./MediaBackdrop";
import type { EventLpContent } from "./types";

export default function Hero({ content }: { content: EventLpContent["hero"] }) {
  return (
    <section className="lp2-hero" id="topo" aria-labelledby="hero-title">
      {content.bgSrc ? <MediaBackdrop src={content.bgSrc} textSide="left" /> : null}

      <div className="lp2-container">
        <div className="lp2-hero__content">
          <p className="lp2-eyebrow">{content.eyebrow}</p>

          <h1 id="hero-title" className="lp2-display lp2-hero__title">
            {content.title}
          </h1>

          <p className="lp2-hero__subtitle">{content.subtitle}</p>

          <p className="lp2-hero__audiences">{content.audiences}</p>

          <a
            className="btn btn--primary btn--lg lp2-hero__cta"
            href={content.cta.href ?? "#inscricao"}
            onClick={handleAnchorClick}
          >
            {content.cta.label}
          </a>

          <p className="lp2-hero__meta">{content.meta}</p>
        </div>
      </div>
    </section>
  );
}
