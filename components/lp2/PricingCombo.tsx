"use client";
import { handleAnchorClick } from "@/lib/lp/scroll";
import Section from "./Section";
import type { EventLpContent } from "./types";

/**
 * Pricing "combo" (criado para a /licitacao): três produtos avulsos com o
 * preço dentro do combo, card central destacado do combo (borda accent +
 * etiqueta, mesma exceção sancionada do plano destacado), tabela comparativa
 * opcional, card da modalidade online e o bloco de pagamento. Substitui a
 * seção `plans` mantendo a âncora #planos (navbar e sticky CTA).
 */
export default function PricingCombo({
  content,
}: {
  content: NonNullable<EventLpContent["pricingCombo"]>;
}) {
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
      </div>

      <div
        className="lp2-combo__products"
        data-reveal
        style={{ "--reveal-i": 1 } as React.CSSProperties}
      >
        {content.products.map((product) => (
          <article key={product.name} className="lp2-plan">
            <div>
              <h3 className="lp2-plan__name">{product.name}</h3>
              <p className="lp2-combo__desc">{product.desc}</p>
            </div>
            <div className="lp2-combo__pricing">
              <p className="lp2-combo__full">
                Avulso: <s>{product.price}</s>
              </p>
              <p className="lp2-combo__in-combo">
                No combo: <strong>{product.comboPrice}</strong>
                <span className="lp2-combo__discount">{product.discount}</span>
              </p>
            </div>
          </article>
        ))}
      </div>

      <article
        className="lp2-plan lp2-plan--highlighted lp2-combo__hero"
        data-reveal
        style={{ "--reveal-i": 2 } as React.CSSProperties}
      >
        <span className="lp2-plan__label">{content.combo.highlightLabel}</span>
        <div>
          <h3 className="lp2-plan__name">{content.combo.name}</h3>
          <p className="lp2-combo__from">
            <s>{content.combo.from}</s> por
          </p>
          <p className="lp2-plan__price">{content.combo.price}</p>
          <p className="lp2-combo__savings">{content.combo.savings}</p>
        </div>
        <div className="lp2-combo__ctas">
          <a
            className="btn btn--primary btn--lg"
            href={content.combo.ctaPrimary.href}
            onClick={handleAnchorClick}
          >
            {content.combo.ctaPrimary.label}
          </a>
          <a
            className="lp2-combo__cta-secondary"
            href={content.combo.ctaSecondary.href}
            onClick={handleAnchorClick}
          >
            {content.combo.ctaSecondary.label}
          </a>
        </div>
      </article>

      {content.comparison ? (
        <div
          className="lp2-combo__table-wrap"
          data-reveal
          style={{ "--reveal-i": 3 } as React.CSSProperties}
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
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.comparison.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.cells.map((cell, i) => (
                    <td key={content.comparison!.columns[i]}>
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

      <article
        className="lp2-plan lp2-combo__online"
        data-reveal
        style={{ "--reveal-i": 4 } as React.CSSProperties}
      >
        <div>
          <h3 className="lp2-plan__name">{content.online.name}</h3>
          <p className="lp2-plan__price">{content.online.price}</p>
        </div>
        <p className="lp2-combo__desc">{content.online.desc}</p>
      </article>

      <p
        className="lp2-plans__payment"
        data-reveal
        style={{ "--reveal-i": 5 } as React.CSSProperties}
      >
        {content.paymentNote}
      </p>
    </Section>
  );
}
