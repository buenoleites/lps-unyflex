"use client";
import Section from "./Section";
import type { Lp3Content } from "./types";

/** Professores: retrato 4:5 (quando existe), linha de instituição, nome e
 *  bio curta. Sem nota de avaliação. Lista com filete, sem cards. */
export default function Speakers({ content }: { content: NonNullable<Lp3Content["speakers"]> }) {
  return (
    <Section id="professores" tone="elevated" labelledBy="professores-title">
      <div className="lp3-sec-head" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
        <span className="lp3-eyebrow">{content.eyebrow ?? "Professores"}</span>
        <h2 id="professores-title" className="lp3-h2">
          {content.title}
        </h2>
      </div>
      <ul className="lp3-speakers">
        {content.items.map((item, i) => (
          <li key={item.name} className="lp3-speaker" data-reveal style={{ "--reveal-i": i + 1 } as React.CSSProperties}>
            {item.photoSrc ? (
              <div className="lp3-speaker__photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.photoSrc} alt={item.name} width={640} height={800} loading="lazy" />
              </div>
            ) : null}
            <div className="lp3-speaker__body">
              {item.institution ? <p className="lp3-speaker__inst">{item.institution}</p> : null}
              <h3 className="lp3-speaker__name">{item.name}</h3>
              <p className="lp3-speaker__bio">{item.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
