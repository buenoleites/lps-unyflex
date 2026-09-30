"use client";
import { useReveal } from "@/lib/lp/useReveal";

type Tone = "dark" | "elevated" | "paper" | "accent";

/** Casca de seção: tom (define os tokens --tone-*), container e o reveal por
 *  scroll (adiciona .is-visible; os filhos com data-reveal animam). */
export default function Section({
  id,
  tone,
  labelledBy,
  className,
  children,
}: {
  id: string;
  tone: Tone;
  labelledBy: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [ref, visible] = useReveal({ threshold: 0.1 });
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby={labelledBy}
      className={`lp3-section lp3-section--${tone}${visible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      <div className="lp3-container">{children}</div>
    </section>
  );
}
