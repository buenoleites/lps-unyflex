"use client";
import { handleAnchorClick } from "@/lib/lp/scroll";
import Section from "./Section";
import type { EventLpContent } from "./types";

/**
 * Planos lado a lado (2 a 4). O destaque (borda accent + etiqueta) vem da
 * config, não é fixo. No mobile o destacado sobe para o topo da pilha via CSS.
 * Abaixo dos cards, em linha própria e legível: formas de pagamento; depois a
 * regra de lote em small muted.
 *
 * Blocos OPCIONAIS (ligam pela chave, criados para a /engenharia-nov26):
 * botão por card (`items[].ctaLabel`), card largo "plano recomendado"
 * (`featured`), tabela comparativa (`comparison`) e nota de rodapé
 * (`footnote`). As rotas que não os preenchem renderizam como antes.
 */
export default function Plans({
  content,
}: {
  content: NonNullable<EventLpContent["plans"]>;
}) {
  let reveal = 2;
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
              {plan.sub ? <p className="lp2-plan__sub">{plan.sub}</p> : null}
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

            {plan.ctaLabel ? (
              <div className="lp2-plan__cta">
                <a
                  className="btn btn--primary"
                  href="#inscricao"
                  onClick={handleAnchorClick}
                >
                  {plan.ctaLabel}
                </a>
              </div>
            ) : null}
          </article>
        ))}
      </div>

      {content.featured ? (
        <article
          className="lp2-plan lp2-plan--highlighted lp2-combo__hero lp2-plans__featured"
          data-reveal
          style={{ "--reveal-i": reveal++ } as React.CSSProperties}
        >
          <span className="lp2-plan__label">
            {content.featured.highlightLabel}
          </span>
          <div className="lp2-plans__featured-body">
            <div>
              <h3 className="lp2-plan__name">{content.featured.title}</h3>
              <p className="lp2-combo__desc">{content.featured.desc}</p>
              <ul className="lp2-plan__chips">
                {content.featured.chips.map((chip) => (
                  <li key={chip} className="lp2-plan__chip">
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lp2-plans__featured-price">
              <p className="lp2-plan__sub">{content.featured.priceLabel}</p>
              <p className="lp2-plan__price">{content.featured.price}</p>
              {content.featured.priceNote ? (
                <p className="lp2-combo__savings">
                  {content.featured.priceNote}
                </p>
              ) : null}
            </div>
          </div>
          <div className="lp2-combo__ctas lp2-plans__featured-ctas">
            <a
              className="btn btn--primary btn--lg"
              href={content.featured.ctaPrimary.href}
              onClick={handleAnchorClick}
            >
              {content.featured.ctaPrimary.label}
            </a>
            {content.featured.ctaSecondary ? (
              <a
                className="lp2-combo__cta-secondary"
                href={content.featured.ctaSecondary.href}
                onClick={handleAnchorClick}
              >
                {content.featured.ctaSecondary.label}
              </a>
            ) : null}
          </div>
        </article>
      ) : null}

      {content.comparison ? (
        <div
          className="lp2-combo__table-wrap"
          data-reveal
          style={{ "--reveal-i": reveal++ } as React.CSSProperties}
        >
          <table className="lp2-combo__table">
            <thead>
              <tr>
                <th scope="col" className="lp2-combo__table-corner">
                  {content.comparison.itemsLabel ?? (
                    <span className="lp2-sr-only">Item</span>
                  )}
                </th>
                {content.comparison.columns.map((column) => (
                  <th
                    key={column.name}
                    scope="col"
                    className={
                      column.highlighted ? "lp2-combo__th--highlighted" : undefined
                    }
                  >
                    {column.name}
                    <span className="lp2-combo__th-price">{column.price}</span>
                    {column.sub ? (
                      <span className="lp2-combo__th-sub">{column.sub}</span>
                    ) : null}
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
                        content.comparison!.columns[i].highlighted
                          ? "lp2-combo__td--highlighted"
                          : undefined
                      }
                    >
                      {typeof cell === "boolean" ? (
                        <span
                          className={`lp2-combo__mark${
                            cell ? "" : " lp2-combo__mark--off"
                          }`}
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

      <p
        className="lp2-plans__payment"
        data-reveal
        style={{ "--reveal-i": reveal++ } as React.CSSProperties}
      >
        {content.paymentNote}
      </p>

      <p
        className="lp2-plans__batch"
        data-reveal
        style={{ "--reveal-i": reveal++ } as React.CSSProperties}
      >
        {content.batchNote}
      </p>

      {content.footnote ? (
        <p
          className="lp2-plans__batch"
          data-reveal
          style={{ "--reveal-i": reveal++ } as React.CSSProperties}
        >
          {content.footnote}
        </p>
      ) : null}

      <div
        className="lp2-plans__cta"
        data-reveal
        style={{ "--reveal-i": reveal++ } as React.CSSProperties}
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
