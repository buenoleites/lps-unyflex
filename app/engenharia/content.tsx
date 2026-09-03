import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp2/) não têm texto próprio.

   Soluções Práticas de Engenharia e Urbanismo — turma de 22 a 25/09/2026
   (/engenharia), no template lp2 replicado da /licitacao-out26. Briefing de
   01/09/2026 (Prompt_ClaudeCode_LP_Engenharia.md): o anúncio que manda tráfego
   fala de EVENTOS CLIMÁTICOS e CONTRATAÇÃO EMERGENCIAL — a página abre com
   isso e o módulo climático é o PRIMEIRO da programação (era o 6º no site;
   regra do briefing que não pode quebrar). Copy verbatim do briefing, sem
   "melhorar" frases jurídicas. Copy derivada (marcada nos comentários): as
   frases de `result` dos módulos — o briefing não as traz e o tipo exige.

   PRODUTO NO OMIE (grafia exata): "Soluções práticas de engenharia e
   Urbanismo". O payload manda o slug `engenharia` (padrão das outras LPs);
   o mapeamento slug → produto Omie é feito no mapa de cursos do n8n.
   BLOQUEIO DE PUBLICAÇÃO: a chave `engenharia` AINDA NÃO EXISTE no n8n —
   o cadastro é do chat de Implementação I.A. Sem ele, o lead entra como
   "Curso não identificado". Não rodar tráfego sem os dois. */

/* Conferência aritmética obrigatória (mesmo bloco de Investimento da
   /licitacao-out26, replicado por ordem do briefing) — se qualquer número
   divergir destas contas, parar e reportar em vez de ajustar:
   1.783 + 1.197 + 0 = 2.980 (soma dos preços "no combo")
   6.193 − 2.980 = 3.213 (economia anunciada)
   2.900 + 2.394 + 899 = 6.193 (soma dos avulsos, o preço "de") */
const COMBO_PRECOS = { curso: 1783, biblioteca: 1197, minisserie: 0 };
const AVULSO_PRECOS = { curso: 2900, biblioteca: 2394, minisserie: 899 };
const COMBO_TOTAL = 2980;
const AVULSO_TOTAL = 6193;
const ECONOMIA = 3213;
if (
  COMBO_PRECOS.curso + COMBO_PRECOS.biblioteca + COMBO_PRECOS.minisserie !==
    COMBO_TOTAL ||
  AVULSO_PRECOS.curso + AVULSO_PRECOS.biblioteca + AVULSO_PRECOS.minisserie !==
    AVULSO_TOTAL ||
  AVULSO_TOTAL - COMBO_TOTAL !== ECONOMIA
) {
  throw new Error(
    "Pricing do combo inconsistente com o briefing — conferir os valores."
  );
}

export const engenhariaContent: EventLpContent = {
  /* O accent (#00aeef, ciano — decisão do Gustavo em 02/09/2026) NÃO é
     definido aqui: todos os tokens de cor da LP vivem em ./theme.css. */

  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    links: [
      { href: "#para-quem", label: "Para quem" },
      { href: "#problema", label: "Desafios" },
      { href: "#modulos", label: "Programação" },
      { href: "#planos", label: "Investimento" },
      // Âncora do bloco de Procurement (components/lp2/Procurement.tsx):
      // é o que destrava o empenho e não tinha atalho no menu.
      { href: "#como-contratar", label: "Como contratar" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: { href: "#inscricao", label: "Receber proposta" },
  },

  hero: {
    // O CSS do eyebrow (.lp2-eyebrow) já aplica uppercase.
    eyebrow: "Curso presencial em Curitiba · 22 a 25/09 · 17 horas",
    title: (
      <>
        Quando a chuva destruir a estrada, a lei te dá <Kw>um ano</Kw> — e
        cobra quem não tinha plano antes.
      </>
    ),
    subtitle:
      "Ata de registro de preços preventiva, especificações técnicas, contratação emergencial e fiscalização pós-evento na Lei 14.133 — mais BIM, drones, orçamentação SINAPI/SICRO e IA aplicada ao projeto. Para quem responde por obras, urbanismo e infraestrutura no município.",
    audiences:
      "Secretário de obras · engenheiro e arquiteto de prefeitura · fiscal de obras · planejamento urbano · controle interno",
    // Sem href ⇒ o CTA vai para #inscricao.
    cta: { label: "Quero receber a programação com nota de empenho" },
    meta: "Rua Voluntários da Pátria, 547 · Centro, Curitiba/PR · Certificado emitido pela Faculdade Unypública, IES credenciada no MEC · Também disponível online ao vivo",
    // Sala de aula da sede em Curitiba. É o LCP da página — o layout da rota
    // faz o preload dela. O original estava subexposto (luma média 45 contra
    // 67 do hero da /licitacao-out26) e, sob o scrim, a seção ficava
    // indistinguível do gradiente de fallback; o arquivo aqui leva um
    // `eq=gamma=1.30` que a põe em 62. Regerar do original SEM esse ganho
    // devolve a página preta.
    bgSrc: "/engenharia/hero.jpg",
  },

  ticker: {
    metrics: [
      { value: "49.000+", label: "alunos formados" },
      { value: "1.200+", label: "órgãos atendidos" },
      { value: "5,0", label: "no Google · +450 avaliações" },
      { value: "17", label: "horas de capacitação" },
    ],
  },

  /* variant "grid": os 4 perfis visíveis de uma vez, como filtro de
     autoqualificação — mesmo padrão da /patrimonio e /licitacao-out26. */
  audience: {
    title: "Este curso é para quem responde pela obra",
    variant: "grid",
    groups: [
      {
        id: "obras",
        label: "Secretaria de Obras e Infraestrutura",
        description:
          "Secretário e diretores que assinam a contratação — emergencial ou planejada — e respondem por ela depois.",
      },
      {
        id: "engenharia",
        label: "Engenharia e Arquitetura",
        description:
          "Engenheiros e arquitetos de prefeitura que elaboram projeto, TR, orçamento e especificação técnica.",
      },
      {
        id: "fiscalizacao",
        label: "Fiscalização de Obras",
        description:
          "Fiscal de obras e posturas: diário de obra, medição, recebimento provisório e definitivo, penalidades.",
      },
      {
        id: "planejamento",
        label: "Planejamento e Controle",
        description:
          "Planejamento urbano, controle interno e auditoria que avaliam risco, conformidade e execução dos contratos de obra.",
      },
    ],
    closing:
      "Serve também para procuradoria, meio ambiente e câmaras municipais que aprovam ou fiscalizam obras — mas o centro do curso é quem executa e contrata.",
  },

  /* As 4 frases do briefing, verbatim (títulos e falas vieram prontos).
     O grid vira 2×2 via theme.css (o template assume 6–10 cards). */
  problem: {
    title: "Se alguma dessas frases podia ser sua, o curso é seu",
    items: [
      {
        title: "A emergência sempre pega sem processo",
        desc: "“Quando alaga, a gente monta a contratação no susto. Não tem ata, não tem especificação pronta, e depois o Tribunal pergunta por que não tinha.”",
      },
      {
        title: "O orçamento não fecha no SINAPI",
        desc: "“Toda obra volta com apontamento de sobrepreço. Eu uso a tabela, mas a composição nunca bate com o que a auditoria espera.”",
      },
      {
        title: "A obra para e ninguém sabe o que fazer",
        desc: "“Construtora atrasa, o cronograma físico-financeiro descola e eu não sei em que momento aplicar penalidade sem virar processo.”",
      },
      {
        title: "Todo mundo fala de BIM e drone, ninguém usa",
        desc: "“Sei que a exigência do BIM vem, sei que drone economiza vistoria. Na prática, continuo com trena e planilha.”",
      },
    ],
  },

  /* schedule (timeline por dia) desligada: o briefing pede a programação em
     módulos — seção `modules`. */

  /* Programação VERBATIM do briefing, JÁ na ordem invertida que ele exige:
     o módulo de eventos climáticos (6º no site) abre a lista — regra que não
     pode quebrar (o anúncio fala de eventos climáticos e contratação
     emergencial). Título da seção veio pronto do briefing. Cada tópico
     separado por "·" no briefing é uma string própria em `topics`.
     As frases de `result` (visíveis com o card fechado) são COPY DERIVADA —
     o tipo exige e o briefing não traz; validar com o Gustavo. */
  modules: {
    title: "Em 17 horas, do risco climático ao recebimento da obra",
    items: [
      {
        title: "Contratações Planejadas em Eventos Climáticos",
        // result derivado.
        result:
          "Ata preventiva, especificação pronta e prestação de contas: o plano que a Lei 14.133 cobra antes do evento",
        topics: [
          "Cenário de riscos climáticos e a Lei 14.133",
          "Planejamento e gestão de riscos na fase preparatória",
          "Infraestrutura verde preventiva",
          "Especificações de materiais e normas técnicas",
          "Atas de registro de preços preventivas e logística humanitária",
          "Governança, fiscalização e prestação de contas pós-evento",
        ],
      },
      {
        title: "Planejamento e Orçamentação de Obras na Nova Lei",
        // result derivado.
        result:
          "TR, edital e orçamento de obra sem apontamento de sobrepreço — e a preparação para a exigência do BIM",
        topics: [
          "TR e edital de engenharia blindados contra erro sob a 14.133",
          "Orçamentação sem sobrepreço com SINAPI e SICRO",
          "Introdução ao BIM e como a prefeitura se prepara para a exigência legal",
        ],
      },
      {
        title: "Fiscalização de Obras Públicas, Tecnologia e Apps",
        // result derivado.
        result:
          "Do diário de obra digital ao recebimento definitivo, com drone e satélite auditando o avanço",
        topics: [
          "Rotina do fiscal, diário de obra digital, recebimento provisório e definitivo",
          "Drones de baixo custo e imagem de satélite para auditar avanço",
          "Cronograma físico-financeiro e aplicação de penalidades a construtoras inadimplentes",
        ],
      },
      {
        title: "Inteligência Artificial Aplicada à Engenharia e Arquitetura",
        // result derivado.
        result:
          "IA de uso direto no projeto: estudo preliminar, memorial descritivo e renderização para captar recurso",
        topics: [
          "IA generativa para estudo preliminar e maquete de prédio público",
          "Automatização de memorial descritivo, especificação e revisão de orçamento",
          "Renderização para apresentar obra à população e captar recurso",
        ],
      },
      {
        title: "O Novo Cenário do Urbanismo e Cidades Inteligentes",
        // result derivado.
        result:
          "Plano Diretor, zoneamento e mobilidade que cabem no município pequeno e médio",
        topics: [
          "Smart cities em município pequeno e médio",
          "Revisão de Plano Diretor e zoneamento para atrair investimento",
          "Mobilidade e acessibilidade de baixo custo dentro da lei federal",
        ],
      },
      {
        title: "Ideias: Projetos de Engenharia e Urbanismo pelo Brasil",
        // result derivado.
        result:
          "Projetos replicáveis de rápido impacto — do placemaking ao Alvará Fácil",
        topics: [
          "Revitalização de espaço público de rápido impacto (placemaking)",
          "Drenagem sustentável, pavimentação ecológica e LED",
          "“Alvará Fácil”: aprovação online de construção particular em dias",
        ],
      },
    ],
  },

  /* quote (seção opcional): não pedida pelo briefing — desligada. */

  /* Bancada com 2 professores; fotos fornecidas pelo Gustavo em 02/09/2026.
     O template recorta em 4:5 com object-position 50% 20% (enviesado para o
     topo), então a foto vertical da Jaqueline (576×844) perde só a margem
     acima do cabelo. O grid de 3 colunas vira 2 via theme.css. Título e bios
     verbatim do briefing (o negrito do briefing vira texto plano — `bio` é
     string). */
  speakers: {
    title: "Quem ensina já assinou o que você assina",
    items: [
      {
        name: "Silvio Cesar Riechi",
        institution: "EX-SECRETÁRIO DE URBANISMO · ARQUITETO E URBANISTA",
        photoSrc: "/engenharia/palestrantes/silvio-cesar-riechi.jpg",
        bio: "Arquiteto e urbanista pela PUCPR, especialista em Habitação e Cidade pela Escola da Cidade (SP). Foi diretor técnico, assessor de assuntos metropolitanos e secretário municipal de urbanismo em Piraquara, onde coordenou o Plano Municipal de Regularização Fundiária e a legislação de diretrizes viárias e parcelamento do solo. Sócio da Riechi Urbanismo e Arquitetura.",
      },
      {
        name: "Jaqueline Martinez de Oliveira",
        institution: "SERVIDORA PÚBLICA · LICITAÇÕES E CONTRATOS",
        photoSrc:
          "/engenharia/palestrantes/jaqueline-martinez-de-oliveira.jpg",
        bio: "Graduada em Gestão Pública, especialista em Políticas Públicas, MBA em Administração Pública e Gerência de Cidades, mestranda em Desenvolvimento Regional. Servidora pública com experiência direta em licitações e contratos.",
      },
    ],
  },

  /* Avaliações públicas do Google, texto integral e nomes como publicados
     (briefing §11). Renderiza entre Professores e Investimento — o slot de
     reviews no EventLp foi movido para isso. Números coerentes com o ticker
     (perfil verificado: 5,0 · 458 avaliações).

     A foto de turma (briefing §11, fornecida pelo Gustavo em 02/09/2026) entra
     AQUI, não numa seção própria: sozinha numa faixa branca ela lia como
     placeholder (decisão do Gustavo em 03/09/2026). Junto do 5,0, prova visual
     e prova escrita ficam no mesmo bloco. O campo `reviews.photo` foi criado no
     contrato para isso.

     O arquivo é um RECORTE 16:9 da foto original, em x=250/y=200: o corte tira
     o telão do quadro. Ele exibia "Ativo Imobilizado / PCASP", conteúdo do
     curso de patrimônio — numa faixa larga voltaria a ficar legível e leria
     como foto emprestada. Não reenquadrar para incluir o telão de novo.

     `caption` é COPY DERIVADA (o briefing não traz legenda) — validar com o
     Gustavo, junto das frases de `result` dos módulos. */
  reviews: {
    rating: "5,0",
    ratingValue: 5,
    volume: "+450 avaliações",
    sourceLabel: "Google",
    photo: {
      src: "/engenharia/turma.jpg",
      alt: "Turma em aula presencial da Unyflex: professor à frente, com microfone, e alunos acompanhando a apresentação.",
      caption: "Turma presencial na sede da Unyflex, em Curitiba.",
      width: 1280,
      height: 720,
    },
    items: [
      {
        text: "“Conteúdo prático, atualizado e muito aplicável na rotina. A didática dos professores é excelente e alinhada com entendimento da legislação e parecer dos tribunais.”",
        author: "Miriã Munhós",
      },
      {
        text: "“Os professores demonstram alto nível de preparo. Destaco a qualidade do conteúdo, sempre atualizado e alinhado com a realidade da administração pública.”",
        author: "Luiz Felipe Barros",
      },
      {
        text: "“Atendimento excepcional, professores capacitados, ambiente acolhedor. Conteúdo atualizado e condizente com a realidade da administração pública.”",
        author: "Andréa Munhoz",
      },
    ],
  },

  /* Bloco de Investimento replicado EXATAMENTE da /licitacao-out26 (ordem do
     briefing §7): mesmos produtos, combo, tabela e online. Só o paymentNote
     muda (o briefing acrescenta "Inscrições até o dia do curso."). Valores
     conferidos pela checagem aritmética no topo do arquivo. */
  pricingCombo: {
    title: "Investimento",
    products: [
      {
        name: "Curso",
        desc: "Aulas presenciais/online, suporte e certificação",
        price: "R$ 2.900,00",
        comboPrice: "R$ 1.783,00",
        discount: "−39%",
      },
      {
        name: "Biblioteca Digital",
        desc: "Acesso, leitura e download do acervo pedagógico de Gestão Pública",
        price: "R$ 2.394,00",
        comboPrice: "R$ 1.197,00",
        discount: "−50%",
      },
      {
        name: "Minissérie",
        desc: "Conteúdo em área correlata com certificação própria, em digital.unyflex.com.br",
        price: "R$ 899,00",
        comboPrice: "Grátis",
        discount: "−100%",
      },
    ],
    combo: {
      highlightLabel: "★ Compra indicada",
      name: "Combo: os três produtos de ensino",
      from: "De R$ 6.193,00",
      price: "R$ 2.980,00",
      savings: "Economia de R$ 3.213,00",
      ctaPrimary: { href: "#inscricao", label: "Quero o combo" },
      ctaSecondary: { href: "#inscricao", label: "Falar com consultor" },
    },
    // Células idênticas às da /licitacao-out26 (transcritas do print do
    // briefing de 11/08/2026) — nenhuma inventada.
    comparison: {
      itemsLabel: "O que está incluído",
      columns: ["Curso", "Biblioteca Digital", "Minissérie", "Combo — os três"],
      rows: [
        {
          label: "Aulas presenciais/online do curso",
          cells: [true, false, false, true],
        },
        {
          label: "Suporte durante o curso",
          cells: [true, false, false, true],
        },
        {
          label: "Certificado de instituição reconhecida pelo MEC",
          cells: [true, false, false, true],
        },
        {
          label: "Coffee break gourmet",
          cells: [true, false, false, true],
        },
        {
          label: "Acesso, leitura e download do acervo pedagógico",
          cells: [false, true, false, true],
        },
        {
          label: "Material em PDF (ebook)",
          cells: [false, true, false, true],
        },
        {
          label: "Clube de benefícios e desconto em graduação e pós",
          cells: [false, true, false, true],
        },
        {
          label: "Minissérie em área correlata (digital.unyflex.com.br)",
          cells: [false, false, true, true],
        },
        {
          label: "Certificação própria da minissérie",
          cells: [false, false, true, true],
        },
        {
          label: "Valores",
          cells: [
            "R$ 2.900,00 · no combo: R$ 1.783,00",
            "R$ 2.394,00 · no combo: R$ 1.197,00",
            "R$ 899,00 · no combo: grátis",
            "R$ 2.980,00 · de R$ 6.193,00",
          ],
        },
      ],
    },
    online: {
      name: "Online ao vivo",
      price: "R$ 2.000,00",
      desc: "Mesmas aulas, transmitidas em tempo real.",
    },
    // Verbatim do briefing §7 (inclui a frase de prazo de inscrição).
    paymentNote:
      "Aceitamos nota de empenho, com prazo de pagamento de 7 dias após a finalização do curso. Fornecemos toda a documentação necessária para a contratação pelo seu órgão. Pessoa física pode se inscrever por qualquer forma de pagamento. Inscrições até o dia do curso.",
  },

  /* "Como seu órgão contrata" — copy verbatim do briefing §8. Diferente da
     /licitacao-out26, aqui a declaração de notória especialização (art. 74,
     III, "f") VEIO NO BRIEFING, dentro do card de documentação. */
  procurement: {
    title: "Como seu órgão contrata",
    items: [
      {
        title: "Proposta formal",
        desc: "Em nome do seu órgão, com valores, condições e prazo — feita sob medida pelo consultor.",
      },
      {
        title: "Nota de empenho",
        desc: "Pagamento em até 7 dias após a conclusão do curso.",
      },
      {
        title: "Documentação para contratação direta",
        desc: "CNPJ, declaração de notória especialização e singularidade (art. 74, III, “f”, da Lei 14.133), escopo de Termo de Referência para inexigibilidade e atestado de capacidade técnica — enviados no primeiro contato.",
      },
      {
        title: "Certificado reconhecido",
        desc: "Emitido pela Faculdade Unypública, IES credenciada no MEC.",
      },
    ],
    cta: { label: "Quero receber a proposta" },
  },

  /* compare (seção opcional): não pedida — o online aparece no hero, no card
     do pricing e no campo de modalidade. */

  /* FAQ: as 8 perguntas e respostas verbatim do briefing §9. */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Minha prefeitura nunca passou por enchente. O módulo climático serve para mim?",
        a: "Serve. Ata preventiva, especificação técnica pronta e plano de contingência valem para qualquer emergência — vendaval, seca, deslizamento, incêndio. E a Lei 14.133 responsabiliza o gestor que não tinha plano, independentemente do evento.",
      },
      {
        q: "Sou engenheiro, não sou de licitação. A parte jurídica é pesada?",
        a: "O curso é feito para quem executa. A lei entra pelo que ela exige do projeto, do orçamento e da fiscalização — não pela teoria.",
      },
      {
        q: "Vou sair com modelos prontos?",
        a: "Sim: minutas de TR de engenharia, estrutura de ata de registro de preços preventiva, roteiro de diário de obra e checklist de recebimento.",
      },
      {
        q: "Preciso saber usar BIM ou drone antes?",
        a: "Não. O curso mostra por onde a prefeitura começa, com ferramentas de baixo custo, e o que a exigência legal do BIM vai pedir.",
      },
      {
        q: "A parte de IA exige saber programar?",
        a: "Não. São ferramentas de uso direto: memorial descritivo, especificação, revisão de orçamento e imagem de projeto.",
      },
      {
        q: "Serve para município pequeno, onde uma pessoa faz tudo?",
        a: "É o público principal. Os módulos foram desenhados para quem acumula projeto, orçamento e fiscalização.",
      },
      {
        q: "Posso pagar com nota de empenho? E como pessoa física?",
        a: "Nota de empenho com pagamento em 7 dias após o curso. Pessoa física paga por PIX, cartão ou boleto.",
      },
      {
        q: "Tem opção online?",
        a: "Sim, ao vivo, com as mesmas aulas e transmissão em tempo real. Kit, coffee e vouchers são exclusivos do presencial.",
      },
    ],
  },

  form: {
    title: "Garanta sua participação",
    // O CSS do meta (.lp2-form-section__meta) já aplica a caixa alta que o
    // briefing pede.
    meta: "Turma de 22 a 25/09 em Curitiba · Empenho leva tempo no seu órgão — comece o processo agora.",
    bgSrc: "/engenharia/cta-final.jpg",
    // BLOQUEIO DE PUBLICAÇÃO: o slug `engenharia` (campo `produto` abaixo)
    // precisa estar no mapa de cursos do n8n antes de a página receber
    // tráfego, senão o lead entra como "Curso não identificado".
    formId: "lp-engenharia",
    submitLabel: "Receber proposta",
    thankYou: { url: "/obrigado", withPii: false },
    // Briefing: órgão NÃO é obrigatório nesta LP (a obrigatoriedade segue
    // valendo nas demais rotas — o default do LeadForm é true).
    orgaoRequired: false,
    modalidade: {
      label: "Modalidade preferida",
      options: ["Presencial em Curitiba", "Online ao vivo"],
    },
    vinculo: {
      label: "Seu vínculo",
      // Mesmo select da /licitacao-out26: o toggle Sim/Não reprovava lead
      // qualificado (o n8n fechava "Não" como Perdido). Values = payload.
      options: [
        { value: "servidor", label: "Servidor efetivo ou comissionado" },
        {
          value: "terceirizado",
          label: "Terceirizado ou prestador para órgão público",
        },
        { value: "fornecedor", label: "Empresa fornecedora do poder público" },
        { value: "outro", label: "Outro" },
      ],
    },
    // Chave pela qual o mapa de cursos do n8n identifica a turma. Grafia do
    // produto no Omie: "Soluções práticas de engenharia e Urbanismo".
    produto: "engenharia",
    paginaOrigem: "engenharia",
  },

  /* Rodapé replicado da /licitacao-out26 (mesma parceira e mesmas redes). */
  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    partners: [
      // invert: o logo original é escuro — em marca branca sobre o rodapé.
      {
        src: "/engenharia/parceiros/faculdade-unypublica.png",
        alt: "Faculdade Unypública",
        invert: true,
      },
    ],
    legal: [],
    social: [
      {
        kind: "google",
        href: "https://www.google.com/search?q=Unyflex",
        label: "5,0 no Google · +450 avaliações",
      },
      { kind: "linkedin", href: "https://linkedin.com/company/unyflex" },
      { kind: "instagram", href: "https://instagram.com/unyflex" },
      { kind: "youtube", href: "https://youtube.com/@unyflex" },
    ],
    copyright: "© Unyflex 2026",
  },

  stickyCta: {
    priceAnchor: "a partir de R$ 2.000",
    label: "Receber proposta",
    href: "#inscricao",
  },
};
