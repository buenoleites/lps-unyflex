import type { Lp3Content } from "./types";

/** Faixa de aviso de uma linha, logo abaixo do hero. Só texto (content). */
export default function Banner({
  content,
}: {
  content: NonNullable<Lp3Content["banner"]>;
}) {
  return (
    <div className="lp3-banner" role="note">
      <div className="lp3-container">
        <p className="lp3-banner__text">{content.text}</p>
      </div>
    </div>
  );
}
