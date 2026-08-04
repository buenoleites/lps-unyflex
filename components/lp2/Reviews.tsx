"use client";
import Section from "./Section";
import type { EventLpContent } from "./types";

function Stars({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  const row = Array.from({ length: 5 }, (_, i) => (
    <svg key={i} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2l2.9 6.26 6.86.6-5.2 4.54 1.55 6.7L12 16.9 5.89 20.1l1.55-6.7-5.2-4.54 6.86-.6z"
        fill="currentColor"
      />
    </svg>
  ));

  return (
    <div
      className="lp2-reviews__stars"
      role="img"
      aria-label={`Nota ${value.toLocaleString("pt-BR")} de 5`}
    >
      <div className="lp2-reviews__stars-row" aria-hidden="true">
        {row}
      </div>
      <div
        className="lp2-reviews__stars-row lp2-reviews__stars-row--filled"
        aria-hidden="true"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        {row}
      </div>
    </div>
  );
}

/**
 * Avaliações (opcional): faixa com nota em display + estrelas + volume + fonte,
 * ao lado de 3 avaliações curtas em cards com borda.
 */
export default function Reviews({
  content,
}: {
  content: NonNullable<EventLpContent["reviews"]>;
}) {
  return (
    <Section id="avaliacoes" tone="dark">
      <div className="lp2-reviews">
        <div
          className="lp2-reviews__score"
          data-reveal
          style={{ "--reveal-i": 0 } as React.CSSProperties}
        >
          <p className="lp2-reviews__rating">{content.rating}</p>
          <Stars value={content.ratingValue} />
          <p className="lp2-reviews__volume">{content.volume}</p>
          <p className="lp2-reviews__source">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>{" "}
            {content.sourceLabel}
          </p>
        </div>

        <ul className="lp2-reviews__cards">
          {content.items.map((review, i) => (
            <li
              key={review.author}
              className="lp2-review"
              data-reveal
              style={{ "--reveal-i": i + 1 } as React.CSSProperties}
            >
              <p className="lp2-review__text">{review.text}</p>
              <p className="lp2-review__author">
                {review.author}
                {review.role ? ` · ${review.role}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
