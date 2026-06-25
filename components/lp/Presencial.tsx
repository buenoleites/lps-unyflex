"use client";
import { useReveal } from "@/lib/lp/useReveal";
import type { LpContent } from "./types";

export default function Presencial({ content }: { content: LpContent["presencial"] }) {
  const { imgSrc, imgAlt, title, text, lead, items } = content;
  const [ref, visible] = useReveal();

  return (
    <section
      id="presencial"
      ref={ref as React.RefObject<HTMLElement>}
      className={`section presencial${visible ? " is-visible" : ""}`}
    >
      <div className="container">
        <div className="presencial__grid">
          <div className="presencial__media" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="presencial__img" src={imgSrc} alt={imgAlt} loading="lazy" />
          </div>

          <div className="presencial__content">
            <h2
              className="presencial__title"
              data-reveal
              style={{ "--reveal-i": 1 } as React.CSSProperties}
            >
              {title}
            </h2>

            <p
              className="presencial__text"
              data-reveal
              style={{ "--reveal-i": 2 } as React.CSSProperties}
            >
              {text}
            </p>

            <p
              className="presencial__lead"
              data-reveal
              style={{ "--reveal-i": 3 } as React.CSSProperties}
            >
              {lead}
            </p>

            <ul className="presencial__items">
              {items.map((item, i) => (
                <li
                  className="presencial__item"
                  key={item}
                  data-reveal
                  style={{ "--reveal-i": i + 4 } as React.CSSProperties}
                >
                  <span className="presencial__check" aria-hidden="true">
                    <svg className="presencial__check-svg" viewBox="0 0 24 24">
                      <path d="M5 12.5l4.5 4.5L19 7" />
                    </svg>
                  </span>
                  <span className="presencial__item-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
