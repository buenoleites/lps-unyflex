"use client";
import { Fragment, useState } from "react";
import Section from "./Section";
import type { EventLpContent } from "./types";

/**
 * "Para quem", em dois modos (content.variant):
 * - "tabs" (padrão): no desktop, barra de abas com sublinhado accent; no
 *   mobile, o MESMO markup vira acordeão (o relayout é só CSS). A semântica é
 *   de disclosure (aria-expanded/aria-controls) nos dois modos — role="tab"
 *   mentiria no modo acordeão.
 * - "grid": cards estáticos, todos os perfis visíveis ao mesmo tempo (a seção
 *   é filtro de autoqualificação: o leitor tem que se reconhecer sem clicar).
 *   Sem botões e sem ARIA de disclosure — não há nada a revelar.
 */
export default function Audience({
  content,
}: {
  content: EventLpContent["audience"];
}) {
  const [active, setActive] = useState<number | null>(0);
  const isGrid = content.variant === "grid";

  function toggle(index: number) {
    if (index === active) {
      // Fechar a aba aberta só faz sentido no acordeão; no modo abas (desktop)
      // sempre há uma aberta. Checagem em event-time: sem risco de hidratação.
      const isDesktop = window.matchMedia("(min-width: 800px)").matches;
      if (!isDesktop) setActive(null);
      return;
    }
    setActive(index);
  }

  return (
    <Section id="para-quem" tone="light" labelledBy="para-quem-title">
      <div
        className="lp2-sec-head"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        <h2 id="para-quem-title" className="lp2-h2">
          {content.title}
        </h2>
        {content.lead ? (
          <p className="lp2-sec-head__lead">{content.lead}</p>
        ) : null}
      </div>

      {isGrid ? (
        <ul className="lp2-audience-grid">
          {content.groups.map((group, i) => (
            <li
              key={group.id}
              className="lp2-audience-card"
              data-reveal
              style={{ "--reveal-i": i + 1 } as React.CSSProperties}
            >
              <h3 className="lp2-h3">{group.label}</h3>
              <p className="lp2-audience-card__desc">{group.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="lp2-audience"
          data-reveal
          style={
            {
              "--reveal-i": 1,
              "--audience-tabs": content.groups.length,
            } as React.CSSProperties
          }
        >
          {content.groups.map((group, i) => {
            const open = active === i;
            return (
              <Fragment key={group.id}>
                <button
                  type="button"
                  className="lp2-audience__tab"
                  id={`tab-${group.id}`}
                  aria-expanded={open}
                  aria-controls={`panel-${group.id}`}
                  onClick={() => toggle(i)}
                >
                  {group.label}
                  <svg
                    className="lp2-audience__tab-marker"
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
                <div
                  className="lp2-audience__panel"
                  id={`panel-${group.id}`}
                  role="region"
                  aria-labelledby={`tab-${group.id}`}
                  hidden={!open}
                >
                  {group.description}
                </div>
              </Fragment>
            );
          })}
        </div>
      )}

      {content.closing ? (
        <p
          className="lp2-audience-closing"
          data-reveal
          style={
            {
              "--reveal-i": isGrid ? content.groups.length + 1 : 2,
            } as React.CSSProperties
          }
        >
          {content.closing}
        </p>
      ) : null}
    </Section>
  );
}
