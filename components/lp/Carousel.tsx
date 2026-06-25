"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReveal } from "@/lib/lp/useReveal";

const getPerView = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 520px)").matches
    ? 1
    : 2;

export interface CarouselItem {
  title: string;
  desc?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  renderItem?: (item: CarouselItem, i: number) => React.ReactNode;
  autoplayMs?: number;
  ariaLabel?: string;
}

export default function Carousel({
  items,
  renderItem,
  autoplayMs = 4200,
  ariaLabel = "Carrossel",
}: CarouselProps) {
  const [revealRef, visible] = useReveal({ threshold: 0.2 });
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(getPerView);
  const [resizeTick, setResizeTick] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLElement>(null);

  const maxIndex = Math.max(0, items.length - perView);

  const move = useCallback(
    (dir: number) => {
      setCurrent((c) => {
        let next = c + dir;
        if (next > maxIndex) next = 0;
        if (next < 0) next = maxIndex;
        return next;
      });
    },
    [maxIndex]
  );

  useEffect(() => {
    const track = trackRef.current;
    const card = firstCardRef.current;
    if (!track || !card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    track.style.transform = `translate3d(-${current * (cardWidth + gap)}px, 0, 0)`;
  }, [current, perView, resizeTick]);

  useEffect(() => {
    let timer: number;
    const onResize = () => {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        const pv = getPerView();
        setPerView(pv);
        setCurrent((c) => Math.min(c, Math.max(0, items.length - pv)));
        setResizeTick((x) => x + 1);
      }, 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timer);
    };
  }, [items.length]);

  useEffect(() => {
    if (items.length <= perView) return;
    const id = window.setInterval(() => move(1), autoplayMs);
    return () => window.clearInterval(id);
  }, [move, autoplayMs, current, items.length, perView]);

  return (
    <div
      ref={revealRef as React.RefObject<HTMLDivElement>}
      className={`carousel${visible ? " is-inview" : ""}`}
      aria-roledescription="carrossel"
      aria-label={ariaLabel}
    >
      <button
        className="carousel__arrow carousel__arrow--prev"
        type="button"
        aria-label="Card anterior"
        onClick={() => move(-1)}
      >
        ‹
      </button>

      <div className="carousel__viewport">
        <div className="carousel__track" ref={trackRef}>
          {items.map((item, i) => (
            <article
              className="carousel__card"
              key={i}
              ref={i === 0 ? (firstCardRef as React.RefObject<HTMLElement>) : null}
            >
              {renderItem ? (
                renderItem(item, i)
              ) : (
                <>
                  <p className="carousel__title">{item.title}</p>
                  {item.desc ? (
                    <p className="carousel__desc">{item.desc}</p>
                  ) : null}
                </>
              )}
            </article>
          ))}
        </div>
      </div>

      <button
        className="carousel__arrow carousel__arrow--next"
        type="button"
        aria-label="Próximo card"
        onClick={() => move(1)}
      >
        ›
      </button>

      {maxIndex > 0 ? (
        <div className="carousel__dots" role="tablist" aria-label="Paginação do carrossel">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel__dot${current === i ? " is-active" : ""}`}
              aria-label={`Ir para o card ${i + 1}`}
              aria-selected={current === i}
              role="tab"
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
