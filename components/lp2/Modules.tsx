"use client";
import { useState } from "react";
import Section from "./Section";
import type { EventLpContent } from "./types";

/**
 * Módulos "o que você leva": cards em acordeão, um aberto por vez, todos
 * fechados no load. Fechado, o card mostra número + título + a frase de
 * resultado quando a rota tem uma; aberto, revela o objetivo (opcional) e a
 * lista de tópicos do módulo. Mecânica de
 * colapso/ARIA idêntica à do Faq (o painel anima via grid-template-rows e
 * permanece no DOM, por isso aria-hidden em vez de hidden).
 */
export default function Modules({
  content,
}: {
  content: NonNullable<EventLpContent["modules"]>;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="modulos" tone="light" labelledBy="modulos-title">
      <div
        className="lp2-sec-head"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        <h2 id="modulos-title" className="lp2-h2">
          {content.title}
        </h2>
        {content.lead ? (
          <p className="lp2-sec-head__lead">{content.lead}</p>
        ) : null}
      </div>

      <ol className="lp2-modules">
        {content.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li
              key={item.title}
              className={`lp2-modules__item${isOpen ? " is-open" : ""}`}
              data-reveal
              style={{ "--reveal-i": i + 1 } as React.CSSProperties}
            >
              <h3>
                <button
                  type="button"
                  className="lp2-modules__toggle"
                  id={`mod-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`mod-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="lp2-modules__text">
                    <span className="lp2-modules__num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="lp2-modules__title">{item.title}</span>
                    {item.result ? (
                      <span className="lp2-modules__result">
                        {item.result}
                      </span>
                    ) : null}
                  </span>
                  <svg
                    className="lp2-modules__chevron"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
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
                className="lp2-modules__body"
                role="region"
                aria-labelledby={`mod-q-${i}`}
                aria-hidden={!isOpen}
              >
                <div className="lp2-modules__body-inner">
                  {item.objective ? (
                    <p className="lp2-modules__objective">{item.objective}</p>
                  ) : null}
                  <ul className="lp2-modules__topics">
                    {item.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
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
