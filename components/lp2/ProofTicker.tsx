"use client";
import Section from "./Section";
import type { EventLpContent } from "./types";

export default function ProofTicker({
  content,
}: {
  content: EventLpContent["ticker"];
}) {
  return (
    <Section id="prova" tone="dark" className="lp2-ticker">
      <ul className="lp2-ticker__list" aria-label="Números do evento">
        {content.metrics.map((metric, i) => (
          <li
            key={metric.label}
            className="lp2-ticker__item"
            data-reveal
            style={{ "--reveal-i": i } as React.CSSProperties}
          >
            <span className="lp2-ticker__value">{metric.value}</span>
            <span className="lp2-ticker__label">{metric.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
