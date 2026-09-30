"use client";
import type { Lp3Content } from "./types";

/** "Como funciona": passos numerados 01/02/03, na coluna ao lado do form. */
export default function Steps({ content }: { content: NonNullable<Lp3Content["form"]["steps"]> }) {
  return (
    <div className="lp3-steps">
      <h3 className="lp3-steps__title">{content.title}</h3>
      <ol className="lp3-steps__list">
        {content.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
