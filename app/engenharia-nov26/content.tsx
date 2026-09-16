import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* Os 12 itens da tabela do print, na ordem do print. Os três vetores dizem o
   que cada plano inclui — servem aos cards E à tabela, para as duas nunca
   divergirem. */
const PLANO_ITENS = [
  "Capacitação prática em 3 dias",
  "Capacitação prática em 4 dias",
  "6 Coffee Breaks Gourmet",
  "Certificado de instituição reconhecida pelo MEC",
  "Desconto em pós-graduação",
  "Mentoria exclusiva VIP",
  "Kit exclusivo UNYFLEX",
  "Tour Linha Turismo Curitiba",
  "Almoço no Restaurante Madalosso",
  "3 meses de Assinatura Premium",
  "1 semestre de graduação",
  "UNYPOINTS para troca na UNY store",
];
const BASIC = [true, false, true, true, false, false, false, false, false, false, false, false];
const MASTER = [false, true, true, true, true, false, false, false, false, false, false, false];
const PREMIUM = [false, true, true, true, true, true, true, true, true, true, true, true];
function planoFeatures(inclui: boolean[]) {
  return PLANO_ITENS.map((label, i) => ({ label, included: inclui[i] }));
}

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp2/) não têm texto próprio.

   Soluções Práticas de Engenharia e Urbanismo — turma de 24 a 27/11/2026
   (/engenharia-nov26). Rota IRMÃ da /engenharia (turma de setembro), que segue
   no ar com tráfego até 22/09 e NÃO é tocada: esta é cópia, não import.

   FONTES (nada aqui é de autoria do agente — regra do Gustavo, 03/09/2026):
   1. app/engenharia/content.tsx — briefing de 01/09/2026, copy verbatim: hero,
      públicos, desafios, módulos (climático PRIMEIRO), professores, avaliações,
      "Como seu órgão contrata", FAQ, formulário, rodapé.
   2. Print da tabela de preços de 11/09/2026 (Gustavo) — a seção Investimento
      inteira: três planos, card recomendado, tabela e nota de rodapé. O combo
      de setembro SAIU; não há plano online (o toggle de modalidade continua no
      formulário por pedido do briefing).
   3. Catálogo de fotos Unyflex ("FOTOS AGENTE DE IMAGEM PUBLICAR", 11/09/2026)
      — galeria, linha "curso" (sala de aula da sede). Alt de imagem é
      acessibilidade, não copy.

   PRODUTO NO OMIE (grafia exata): "Soluções práticas de engenharia e
   Urbanismo". O payload manda o slug `engenharia-nov26` — chave NOVA, separada
   da turma de setembro (mesmo padrão licitacao → licitacao-out26).
   BLOQUEIO DE PUBLICAÇÃO: cadastrar `engenharia-nov26` no mapa de cursos do
   n8n antes de rodar tráfego, senão o lead entra como "Curso não
   identificado". O n8n também precisa mapear o campo `titulo` do payload
   (LP|engenharia|s=…|c=…|x=…|f=lp-engenharia-nov26 — lib/lp/lead.ts). */

export const engenhariaNov26Content: EventLpContent = {
  /* O accent (#00aeef, ciano — mesmo da /engenharia) NÃO é definido aqui:
     todos os tokens de cor da LP vivem em ./theme.css. */

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
    eyebrow: "Curso presencial em Curitiba · 24 a 27/11 · 17 horas",
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
    // Sem "Também disponível online ao vivo": a tabela de novembro não tem
    // plano online (a modalidade continua como campo do formulário).
    meta: "Rua Voluntários da Pátria, 547 · Centro, Curitiba/PR · Certificado emitido pela Faculdade Unypública, IES credenciada no MEC",
    // Sala de aula da sede em Curitiba. É o LCP da página — o layout da rota
    // faz o preload dela. O original estava subexposto (luma média 45 contra
    // 67 do hero da /licitacao-out26) e, sob o scrim, a seção ficava
    // indistinguível do gradiente de fallback; o arquivo aqui leva um
    // `eq=gamma=1.30` que a põe em 62. Regerar do original SEM esse ganho
    // devolve a página preta.
    bgSrc: "/engenharia-nov26/hero.jpg",
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
     SEM `result`: a frase que o card mostra fechado era escrita por mim (o
     briefing não traz) e o Gustavo mandou tirar em 03/09/2026 — a página não
     tem nenhuma palavra de autoria do agente. O campo virou opcional no
     contrato do lp2 por causa disso; não repor. */
  modules: {
    title: "Em 17 horas, do risco climático ao recebimento da obra",
    items: [
      {
        title: "Contratações Planejadas em Eventos Climáticos",
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
        topics: [
          "TR e edital de engenharia blindados contra erro sob a 14.133",
          "Orçamentação sem sobrepreço com SINAPI e SICRO",
          "Introdução ao BIM e como a prefeitura se prepara para a exigência legal",
        ],
      },
      {
        title: "Fiscalização de Obras Públicas, Tecnologia e Apps",
        topics: [
          "Rotina do fiscal, diário de obra digital, recebimento provisório e definitivo",
          "Drones de baixo custo e imagem de satélite para auditar avanço",
          "Cronograma físico-financeiro e aplicação de penalidades a construtoras inadimplentes",
        ],
      },
      {
        title: "Inteligência Artificial Aplicada à Engenharia e Arquitetura",
        topics: [
          "IA generativa para estudo preliminar e maquete de prédio público",
          "Automatização de memorial descritivo, especificação e revisão de orçamento",
          "Renderização para apresentar obra à população e captar recurso",
        ],
      },
      {
        title: "O Novo Cenário do Urbanismo e Cidades Inteligentes",
        topics: [
          "Smart cities em município pequeno e médio",
          "Revisão de Plano Diretor e zoneamento para atrair investimento",
          "Mobilidade e acessibilidade de baixo custo dentro da lei federal",
        ],
      },
      {
        title: "Ideias: Projetos de Engenharia e Urbanismo pelo Brasil",
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
        photoSrc: "/engenharia-nov26/palestrantes/silvio-cesar-riechi.jpg",
        bio: "Arquiteto e urbanista pela PUCPR, especialista em Habitação e Cidade pela Escola da Cidade (SP). Foi diretor técnico, assessor de assuntos metropolitanos e secretário municipal de urbanismo em Piraquara, onde coordenou o Plano Municipal de Regularização Fundiária e a legislação de diretrizes viárias e parcelamento do solo. Sócio da Riechi Urbanismo e Arquitetura.",
      },
      {
        name: "Jaqueline Martinez de Oliveira",
        institution: "SERVIDORA PÚBLICA · LICITAÇÕES E CONTRATOS",
        photoSrc:
          "/engenharia-nov26/palestrantes/jaqueline-martinez-de-oliveira.jpg",
        bio: "Graduada em Gestão Pública, especialista em Políticas Públicas, MBA em Administração Pública e Gerência de Cidades, mestranda em Desenvolvimento Regional. Servidora pública com experiência direta em licitações e contratos.",
      },
    ],
  },

  /* Galeria (pedido do Bruno, 11/09/2026: "mais fotos"). Seis fotos do
     catálogo Unyflex, linha "curso" — a sala de aula da sede em Curitiba
     (paredes cinza, TV, fita LED). Ficaram de fora, de propósito: a linha
     LicitaExpo (salão de hotel, palco, coquetel — outro produto) e as fotos em
     que o telão mostra slide legível de outro curso. Múltiplo de 3 (o grid é
     CSS columns: 3). Título reusado da galeria da /portal, que é a única string
     com fonte para esta seção.

     O que o pedido listou e NÃO existe em nenhuma fonte (não inventar): foto de
     entrega de certificado, fotos de apostila/biblioteca/planilhas, e fotos dos
     professores NOMEADOS em aula — as fotos de palestrante do catálogo são
     anônimas; atribuí-las ao Silvio ou à Jaqueline seria dar o rosto de outra
     pessoa a eles. */
  gallery: {
    title: "A experiência presencial",
    photos: [
      {
        src: "/engenharia-nov26/galeria/turma-01.jpg",
        alt: "Turma posada em pé na sala de aula da Unyflex, em Curitiba, ao fim de um curso presencial.",
        width: 1000,
        height: 750,
      },
      {
        src: "/engenharia-nov26/galeria/professor-01.jpg",
        alt: "Professora à frente da sala, explicando o conteúdo para a turma.",
        width: 1000,
        height: 750,
      },
      {
        src: "/engenharia-nov26/galeria/alunos-01.jpg",
        alt: "Duas alunas acompanhando a aula, com notebook e material sobre a mesa.",
        width: 1000,
        height: 750,
      },
      {
        src: "/engenharia-nov26/galeria/sala-01.jpg",
        alt: "Sala de aula vista do fundo durante a aula: alunos sentados e o professor junto ao telão.",
        width: 1000,
        height: 750,
      },
      {
        src: "/engenharia-nov26/galeria/turma-02.jpg",
        alt: "Grupo de alunos posando diante da TV com a marca Unyflex, na sala de aula.",
        width: 1000,
        height: 750,
      },
      {
        src: "/engenharia-nov26/galeria/professor-02.jpg",
        alt: "Professor em pé, gesticulando enquanto conduz a aula.",
        width: 1000,
        height: 750,
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

     A foto NÃO leva `caption`: a legenda era escrita por mim e saiu junto com
     as frases de `result` (03/09/2026). O `alt` fica — é acessibilidade, não
     copy da página, e nenhum briefing descreve foto. */
  reviews: {
    rating: "5,0",
    ratingValue: 5,
    volume: "+450 avaliações",
    sourceLabel: "Google",
    photo: {
      src: "/engenharia-nov26/turma.jpg",
      alt: "Turma em aula presencial da Unyflex: professor à frente, com microfone, e alunos acompanhando a apresentação.",
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

  /* Investimento — transcrição VERBATIM do print de 11/09/2026 (Gustavo):
     três planos, card recomendado, tabela comparativa e nota de rodapé. A
     ordem dos 12 itens é a mesma nos três cards e na tabela. O combo de
     setembro saiu; não há plano online. paymentNote = a frase de empenho do
     briefing de setembro, mantida por decisão do Gustavo (11/09). */
  plans: {
    title: "Três planos de participação",
    lead: "O mesmo curso, com três níveis de experiência. O PremiumClass é o plano recomendado: capacitação em 4 dias e a agenda completa fora da sala de aula.",
    items: [
      {
        name: "BasicClass",
        sub: "Investimento por aluno",
        price: "R$ 2.980,00",
        features: planoFeatures(BASIC),
        ctaLabel: "Quero o BasicClass",
      },
      {
        name: "MasterClass",
        sub: "Investimento por aluno",
        price: "R$ 3.200,00",
        features: planoFeatures(MASTER),
        ctaLabel: "Quero o MasterClass",
      },
      {
        name: "PremiumClass",
        sub: "Investimento por aluno",
        price: "R$ 3.980,00",
        highlighted: true,
        highlightLabel: "Recomendado",
        features: planoFeatures(PREMIUM),
        ctaLabel: "Quero o PremiumClass",
      },
    ],
    featured: {
      highlightLabel: "★ Plano recomendado",
      title: "PremiumClass: a experiência completa em Curitiba",
      desc: "Quatro dias de capacitação prática e uma agenda pensada para quem vem de fora: city tour, almoço no Madalosso, mentoria individual com o corpo docente e benefícios que seguem com o aluno depois da turma.",
      chips: [
        "Tour Linha Turismo Curitiba",
        "Almoço no Madalosso",
        "Mentoria exclusiva VIP",
        "Kit exclusivo",
        "3 meses de Assinatura Premium",
        "1 semestre de graduação",
        "UNYPOINTS na UNY store",
      ],
      priceLabel: "Investimento por aluno",
      price: "R$ 3.980,00",
      priceNote: "4 dias · benefícios inclusos",
      ctaPrimary: { href: "#inscricao", label: "Quero o PremiumClass" },
      ctaSecondary: { href: "#inscricao", label: "Falar com consultor" },
    },
    comparison: {
      itemsLabel: "Benefícios",
      columns: [
        { name: "BasicClass", price: "R$ 2.980,00", sub: "Capacitação em 3 dias" },
        { name: "MasterClass", price: "R$ 3.200,00", sub: "Capacitação em 4 dias" },
        {
          name: "PremiumClass",
          price: "R$ 3.980,00",
          sub: "4 dias + experiência completa",
          highlighted: true,
        },
      ],
      rows: [
        ...PLANO_ITENS.map((label, i) => ({
          label,
          cells: [BASIC[i], MASTER[i], PREMIUM[i]],
        })),
        {
          label: "Valores",
          cells: ["R$ 2.980,00", "R$ 3.200,00", "R$ 3.980,00"],
        },
      ],
    },
    paymentNote:
      "Aceitamos nota de empenho, com prazo de pagamento de 7 dias após a finalização do curso. Fornecemos toda a documentação necessária para a contratação pelo seu órgão. Pessoa física pode se inscrever por qualquer forma de pagamento.",
    batchNote: "Inscrições até o dia do curso.",
    footnote:
      "Valores por aluno: Benefícios do PremiumClass (tour, almoço, assinatura premium, semestre de graduação, kit exclusivo e UNYPOINTS) são concedidos na confirmação da matrícula e não são convertidos em desconto.",
    ctaLabel: "Receber proposta",
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
    meta: "Turma de 24 a 27/11 em Curitiba · Empenho leva tempo no seu órgão — comece o processo agora.",
    bgSrc: "/engenharia-nov26/cta-final.jpg",
    // BLOQUEIO DE PUBLICAÇÃO: o slug `engenharia-nov26` (campo `produto`
    // abaixo) precisa estar no mapa de cursos do n8n antes de a página receber
    // tráfego, senão o lead entra como "Curso não identificado".
    formId: "lp-engenharia-nov26",
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
    // Chave pela qual o mapa de cursos do n8n identifica a TURMA (separada da
    // de setembro). Grafia do produto no Omie: "Soluções práticas de
    // engenharia e Urbanismo".
    produto: "engenharia-nov26",
    paginaOrigem: "engenharia-nov26",
    // Token da vertical no título do lead: LP|engenharia|s=…|c=…|x=…|f=…
    // (a turma se distingue por utm_campaign = engenharia-nov26 e pelo formId).
    tituloProduto: "engenharia",
  },

  /* Rodapé replicado da /licitacao-out26 (mesma parceira e mesmas redes). */
  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    partners: [
      // invert: o logo original é escuro — em marca branca sobre o rodapé.
      {
        src: "/engenharia-nov26/parceiros/faculdade-unypublica.png",
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
    priceAnchor: "a partir de R$ 2.980",
    label: "Receber proposta",
    href: "#inscricao",
  },
};
