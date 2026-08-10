## Como construir com o lp2

Este é o template das landing pages de captação da Unyflex — não uma biblioteca
genérica. É uma página de evento/curso com ordem de seções fixa e um vocabulário
de CSS fechado. Leia `guidelines/index.md` antes de compor qualquer layout.

### Envolva tudo em `Lp2Root`

Todo o CSS é escopado sob `.lp2-root`. Fora dele, um componente renderiza **sem
estilo nenhum** — não parcialmente estilizado, sem estilo.

```jsx
const { Lp2Root, Hero, Plans, Faq } = window.Lp2;

<Lp2Root theme="comunicacao">
  <Hero content={{ eyebrow: "…", title: <>…</>, subtitle: "…",
                   audiences: "…", cta: { label: "…" }, meta: "…" }} />
</Lp2Root>
```

`theme="comunicacao"` aplica a paleta azul (`--accent: #4faef7`) desta LP. Omita
para o accent padrão (`#00aeef`, a vertical de Licitações). `Lp2Root` também
aceita `accent` para sobrescrever só `--accent` inline.

### Uma prop `content` por componente

Todos os componentes de seção recebem exatamente uma prop `content`, e **nenhum
tem copy própria** — todo texto visível vem por prop. A forma de cada `content`
está no `<Name>.d.ts`. `EventLp` recebe o objeto inteiro e monta a página toda.

### Não existe componente `Button`

Um CTA é um `<a>` com classes:

```jsx
<a className="btn btn--primary btn--lg" href="#inscricao">Garanta sua vaga</a>
```

`.btn` é a pílula sólida em accent (48px). `.btn--sm` = 44px, `.btn--lg` = 56px.
**`.btn--primary` e `.btn--md` não têm regra nenhuma** — são legado que ficou no
markup; escreva-os para acompanhar o código existente, mas eles não fazem nada.
Só há **uma** variante visual: não existe botão outline, ghost ou secundário.

### Tipografia: cinco classes, e só

`.lp2-display` (h1 do hero, um por página) · `.lp2-h2` (título de seção) ·
`.lp2-h3` (card, pergunta de FAQ, aba) · `.lp2-small` (metadado, caixa alta) ·
`.lp2-eyebrow` (o small em accent, acima de um título). Corpo de texto não
precisa de classe. **Não há h4/h5.** Use `<Kw>` para destacar **uma** palavra da
headline em accent.

### Layout: `Section` e `lp2-container`

Sua própria diagramação usa `<Section tone="dark|light|white|photo">`, que já traz
o `.lp2-container` (max 1200px) e o ritmo vertical. Cada tom redefine
`--tone-muted`, `--tone-border` e `--tone-accent`. **Use `var(--tone-accent)`,
nunca `var(--accent)` cru** — em superfície clara o accent vira `--accent-deep`
para passar no contraste.

Elevação: bloco escuro leva `border: 1px solid var(--border-dark)` e **nenhuma**
sombra; bloco claro leva `box-shadow: var(--shadow-card)` e **nenhuma** borda. Só
existe uma sombra no sistema.

### Cor vem de token, sempre

Nenhum literal de cor. Os tokens estão definidos em `.lp2-root` no
`_ds_bundle.css` (alcançável pelo `styles.css`): `--bg-dark`, `--bg-elevated`,
`--bg-light`, `--bg-white`, `--accent`, `--accent-deep`, `--accent-ink`,
`--accent-ring`, `--accent-tint`, `--text-on-dark`, `--text-on-light`,
`--border-dark`, `--border-light`, `--radius-card`, `--radius-input`,
`--radius-pill`, `--container`, `--gutter`, `--section-y`.

### Mobile-first

Todos os media queries são `min-width`; o breakpoint que importa é **800px**. O
tráfego destas LPs é majoritariamente mobile — 390px é o layout principal, o
desktop é o enriquecimento. Espaçamentos são múltiplos de 8. Todo elemento
clicável tem no mínimo 44px de altura.

### Onde está a verdade

`styles.css` e o que ele importa (`_ds_bundle.css`) são a fonte real dos tokens e
das classes — leia antes de estilizar. Por componente:
`components/<grupo>/<Name>/<Name>.prompt.md` (uso) e `<Name>.d.ts` (contrato).
