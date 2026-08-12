"use client";
import Section from "./Section";
import type { EventLpContent } from "./types";

/**
 * Experiência presencial (opcional): colagem de fotos reais em tamanhos
 * diferentes (CSS columns), com legenda curta em algumas.
 */
export default function Gallery({
  content,
}: {
  content: NonNullable<EventLpContent["gallery"]>;
}) {
  return (
    <Section id="experiencia" tone="white" labelledBy="experiencia-title">
      <div
        className="lp2-sec-head"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        <h2 id="experiencia-title" className="lp2-h2">
          {content.title}
        </h2>
      </div>

      <div
        className="lp2-gallery"
        data-reveal
        style={{ "--reveal-i": 1 } as React.CSSProperties}
      >
        {content.photos.map((photo) => (
          <figure key={photo.src} className="lp2-gallery__item">
            {/* A galeria fica abaixo da dobra: `lazy` evita que ela dispute
                banda com o hero, que é o LCP da página. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
            />
            {photo.caption ? (
              <figcaption className="lp2-gallery__caption">
                {photo.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </Section>
  );
}
