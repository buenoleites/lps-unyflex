"use client";
import Section from "./Section";
import type { Lp3Content } from "./types";

/** Bloco em accent com itens numerados (o único fundo âmbar da página). */
export default function Highlight({ content }: { content: NonNullable<Lp3Content["highlight"]> }) {
  return (
    <Section id="ia" tone="accent" labelledBy="ia-title">
      <div className="lp3-highlight">
        <div className="lp3-sec-head" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
          <span className="lp3-eyebrow">{content.eyebrow}</span>
          <h2 id="ia-title" className="lp3-h2">
            {content.title}
          </h2>
          {content.lead ? <p className="lp3-lead lp3-highlight__lead">{content.lead}</p> : null}
        </div>
        <ol className="lp3-highlight__list">
          {content.items.map((item, i) => (
            <li key={item} data-reveal style={{ "--reveal-i": i + 1 } as React.CSSProperties}>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
