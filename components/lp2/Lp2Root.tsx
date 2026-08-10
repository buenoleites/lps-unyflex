/**
 * Raiz do template lp2. Todo o `app/lp2.css` é escopado sob `.lp2-root`, então
 * nenhum componente do template fica estilizado fora deste wrapper.
 *
 * `theme` aplica a div de tema da rota por fora (o seletor `.lpc-theme
 * .lp2-root` do `app/comunicacao/theme.css` vence os tokens default por
 * especificidade, independente da ordem dos imports de CSS). `accent`
 * sobrescreve só `--accent` inline — é o caminho antigo, mantido porque o
 * `content.theme.accent` do `EventLpContent` continua existindo; prefira
 * `theme` quando a rota tiver um bloco de cor completo.
 */
export default function Lp2Root({
  theme,
  accent,
  children,
}: {
  theme?: "comunicacao";
  accent?: string;
  children: React.ReactNode;
}) {
  const root = (
    <div
      className="lp2-root"
      style={accent ? ({ "--accent": accent } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );

  return theme === "comunicacao" ? <div className="lpc-theme">{root}</div> : root;
}
