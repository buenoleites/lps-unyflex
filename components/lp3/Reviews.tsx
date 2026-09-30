"use client";
import Section from "./Section";
import type { Lp3Content } from "./types";

/** Depoimentos públicos do Google, texto integral e nome como publicados. */
export default function Reviews({ content }: { content: NonNullable<Lp3Content["reviews"]> }) {
  return (
    <Section id="depoimentos" tone="paper" labelledBy="depoimentos-title">
      <div className="lp3-sec-head" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
        <span className="lp3-eyebrow">{content.eyebrow ?? "Depoimentos"}</span>
        <h2 id="depoimentos-title" className="lp3-h2">
          {content.rating} no {content.sourceLabel} · {content.volume}
        </h2>
      </div>
      <div className="lp3-reviews">
        {content.photo ? (
          <div className="lp3-reviews__photo" data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={content.photo.src}
              alt={content.photo.alt}
              width={content.photo.width}
              height={content.photo.height}
              loading="lazy"
            />
          </div>
        ) : null}
        <ul className="lp3-reviews__list">
          {content.items.map((item, i) => (
            <li key={item.author} data-reveal style={{ "--reveal-i": i + 2 } as React.CSSProperties}>
              <blockquote className="lp3-reviews__text">{item.text}</blockquote>
              <p className="lp3-reviews__author">{item.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
