"use client";
import Section from "./Section";
import type { EventLpContent } from "./types";

/**
 * Faixa de aviso: uma linha sobre fundo azul, logo abaixo do ticker de prova.
 * Sem título nem CTA próprios — é um recado curto (ex.: "a turma de setembro
 * virou outubro"), e o texto vem inteiro da config.
 */
export default function Banner({
  content,
}: {
  content: NonNullable<EventLpContent["banner"]>;
}) {
  return (
    <Section id="aviso" tone="dark" className="lp2-banner">
      <p
        className="lp2-banner__text"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        {content.text}
      </p>
    </Section>
  );
}
