"use client";
import { scrollToId } from "@/lib/lp/scroll";
import Arrow from "./Arrow";
import Section from "./Section";
import type { Lp3Content } from "./types";

/** Investimento: 3 cards + card largo do plano recomendado + tabela.
 *  Mesmo shape de dados do lp2 (portável entre templates). Diferença central:
 *  todo botão chama onSelectPlan(nome) ANTES de rolar ao formulário — o plano
 *  clicado vira `plano_interesse` no lead. Nenhum botão abre WhatsApp. */
export default function Plans({
  content,
  onSelectPlan,
}: {
  content: Lp3Content["plans"];
  onSelectPlan: (plan: string) => void;
}) {
  function pick(plan: string) {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onSelectPlan(plan);
      scrollToId("inscricao");
    };
  }
  let reveal = 2;

  return (
    <Section id="planos" tone="dark" labelledBy="planos-title">
      <div className="lp3-sec-head" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
        <span className="lp3-eyebrow">{content.eyebrow}</span>
        <h2 id="planos-title" className="lp3-h2">
          {content.title}
        </h2>
        {content.lead ? <p className="lp3-lead">{content.lead}</p> : null}
      </div>

      <div className="lp3-plans__grid" data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties}>
        {content.items.map((plan) => (
          <article
            key={plan.name}
            className={`lp3-plan${plan.highlighted ? " lp3-plan--highlighted" : ""}`}
            aria-label={plan.name}
          >
            {plan.highlighted && plan.highlightLabel ? (
              <span className="lp3-plan__label">{plan.highlightLabel}</span>
            ) : null}
            <div>
              <h3 className="lp3-plan__name">{plan.name}</h3>
              {plan.sub ? <p className="lp3-plan__sub">{plan.sub}</p> : null}
              <p className="lp3-plan__price">{plan.price}</p>
            </div>
            <ul className="lp3-plan__features">
              {plan.features.map((feature) => (
                <li
                  key={feature.label}
                  className={`lp3-plan__feature${feature.included ? "" : " lp3-plan__feature--off"}`}
                >
                  <span
                    className="lp3-plan__mark"
                    role="img"
                    aria-label={feature.included ? "incluso" : "não incluso"}
                  >
                    {feature.included ? "✓" : "—"}
                  </span>
                  {feature.label}
                </li>
              ))}
            </ul>
            <div className="lp3-plan__cta">
              <a
                className={`lp3-btn lp3-btn--block ${plan.highlighted ? "lp3-btn--primary" : "lp3-btn--ghost"}`}
                href="#inscricao"
                onClick={pick(plan.name)}
              >
                {plan.ctaLabel}
              </a>
            </div>
          </article>
        ))}
      </div>

      {content.featured ? (
        <article
          className="lp3-plans__featured"
          data-reveal
          style={{ "--reveal-i": reveal++ } as React.CSSProperties}
          aria-label={content.featured.title}
        >
          <span className="lp3-plan__label">{content.featured.highlightLabel}</span>
          <div className="lp3-plans__featured-body">
            <div>
              <h3 className="lp3-h3">{content.featured.title}</h3>
              <p className="lp3-plans__desc">{content.featured.desc}</p>
              <ul className="lp3-plan__chips">
                {content.featured.chips.map((chip) => (
                  <li key={chip} className="lp3-plan__chip">
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lp3-plans__featured-price">
              <p className="lp3-plan__sub">{content.featured.priceLabel}</p>
              <p className="lp3-plan__price">{content.featured.price}</p>
              {content.featured.priceNote ? (
                <p className="lp3-plans__note">{content.featured.priceNote}</p>
              ) : null}
            </div>
          </div>
          <div className="lp3-plans__featured-ctas">
            <a
              className="lp3-btn lp3-btn--primary lp3-btn--lg"
              href="#inscricao"
              onClick={pick(content.featured.plan)}
            >
              {content.featured.ctaPrimary}
              <Arrow />
            </a>
            {content.featured.ctaSecondary ? (
              <a className="lp3-btn lp3-btn--ghost" href="#inscricao" onClick={pick("")}>
                {content.featured.ctaSecondary}
              </a>
            ) : null}
          </div>
        </article>
      ) : null}

      {content.comparison ? (
        <div className="lp3-table-wrap" data-reveal style={{ "--reveal-i": reveal++ } as React.CSSProperties}>
          <table className="lp3-table">
            <thead>
              <tr>
                <th scope="col">{content.comparison.itemsLabel}</th>
                {content.comparison.columns.map((column) => (
                  <th
                    key={column.name}
                    scope="col"
                    className={column.highlighted ? "lp3-table__th--highlighted" : undefined}
                  >
                    {column.name}
                    <span className="lp3-table__th-price">{column.price}</span>
                    {column.sub ? <span className="lp3-table__th-sub">{column.sub}</span> : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.comparison.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.cells.map((cell, i) => (
                    <td
                      key={content.comparison!.columns[i].name}
                      className={
                        content.comparison!.columns[i].highlighted ? "lp3-table__td--highlighted" : undefined
                      }
                    >
                      {typeof cell === "boolean" ? (
                        <span
                          className={`lp3-table__mark${cell ? "" : " lp3-table__mark--off"}`}
                          role="img"
                          aria-label={cell ? "incluso" : "não incluso"}
                        >
                          {cell ? "✓" : "—"}
                        </span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {content.paymentNote ? (
        <p className="lp3-plans__payment" data-reveal style={{ "--reveal-i": reveal++ } as React.CSSProperties}>
          {content.paymentNote}
        </p>
      ) : null}
      {content.footnote ? (
        <p className="lp3-plans__footnote" data-reveal style={{ "--reveal-i": reveal++ } as React.CSSProperties}>
          {content.footnote}
        </p>
      ) : null}
    </Section>
  );
}
