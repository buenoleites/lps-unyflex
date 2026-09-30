"use client";
import { handleAnchorClick } from "@/lib/lp/scroll";
import Arrow from "./Arrow";
import Proof from "./Proof";
import type { Lp3Content } from "./types";

/** Hero na composição dos criativos: foto real de turma escurecida, pílula
 *  "Inscrições abertas", título, subtítulo, bloco de data + local em accent,
 *  linha de fatos e CTAs. */
export default function Hero({ content, proof }: { content: Lp3Content["hero"]; proof?: Lp3Content["proof"] }) {
  return (
    <section id="topo" className="lp3-hero" aria-labelledby="hero-title">
      <div
        className="lp3-hero__media"
        role="img"
        aria-label={content.bgAlt}
        style={{ "--media-bg": `url(${content.bgSrc})` } as React.CSSProperties}
      />
      <div className="lp3-hero__scrim" aria-hidden="true" />
      <div className="lp3-container">
        <div className="lp3-hero__inner">
          <span className="lp3-hero__badge">{content.badge}</span>
          {content.promise ? <p className="lp3-hero__promise">{content.promise}</p> : null}
          <h1 id="hero-title" className="lp3-h1">
            {content.title}
          </h1>
          <p className="lp3-hero__subtitle">{content.subtitle}</p>
          <div className="lp3-hero__when">
            <p className="lp3-hero__dates">{content.dates}</p>
            <p className="lp3-hero__place">{content.place}</p>
          </div>
          <ul className="lp3-hero__facts" aria-label="Resumo do curso">
            {content.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <div className="lp3-hero__ctas">
            <a
              className="lp3-btn lp3-btn--primary lp3-btn--lg"
              href={content.ctaPrimary.href}
              onClick={handleAnchorClick}
            >
              {content.ctaPrimary.label}
              <Arrow />
            </a>
            {content.ctaSecondary ? (
              <a
                className="lp3-btn lp3-btn--ghost"
                href={content.ctaSecondary.href}
                onClick={handleAnchorClick}
              >
                {content.ctaSecondary.label}
              </a>
            ) : null}
          </div>
          {proof ? <Proof content={proof} className="lp3-hero__proof" /> : null}
        </div>
      </div>
    </section>
  );
}
