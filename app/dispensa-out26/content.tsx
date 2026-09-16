import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* Os 12 itens da tabela de preços, na ordem do print de 11/09/2026. Os três
   vetores dizem o que cada plano inclui — servem aos cards E à tabela, para as
   duas nunca divergirem. Bloco idêntico ao da /engenharia-nov26 (a tabela é a
   mesma para todos os cursos — briefing de 16/09/2026). */
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

   Dispensa e Inexigibilidade Eletrônicas + MEI por Credenciamento + Estrutura
   do SICX — turma de 13 a 16/10/2026 (/dispensa-out26). Estrutura, componentes
   e instrumentação da /engenharia-nov26 (a referência do briefing de 16/09/2026).

   FONTES:
   1. Documento 1 do briefing de 16/09/2026 — descrição, 6 módulos (itens
      verbatim, só ortografia/espaçamento), professores (fatos das bios),
      público-alvo, datas e carga horária.
   2. app/engenharia-nov26/content.tsx — ticker, reviews, Investimento (3 planos,
      card recomendado, tabela, rodapé), "Como seu órgão contrata", as 3 FAQs
      fixas (empenho/PF, documentação, online), formulário, rodapé, stickyCta.
   3. Catálogo de fotos já no repositório (sede em Curitiba) — galeria, hero e
      CTA. Alt de imagem é acessibilidade, não copy.

   COPY ESCRITA NESTA PR (pedida pelo briefing §conteudo_de_cada_lp, para
   revisão do Gustavo): hero.title, hero.subtitle, audience (títulos e
   descrições dos 4 cards, closing), problem (4 citações), speakers.title e as
   bios reescritas, modules.title, as FAQs 1–6, form.meta.

   INSTRUMENTAÇÃO: formId lp-dispensa-out26 · produto dispensa-out26 (chave a
   cadastrar no mapa de cursos do n8n ANTES de rodar tráfego) · título do lead
   LP|dispensa-out26|s=…|c=…|x=…|f=lp-dispensa-out26 (lib/lp/lead.ts; o token
   é o slug, por instrução do briefing — sem tituloProduto). */

export const dispensaOut26Content: EventLpContent = {
  /* O accent (#00aeef, ciano — vertical Licitações) NÃO é definido aqui:
     todos os tokens de cor da LP vivem em ./theme.css. */

  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    links: [
      { href: "#para-quem", label: "Para quem" },
      { href: "#problema", label: "Desafios" },
      { href: "#modulos", label: "Programação" },
      { href: "#planos", label: "Investimento" },
      { href: "#como-contratar", label: "Como contratar" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: { href: "#inscricao", label: "Receber proposta" },
  },

  hero: {
    // O CSS do eyebrow (.lp2-eyebrow) já aplica uppercase.
    eyebrow: "Curso presencial em Curitiba · 13 a 16/10 · 17 horas",
    // Headline em 2 linhas e subheadline em 3 a >=1440px (regra de 16/09; medido
    // no preview com o texto injetado no h1, nao estimado por contagem).
    title: (
      <>
        Compra direta mudou. <Kw>Quem erra, assina.</Kw>
      </>
    ),
    subtitle:
      "Contrata+Brasil, MEI por credenciamento, dispensa e inexigibilidade eletrônicas e o SICX (Lei 15.266/2025): o roteiro formal da compra direta, passo a passo, com quem opera a plataforma.",
    audiences:
      "Pregoeiro e agente de contratação · analista de licitações e contratos · procurador e assessor jurídico · controle interno e auditoria · fiscal e gestor de contrato · chefia de compras",
    // Sem href ⇒ o CTA vai para #inscricao.
    cta: { label: "Quero receber a programação com nota de empenho" },
    meta: "Rua Voluntários da Pátria, 547 · Centro, Curitiba/PR · Certificado emitido pela Faculdade Unypública, IES credenciada no MEC",
    // Sala de aula da sede em Curitiba, vista do corredor central (mesmo
    // arquivo do CTA da /engenharia-nov26, luma média 75 — sem ganho de gama).
    // É o LCP da página — o layout da rota faz o preload.
    bgSrc: "/dispensa-out26/hero.jpg",
  },

  ticker: {
    metrics: [
      { value: "49.000+", label: "alunos formados" },
      { value: "1.200+", label: "órgãos atendidos" },
      { value: "5,0", label: "no Google · +450 avaliações" },
      { value: "17", label: "horas de capacitação" },
    ],
  },

  /* 4 cards a partir do público-alvo do documento, agrupando perfis próximos.
     variant "grid": todos visíveis de uma vez, como filtro de autoqualificação. */
  audience: {
    title: "Este curso é para quem responde pela compra direta",
    variant: "grid",
    groups: [
      {
        id: "operacao",
        label: "Pregoeiros e Agentes de Contratação",
        description:
          "Quem operacionaliza dispensa e inexigibilidade eletrônicas em prefeituras e autarquias, e os analistas e assessores de licitações e contratos de secretarias e governos estaduais.",
      },
      {
        id: "juridico",
        label: "Procuradoria e Assessoria Jurídica",
        description:
          "Procuradores e assessores que emitem parecer sobre dispensa, inexigibilidade e credenciamento — e respondem pela espécie escolhida.",
      },
      {
        id: "controle",
        label: "Controle Interno e Fiscalização",
        description:
          "Controladores internos e auditores que fiscalizam contratações diretas; fiscais e gestores de contrato que acompanham credenciamentos de MEI.",
      },
      {
        id: "compras",
        label: "Chefias de Compras e Suprimentos",
        description:
          "Diretores e chefias que coordenam a implantação do SICX e a adesão do município ao comércio eletrônico público.",
      },
    ],
    closing:
      "Serve também para secretários e ordenadores de despesa que ratificam a contratação direta — mas o centro do curso é quem instrui e opera o processo.",
  },

  /* 4 citações curtas, no tom de um servidor falando (briefing). O grid vira
     2×2 via theme.css (o template assume 6–10 cards). */
  problem: {
    title: "Se alguma dessas frases podia ser sua, o curso é seu",
    items: [
      {
        title: "A plataforma mudou e ninguém avisou",
        desc: "“Eu fazia a dispensa do meu jeito há anos. Agora é Contrata+Brasil, IN 52, credenciamento de MEI — e eu não sei o que ainda vale do meu roteiro.”",
      },
      {
        title: "A espécie errada vira apontamento",
        desc: "“Toda dispensa que eu instruo volta do jurídico com dúvida: era dispensa, era inexigibilidade, era fracionamento? Ninguém quer assinar a ratificação.”",
      },
      {
        title: "A cotação de preço não para em pé",
        desc: "“Três orçamentos por e-mail e pronto. Depois o Tribunal pergunta por que não usei o painel de preços, e eu não tenho resposta no processo.”",
      },
      {
        title: "SICX: todo mundo fala, ninguém sabe operar",
        desc: "“Dizem que o município vai comprar por marketplace público. Não sei o que a Lei 15.266 exige de mim, nem por onde começa a adesão.”",
      },
    ],
  },

  /* Programação VERBATIM do documento 1 (6 módulos), na ordem do documento.
     O componente numera 01–06, por isso os títulos entram sem o prefixo
     "Módulo N -". Itens com subitens a), b)… ficam numa string só, como no
     documento. Só ortografia e espaçamento foram corrigidos. */
  modules: {
    title: "Em 17 horas, do Contrata+Brasil ao SICX",
    items: [
      {
        title: "Plataforma Contrata+Brasil e IN 52/2025",
        topics: [
          "Introdução à Plataforma Contrata+Brasil: conceito e funcionalidades",
          "Objetivos e principais diretrizes da IN 52/2025",
          "Diferenças em relação às normativas anteriores",
          "Impactos da IN 52/2025 para Administração Pública e fornecedores",
          "Credenciamento de MEI e MPE pela Plataforma Contrata+Brasil",
          "Cadastro e habilitação de órgãos públicos e fornecedores",
          "Novidades nos processos de cotação e contratação",
          "Critérios de julgamento e habilitação de fornecedores",
          "Transparência e controle social nas contratações públicas",
          "Desafios e boas práticas: casos de sucesso e perspectivas futuras",
        ],
      },
      {
        title: "Roteiro Formal das Compras Diretas",
        topics: [
          "Exigência de processo formal",
          "Agente público responsável pelo procedimento",
          "Estudos Técnicos Preliminares",
          "Cotação de preços: a) nas dispensas (preços de mercado); b) nas inexigibilidades (preços de mercado/entre os do fornecedor)",
          "Verificação da existência de dotação orçamentária",
          "Parecer jurídico: a) exigido; b) dispensado",
          "Ratificação da autoridade",
          "A participação de ME e EPP",
          "Exigência ou não de contrato (serviços e/ou compras)",
          "Publicação do resultado",
          "Cuidados e recomendações: a) verificações obrigatórias; b) revisões preventivas; c) regulamentações necessárias",
        ],
      },
      {
        title: "Compras Diretas — Sem Licitação",
        topics: [
          "Conceito e fundamentação legal",
          "Espécies processuais: a) dispensa e inexigibilidade; b) fornecedor exclusivo; c) serviços/profissionais técnicos especializados; d) artistas; e) valor do objeto; f) circunstâncias (emergência etc.); g) excepcionalidade do objeto; h) deserção ou fracasso; i) pessoa do contratado; j) órgãos públicos; k) pesquisa e desenvolvimento",
          "Irregularidades a serem evitadas: a) inaplicabilidade da contratação direta; b) escolha errônea da espécie; c) erros processuais/procedimentais comuns; d) fracionamentos e parcelamentos irregulares",
        ],
      },
      {
        title: "Dispensa e Inexigibilidade Eletrônicas",
        topics: [
          "Normatizações exigidas pela Lei 14.133/21",
          "Regulamentações locais",
          "Fornecimento das normativas para uso local",
          "Passo a passo na operacionalização",
          "Processo físico de dispensa",
          "Regulamento federal (IN 67/2021)",
          "Roteiro processual",
          "Falhas recorrentes",
          "Riscos e cuidados",
          "Tira-dúvidas e recomendações",
        ],
      },
      {
        title: "Fundamentos Legais e Estruturais do SICX",
        topics: [
          "Evolução da Lei de Licitações (Lei nº 14.133/2021) e criação do SICX",
          "Origem do SICX na Lei nº 15.266/2025 e seus objetivos estratégicos",
          "Art. 79: comércio eletrônico como hipótese de credenciamento",
          "Diferença entre compras tradicionais e compras expressas",
          "Conceito de bens e serviços comuns padronizados",
          "Regulamentação",
          "Condições de admissão e permanência de fornecedores (art. 87)",
          "Regras para inclusão de bens e serviços e formação de preços digitais",
          "Prazos de entrega, recebimento e condições de pagamento (limite de 30 dias)",
          "Sanções aplicáveis e relação com os arts. 155 a 163 da Lei de Licitações",
        ],
      },
      {
        title: "Implementação e Operacionalização do SICX",
        topics: [
          "Procedimentos para adesão municipal ao SICX",
          "Passo a passo para credenciamento de fornecedores",
          "Integração obrigatória com o PNCP (art. 87)",
          "Funcionalidades do SICX previstas no art. 174",
          "Sistemas eletrônicos e integração com plataformas públicas e privadas (art. 175)",
          "Gestão de contratos e compras via marketplace público",
          "Monitoramento de preços e indicadores de eficiência",
          "Inclusão de micro e pequenas empresas nas contratações públicas",
          "Gestão de riscos e prevenção de fraudes no ambiente digital",
          "O que se pode esperar do SICX?",
        ],
      },
    ],
  },

  /* Bancada com 2 professores (documento 1). Sem foto no repositório para
     nenhum dos dois → monograma do template (não usar foto anônima do
     catálogo em professor nomeado). Bios reescritas em até 4 linhas com os
     fatos do documento; nota e horas na última frase. O grid de 3 colunas
     vira 2 via theme.css. */
  speakers: {
    title: "Quem ensina emite o parecer e opera a plataforma",
    items: [
      {
        name: "José Augusto Alexandria Alves",
        institution: "PROCURADOR · CÂMARA MUNICIPAL DE CURITIBA",
        photoSrc: null,
        bio: "Procurador efetivo da Câmara Municipal de Curitiba, atua em licitações e contratos administrativos. Pós-graduado em Direito Público, Trabalho e Previdenciário (Anhanguera-Uniderp), graduado em Direito (Universidade de Cuiabá). 552+ horas de aula na Unyflex, avaliação 9,6.",
      },
      {
        name: "Aluísio Henrique Ferreira",
        institution: "PROCURADOR JURÍDICO · CÂMARA MUNICIPAL DE NOVO ITACOLOMI/PR",
        photoSrc: null,
        bio: "Advogado e procurador jurídico da Câmara Municipal de Novo Itacolomi/PR. Doutorando em Direito do Trabalho (Universidad de Buenos Aires), mestre em Ciências Jurídicas (CESUMAR), especialista em Direito Constitucional, Penal e Processual Penal, Eleitoral e Trabalhista. Professor e coordenador de cursos de Direito na FAP, FAFIMAN e UNOPAR entre 2005 e 2021; autor e coautor de obras jurídicas. 36+ horas de aula na Unyflex, avaliação 9,5.",
      },
    ],
  },

  /* Galeria (pedido do Bruno: mais fotos da sede). Nove fotos reais da sala
     de aula da Unyflex em Curitiba já existentes no repositório — as seis da
     /engenharia-nov26 mais três de outras rotas (patrimonio/hero,
     reforma/abordagem-bg e reforma/card-2), reprocessadas a 1000px.
     Múltiplo de 3 (o grid é CSS columns: 3). Ficaram de fora: a linha
     LicitaExpo (salão de hotel — outro produto), fotos stock/IA e as fotos com
     slide legível de outro curso. Título reusado da referência. */
  gallery: {
    title: "A experiência presencial",
    photos: [
      {
        src: "/dispensa-out26/galeria/turma-01.jpg",
        alt: "Turma posada em pé na sala de aula da Unyflex, em Curitiba, ao fim de um curso presencial.",
        width: 1000,
        height: 750,
      },
      {
        src: "/dispensa-out26/galeria/professor-01.jpg",
        alt: "Professora à frente da sala, explicando o conteúdo para a turma.",
        width: 1000,
        height: 750,
      },
      {
        src: "/dispensa-out26/galeria/alunos-01.jpg",
        alt: "Duas alunas acompanhando a aula, com notebook e material sobre a mesa.",
        width: 1000,
        height: 750,
      },
      {
        src: "/dispensa-out26/galeria/sala-01.jpg",
        alt: "Sala de aula vista do fundo durante a aula: alunos sentados e o professor junto ao telão.",
        width: 1000,
        height: 750,
      },
      {
        src: "/dispensa-out26/galeria/alunos-02.jpg",
        alt: "Alunos em aula na sala clara da Unyflex, com copos e o kit do curso sobre as mesas.",
        width: 1000,
        height: 750,
      },
      {
        src: "/dispensa-out26/galeria/turma-02.jpg",
        alt: "Grupo de alunos posando diante da TV com a marca Unyflex, na sala de aula.",
        width: 1000,
        height: 750,
      },
      {
        src: "/dispensa-out26/galeria/sala-02.jpg",
        alt: "Professor com microfone de cabeça conduzindo a aula para uma turma pequena.",
        width: 1000,
        height: 750,
      },
      {
        src: "/dispensa-out26/galeria/professor-02.jpg",
        alt: "Professor em pé, gesticulando enquanto conduz a aula.",
        width: 1000,
        height: 750,
      },
      {
        src: "/dispensa-out26/galeria/alunos-03.jpg",
        alt: "Três alunos em mesa em L acompanhando a aula, com copos e crachás.",
        width: 1000,
        height: 750,
      },
    ],
  },

  /* Avaliações públicas do Google, texto integral e nomes como publicados —
     reutilizadas da referência (briefing: "Depoimentos: reutilize os da
     referência"). Foto de turma em sala, também da referência. */
  reviews: {
    rating: "5,0",
    ratingValue: 5,
    volume: "+450 avaliações",
    sourceLabel: "Google",
    photo: {
      src: "/dispensa-out26/turma.jpg",
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

  /* Investimento — bloco IDÊNTICO ao da /engenharia-nov26 (tabela de preços
     única para todos os cursos, briefing de 16/09/2026): três planos, card
     recomendado, tabela comparativa e nota de rodapé. Sem plano online (a
     modalidade continua como campo do formulário). */
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

  /* "Como seu órgão contrata" — verbatim da referência. */
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

  /* FAQ: 1–6 adaptadas ao curso (a partir dos módulos e do público do
     documento); 7–9 fixas, verbatim da referência (empenho/PF, documentação
     e online). */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Meu órgão ainda não usa o Contrata+Brasil. O curso serve?",
        a: "Serve — é por aí que o curso começa. O primeiro módulo cobre o cadastro e a habilitação de órgãos e fornecedores na plataforma, o credenciamento de MEI e MPE e o que a IN 52/2025 muda em relação às normativas anteriores.",
      },
      {
        q: "Sou pregoeiro, não sou do jurídico. A parte de parecer é pesada?",
        a: "O curso é feito para quem instrui e opera o processo. O parecer jurídico entra como uma etapa do roteiro formal — quando é exigido, quando é dispensado e o que precisa estar no processo antes dele.",
      },
      {
        q: "Vou sair com modelos e normativas prontos?",
        a: "Sim. O módulo de dispensa e inexigibilidade eletrônicas inclui o fornecimento das normativas para uso local, o roteiro processual passo a passo e a lista de falhas recorrentes a evitar.",
      },
      {
        q: "O SICX já vale para o meu município? Por que estudar agora?",
        a: "O SICX foi criado pela Lei 15.266/2025, e dois módulos do curso tratam dele: os fundamentos legais (credenciamento, admissão de fornecedores, prazos e sanções) e o passo a passo da adesão municipal e da integração com o PNCP.",
      },
      {
        q: "Serve para município pequeno, onde uma pessoa faz tudo?",
        a: "É o público principal. O roteiro formal das compras diretas foi desenhado para quem acumula cotação, instrução, publicação e fiscalização.",
      },
      {
        q: "Serve para Câmara Municipal e autarquia?",
        a: "Sim. Dispensa, inexigibilidade e credenciamento seguem a mesma Lei 14.133 em qualquer órgão, e os dois professores atuam em procuradorias de Câmaras Municipais.",
      },
      {
        q: "Posso pagar com nota de empenho? E como pessoa física?",
        a: "Nota de empenho com pagamento em 7 dias após o curso. Pessoa física paga por PIX, cartão ou boleto.",
      },
      {
        q: "Que documentos vocês enviam para a contratação?",
        a: "No primeiro contato: proposta formal em nome do órgão, CNPJ, declaração de notória especialização e singularidade (art. 74, III, “f”, da Lei 14.133), escopo de Termo de Referência para inexigibilidade e atestado de capacidade técnica.",
      },
      {
        q: "Tem opção online?",
        a: "Sim, ao vivo, com as mesmas aulas e transmissão em tempo real. Kit, coffee e vouchers são exclusivos do presencial.",
      },
    ],
  },

  form: {
    title: "Garanta sua participação",
    // O CSS do meta (.lp2-form-section__meta) já aplica caixa alta.
    meta: "Turma de 13 a 16/10 em Curitiba · Empenho leva tempo no seu órgão — comece o processo agora.",
    bgSrc: "/dispensa-out26/cta-final.jpg",
    // BLOQUEIO DE PUBLICAÇÃO: o slug `dispensa-out26` (campo `produto`
    // abaixo) precisa estar no mapa de cursos do n8n antes de a página receber
    // tráfego, senão o lead entra como "Curso não identificado".
    formId: "lp-dispensa-out26",
    submitLabel: "Receber proposta",
    thankYou: { url: "/obrigado", withPii: false },
    modalidade: {
      label: "Modalidade preferida",
      options: ["Presencial em Curitiba", "Online ao vivo"],
    },
    vinculo: {
      label: "Seu vínculo",
      // Mesmo select da referência: o toggle Sim/Não reprovava lead
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
    // Chave do mapa de cursos do n8n. Solução no Omie: "Dispensa e
    // Inexigibilidade Eletrônicas" (confirmar o id).
    produto: "dispensa-out26",
    paginaOrigem: "dispensa-out26",
    // Sem tituloProduto: o briefing manda o token do título ser o slug
    // (LP|dispensa-out26|s=…|c=…|x=…|f=lp-dispensa-out26).
  },

  /* Rodapé replicado da referência (mesma parceira e mesmas redes). */
  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    partners: [
      // invert: o logo original é escuro — em marca branca sobre o rodapé.
      {
        src: "/dispensa-out26/parceiros/faculdade-unypublica.png",
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
