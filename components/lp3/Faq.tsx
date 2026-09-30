"use client";
import { useState } from "react";
import Section from "./Section";
import type { Lp3Content } from "./types";

/** Perguntas frequentes: acordeão, um aberto por vez, mesma mecânica ARIA do
 *  Modules (painel fica no DOM e anima via grid-template-rows). */
export default function Faq({ content }: { content: NonNullable<Lp3Content["faq"]> }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq" tone="paper" labelledBy="faq-title">
      <div className="lp3-sec-head" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
        {content.eyebrow ? <span className="lp3-eyebrow">{content.eyebrow}</span> : null}
        <h2 id="faq-title" className="lp3-h2">
          {content.title}
        </h2>
      </div>

      <ul className="lp3-faq">
        {content.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li
              key={item.q}
              className={`lp3-faq__item${isOpen ? " is-open" : ""}`}
              data-reveal
              style={{ "--reveal-i": i + 1 } as React.CSSProperties}
            >
              <h3>
                <button
                  type="button"
                  className="lp3-faq__q"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <svg className="lp3-faq__chevron" viewBox="0 0 24 24" aria-hidden="true">
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
                id={`faq-a-${i}`}
                className="lp3-faq__a"
                role="region"
                aria-labelledby={`faq-q-${i}`}
                aria-hidden={!isOpen}
              >
                <div className="lp3-faq__a-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
