# PRD — LicitaExpo (landing page de lista de espera)

**Rota:** `/licitaexpo` · **Status:** ativa · **Escrito em:** 14/07/2026 · **Atualizado:**
15/07/2026 (hero passa a citar o Legislativo; município recontado para 98)

Este documento existe para travar as decisões estratégicas que são fáceis de perder
daqui a dois meses. Se alguém for mexer nesta LP, lê isto antes.

---

## 1. Problema Identificado

O seminário LicitaExpo acontece de **24 a 27 de novembro de 2026** e as **inscrições só
abrem em setembro**. A data está fechada (programática oficial), mas **não há preço
definido, lote aberto nem palestrante confirmado** — ou seja, **não há checkout, não há o
que vender hoje**.

Mesmo assim, o público precisa ser aquecido antes de setembro: se a campanha só começar
quando as inscrições abrirem, chega-se à venda com uma audiência fria e cara.

O erro óbvio — e o que já nos custou uma campanha — é publicar uma LP que diz "garanta
sua vaga" sem ter vaga para vender. A promessa quebra no clique: o sujeito clica
esperando comprar, não encontra checkout, e a confiança vai junto.

## 2. Solução

Uma landing page de **captura de lista de espera**. A página faz uma única promessa, e é
uma promessa que conseguimos cumprir: **avisar quando as inscrições abrirem**.

**Por que lista de espera e não venda — a decisão que não pode ser desfeita:**

- **Não temos o que vender.** Sem data, preço ou grade, um botão de compra é uma mentira
  com prazo de validade de um clique.
- **A promessa é cumprível.** "Quero ser avisado da abertura" é exatamente o que vai
  acontecer em setembro. Nada na página promete mais do que isso.
- **O aquecimento é o produto agora.** O ativo que esta LP gera é uma lista segmentada de
  servidores públicos interessados, pronta para receber a abertura em setembro — não uma
  receita antecipada.

Se em algum momento alguém for tentado a trocar o CTA por "garanta sua vaga" ou
"inscreva-se", **é este parágrafo que essa pessoa precisa reler.** Só se muda quando
houver checkout de verdade.

**Diferenciais da página:**
- CTA único, sem nada competindo com o formulário.
- Copy que fala do risco real do servidor (responsabilização), não de features do evento.
- Mobile-first: o tráfego vem do Meta, no celular.
- A página de obrigado repete a promessa ("avisaremos em setembro"), em vez de prometer
  um contato comercial que não vai acontecer agora.

## 3. Funcionalidades Principais

**O que entra (a página cresceu com o que a programática oficial sustenta):**
- **Hero** com eyebrow, headline, subheadline, linha de perfil, CTA e linha de
  credibilidade (4 dias · 17 horas · Curitiba-PR · 24 a 27 de novembro de 2026 ·
  Inscrições abrem em setembro).
- **Para quem é** — quatro grupos: quem conduz, quem fiscaliza, quem respalda e o
  **Legislativo** (Câmaras Municipais). Ver seção 4.
- **As falhas que mais geram apontamento** — as **8 falhas** da programática, numeradas
  01 a 08. **Sem número redondo:** a programática promete "10", entrega 8; prometer 10 e
  listar 8 quebra a promessa na própria página (foi o que matou a Reforma). A copy fala em
  "as falhas que mais geram apontamento", não em "as 10 maiores".
- **Programação** — os 4 dias / 17 horas, com as dinâmicas de fixação sinalizadas.
- **Prova** — "Mais de 270 inscritos já passaram pelo LicitaExpo"; edições em 2023, 2024,
  2025 e 2026, presenciais em Curitiba; 98 municípios do PR/SC. Número arredondado dos
  271 inscritos históricos, e **"inscritos" (não "servidores")** porque ~14 eram do setor
  privado — "mais de 270 servidores" seria overclaim. **98 é contagem exata**, não
  arredondada: recontagem dos municípios distintos citados como Órgão/Município,
  deduplicando acentuação, hífen e variações de grafia (ex.: "Caçador" e "CACADOR-" eram
  o mesmo município duas vezes) — o "100+" anterior estava inflado por esse duplicado.
- **Metodologia** — "não é aula sobre a lei; é como o Tribunal lê a sua decisão".
- **Formulário** (seção `#inscricao`): Nome, E-mail, WhatsApp, Cargo/Setor,
  Órgão/Município e o toggle "É servidor público?". Validação no blur e no submit.
- **Página de obrigado** (`/licitaexpo/obrigado`), que dispara o evento `Lead` do Meta.
- Meta Pixel (`PageView` na LP, `Lead` na obrigado), UTMs preservadas até o envio,
  metadata/OG próprios.

**O que segue cortado, e por quê:**

| Cortado | Por quê |
|---|---|
| Preço, lotes, tabela de valores | **Não há checkout.** É a decisão da seção 2 — enquanto não houver venda de verdade, nenhum "garanta sua vaga". |
| Palestrantes / grade de nomes | Nenhum confirmado. |
| Contador regressivo | A data do evento existe, mas a de **abertura das inscrições** não. Contador seria urgência inventada. |
| FAQ, depoimentos nominais | Nada a perguntar ainda; depoimento de outro produto não é depoimento deste. |
| Segundo CTA / botão de compra | Qualquer botão que não seja o formulário compete com a conversão. **O CTA da página é um só: lista de espera.** |

## 4. Persona e Tipos de Usuários

**O público é o servidor público** — quem é responsabilizado quando o processo trava:
licitações, compras, agente de contratação, pregoeiro, controle interno, jurídico. O medo
dele tem nome: assinar embaixo e responder por isso depois. É daí que sai a headline
("Todo erro no processo tem um nome no papel. Geralmente é o seu.").

**O Legislativo é metade do público — e estava fora do radar.** Dos 271 inscritos
históricos, **Câmara Municipal = 44%** (Prefeitura = 42%); "vereador" é o 3º cargo mais
frequente. Toda a comunicação de Licitações falava só com o Executivo (pesquisa de preços,
ETP, TR). Por isso a seção "Para quem é" tem um grupo **Legislativo** explícito. Isso
reabre a leitura do pool de Licitações: não estava esgotado — falávamos com metade dele.
Vale testar um criativo voltado à Câmara na campanha de Licitações (tarefa futura).

**Não mirar setor privado.** 95% dos inscritos históricos são setor público (só 14 de 271
"particular"); PR = 67%, SC = 8%. "Mirar mais largo" não aparece no dado — o que aparece é
a Câmara, que é público e inexplorado.

**Por que o fornecedor está fora:**

O fornecedor que vende para o setor público tem **outro vilão**: perder a licitação, não
ser responsabilizado por ela. Um hero não sustenta os dois — ao tentar falar com ambos,
falha no teste do grunhido e não fala com ninguém. Servir aos dois nesta página não é
"ampliar o alcance", é diluir a mensagem até ela não morder ninguém.

Se um dia quisermos testar fornecedor, **é outra campanha, com outra LP e outra copy.**
Não se resolve adicionando um parágrafo aqui.

## 5. Stack Tecnológica

A que já existe no projeto — nada novo foi instalado.

- **Next.js 16 (App Router) + React 19 + TypeScript**, com `output: 'export'` (site
  estático; sem API routes, sem server actions).
- **CSS puro** escopado em `.lp-root` (`app/lp.css`) — o design system das LPs. Sem
  Tailwind nas landing pages.
- **Lead:** POST client-side direto para o webhook n8n (`lib/lp/lead.ts`), com
  `Id_do_formulario: "lp-licitaexpo"`.
- **Tracking:** Meta Pixel (`lib/lp/meta.ts`). Sem GA/GTM.
- Deploy Vercel, servindo `out/`.

## 6. Referências de Design

- **`/licitacao` e `/reforma`** — as LPs existentes. A LicitaExpo reusa os mesmos
  primitivos (hero escuro, botão pill ciano, card de formulário glassmorphic, footer).
- **`app/lp.css`** — a fonte da verdade dos tokens (`--brand: #00aeef`, CTA
  `#00bff3 → #009fd4`, Montserrat, container 960px).
- **Diferença deliberada:** a LicitaExpo **não** usa o componente `LpPage`. O contrato
  `LpContent` exige 11 seções (painéis, módulos, FAQ, depoimentos...) que esta página não
  tem e não deve ter. Ela monta uma página enxuta reusando os primitivos.
- **Sem foto no hero**, por ora: o `lp.css` já traz um gradiente escuro como fallback.
  Quando houver arte da LicitaExpo, basta passar a imagem — nada mais muda.
