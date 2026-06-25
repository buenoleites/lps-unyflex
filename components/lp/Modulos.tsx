"use client";
import { useReveal } from "@/lib/lp/useReveal";
import { handleAnchorClick } from "@/lib/lp/scroll";
import type { LpContent } from "./types";

export default function Modulos({ content }: { content: LpContent["modulos"] }) {
  const { heading, modulos, imgSrc, imgAlt, ctaLabel } = content;
  const [ref, visible] = useReveal();

  return (
    <section
      id="modulos"
      ref={ref as React.RefObject<HTMLElement>}
      className={`section modulos${visible ? " is-visible" : ""}`}
    >
      <div className="container">
        <h2 className="modulos__heading" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
          {heading}
        </h2>

        <div className="modulos__grid">
          {modulos.map((m, i) => (
            <article
              className="modulo"
              key={m.n}
              data-reveal
              style={{ "--reveal-i": i + 1 } as React.CSSProperties}
            >
              <span className="modulo__num">{m.n}</span>
              <h3 className="modulo__title">{m.title}</h3>
              <p className="modulo__desc">{m.desc}</p>
            </article>
          ))}
        </div>

        <div
          className="modulos__media"
          data-reveal
          style={{ "--reveal-i": modulos.length + 1 } as React.CSSProperties}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="modulos__img" src={imgSrc} alt={imgAlt} loading="lazy" />
        </div>

        <div
          className="modulos__cta"
          data-reveal
          style={{ "--reveal-i": modulos.length + 2 } as React.CSSProperties}
        >
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
