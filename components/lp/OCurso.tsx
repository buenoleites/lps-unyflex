"use client";
import { useReveal } from "@/lib/lp/useReveal";
import { handleAnchorClick } from "@/lib/lp/scroll";
import type { LpContent } from "./types";

export default function OCurso({ content }: { content: LpContent["oCurso"] }) {
  const { heading, lead, items, imgSrc, imgAlt, ctaLabel } = content;
  const [ref, visible] = useReveal();

  return (
    <section
      id="o-curso"
      ref={ref as React.RefObject<HTMLElement>}
      className={`section o-curso${visible ? " is-visible" : ""}`}
    >
      <div className="container">
        <h2 className="o-curso__heading" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
          {heading}
        </h2>

        <div className="o-curso__grid">
          <div className="o-curso__content">
            <p className="o-curso__lead" data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties}>
              {lead}
            </p>

            <ul className="o-curso__items">
              {items.map((item, i) => (
                <li
                  className="o-curso__item"
                  key={item.title}
                  data-reveal
                  style={{ "--reveal-i": i + 2 } as React.CSSProperties}
                >
                  <h3 className="o-curso__item-title">{item.title}</h3>
                  <p className="o-curso__item-desc">{item.desc}</p>
                </li>
              ))}
            </ul>

            <a
              className="btn btn--primary btn--md o-curso__cta"
              href="#inscricao"
              onClick={handleAnchorClick}
              data-reveal
              style={{ "--reveal-i": items.length + 2 } as React.CSSProperties}
            >
              {ctaLabel}
            </a>
          </div>

          <div className="o-curso__media" data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="o-curso__img" src={imgSrc} alt={imgAlt} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
