"use client";
import { useReveal } from "@/lib/lp/useReveal";
import type { LpContent } from "./types";

export default function Resultados({ content }: { content: LpContent["resultados"] }) {
  const { heading, text, municipios } = content;
  const [ref, visible] = useReveal();

  return (
    <section
      id="resultados"
      ref={ref as React.RefObject<HTMLElement>}
      className={`section resultados${visible ? " is-visible" : ""}`}
    >
      <div className="container">
        <h2 className="resultados__heading" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
          {heading}
        </h2>

        <p className="resultados__text" data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties}>
          {text}
        </p>

        <div className="resultados__grid">
          {municipios.map((m, i) => (
            <article
              className="muni"
              key={m.slug}
              data-reveal
              style={{ "--reveal-i": i + 2 } as React.CSSProperties}
            >
              <div
                className="muni__media"
                style={{ backgroundImage: `url("${m.bgSrc}")` }}
                aria-hidden="true"
              />
              <div className="muni__overlay" aria-hidden="true" />
              <div
                className="muni__logo"
                style={{ backgroundImage: `url("${m.logoSrc}")` }}
                role="img"
                aria-label={m.nome}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
