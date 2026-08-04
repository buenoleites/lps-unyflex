"use client";
import { useState } from "react";
import Section from "./Section";
import type { EventLpContent } from "./types";

/**
 * FAQ em acordeão: uma pergunta aberta por vez, tipografia grande, nenhum
 * ícone decorativo além do chevron.
 */
export default function Faq({ content }: { content: EventLpContent["faq"] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq" tone="white" labelledBy="faq-title">
      <div
        className="lp2-sec-head"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        <h2 id="faq-title" className="lp2-h2">
          {content.title}
        </h2>
      </div>

      <div
        className="lp2-faq"
        data-reveal
        style={{ "--reveal-i": 1 } as React.CSSProperties}
      >
        {content.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className={`lp2-faq__item${isOpen ? " is-open" : ""}`}
            >
              <h3>
                <button
                  type="button"
                  className="lp2-faq__q"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                  <svg
                    className="lp2-faq__chevron"
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
                id={`faq-a-${i}`}
                className="lp2-faq__a"
                role="region"
                aria-labelledby={`faq-q-${i}`}
                aria-hidden={!isOpen}
              >
                <div className="lp2-faq__a-inner">
                  {/* div, não p: `a` é ReactNode e pode conter blocos. */}
                  <div>{item.a}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
