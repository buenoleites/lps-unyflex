"use client";
import Section from "./Section";
import type { EventLpContent } from "./types";

/**
 * Grid bento assimétrico: aceita de 6 a 10 cards; o primeiro ocupa largura
 * dupla. A numeração 01/02… vem do índice — a posição semântica já é dada
 * pelo <ol>, então o número visível é decorativo.
 */
export default function ProblemGrid({
  content,
}: {
  content: EventLpContent["problem"];
}) {
  return (
    <Section id="problema" tone="dark" labelledBy="problema-title">
      <div
        className="lp2-sec-head"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        <h2 id="problema-title" className="lp2-h2">
          {content.title}
        </h2>
      </div>

      <ol className="lp2-bento">
        {content.items.map((item, i) => (
          <li
            key={item.title}
            className="lp2-bento__item"
            data-reveal
            style={{ "--reveal-i": i + 1 } as React.CSSProperties}
          >
            <span className="lp2-bento__num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="lp2-h3 lp2-bento__title">{item.title}</h3>
            <p className="lp2-bento__desc">{item.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
