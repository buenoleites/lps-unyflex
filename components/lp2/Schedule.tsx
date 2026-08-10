"use client";
import Section from "./Section";
import type { EventLpContent } from "./types";

/**
 * Programação como jornada: timeline horizontal no desktop (linha conectando
 * os nós), vertical no mobile. Um nó por dia.
 */
export default function Schedule({
  content,
}: {
  content: NonNullable<EventLpContent["schedule"]>;
}) {
  return (
    <Section id="programacao" tone="light" labelledBy="programacao-title">
      <div
        className="lp2-sec-head"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        <h2 id="programacao-title" className="lp2-h2">
          {content.title}
        </h2>
      </div>

      <ol className="lp2-timeline">
        {content.days.map((day, i) => (
          <li
            key={day.label}
            className="lp2-timeline__item"
            data-reveal
            style={{ "--reveal-i": i + 1 } as React.CSSProperties}
          >
            <span className="lp2-timeline__node" aria-hidden="true">
              {i + 1}
            </span>
            <span className="lp2-timeline__day">{day.label}</span>
            <h3 className="lp2-h3 lp2-timeline__hours">{day.hours}</h3>
            <p className="lp2-timeline__panels">{day.panels}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
