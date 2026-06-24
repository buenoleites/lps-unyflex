# PRD — Landing Page: Licitações com IA (Unyflex)

---

## 1. Problema Identificado
**QUAL DOR REAL ESTAMOS RESOLVENDO?**

Servidores públicos que atuam em licitações precisam usar IA (ChatGPT, Gemini, etc.) para produzir documentos como DFD, ETP, TR e mapa de riscos — mas enfrentam dois riscos concretos: gerar textos genéricos sem sustentação técnica e assinar documentos que não conseguem defender. Não existe formação prática e presencial que ensine exatamente isso dentro do contexto da Lei 14.133.

A LP atual da Unyflex foi construída em page builder (GreatPages), o que limita a qualidade visual, a performance e a capacidade de evolução. O resultado é uma página que não traduz a autoridade e o nível técnico do curso.

---

## 2. Solução
**O QUE VAMOS CONSTRUIR**

Uma landing page moderna para o curso presencial **"Licitações com Inteligência Artificial"** da Unyflex, clonando o conteúdo e estrutura da LP original e elevando o design com Next.js, Tailwind CSS e shadcn/ui.

**Diferenciais da nova LP:**
- Performance superior (Next.js SSG, sem page builder)
- Design minimalista e profissional (dark theme com acento laranja)
- Totalmente responsiva para mobile
- Fácil de manter e evoluir com código limpo
- Deploy instantâneo na Vercel com CI via GitHub

---

## 3. Seções da Landing Page
**ESTRUTURA DE CONTEÚDO** (seguindo a LP original)

| # | Seção | Descrição |
|---|-------|-----------|
| 1 | **Header/Nav** | Logo Unyflex + CTA "Garantir vaga" |
| 2 | **Hero** | Headline: *"Use IA na fase preparatória sem perder segurança técnica"* + subheadline + CTA principal + imagem de fundo |
| 3 | **Personas** | "Quem mais sente essa pressão no dia a dia" — cards para: quem monta a documentação, quem revisa e assina |
| 4 | **Proposta de valor** | "O que esse curso ajuda você a sustentar na prática" — lista de competências práticas |
| 5 | **Diferencial** | "O curso mostra como usar IA sem deixar o processo frágil" — bloco de texto + imagem |
| 6 | **Módulos/Features** | Cards: *Planejamento com IA*, *ETP e TR com IA*, e demais módulos |
| 7 | **Aviso de posicionamento** | "Não basta pedir um documento para a IA. Você precisa sustentar o que ela entrega." |
| 8 | **Formato e detalhes** | Duração, carga horária, modalidade (presencial), local, data, investimento |
| 9 | **Prova social** | "Presença construída na gestão pública" — logos de prefeituras e órgãos (Maringá e outros) |
| 10 | **CTA final** | "Garanta sua vaga para aprender IA aplicada às licitações" + formulário ou link de inscrição |
| 11 | **Footer** | Logo + links legais + redes sociais |

---

## 4. Persona e Público-Alvo

**Usuário primário:** Servidor público que atua diretamente em processos licitatórios (pregoeiros, assessores jurídicos, gestores de contratos, agentes de contratação).

**Perfil:**
- Conhece a Lei 14.133 mas ainda não usa IA com segurança técnica
- Preocupado em assinar documentos que não consegue defender
- Busca capacitação prática, presencial, com aplicação imediata
- Está em municípios do Sul/Sudeste do Brasil

**Não é público:** Gestores privados, estudantes sem vínculo com setor público.

---

## 5. Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 14+ (App Router, SSG) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS |
| Componentes UI | shadcn/ui |
| Fontes | Geist Sans (padrão Next.js) ou Inter |
| Deploy | Vercel |
| Versionamento | Git / GitHub |
| Agente de código | Claude Code |

Sem backend, banco de dados ou autenticação — LP estática.

---

## 6. Referências de Design

**Inspirações visuais:**
- LP original da Unyflex (`LP.html` / `LP.png`) — referência de conteúdo e estrutura
- Dark theme com fundo próximo de `#0f0f0f` e acento laranja/âmbar
- Cards com bordas suaves, espaçamento generoso, tipografia pesada nos títulos
- Fotos de contexto: sala de aula, servidores em treinamento presencial

**Paleta:**
- Background: `#0a0a0a` / `#111111`
- Acento primário: `#f97316` (laranja) ou cor usada na LP original
- Texto: `#ffffff` / `#d4d4d4`
- Cards: `#1a1a1a` com borda `#2a2a2a`

---

## 7. Melhorias em relação à LP original

- [x] Performance: SSG puro, sem JavaScript de page builder
- [x] Responsividade real com Tailwind (a original tem bugs no mobile)
- [x] Animações sutis com Tailwind (fade-in nas seções ao scroll)
- [x] SEO melhorado: metadata estruturada, Open Graph, canonical
- [x] Acessibilidade: contraste adequado, alt texts, semântica HTML5
- [x] CTA destacado e sticky no mobile
- [x] Logos de clientes em carrossel ou grid limpo

---

## 8. Verificação / Critérios de Aceite

- [x] Todas as 11 seções da LP original estão presentes e com conteúdo fiel
- [x] Design aprovado visualmente contra a `LP.png`
- [x] Responsivo: funciona em 375px (mobile) e 1440px (desktop)
- [x] Build passa sem erros (`npm run build`)
- [ ] Deploy na Vercel funcionando com URL pública
- [ ] Lighthouse Performance > 90 na versão desktop
