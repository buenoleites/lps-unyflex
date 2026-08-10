# lp2 — as regras do template

Este é o design system das landing pages de captação da Unyflex. Ele não é uma
biblioteca genérica: é um **template de página de evento/curso** com uma ordem de
seções fixa e um vocabulário de CSS fechado. As regras abaixo estão codificadas no
`app/lp2.css` — segui-las é o que faz uma tela parecer uma LP da Unyflex.

## 1. Nada existe fora de `.lp2-root`

Todo o CSS é escopado sob `.lp2-root`. Um componente renderizado fora dessa raiz sai
sem estilo nenhum — não parcialmente estilizado, sem estilo. Use `<Lp2Root>`.

## 2. Botões são classes, não componente

**Não existe um componente `Button`.** Um CTA é um `<a>` ou `<button>` com classes:

```html
<a class="btn btn--primary btn--lg" href="#inscricao">Garanta sua vaga</a>
```

O que existe de verdade no CSS:

| Classe | Efeito |
|---|---|
| `.btn` | pílula sólida em `--accent`, texto `--accent-ink`, `min-height: 48px`, peso 600, sem borda e sem sombra |
| `.btn--sm` | `min-height: 44px`, padding menor |
| `.btn--lg` | `min-height: 56px`, padding maior |

`.btn--primary` e `.btn--md` **não têm regra nenhuma** — são legado que ficou no
markup. Escreva `.btn--primary` para acompanhar o código existente se quiser, mas
saiba que ele não faz nada.

**Só há uma variante visual.** Não existe botão outline, ghost, secundário ou
destrutivo. Quando uma tela pede uma segunda ação, ela vira link de texto ou
`.lp2-nav__link` — não invente uma variante de botão.

## 3. Tipografia: cinco degraus, e só

| Classe | Uso | Peso |
|---|---|---|
| `.lp2-display` | o `<h1>` do hero, um por página | 800 |
| `.lp2-h2` | título de seção | 800 |
| `.lp2-h3` | título de card, pergunta de FAQ, aba | 600 |
| `.lp2-small` | metadado, rótulo, atribuição — caixa alta, `letter-spacing: .08em` | 600 |
| `.lp2-eyebrow` | o `.lp2-small` em `--accent`, acima de um título | 600 |

Corpo de texto é o default do `.lp2-root` (não precisa de classe). Não há h4/h5 — se a
hierarquia pedir um quarto nível, a seção está complexa demais.

`.lp2-kw` (via o componente `<Kw>`) destaca **uma** palavra da headline em `--accent`.
Uma por título, no máximo.

## 4. O ritmo é claro/escuro por seção

Não há dark mode — `color-scheme: light` é forçado. O que alterna é o **tom de cada
seção**, via `<Section tone="…">`:

| tom | fundo | quando |
|---|---|---|
| `dark` | `--bg-dark` `#0a0e14` | hero, prova social, blocos de impacto |
| `light` | `--bg-light` `#f4f6f9` | miolo argumentativo |
| `white` | `#ffffff` | FAQ, galeria |
| `photo` | escuro + foto de fundo com scrim | citação, seção do formulário |

Cada tom redefine três variáveis contextuais que o conteúdo consome:
`--tone-muted` (texto secundário), `--tone-border`, `--tone-accent` (o accent com
contraste correto para aquele fundo — em superfície clara vira `--accent-deep`).
**Use `var(--tone-accent)`, nunca `var(--accent)` cru**, em qualquer coisa que possa
cair numa seção clara.

## 5. Elevação: borda OU sombra, nunca as duas

- **Bloco escuro** (`--bg-elevated`): `border: 1px solid var(--border-dark)`, sem sombra.
- **Bloco claro** (`--bg-white`): `box-shadow: var(--shadow-card)`, sem borda.

Só existe uma sombra no sistema (`0 1px 3px rgba(0,0,0,.06)`). Não há escala de
elevação. A única exceção sancionada é `.lp2-plan--highlighted`, que ganha
`border: 2px solid var(--accent)` para marcar o plano destacado.

## 5b. Contagens que as grades pressupõem

Algumas grades têm número de colunas fixo. Fugir dele não quebra, mas fica torto:

- **`ProofTicker` e `Schedule`** são `repeat(4, 1fr)` acima de 800px. Com 2 ou 3
  itens o conteúdo fica na metade esquerda — e no `Schedule` a linha conectora
  atravessa a seção inteira mesmo assim. **As duas seções pressupõem 4 itens.**
- **`Gallery`** usa `columns: 3`, e o balanceamento de colunas do browser monta
  4 fotos como 2+2+0 — a terceira coluna fica vazia e o bloco parece quebrado.
  **Use múltiplos de 3.**
- **`Speakers`** é 1 → 2 (≥600px) → 3 colunas (≥1000px); o contrato pede 4 a 8.
  Múltiplos de 3 alinham as fileiras.
- **`ProblemGrid`** dá largura dupla ao primeiro card de propósito (é o card
  síntese). Escreva o primeiro item pensando nisso.

## 6. Nenhum literal de cor

Toda cor vem de um token do bloco `.lp2-root` no topo do `app/lp2.css`. Um `#hex` no
meio do CSS é bug. A paleta de ação de cada rota é sobrescrita num único bloco de
tema (ver `app/comunicacao/theme.css`, que redefine os cinco tokens de accent sob
`.lpc-theme .lp2-root`).

## 7. Mobile-first, grade de 8px

Todos os media queries são `min-width`. O tráfego dessas LPs é majoritariamente
mobile — o layout de 390px é o layout principal, o desktop é o enriquecimento.
Espaçamentos são múltiplos de 8. O breakpoint que importa é **800px**: é onde
`--section-y`, `--gutter` e `--nav-h` mudam, onde as abas viram acordeão (e
vice-versa), onde a timeline vira horizontal e onde o CTA fixo some.

## 8. Movimento é contido

`[data-reveal]` sobe 8px em 400ms com stagger de 60ms — e só. Sem parallax, sem
contadores animados, sem carrossel automático. `prefers-reduced-motion` zera tudo.

## 9. Alvos de toque de 44px

Todo elemento clicável tem no mínimo 44px de altura. Vale para `.lp2-nav__link`,
`.lp2-faq__q`, `.lp2-footer__link` e os botões do formulário.

## 10. A página tem uma ordem

O `<EventLp>` monta as seções numa sequência fixa que segue a hierarquia de
argumentação: **hero → prova → para quem → problema → programação → (citação) →
(bancada) → (galeria) → planos → (avaliações) → (comparativo) → FAQ → formulário**.
As cinco entre parênteses são opcionais e só renderizam se a chave existir no
`content`. Reordenar não é uma opção do template — se a tela precisa de outra ordem,
ela não é uma LP deste template.
