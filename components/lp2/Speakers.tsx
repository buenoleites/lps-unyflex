"use client";
import Section from "./Section";
import type { EventLpContent } from "./types";

/**
 * Bancada: a INSTITUIÇÃO vem antes do nome de propósito — é ela que dá
 * autoridade. Foto em 4:5; sem foto, o mesmo quadro recebe o monograma do
 * professor (o gradiente sozinho lia como conteúdo faltando).
 */

/** Iniciais do primeiro e do último nome — decorativo (o nome vem abaixo). */
function monogram(name: string) {
  const parts = name.trim().split(/\s+/);
  const last = parts.length > 1 ? parts[parts.length - 1] : "";
  return (parts[0][0] + (last[0] ?? "")).toUpperCase();
}
export default function Speakers({
  content,
}: {
  content: NonNullable<EventLpContent["speakers"]>;
}) {
  return (
    <Section id="bancada" tone="dark" labelledBy="bancada-title">
      <div
        className="lp2-sec-head"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        <h2 id="bancada-title" className="lp2-h2">
          {content.title}
        </h2>
        {content.lead ? (
          <p className="lp2-sec-head__lead">{content.lead}</p>
        ) : null}
      </div>

      <div className="lp2-speakers__grid">
        {content.items.map((speaker, i) => (
          <article
            key={speaker.name}
            className="lp2-speaker"
            data-reveal
            style={{ "--reveal-i": i + 1 } as React.CSSProperties}
          >
            <p className="lp2-speaker__institution">{speaker.institution}</p>
            <div className="lp2-speaker__photo">
              {speaker.photoSrc ? (
                // O nome vem logo abaixo da foto; alt vazio evita leitura dupla.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={speaker.photoSrc} alt="" />
              ) : (
                <span className="lp2-speaker__monogram" aria-hidden="true">
                  {monogram(speaker.name)}
                </span>
              )}
            </div>
            <h3 className="lp2-h3 lp2-speaker__name">{speaker.name}</h3>
            <p className="lp2-speaker__bio">{speaker.bio}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
