interface MediaBackdropProps {
  src: string;
  /** Lado onde o texto senta: o scrim fica forte (0.85) ali e fraco (0.25) no oposto. */
  textSide: "left" | "right" | "center";
}

/**
 * Foto real de evento em sangria + gradiente de legibilidade, atrás do conteúdo
 * de uma seção `tone="photo"`. Sem imagem a seção continua com o fundo escuro.
 */
export default function MediaBackdrop({ src, textSide }: MediaBackdropProps) {
  return (
    <>
      <div
        className="lp2-backdrop"
        aria-hidden="true"
        style={{ "--media-bg": `url(${src})` } as React.CSSProperties}
      />
      <div
        className={`lp2-backdrop__scrim lp2-backdrop__scrim--${textSide}`}
        aria-hidden="true"
      />
    </>
  );
}
