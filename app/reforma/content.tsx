import type { LpContent } from "@/components/lp/types";

const muni = (slug: string, nome: string) => ({
  slug,
  nome,
  bgSrc: `/reforma/muni/${slug}-bg.jpg`,
  logoSrc: `/reforma/muni/${slug}-logo.png`,
});

export const reformaContent: LpContent = {
  navbar: {
    logoSrc: "/reforma/logo-unyflex.png",
    logoAlt: "Unyflex",
    links: [
      { href: "#para-quem", label: "Para quem" },
      { href: "#o-curso", label: "O curso" },
      { href: "#modulos", label: "Módulos" },
      { href: "#presencial", label: "Presencial" },
      { href: "#inscricao", label: "Inscrição" },
    ],
    ctaLabel: "Garanta sua vaga",
  },

  hero: {
    bgSrc: "/reforma/hero-bg.jpg",
    title: (
      <>
        Passo a passo para preparar seu município para a{" "}
        <u>Reforma Tributária</u>.
      </>
    ),
    subtitle:
      "Curso presencial em Curitiba para quem precisa entender os novos tributos, adaptar rotinas, organizar a transição e proteger a arrecadação municipal diante das mudanças que já começaram.",
    tags: "Fiscalização • arrecadação • cadastro econômico • gestão tributária • estratégia municipal",
    ctaLabel: "Garanta sua vaga",
    microcopy: "04 a 07 de agosto de 2026 • 17 horas • Curitiba-PR",
  },

  paraQuem: {
    band: {
      bgSrc: "/reforma/para-quem-bg.jpg",
      title:
        "Para quem está sendo cobrado por respostas que ainda não vieram prontas.",
      text: "A Reforma Tributária já saiu do debate teórico. Agora ela chegou à rotina dos municípios. Enquanto a transição avança, surgem perguntas que afetam diretamente arrecadação, fiscalização, cadastro econômico e planejamento financeiro.",
    },
    cards: [
      {
        imgSrc: "/reforma/card-1.jpg",
        title: "Responder ao impacto da reforma",
        items: [
          "Impacto na arrecadação.",
          "IBS e CBS na prática.",
          "Decisões para orientar a gestão.",
        ],
      },
      {
        imgSrc: "/reforma/card-2.jpg",
        title: "Preparar a operação do município",
        items: [
          "Evolução dos cadastros.",
          "Adaptação das rotinas administrativas.",
          "Planejamento para a transição.",
        ],
      },
    ],
    closing: (
      <>
        Este curso foi desenvolvido para quem precisa{" "}
        <strong>transformar incerteza em plano de ação.</strong>
      </>
    ),
    ctaLabel: "Garanta sua vaga",
  },

  oCurso: {
    heading: "O que este curso ajuda você a estruturar na prática.",
    lead: "Mais clareza para compreender as mudanças, organizar equipes e construir uma estratégia de adaptação para o município.",
    items: [
      {
        title: "Novos tributos",
        desc: "Entenda como IBS, CBS, IS e IVS impactam a realidade municipal.",
      },
      {
        title: "Arrecadação e fiscalização",
        desc: "Compreenda como as rotinas operacionais serão afetadas pelo novo modelo.",
      },
      {
        title: "Cadastro econômico",
        desc: "Prepare as bases cadastrais para os novos fluxos de informação.",
      },
      {
        title: "Gestão da transição",
        desc: "Construa um plano para acompanhar as mudanças entre 2026 e 2033.",
      },
    ],
    imgSrc: "/reforma/o-curso.jpg",
    imgAlt:
      "Servidor analisando documentos e indicadores financeiros em sua mesa de trabalho",
    ctaLabel: "Garanta sua vaga",
  },

  abordagem: {
    band: {
      bgSrc: "/reforma/abordagem-bg.jpg",
      title: "A Reforma Tributária exige mais do que entendimento conceitual.",
      text: "Você precisa saber como ela afeta arrecadação, fiscalização, cadastros e decisões administrativas do município.",
    },
    slides: [
      {
        title: "Foco municipal",
        desc: "Conteúdo voltado à realidade das prefeituras e seus desafios operacionais.",
      },
      {
        title: "Aplicação prática",
        desc: "Discussão de procedimentos, rotinas e impactos concretos.",
      },
      {
        title: "Estratégia de transição",
        desc: "Planejamento para os próximos anos da implementação.",
      },
      {
        title: "Gestão pública",
        desc: "Linguagem compatível com a administração municipal.",
      },
    ],
    carouselAriaLabel: "Como o curso aborda a transição",
  },

  modulos: {
    heading: "Os 6 módulos do curso.",
    modulos: [
      {
        n: "Módulo 1",
        title: "A Reforma Tributária e o Novo Federalismo Fiscal",
        desc: "Entenda os fundamentos da reforma e os impactos para a distribuição de competências e receitas.",
      },
      {
        n: "Módulo 2",
        title: "Os Novos Tributos na Prática",
        desc: "IBS, CBS, IS e IVS aplicados ao cotidiano municipal.",
      },
      {
        n: "Módulo 3",
        title: "O IVA Dual Brasileiro",
        desc: "Estrutura, funcionamento e efeitos na gestão tributária.",
      },
      {
        n: "Módulo 4",
        title: "Fiscalização, Arrecadação e Rotinas Administrativas",
        desc: "Adequações necessárias para operação do novo sistema.",
      },
      {
        n: "Módulo 5",
        title: "Cadastro Econômico e Cadastro Financeiro",
        desc: "Organização das informações que sustentarão a arrecadação municipal.",
      },
      {
        n: "Módulo 6",
        title: "Transição, Riscos e Estratégias Municipais de Adaptação",
        desc: "Planejamento prático para os desafios de 2026 a 2033.",
      },
    ],
    imgSrc: "/reforma/modulos.jpg",
    imgAlt:
      "Instrutor conduzindo a capacitação presencial sobre a Reforma Tributária",
    ctaLabel: "Garanta sua vaga",
  },

  presencial: {
    imgSrc: "/reforma/presencial.jpg",
    imgAlt: "Participantes durante a capacitação presencial, atentos à aula",
    title: "Aprenda discutindo os desafios reais do seu município.",
    text: "A transição para o novo sistema tributário exige interpretação, debate e troca de experiências.",
    lead: "No formato presencial, você consegue:",
    items: [
      "Tirar dúvidas diretamente com os especialistas.",
      "Discutir cenários reais da sua prefeitura.",
      "Comparar estratégias adotadas por outros municípios.",
      "Construir uma visão mais clara da transição.",
    ],
  },

  resultados: {
    heading: "Presença construída na gestão pública.",
    text: "A Unyflex atua com capacitações voltadas à rotina de órgãos, equipes e profissionais que precisam se preparar, adaptar rotinas e decidir com mais segurança.",
    municipios: [
      muni("curitiba", "Câmara de Curitiba"),
      muni("maringa", "Prefeitura de Maringá"),
      muni("araucaria", "Prefeitura Municipal de Araucária/PR"),
      muni("campo-largo", "Prefeitura Municipal de Campo Largo"),
      muni("pinhais", "Prefeitura Municipal de Pinhais/PR"),
      muni("umuarama", "Prefeitura de Umuarama"),
    ],
  },

  faq: {
    heading: "Perguntas frequentes",
    items: [
      {
        q: "Este curso é voltado apenas para fiscais de tributos?",
        a: "Não. Também é indicado para secretários de Fazenda, equipes de arrecadação, cadastro econômico, gestão tributária e demais profissionais envolvidos na adaptação municipal.",
      },
      {
        q: "O curso aborda apenas conceitos da Reforma Tributária?",
        a: "Não. O foco está na aplicação prática das mudanças na realidade dos municípios.",
      },
      {
        q: "O conteúdo trata da transição prevista para os próximos anos?",
        a: "Sim. O curso aborda estratégias de adaptação e planejamento para o período de transição.",
      },
      {
        q: "Recebo certificado?",
        a: "Sim. Todos os participantes recebem certificado de conclusão.",
      },
      {
        q: "Os materiais ficam disponíveis após o curso?",
        a: "Sim. O acesso aos materiais didáticos é ilimitado.",
      },
      {
        q: "Onde será realizado?",
        a: "Em Curitiba-PR.",
      },
    ],
  },

  ctaFinal: {
    bgSrc: "/reforma/cta-final-bg.jpg",
    title: "A transição já começou. Seu município está preparado?",
    text: "Participe de uma capacitação focada na realidade municipal e construa um plano mais claro para enfrentar as mudanças da Reforma Tributária.",
    microcopy:
      "04 a 07 de agosto de 2026 • Curitiba-PR • 17 horas • Certificado incluído",
    formId: "lp-reforma-tributaria",
    submitLabel: "Garanta sua vaga",
  },

  footer: {
    logoSrc: "/reforma/logo-unyflex.png",
    logoAlt: "Unyflex",
    copyright: "© Unyflex 2026",
  },

  stickyCta: {
    label: "Garanta sua vaga",
  },
};
