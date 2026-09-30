"use client";
import { handleAnchorClick } from "@/lib/lp/scroll";
import Arrow from "./Arrow";
import Section from "./Section";
import type { Lp3Outcomes } from "./types";

/** "O que muda": resultados (título forte + frase), lista com filetes no
 *  mobile e 2 colunas no desktop. Sem cards, sem ícones. Também serve às
 *  seções de desafios e de contratação do Portal (id, tom e botão opcionais). */
export default function Outcomes({ content }: { content: Lp3Outcomes }) {
  const id = content.id ?? "o-que-muda";
  return (
    <Section id={id} tone={content.tone ?? "elevated"} labelledBy={`${id}-title`}>
      <div className="lp3-sec-head" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
        {content.eyebrow ? <span className="lp3-eyebrow">{content.eyebrow}</span> : null}
        <h2 id={`${id}-title`} className="lp3-h2">
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
      {content.cta ? (
        <p className="lp3-outcomes__cta">
          <a className="lp3-btn lp3-btn--primary lp3-btn--lg" href={content.cta.href} onClick={handleAnchorClick}>
            {content.cta.label}
            <Arrow />
          </a>
        </p>
      ) : null}
    </Section>
  );
}
