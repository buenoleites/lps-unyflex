"use client";
import Section from "./Section";
import type { Lp3Content } from "./types";

export default function About({ content }: { content: NonNullable<Lp3Content["about"]> }) {
  return (
    <Section id="curso" tone="paper" labelledBy="curso-title">
      <div className="lp3-about">
        <div className="lp3-sec-head" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
          <span className="lp3-eyebrow">{content.eyebrow}</span>
          <h2 id="curso-title" className="lp3-h2">
            {content.title}
          </h2>
        </div>
        <div className="lp3-about__body" data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties}>
          {content.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
