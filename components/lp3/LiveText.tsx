import { Fragment } from "react";

/** Troca cada "●" do texto pelo ponto vermelho de "ao vivo" (span circular,
 *  decorativo). Não usa emoji: ele muda de aparência entre aparelhos. O espaço
 *  depois do ponto vira não separável para o ponto nunca ficar sozinho no fim
 *  da linha. */
export default function LiveText({ text }: { text: string }) {
  const parts = text.split(/●\s?/);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 ? (
            <>
              <span className="lp3-live-dot" aria-hidden="true" />
              {" "}
            </>
          ) : null}
          {part}
        </Fragment>
      ))}
    </>
  );
}
