"use client";
import Carousel from "./Carousel";
import { useReveal } from "@/lib/lp/useReveal";
import type { LpContent } from "./types";

export default function Abordagem({ content }: { content: LpContent["abordagem"] }) {
  const { band, slides, carouselAriaLabel } = content;
  const [ref, visible] = useReveal();

  return (
    <section
      id="abordagem"
      ref={ref as React.RefObject<HTMLElement>}
      className={`section abordagem${visible ? " is-visible" : ""}`}
    >
      <div className="container">
        <div className="abordagem-band" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
          <div
            className="abordagem-band__media"
            style={{ "--media-bg": `url(${band.bgSrc})` } as React.CSSProperties}
            aria-hidden="true"
          />
          <div className="abordagem-band__overlay" aria-hidden="true" />
          <div className="abordagem-band__content">
            <h2 className="abordagem-band__title">{band.title}</h2>
            <p className="abordagem-band__text">{band.text}</p>
          </div>
        </div>

        <div className="abordagem-carousel">
          <Carousel items={slides} ariaLabel={carouselAriaLabel} />
        </div>
      </div>
    </section>
  );
}
