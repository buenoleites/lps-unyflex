"use client";
import { useState } from "react";
import { useReveal } from "@/lib/lp/useReveal";
import type { LpContent } from "./types";

export default function Faq({ content }: { content: LpContent["faq"] }) {
  const { heading, items } = content;
  const [ref, visible] = useReveal();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className={`section faq${visible ? " is-visible" : ""}`}
    >
      <div className="container faq__container">
        <h2 className="faq__heading" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
          {heading}
        </h2>

        <div className="faq__list">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                className={`faq__item${isOpen ? " is-open" : ""}`}
                key={item.q}
                data-reveal
                style={{ "--reveal-i": i + 1 } as React.CSSProperties}
              >
                <button
                  type="button"
                  className="faq__question"
                  id={`faq-trigger-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="faq__q-text">{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="faq__chevron">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  className="faq__answer"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                >
                  <div className="faq__answer-inner">
                    <p className="faq__a-text">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
