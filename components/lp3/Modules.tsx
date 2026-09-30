"use client";
import { useState } from "react";
import Section from "./Section";
import type { Lp3Content } from "./types";

const IA_PREFIX = /^Dica de IA:\s*/i;

/** Acordeão numerado, um aberto por vez, todos fechados no load. Mecânica
 *  ARIA igual à do lp2 (painel fica no DOM e anima via grid-template-rows,
 *  por isso aria-hidden em vez de hidden). Tópicos "Dica de IA: …" ganham a
 *  etiqueta IA — apresentação, não copy. */
export default function Modules({ content }: { content: Lp3Content["modules"] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="programacao" tone="paper" labelledBy="programacao-title">
      <div className="lp3-sec-head" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
        <span className="lp3-eyebrow">{content.eyebrow}</span>
        <h2 id="programacao-title" className="lp3-h2">
          {content.title}
        </h2>
        {content.lead ? <p className="lp3-lead">{content.lead}</p> : null}
      </div>

      <ol className="lp3-modules">
        {content.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li
              key={item.title}
              className={`lp3-modules__item${isOpen ? " is-open" : ""}`}
              data-reveal
              style={{ "--reveal-i": i + 1 } as React.CSSProperties}
            >
              <h3>
                <button
                  type="button"
                  className="lp3-modules__toggle"
                  id={`mod-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`mod-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="lp3-modules__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="lp3-modules__title">{item.title}</span>
                  <svg className="lp3-modules__chevron" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6 9l6 6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </h3>
              <div
                id={`mod-a-${i}`}
                className="lp3-modules__body"
                role="region"
                aria-labelledby={`mod-q-${i}`}
                aria-hidden={!isOpen}
              >
                <div className="lp3-modules__body-inner">
                  <ul className="lp3-modules__topics">
                    {item.topics.map((topic) => {
                      const isIa = IA_PREFIX.test(topic);
                      return (
                        <li key={topic}>
                          <span>
                            {isIa ? <span className="lp3-tag">IA</span> : null}
                            {isIa ? topic.replace(IA_PREFIX, "") : topic}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
