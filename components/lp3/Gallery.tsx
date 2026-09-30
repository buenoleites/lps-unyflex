"use client";
import Section from "./Section";
import type { Lp3Content } from "./types";

/** Galeria de fotos reais da sala de aula (grade simples, sem lightbox). */
export default function Gallery({ content }: { content: NonNullable<Lp3Content["gallery"]> }) {
  return (
    <Section id="galeria" tone="dark" labelledBy="galeria-title">
      <div className="lp3-sec-head" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
        {content.eyebrow ? <span className="lp3-eyebrow">{content.eyebrow}</span> : null}
        <h2 id="galeria-title" className="lp3-h2">
          {content.title}
        </h2>
      </div>
      <ul className="lp3-gallery" data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties}>
        {content.photos.map((photo) => (
          <li key={photo.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
