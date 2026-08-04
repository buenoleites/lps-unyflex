"use client";
import Section from "./Section";
import type { EventLpContent } from "./types";

function Mark({ included }: { included: boolean }) {
  return (
    <span
      className={`lp2-compare__mark${included ? "" : " lp2-compare__mark--off"}`}
      role="img"
      aria-label={included ? "incluso" : "não incluso"}
    >
      {included ? "✓" : "—"}
    </span>
  );
}

/**
 * Comparativo de 2 colunas (opcional). Uma única <table> semântica: no mobile
 * cada linha vira um mini-bloco e o nome da coluna vem de data-col via CSS —
 * sem scroll horizontal e sem duplicar DOM.
 */
export default function Compare({
  content,
}: {
  content: NonNullable<EventLpContent["compare"]>;
}) {
  const [colA, colB] = content.columns;

  return (
    <Section id="comparativo" tone="light" labelledBy="comparativo-title">
      <div
        className="lp2-sec-head"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        <h2 id="comparativo-title" className="lp2-h2">
          {content.title}
        </h2>
      </div>

      <div data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties}>
        <table className="lp2-compare">
          <caption className="lp2-sr-only">
            Comparativo entre {colA} e {colB}
          </caption>
          <thead>
            <tr>
              <th scope="col">
                <span className="lp2-sr-only">Item</span>
              </th>
              <th scope="col">{colA}</th>
              <th scope="col">{colB}</th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td data-col={colA}>
                  <Mark included={row.a} />
                </td>
                <td data-col={colB}>
                  <Mark included={row.b} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
