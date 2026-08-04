/**
 * A palavra-chave em accent de uma headline. Regra do design system: no máximo
 * UMA ocorrência por headline — o accent é reservado para ação e para este realce.
 */
export default function Kw({ children }: { children: React.ReactNode }) {
  return <span className="lp2-kw">{children}</span>;
}
