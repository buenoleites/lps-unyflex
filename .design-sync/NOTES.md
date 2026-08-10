# design-sync — notas deste repo

Contexto: este repo é um app Next.js com `output: 'export'`, não uma biblioteca
publicada. O design system sincronizado é **só o lp2** (`components/lp2/` +
`app/lp2.css` + o tema da `/comunicacao`). O sistema antigo (`components/lp/`,
`app/lp.css`) fica de fora — exceto o `LeadForm`, que o `FormSection` do lp2 usa.

Projeto: `Unyflex — Landing Pages` — https://claude.ai/design/p/f4cfda69-3909-4974-ac6e-83ebb8121f36

## Por que existe um barrel (`ds-entry.ts` na raiz)

O conversor sintetizaria a entry como `export * from "<arquivo>"` — e isso **não
reexporta defaults**. Os 21 componentes do lp2 são todos `export default`, então o
bundle sairia com zero exports e todo card falharia. O barrel resolve.

Ele também é o alvo do `package.json.types`: o conversor lê declarações de
`dirname(pkg.types)`. Com o barrel na raiz e `rootDir: ".."` no
`tsconfig.dts.json`, essa raiz (`.design-sync/dts`) cobre a árvore inteira.
**Componente novo em `components/lp2/` precisa ser adicionado ao `ds-entry.ts`.**

## Por que `tsc --emitDeclarationOnly` roda antes do build

`lib/dts.mjs` só lê `**/*.d.ts`, nunca `.tsx`. Sem as declarações emitidas, os 21
componentes saem com `props: { [k: string]: unknown }` e o agente de design não
sabe o que passar em `content`. O `buildCmd` do config cuida disso.

## `cssEntry`, `tokensPkg` e `tokensGlob` ficam fora de propósito

`copyTokens` (`lib/css.mjs:54`) retorna vazio sem `tokensPkg`, ou seja
`tokensGlob` sozinho é inerte, e não existe pacote de tokens aqui. O CSS entra
pelos três `import` no topo do `ds-entry.ts` e o esbuild emite o `_ds_bundle.css`.
O diretório `tokens/` do bundle fica vazio — o README extrai as custom properties
direto do `_ds_bundle.css`, que é o comportamento certo para um stylesheet único.

## A paleta da /comunicacao é ordem-independente

`app/comunicacao/theme.css` usa o seletor `.lpc-theme .lp2-root` (0,2,0) contra
`.lp2-root` (0,1,0). Ganha por especificidade em qualquer ordem de `@import`. O
que a paleta exige de verdade é a classe `.lpc-theme` num ancestral — trabalho do
`cfg.provider`, que passa `theme: "comunicacao"` para o `Lp2Root`.

Conferência pós-build: `_ds_bundle.css` deve ter `4faef7` ×1, `rgba(79, 174, 247`
×2, `1769ab` ×1. (Só há **um** hex de accent no theme.css; os demais tokens são
rgba ou hex diferentes.)

## A fonte é a armadilha silenciosa

`app/lp2.css` usa `var(--font-montserrat)` **sem fallback**, e essa variável vem
do `next/font` — não existe fora do Next. Se ela não for definida, a declaração
`--font` inteira fica inválida e todo card renderiza na fonte padrão do browser.

E o validador **não pega**: ele substitui variável desconhecida por string vazia
(`package-validate.mjs:295`), então `--font` "resolve" para `, system-ui, …` e
nenhum `[FONT_MISSING]` dispara. `.design-sync/ds-tokens.css` existe só para
amarrar `--font-montserrat: "Montserrat"`; os `@font-face` estão em
`.design-sync/fonts/montserrat.css` (via `cfg.extraFonts`).

## `dtsPropsFor` só para Plans e Footer

O extrator colapsa para `unknown` qualquer tipo cujo texto passe de 240 chars
(`lib/dts.mjs:265`). Só esses dois estouram; os outros 19 extraem sozinhos. Os
bodies em `config.json` são transcrição literal de `components/lp2/types.ts` —
**se aquele arquivo mudar, atualize o config.**

## Grupos: o override por frontmatter só age sobre `general`

`package-build.mjs:777` só aplica o `category:` do doc quando o grupo derivado é
`general`/`misc`/vazio. Todos os 21 derivam `general` (ficam na raiz do `srcDir`),
então os stubs em `.design-sync/docs/` funcionam.

**Exceto se você pinar um `componentSrcMap` para fora do `srcDir`**: era o caso do
`LeadForm` pinado em `components/lp/LeadForm.tsx`, que derivava o grupo `lp` e
ignorava o stub. Sem o pin, ele entra pelo barrel, deriva `general` e o stub
coloca em `conversion`. **Não repine o LeadForm.**

## O `<style>` de preview vai no `<head>`, nunca no JSX

O render check lê `textContent` da raiz de cada célula para decidir se o card tem
conteúdo (`package-validate.mjs:534`). Um `<style>` dentro do preview faria
qualquer card parecer preenchido — inclusive um que não renderizou nada, cegando o
gate nos 21 componentes. Por isso `preview-lib/Frame.tsx` injeta via
`document.head` (`injectCss`).

## Viewport: 900x700 é curto demais para este DS

O default do capture é 900x700. A maioria dos componentes do lp2 é seção de página
inteira e corta nesse tamanho; e a 900px de largura o grid de planos abre só 2
colunas (as 4 exigem ≥1100). O `cfg.overrides` fixa viewport por componente,
majoritariamente 1280 de largura com `cardMode: "column"`.

**`viewport` entra na chave da nota; `cardMode` não.** Ou seja: acerte o viewport
ANTES de avaliar um componente, senão mexer nele depois zera a nota.

## Aparência cosmética conhecida

`guidelinesGlob` preserva o caminho package-relative, então o arquivo sobe como
`guidelines/.design-sync/guidelines/lp2.md`. O link do `guidelines/index.md`
resolve certo; é só feio. Para arrumar seria preciso mover a fonte para
`guidelines/lp2.md` na raiz do repo, o que espalharia insumos do sync para fora
de `.design-sync/`. Ficou como está de propósito.

## O card tem 24px de padding — some 48px ao viewport pretendido

O `?story=` mantém `body { padding: 24px }` de propósito (o enquadramento
graduado precisa ficar byte-idêntico). Consequência: **qualquer seção do lp2
dimensionada em unidade de viewport fica 48px mais alta que o viewport de
captura**, por construção — `.lp2-quote` é `min-height: 100vh` e `.lp2-hero` é
`min-height: 90svh` acima de 800px. Ao escolher um viewport de override, some
48px à altura pretendida.

Onde isso mordeu: o `StickyCta` é mobile-only e a âncora de preço é
`white-space: nowrap`; com 390px menos 48px de padding sobram 342px e o botão
sai pela direita. **Não é bug do componente** — a 390px reais cabe. O preview
contorna injetando `body { padding: 0 !important }` via `injectCss`.

A rota "sangria por margem negativa" (`margin: -24px`) **não funciona**:
`.lp2-root` tem `overflow-x: clip`, que corta o que vaza. Não tente de novo.

## `cardMode: "single"` sem `primaryStory` escolhe por ordem alfabética

O esbuild ordena o `__export({...})` alfabeticamente, então a célula que o card
mostra por padrão é a primeira **por nome**, não a primeira declarada. Por isso
`Quote` e `StickyCta` têm `primaryStory` explícito no config. `primaryStory` e
`cardMode` **não** entram na chave da nota — dá para mexer à vontade.

## `EventLp` não cabe num card, e está tudo bem

Navbar (64px) + hero da /comunicacao (912px) já passam de qualquer viewport útil.
O teto do harness é 2000px (`package-capture.mjs:145`), que é o que o override
usa: o card mostra navbar + hero inteiro + ticker de prova. Escalar com
`transform: scale()` **não** resolve — o layout do lp2 é dirigido por media
queries de viewport, então reduzir a escala só encolhe a pintura.

## A sheet composta corta células altas; leia os raws

`review/<grupo>__<Nome>.png` tem teto de altura por célula. Em componentes altos
(ProblemGrid, Speakers, EventLp, Plans) avalie por
`review/raw/<grupo>__<Nome>__<Celula>.png`, que sai completo.

## Modo mobile no card só funciona onde a seção é baixa

Dá para reaplicar as regras de <800px com especificidade maior (`injectCss`) numa
coluna estreita, mas só se a seção couber na altura configurada. Funcionou no
`ProofTicker` (padding de 40px); **não** funcionou no `Schedule`, cuja timeline
vertical precisa de ~1150px contra os 800 do override — a célula foi removida.

Detalhe: numa célula estreita as sobras laterais mostram o fundo da raiz
(escuro). Se a seção também for escura, parece uma seção com padding gigante, não
um telefone — por isso a célula mobile do `ProofTicker` põe fundo branco no
`Frame`.

## Limitações do próprio DS que apareceram na autoria

Não são bugs do sync; são coisas que um autor do lp2 talvez quisesse rever:

- **`Faq` não tem estado aberto por prop.** Guarda o item aberto em
  `useState<number | null>(null)` e não aceita índice inicial. Todo card mostra o
  acordeão fechado — ou seja, a resposta (que aceita `ReactNode`) nunca aparece.
  Não foi forçado por CSS. Um `defaultOpenIndex` resolveria, e seria útil na LP
  também.
- **`ProofTicker` e `Schedule` são `repeat(4, 1fr)` fixos** acima de 800px: as
  duas seções pressupõem 4 itens. Com 2 ou 3, o conteúdo fica na metade esquerda
  e a conectora da timeline atravessa a seção inteira mesmo assim.
- **`Gallery` usa `columns: 3`** e o balanceamento do Chrome monta 4 fotos como
  2+2+0, deixando a terceira coluna vazia. Use múltiplos de 3. (Virou linha em
  `guidelines/lp2.md`.)
- **`Gallery` usa `photo.src` como key do React**, então repetir o mesmo asset
  duplica a key. No preview foi resolvido com fragmento (`${asset}#coffee`) —
  o Chrome decodifica data-URI com `#` normalmente.
- **`Audience`**: o painel é `grid-column: 1 / -1`, o que estica as colunas
  `auto` das abas. Com 2 grupos o sublinhado accent fica bem mais largo que o
  rótulo.
- **`MediaBackdrop`** sozinho tem altura zero (os dois filhos são
  `position: absolute; inset: 0`). Todo preview dele precisa de um palco com
  altura — e `padding: 0` inline, porque `.lp2-section--photo` traz 128px.

## Known render warns

**Nenhuma.** O validate final saiu limpo: 21/21 renderizam, zero floor cards,
zero `[GRID_OVERFLOW]`, zero `[RENDER_THIN]`, zero `[FONT_MISSING]`, zero
`[TOKENS_MISSING]`. Qualquer warn num run futuro é novidade — investigue.

## Re-sync risks

- **As fontes vieram da rede.** Os 10 woff2 em `.design-sync/fonts/` foram baixados
  do `fonts.googleapis.com` e estão commitados. Um re-sync não rebaixa nada; se
  precisar trocar peso/subset, o script está no histórico desta sessão — pegue os
  blocos `latin`/`latin-ext` do CSS do Google e reescreva o `montserrat.css`.
- **`.design-sync/dts/` é gerado e gitignorado.** Num clone novo, rode o `buildCmd`
  antes do conversor, senão as props degradam silenciosamente para `unknown` sem
  nenhum erro.
- **Os assets em `.design-sync/assets/` são derivados** de `public/comunicacao/`
  (reduzidos para 1000px/q42 com `sips`). Se as fotos originais da LP mudarem,
  regere — não há automação.
- **`dtsPropsFor` duplica `components/lp2/types.ts`** para Plans e Footer. É a
  única cópia de contrato no config e apodrece em silêncio.
- **O JSX depende do autodiscovery do `tsconfig.json` pelo esbuild** — `lib/bundle.mjs`
  não passa `jsx` explicitamente. Funcionou aqui; se um dia todo card falhar com
  `React is not defined`, é isso.
