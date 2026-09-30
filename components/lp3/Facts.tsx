"use client";
import Section from "./Section";
import type { Lp3Content } from "./types";

/** Ficha do curso em lista com filetes (rótulo pequeno, valor grande). */
export default function Facts({ content }: { content: NonNullable<Lp3Content["facts"]> }) {
  return (
    <Section id="ficha" tone="elevated" labelledBy="ficha-title">
      <h2 id="ficha-title" className="lp3-sr-only">
        Ficha do curso
      </h2>
      <dl className="lp3-facts">
        {content.items.map((item, i) => (
          <div
            key={item.label}
            className="lp3-facts__item"
            data-reveal
            style={{ "--reveal-i": i } as React.CSSProperties}
          >
            <dt className="lp3-facts__label">{item.label}</dt>
            <dd className="lp3-facts__value">{item.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
