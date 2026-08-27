"use client";
import { handleAnchorClick } from "@/lib/lp/scroll";
import Section from "./Section";
import type { EventLpContent } from "./types";

/**
 * "Como seu órgão contrata": o que o lead recebe para levar ao gestor
 * (proposta, empenho, documentação, certificado). Entra logo depois do preço,
 * porque a pergunta mais frequente depois dele é "me manda o cronograma para
 * eu pedir autorização". Reusa os cards claros do "Para quem" (variante grid)
 * — mesma linguagem visual, sem CSS de card novo.
 */
export default function Procurement({
  content,
}: {
  content: NonNullable<EventLpContent["procurement"]>;
}) {
  return (
    <Section
      id="como-contratar"
      tone="light"
      className="lp2-procurement"
      labelledBy="como-contratar-title"
    >
      <div
        className="lp2-sec-head"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        <h2 id="como-contratar-title" className="lp2-h2">
          {content.title}
        </h2>
        {content.lead ? (
          <p className="lp2-sec-head__lead">{content.lead}</p>
        ) : null}
      </div>

      <ul className="lp2-audience-grid">
        {content.items.map((item, i) => (
          <li
            key={item.title}
            className="lp2-audience-card"
            data-reveal
            style={{ "--reveal-i": i + 1 } as React.CSSProperties}
          >
            <h3 className="lp2-h3">{item.title}</h3>
            <p className="lp2-audience-card__desc">{item.desc}</p>
          </li>
        ))}
      </ul>

      <div
        className="lp2-procurement__cta"
        data-reveal
        style={
          { "--reveal-i": content.items.length + 1 } as React.CSSProperties
        }
      >
        {/* Sem href ⇒ rola até o formulário (#inscricao). */}
        <a
          className="btn btn--primary btn--lg"
          href={content.cta.href ?? "#inscricao"}
          onClick={handleAnchorClick}
        >
          {content.cta.label}
        </a>
      </div>
    </Section>
  );
}
