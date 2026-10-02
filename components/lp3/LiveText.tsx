import { Fragment } from "react";

/** Troca cada "●" do texto pelo ponto vermelho de "ao vivo" (span circular,
 *  decorativo). Não usa emoji: ele muda de aparência entre aparelhos. A palavra
 *  antes, o ponto e a palavra depois ficam num trecho sem quebra de linha, para o
 *  ponto nunca ficar sozinho nem separado de "ao vivo". */
export default function LiveText({ text }: { text: string }) {
  const parts = text.split(/(\S+\s+●\s?\S+(?:\s+\S+)?)/);
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
        const [before, after] = part.split(/\s*●\s?/);
        return (
          <span key={i} className="lp3-live">
            {before}{" "}
            <span className="lp3-live-dot" aria-hidden="true" />
            {" "}
            {after}
          </span>
        );
      })}
    </>
  );
}
