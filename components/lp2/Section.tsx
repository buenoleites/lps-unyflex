"use client";
import { useReveal } from "@/lib/lp/useReveal";

interface SectionProps {
  id?: string;
  /** dark/light/white definem fundo e cor de texto; photo = dark + foto em sangria. */
  tone: "dark" | "light" | "white" | "photo";
  labelledBy?: string;
  className?: string;
  /** Conteúdo em sangria (MediaBackdrop) renderizado atrás do container. */
  media?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Shell de seção do template: aplica o tom, o container e o reveal por scroll.
 * Filhos que devem animar levam `data-reveal` + `style={{ "--reveal-i": n }}`.
 */
export default function Section({
  id,
  tone,
  labelledBy,
  className,
  media,
  children,
}: SectionProps) {
  // Threshold baixo: seções de viewport inteira (citação, formulário) nunca
  // atingiriam 18% visíveis em telas baixas.
  const [ref, visible] = useReveal({ threshold: 0.1 });

  const toneClass = tone === "photo" ? "lp2-section--photo" : `lp2-section--${tone}`;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      aria-labelledby={labelledBy}
      className={`lp2-section ${toneClass}${className ? ` ${className}` : ""}${
        visible ? " is-visible" : ""
      }`}
    >
      {media}
      <div className="lp2-container">{children}</div>
    </section>
  );
}
