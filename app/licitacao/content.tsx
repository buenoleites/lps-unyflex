import type { LpContent } from "@/components/lp/types";

const muni = (slug: string, nome: string) => ({
  slug,
  nome,
  bgSrc: `/imagens/muni/${slug}-bg.jpg`,
  logoSrc: `/imagens/muni/${slug}-logo.png`,
});

export const licitacaoContent: LpContent = {
  navbar: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    links: [
      { href: "#para-quem", label: "Para quem" },
      { href: "#o-curso", label: "O curso" },
      { href: "#modulos", label: "Módulos" },
      { href: "#presencial", label: "Presencial" },
      { href: "#inscricao", label: "Inscrição" },
    ],
    ctaLabel: "Garantir minha vaga",
  },

  hero: {
    bgSrc: "/imagens/hero_section/imagem_hero.jpg",
    title: (
      <>
        IA na fase preparatória sem perder{" "}
        <u>segurança técnica</u>.
      </>
    ),
    subtitle:
      "Curso presencial em Curitiba para quem precisa usar IA em DFD, ETP, TR e mapa de riscos sem gerar documentos genéricos ou perder segurança técnica.",
    tags: "Licitações • compras • agente de contratação • controle interno • jurídico",
    ctaLabel: "Garantir minha vaga",
    microcopy: "28 a 31 de julho • 17 horas • Curitiba-PR",
  },

  paraQuem: {
    band: {
      bgSrc: "/imagens/seção2/imagem_seção2_1.jpg",
      title: "Quem mais sente essa pressão no dia a dia.",
      text: "Capacitação para quem elabora, revisa ou sustenta documentos da fase preparatória na Lei 14.133, sob cobrança por mais critério, agilidade e segurança técnica.",
    },
    cards: [
      {
        imgSrc: "/imagens/seção2/imagem_seção2_2.jpg",
        title: "Quem monta os documentos",
        items: [
          "Licitações, compras e planejamento.",
          "Áreas técnicas que elaboram DFD, ETP e TR.",
          "Responsáveis por PCA e mapa de riscos.",
        ],
      },
      {
        imgSrc: "/imagens/seção2/imagem_seção2_3.jpg",
        title: "Quem revisa e sustenta o processo",
        items: [
          "Controle interno e assessoria jurídica.",
          "Chefias que respondem pelo processo.",
          "Quem precisa reduzir falhas e riscos de responsabilização.",
        ],
      },
    ],
    closing: (
      <>
        Este curso foi desenvolvido para quem precisa usar IA{" "}
        <strong>sem abrir mão da segurança técnica.</strong>
      </>
    ),
    ctaLabel: "Garantir minha vaga",
  },

  oCurso: {
    heading: "O que esse curso ajuda você a sustentar na prática.",
    lead: "Mais agilidade para estruturar DFD, ETP, TR e mapa de riscos sem abrir mão dos critérios técnicos.",
    items: [
      {
        title: "DFD e planejamento",
        desc: "Mais clareza para descrever demandas, necessidades e justificativas.",
      },
      {
        title: "ETP e TR",
        desc: "Mais critério para estruturar estudo, objeto, requisitos e obrigações.",
      },
      {
        title: "Mapa de riscos",
        desc: "Mais segurança para identificar riscos, respostas e responsabilidades.",
      },
    ],
    imgSrc: "/imagens/seção3/imagem_seção3.jpg",
    imgAlt: "Profissionais em capacitação sobre licitações com inteligência artificial",
    ctaLabel: "Garantir minha vaga",
  },

  abordagem: {
    band: {
      bgSrc: "/imagens/seção4/imagem_seção4.jpg",
      title:
        "Não basta pedir um documento para a IA. Você precisa sustentar o que ela entrega.",
      text: "O curso mostra como usar IA como apoio na fase preparatória — com prática, revisão humana e segurança técnica — sem terceirizar a decisão do servidor.",
    },
    slides: [
      {
        title: "Planejamento com IA",
        desc: "Organização de contexto, informações e caminhos da contratação.",
      },
      {
        title: "ETP e TR com IA",
        desc: "Apoio para estruturar estudos, requisitos, obrigações e critérios.",
      },
      {
        title: "Mapa de riscos com IA",
        desc: "Identificação, análise e respostas para riscos da contratação.",
      },
      {
        title: "Prática de prompts",
        desc: "Comandos melhores, revisão técnica e uso responsável da IA.",
      },
    ],
    carouselAriaLabel: "Como o curso aborda o uso de IA",
  },

  modulos: {
    heading: "Os 6 módulos do curso.",
    modulos: [
      {
        n: "Módulo 1",
        title: "PCA — Plano de Contratações Anual",
        desc: "Exigência legal, agentes envolvidos, modelos prontos e como implantar o PCA no seu órgão — com soluções de IA.",
      },
      {
        n: "Módulo 2",
        title: "Planejamento In Foco",
        desc: "Eficiência, gestão de riscos, transparência e os novos paradigmas da Lei 14.133 — com soluções de IA.",
      },
      {
        n: "Módulo 3",
        title: "Mapeamento de Riscos",
        desc: "Diferença entre mapa e matriz de riscos, fases de avaliação, identificação e monitoramento — com soluções de IA.",
      },
      {
        n: "Módulo 4",
        title: "ETP — Estudo Técnico Preliminar",
        desc: "Aplicabilidade, elementos constitutivos, atos complementares e aprovação do ETP — com soluções de IA.",
      },
      {
        n: "Módulo 5",
        title: "TR — Termo de Referência",
        desc: "Objeto, orçamentação, obrigações, gestão e fiscalização, sanções e aditivos — com soluções de IA.",
      },
      {
        n: "Módulo 6",
        title: "Prática de IA no Planejamento",
        desc: "Uso aplicado de IA no DFD, ETP, TR e Mapa de Riscos — consciência situacional e prompts para compras públicas.",
      },
    ],
    imgSrc: "/imagens/hero_section/imagem_hero.jpg",
    imgAlt: "Instrutor conduzindo a capacitação presencial sobre licitações com IA",
    ctaLabel: "Garantir minha vaga",
  },

  presencial: {
    imgSrc: "/imagens/seção2/imagem_seção2_1.jpg",
    imgAlt: "Participantes durante a capacitação presencial, atentos à aula",
    title: "Aprenda na prática, presencialmente em Curitiba.",
    text: "Quatro dias de capacitação com foco prático no uso de IA em documentos da fase preparatória da Lei 14.133.",
    lead: "No formato presencial, você tem:",
    items: [
      "17 horas de capacitação com aprofundamento técnico.",
      "4 dias de curso, de 28 a 31 de julho.",
      "Certificado de conclusão para o participante.",
      "Materiais didáticos com acesso ilimitado.",
    ],
  },

  resultados: {
    heading: "Presença construída na gestão pública.",
    text: "A Unyflex atua com capacitações voltadas à rotina de órgãos, equipes e profissionais que precisam licitar, revisar e decidir com mais segurança.",
    municipios: [
      muni("curitiba", "Câmara de Curitiba"),
      muni("maringa", "Prefeitura de Maringá"),
      muni("araucaria", "Prefeitura de Araucária/PR"),
      muni("campo-largo", "Prefeitura de Campo Largo"),
      muni("pinhais", "Pref. Municipal de Pinhais/PR"),
      muni("umuarama", "Prefeitura de Umuarama"),
    ],
  },

  faq: {
    heading: "Perguntas frequentes",
    items: [
      {
        q: "Para quem é esse curso?",
        a: "Para servidores que elaboram, revisam ou sustentam documentos da fase preparatória — licitações, compras, planejamento, controle interno e jurídico.",
      },
      {
        q: "Preciso já saber usar inteligência artificial?",
        a: "Não. O curso parte do uso prático e responsável da IA, do básico à aplicação em DFD, ETP, TR e mapa de riscos.",
      },
      {
        q: "O curso é teórico ou prático?",
        a: "Prático. O foco é aplicar a IA na rotina real da fase preparatória, sempre com revisão humana e segurança técnica.",
      },
      {
        q: "A IA não vai gerar documentos genéricos?",
        a: "O curso ensina justamente a evitar isso: usar a IA como apoio sem abrir mão do critério técnico e da decisão do servidor.",
      },
      {
        q: "Recebo certificado?",
        a: "Sim. Todos os participantes recebem certificado de conclusão, e os materiais ficam com acesso ilimitado.",
      },
      {
        q: "Onde e quando será realizado?",
        a: "Presencialmente em Curitiba-PR, de 28 a 31 de julho, com 17 horas de capacitação.",
      },
    ],
  },

  ctaFinal: {
    bgSrc: "/imagens/imagem_secaoCTA.png",
    title: "Garanta sua vaga para aprender IA aplicada às licitações.",
    text: "Preencha seus dados para demonstrar interesse na turma presencial de Licitações com Inteligência Artificial.",
    microcopy: "28 a 31 de julho • Curitiba-PR • 17 horas • Certificado incluído",
    formId: "lp-licitacao-ia",
    submitLabel: "Garantir minha vaga",
  },

  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    copyright: "© Unyflex 2026",
  },

  stickyCta: {
    label: "Garantir minha vaga",
  },
};
