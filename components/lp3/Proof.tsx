"use client";
import type { Lp3Content } from "./types";

/** Faixa de prova social: só números confirmados pelo cliente (content).
 *  Lista inline separada por ponto âmbar; herda a cor do tom da seção. */
export default function Proof({
  content,
  className,
}: {
  content: NonNullable<Lp3Content["proof"]>;
  className?: string;
}) {
  return (
    <ul className={`lp3-proof${className ? ` ${className}` : ""}`} aria-label="Por que confiar na Unyflex">
      {content.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
