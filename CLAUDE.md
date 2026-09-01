@AGENTS.md

# lps-unyflex

Repositório das landing pages de captação de leads da Unyflex. Cada LP é uma rota do App
Router; todas compartilham um design system em CSS e um único fluxo de lead.

**Leia o `AGENTS.md` acima antes de escrever código: este é o Next.js 16, e a doc oficial
está em `node_modules/next/dist/docs/`.**

## Comandos

```bash
npm run dev     # servidor de desenvolvimento
npm run build   # build de produção; roda o typecheck e gera out/
npm run lint    # eslint
```

Não há testes. O typecheck só roda dentro do `build`.

## A restrição que define tudo: site estático

`next.config.ts` tem **`output: 'export'`**. O site é 100% estático.

Consequência: **não existem API routes nem server actions.** Nada de `app/api/`. Todo
envio de lead e todo tracking é **client-side**. Se você sentir vontade de criar uma rota
de servidor, ela não vai existir no deploy — repense.

Deploy na Vercel, servindo o diretório `out/` (`vercel.json`).

## Estrutura

```
app/
  layout.tsx           # root: fonte Montserrat, skip-link, metadata base
  lp.css               # ⭐ o design system das LPs (CSS puro, escopo .lp-root)
  globals.css          # Tailwind/shadcn — praticamente morto, não é usado nas LPs
  <slug>/              # uma pasta por LP
components/lp/         # componentes das LPs
lib/lp/                # lead, meta (pixel), scroll, useReveal
public/<slug>/         # imagens da LP (namespaced por LP)
```

## Como adicionar uma LP nova

Existem **duas receitas**. Escolha pelo tamanho da página.

### A) LP completa (o padrão de `/licitacao` e `/reforma`)

Para uma LP com todas as seções. Três arquivos, zero CSS novo:

1. `app/<slug>/content.tsx` — exporta um objeto tipado por `LpContent`
   (`components/lp/types.ts`). **Toda a copy e todos os paths de imagem vivem aqui.**
2. `app/<slug>/page.tsx` — 5 linhas: `<LpPage content={<slug>Content} track />`.
3. `app/<slug>/layout.tsx` — `import "../lp.css"` (**sem isso a LP fica sem estilo**),
   `export const metadata` e o `<Script id="meta-pixel">`.

`LpContent` exige **todas as 11 seções** (navbar, hero, paraQuem, oCurso, abordagem,
modulos, presencial, resultados, faq, ctaFinal, footer, stickyCta). Não dá para usar
`LpPage` pela metade.

### B) LP enxuta (o padrão de `/licitaexpo`)

Quando a página é só hero + formulário, **não use `LpPage`** — ele obrigaria a inventar
painéis, módulos e FAQ. Monte a página reusando os primitivos:

- as classes de `app/lp.css` (`.hero__*`, `.cta-final__*`, `.btn btn--primary`, `.eyebrow`);
- `<LeadForm />` (`components/lp/LeadForm.tsx`) — o formulário completo;
- `<Footer />`, `handleAnchorClick` (`lib/lp/scroll.ts`), `trackEvent` (`lib/lp/meta.ts`).

Veja `app/licitaexpo/page.tsx` como referência.

## Componentes

Em `components/lp/`. Convenção: **cada componente recebe uma única prop `content`**,
fatiada de `LpContent`. As exceções são `LeadForm` (props próprias) e `Carousel`
(genérico).

- `LpPage` — orquestrador da LP completa. `track` dispara `PageView`.
- `Hero`, `ParaQuem`, `OCurso`, `Abordagem`, `Modulos`, `Presencial`, `Resultados`,
  `Faq`, `CtaFinal`, `Navbar`, `Footer`, `StickyCtaMobile`, `Carousel`.
- **`LeadForm`** — o formulário, usado pela `CtaFinal` e pelas LPs enxutas.

Não existe componente `<Button>`: use as classes `btn btn--primary btn--sm|md|lg`.

## O formulário e o fluxo do lead

Tudo em `lib/lp/lead.ts`.

- **Campos:** nome, email, whatsapp (máscara `00 00000-0000`, exige 11 dígitos), cargo
  (único opcional), órgão, servidorPublico (toggle Sim/Não). Opcionais por LP, via props do
  `LeadForm` (no lp2, vêm de `content.form`): `modalidade` (toggle → `Modalidade_Preferida`)
  e **`vinculo`** (select "Seu vínculo" → `vinculo`; quando presente **substitui** o toggle e
  `Orgao_Publico` sai do payload — o n8n fechava lead qualificado como "Perdido" por causa do
  "Não"). Hoje só `/licitacao` e `/licitacao-out26` usam `vinculo`.
- **Destino:** POST direto do browser para o webhook n8n
  (`https://n8n.unyflex.com.br/webhook/lp-leads-unyflex`). Hardcoded, sem env var.
- **Payload:** campos + geo (via `ipwho.is`) + dispositivo + `Id_do_formulario` + tracking.
  O tracking (`lib/lp/utm.ts`) captura `utm_source/medium/campaign/content/term/id`, `fbclid`
  e `gclid` da query **na carga da página** (`captureTracking()` em `EventLp`, `LpPage` e
  `/licitaexpo`) e persiste em `sessionStorage`; no submit lê a query atual com fallback no
  storage. Vão no payload com esses nomes minúsculos **e** nas chaves legadas `UTM_*` (o n8n
  mapeia as legadas). Ainda assim, **não quebre a query string** com redirects — o
  `app/page.tsx` já perde as UTMs de quem cai na raiz.
- **`produto` / `pagina_origem`:** opcionais (`content.form.produto` / `paginaOrigem`), só
  entram quando definidos. `produto` é a chave do mapa de cursos do n8n (`licitacao`,
  `licitacao-out26`) — **um slug novo precisa ser cadastrado no n8n antes de a LP receber
  tráfego**, senão o lead entra como "Curso não identificado".
- **`formId`:** dê um novo a cada LP (`lp-licitacao-ia`, `lp-licitacao-out26`,
  `lp-reforma-tributaria`, `lp-licitaexpo`). É como o n8n distingue a origem do lead.
- **Pós-submit:** `redirectToThankYou()` — o redirect está no `finally`, ou seja,
  **acontece mesmo se o webhook falhar** (o lead se perde, mas o usuário não trava).

## Meta Pixel

Pixel ID `1168799437651546`. Não há GA/GTM.

- O snippet `fbq` é inline via `next/script` em **cada layout de rota**.
- `PageView` sai do React (`trackEvent`, em `LpPage` ou na página).
- **O evento `Lead` dispara no carregamento da página de obrigado**, não no submit. É
  assim de propósito — não tente mover para o `handleSubmit`.
- ⚠️ **`next/script` deduplica por `id`.** Se a sua página de obrigado estiver *aninhada*
  dentro do layout de uma LP que já renderiza `<Script id="meta-pixel">`, um segundo
  script com o mesmo id **é descartado silenciosamente** e o `Lead` nunca dispara. Use um
  id diferente (ver `app/licitaexpo/obrigado/layout.tsx`).
- A CAPI (`trackCapi` em `lib/lp/meta.ts`) está **desligada**: depende de
  `NEXT_PUBLIC_META_ACCESS_TOKEN`, e token em `NEXT_PUBLIC_` vaza no bundle. Se for
  reativar, faça server-side ou pelo n8n.

## Design system (`app/lp.css`)

CSS puro, ~1.600 linhas, **todo escopado sob `.lp-root`** para não conflitar com o
Tailwind. É importado nos layouts de rota, não no root layout. Toda página de LP precisa
estar dentro de `<div className="lp-root">`.

Tokens (no topo do arquivo): `--brand: #00aeef` (ciano), CTA em gradiente
`#00bff3 → #009fd4`, `--dark-1: #0c0e12`, fonte Montserrat, `--container: 960px`,
`--radius-pill: 999px`.

- **Não há dark/light mode.** `color-scheme: light` é forçado. O ritmo é claro/escuro
  **por seção**: hero e CTA final são ilhas escuras, o miolo é branco, o footer é bege.
- O CSS é **desktop-first** (breakpoints `max-width` em 800/640/520px), embora o tráfego
  seja mobile. Teste sempre no celular.
- `.hero__media` e `.cta-final__media` têm um **gradiente escuro de fallback**: se você
  não passar imagem de fundo, a seção continua bonita.

## Convenções

- **`<img>` nativo, não `next/image`** (`images.unoptimized`, site estático). Precisa do
  `// eslint-disable-next-line @next/next/no-img-element`.
- **CSS puro nas LPs, não Tailwind.** O `globals.css` (Tailwind/shadcn) é resíduo do
  scaffold; `components/ui/` não existe mais.
- Copy e imagens ficam em `content.tsx`, nunca no componente.
- Assets namespaced por LP: `public/<slug>/...`. Use nomes **ASCII** (as pastas com
  acento em `public/imagens/` são um legado frágil).

## O que não fazer

- Não crie API routes ou server actions — o build é estático e elas não existem no deploy.
- Não use `LpPage` para uma página que não tem as 11 seções. Não invente seção só para
  preencher o contrato.
- Não repita o `id` de um `<Script>` entre um layout e um layout aninhado.
- Não mande PII (nome, e-mail, WhatsApp) na query string da página de obrigado: o Pixel
  dispara lá e manda a URL para o Meta. Use `redirectToThankYou(form, { withPii: false })`.
  As LPs antigas ainda fazem isso — é dívida, não exemplo.
- Não coloque token em variável `NEXT_PUBLIC_`.

## Dívidas conhecidas (não são exemplo a seguir)

- `app/layout.tsx` tem metadata, `canonical` e um JSON-LD `EducationEvent` **hardcoded da
  LP de licitação** (com data de 2025, já passada) que **toda** rota herda. Uma LP nova
  precisa sobrescrever o `canonical`.
- O `og:image` do root aponta para `/og-image.png`, que **não existe** em `public/`. Use
  um `opengraph-image.tsx` na pasta da rota (metadata baseada em arquivo tem prioridade).
- `app/page.tsx` redireciona para `/licitacao` **descartando a query string** — tráfego
  pago que cair na raiz perde as UTMs e o `fbclid`.
