"use client";
import { useReveal } from "@/lib/lp/useReveal";
import { handleAnchorClick } from "@/lib/lp/scroll";
import type { LpContent } from "./types";

export default function ParaQuem({ content }: { content: LpContent["paraQuem"] }) {
  const { band, cards, closing, ctaLabel } = content;
  const [ref, visible] = useReveal();

  return (
    <section
      id="para-quem"
      ref={ref as React.RefObject<HTMLElement>}
      className={`section para-quem${visible ? " is-visible" : ""}`}
    >
      <div className="container">
        <div className="pq-band" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
          <div
            className="pq-band__media"
            style={{ "--media-bg": `url(${band.bgSrc})` } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="pq-band__overlay" aria-hidden="true" />
          <div className="pq-band__content">
            <h2 className="pq-band__title">{band.title}</h2>
            <p className="pq-band__text">{band.text}</p>
          </div>
        </div>

        <div className="pq-cards">
          {cards.map((card, i) => (
            <article
              className="pq-card"
              key={card.title}
              data-reveal
              style={{ "--reveal-i": i + 1 } as React.CSSProperties}
            >
              <div
                className="pq-card__media"
                style={{ backgroundImage: `url("${card.imgSrc}")` }}
                aria-hidden="true"
              />
              <div className="pq-card__overlay" aria-hidden="true" />
              <div className="pq-card__content">
                <h3 className="pq-card__title">{card.title}</h3>
                <ul className="pq-card__list">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="pq-closing" data-reveal style={{ "--reveal-i": 3 } as React.CSSProperties}>
          {closing}
        </p>

        <div className="pq-cta" data-reveal style={{ "--reveal-i": 4 } as React.CSSProperties}>
          <a
            className="btn btn--primary btn--md"
            href="#inscricao"
            onClick={handleAnchorClick}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
