"use client";
import Section from "./Section";
import MediaBackdrop from "./MediaBackdrop";
import type { EventLpContent } from "./types";

/**
 * UMA citação sobre foto em sangria, ocupando a viewport. `author` é opcional:
 * sem ele, a citação funciona como manifesto editorial, sem atribuição.
 */
export default function Quote({
  content,
}: {
  content: NonNullable<EventLpContent["quote"]>;
}) {
  return (
    <Section
      id="citacao"
      tone="photo"
      className="lp2-quote"
      media={<MediaBackdrop src={content.bgSrc} textSide="center" />}
    >
      <figure
        className="lp2-quote__figure"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        <span className="lp2-quote__mark" aria-hidden="true">
          “
        </span>
        <blockquote className="lp2-quote__text">{content.text}</blockquote>
        {content.support ? (
          <p className="lp2-quote__support">{content.support}</p>
        ) : null}
        {content.author ? (
          <figcaption className="lp2-quote__attribution">
            {content.author.name}
            {content.author.role ? ` · ${content.author.role}` : ""}
          </figcaption>
        ) : null}
      </figure>
    </Section>
  );
}
