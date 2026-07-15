"use client";
import { useReveal } from "@/lib/lp/useReveal";
import LeadForm from "./LeadForm";
import type { LpContent } from "./types";

export default function CtaFinal({ content }: { content: LpContent["ctaFinal"] }) {
  const { bgSrc, title, text, microcopy, formId, submitLabel } = content;
  const [ref, visible] = useReveal();

  return (
    <section
      id="inscricao"
      ref={ref as React.RefObject<HTMLElement>}
      className={`cta-final${visible ? " is-visible" : ""}`}
    >
      <div
        className="cta-final__media"
        style={{ "--media-bg": `url(${bgSrc})` } as React.CSSProperties}
        aria-hidden="true"
      />
      <div className="cta-final__overlay" aria-hidden="true" />

      <div className="container cta-final__inner">
        <h2 className="cta-final__title" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
          {title}
        </h2>

        <p className="cta-final__text" data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties}>
          {text}
        </p>

        <div className="cta-final__card" data-reveal style={{ "--reveal-i": 2 } as React.CSSProperties}>
          <LeadForm formId={formId} submitLabel={submitLabel} />
        </div>

        <p
          className="cta-final__microcopy"
          data-reveal
          style={{ "--reveal-i": 3 } as React.CSSProperties}
        >
          {microcopy}
        </p>
      </div>
    </section>
  );
}
