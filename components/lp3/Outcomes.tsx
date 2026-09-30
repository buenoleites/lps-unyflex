"use client";
import Section from "./Section";
import type { Lp3Content } from "./types";

/** "O que muda": 4 resultados (título forte + frase), lista com filetes no
 *  mobile e 2 colunas no desktop. Sem cards, sem ícones. */
export default function Outcomes({ content }: { content: NonNullable<Lp3Content["outcomes"]> }) {
  return (
    <Section id="o-que-muda" tone="elevated" labelledBy="o-que-muda-title">
      <div className="lp3-sec-head" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
        {content.eyebrow ? <span className="lp3-eyebrow">{content.eyebrow}</span> : null}
        <h2 id="o-que-muda-title" className="lp3-h2">
          {content.title}
        </h2>
      </div>
      <ul className="lp3-outcomes">
        {content.items.map((item, i) => (
          <li key={item.title} data-reveal style={{ "--reveal-i": i + 1 } as React.CSSProperties}>
            <h3 className="lp3-outcomes__title">{item.title}</h3>
            <p className="lp3-outcomes__text">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
