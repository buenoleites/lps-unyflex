"use client";
import Section from "./Section";
import type { Lp3Content } from "./types";

export default function Audience({ content }: { content: NonNullable<Lp3Content["audience"]> }) {
  return (
    <Section id="para-quem" tone="paper" labelledBy="para-quem-title">
      <div className="lp3-sec-head" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
        <span className="lp3-eyebrow">{content.eyebrow}</span>
        <h2 id="para-quem-title" className="lp3-h2">
          {content.title}
        </h2>
      </div>
      <ul className="lp3-audience__list">
        {content.items.map((item, i) => {
          const label = typeof item === "string" ? item : item.label;
          return (
            <li key={label} data-reveal style={{ "--reveal-i": i + 1 } as React.CSSProperties}>
              {typeof item === "string" ? (
                item
              ) : (
                <>
                  <strong className="lp3-audience__label">{item.label}</strong>
                  <span className="lp3-audience__desc">{item.description}</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
      {content.note ? <p className="lp3-audience__note">{content.note}</p> : null}
    </Section>
  );
}
