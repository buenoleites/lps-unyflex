"use client";
import { handleAnchorClick } from "@/lib/lp/scroll";
import Section from "./Section";
import type { EventLpContent } from "./types";

/**
 * Planos lado a lado (2 a 4). O destaque (borda accent + etiqueta) vem da
 * config, não é fixo. No mobile o destacado sobe para o topo da pilha via CSS.
 * Abaixo dos cards, em linha própria e legível: formas de pagamento; depois a
 * regra de lote em small muted.
 */
export default function Plans({ content }: { content: EventLpContent["plans"] }) {
  return (
    <Section id="planos" tone="light" labelledBy="planos-title">
      <div
        className="lp2-sec-head"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        <h2 id="planos-title" className="lp2-h2">
          {content.title}
        </h2>
        {content.lead ? (
          <p className="lp2-sec-head__lead">{content.lead}</p>
        ) : null}
        {content.note ? (
          <p className="lp2-sec-head__lead">{content.note}</p>
        ) : null}
      </div>

      <div
        className="lp2-plans__grid"
        data-reveal
        style={{ "--reveal-i": 1 } as React.CSSProperties}
      >
        {content.items.map((plan) => (
          <article
            key={plan.name}
            className={`lp2-plan${plan.highlighted ? " lp2-plan--highlighted" : ""}`}
          >
            {plan.highlighted && plan.highlightLabel ? (
              <span className="lp2-plan__label">{plan.highlightLabel}</span>
            ) : null}
            {plan.badge ? (
              <span className="lp2-plan__badge">{plan.badge}</span>
            ) : null}

            <div>
              <h3 className="lp2-plan__name">{plan.name}</h3>
              <p className="lp2-plan__price">{plan.price}</p>
            </div>

            <ul className="lp2-plan__features">
              {plan.features.map((feature) => (
                <li
                  key={feature.label}
                  className={`lp2-plan__feature${
                    feature.included ? "" : " lp2-plan__feature--off"
                  }`}
                >
                  <span
                    className="lp2-plan__mark"
                    role="img"
                    aria-label={feature.included ? "incluso" : "não incluso"}
                  >
                    {feature.included ? "✓" : "—"}
                  </span>
                  {feature.label}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p
        className="lp2-plans__payment"
        data-reveal
        style={{ "--reveal-i": 2 } as React.CSSProperties}
      >
        {content.paymentNote}
      </p>

      <p
        className="lp2-plans__batch"
        data-reveal
        style={{ "--reveal-i": 3 } as React.CSSProperties}
      >
        {content.batchNote}
      </p>

      <div
        className="lp2-plans__cta"
        data-reveal
        style={{ "--reveal-i": 4 } as React.CSSProperties}
      >
        <a
          className="btn btn--primary btn--lg"
          href="#inscricao"
          onClick={handleAnchorClick}
        >
          {content.ctaLabel}
        </a>
      </div>
    </Section>
  );
}
