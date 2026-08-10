import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp2/) não têm texto próprio. Uma LP nova no mesmo
   template = preencher um arquivo como este e escolher as seções opcionais. */

/* A ordem de PLANO_ITENS é a mesma nos 3 planos presenciais — as linhas se
   alinham visualmente entre os cards. Os arrays de booleans têm sempre o mesmo
   comprimento. */
const PLANO_ITENS = [
  "Acesso aos 4 dias + 6 painéis",
  "Certificado",
  "Kit escolar exclusivo",
  "6 coffee-breaks gourmet",
  "Almoço no Madalosso",
  "Voucher churrascaria",
  "Assinatura Premium",
  "Semestre de graduação",
  "Mochila de couro",
  "Mentoria exclusiva",
  "Bolsa de pós-graduação",
];

function planoFeatures(inclui: boolean[]) {
  return PLANO_ITENS.map((label, i) => ({ label, included: inclui[i] }));
}

export const licitaexpoV2Content: EventLpContent = {
  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    links: [
      { href: "#programacao", label: "Programação" },
      { href: "#bancada", label: "Bancada" },
      { href: "#planos", label: "Planos" },
    ],
    cta: { href: "#inscricao", label: "Garanta sua vaga" },
  },

  hero: {
    eyebrow: "SEMINÁRIO PRESENCIAL · CURITIBA",
    title: (
      <>
        Todo erro no processo tem um nome no papel. Geralmente é{" "}
        <Kw>o seu</Kw>.
      </>
    ),
    subtitle:
      "Os pontos onde o certame e a execução contratual travam — pesquisa de preços, ETP, TR, edital, parecer jurídico, julgamento de propostas, prorrogação e segregação de funções — mapeados para você decidir com respaldo, não no escuro.",
    audiences:
      "Licitações • compras • agente de contratação • pregoeiro • vereador • controle interno • jurídico",
    cta: { label: "Garanta sua vaga" },
    meta: "4 dias · 17 horas · Curitiba-PR · 24 a 27 de novembro de 2026",
    bgSrc: "/licitaexpo/hero.jpg",
  },

  /* 270+ e 98 vêm da prova social da LP atual (números auditados no histórico
     de inscritos); 49.000+ e 1.200+ vieram do briefing da reconstrução. */
  ticker: {
    metrics: [
      { value: "270+", label: "inscritos desde 2023" },
      { value: "49.000+", label: "alunos formados" },
      { value: "1.200+", label: "órgãos atendidos" },
      { value: "5,0", label: "no Google · +450 avaliações" },
    ],
  },

  audience: {
    title: "Feito para quem assina, decide ou fiscaliza a contratação.",
    lead: "Se o seu nome aparece no processo, o risco é seu.",
    groups: [
      {
        id: "conduz",
        label: "Quem conduz",
        description:
          "agente de contratação · pregoeiro · equipe de apoio · comissão de contratação",
      },
      {
        id: "fiscaliza",
        label: "Quem fiscaliza",
        description: "gestor e fiscal de contrato · controle interno · auditoria",
      },
      {
        id: "respalda",
        label: "Quem respalda",
        description:
          "assessor e procurador jurídico · contador · ordenador de despesas",
      },
      {
        id: "legislativo",
        label: "Legislativo",
        description:
          "servidores e agentes de Câmaras Municipais que licitam e contratam",
      },
    ],
    closing: <em>Servidores das esferas municipal, estadual e federal.</em>,
  },

  problem: {
    title: "As falhas que mais geram apontamento — uma a uma.",
    items: [
      {
        title: "O certame é um campo minado",
        desc: "pontos críticos, deficiências, restrições e direcionamento na fase interna e externa.",
      },
      {
        title: "As ciladas da execução contratual",
        desc: "os pontos nevrálgicos da gestão e fiscalização que mais viram responsabilização.",
      },
      {
        title: "Momento de alto risco: cesta de preços",
        desc: "como estruturar pesquisa de preços sem sobrepreço nem inexequibilidade.",
      },
      {
        title: "Atenção redobrada: ETP, TR e edital",
        desc: "elaborar com segurança técnica e jurídica.",
      },
      {
        title: "Perigo zero? O poder condicionado do parecer jurídico",
        desc: "onde termina a função consultiva e começa a sua responsabilidade.",
      },
      {
        title: "Tensão total: julgamento e desclassificação",
        desc: "reduzir subjetividade e prevenir desclassificação indevida.",
      },
      {
        title: "Prorrogação sem justificativa de vantajosidade",
        desc: "o que o controle exige que você demonstre.",
      },
      {
        title: "Violação da segregação de funções",
        desc: "como a concentração indevida de atribuições vira responsabilização.",
      },
    ],
  },

  schedule: {
    title: "Programação",
    days: [
      {
        label: "Dia 1",
        hours: "14h às 17h",
        panels:
          "Abertura: o certame como campo minado · As ciladas da execução contratual",
      },
      {
        label: "Dia 2",
        hours: "9h às 12h / 14h às 17h",
        panels: (
          <>
            Cesta de preços · ETP, TR e edital{" "}
            <em>(com dinâmica coletiva de fixação)</em>
          </>
        ),
      },
      {
        label: "Dia 3",
        hours: "9h às 12h / 14h às 17h",
        panels: (
          <>
            Parecer jurídico · Julgamento de propostas{" "}
            <em>(com dinâmica coletiva de fixação)</em>
          </>
        ),
      },
      {
        label: "Dia 4",
        hours: "9h às 11h",
        panels: "Prorrogação contratual · Segregação de funções",
      },
    ],
  },

  /* Manifesto sem atribuição: a headline da metodologia da LP atual,
     reposicionada como citação; o parágrafo da metodologia vira a linha de
     apoio. Nenhum depoimento inventado. */
  quote: {
    text: "Não é aula sobre a lei. É como o Tribunal lê a sua decisão.",
    support:
      "Exposição dialogada, análise de casos concretos, interpretação de decisões dos órgãos de controle e dinâmicas de fixação nos módulos de ETP/TR/edital e julgamento de propostas.",
    bgSrc: "/licitaexpo/para-quem.jpg",
  },

  speakers: {
    title: "Quem vai te ensinar já esteve onde você está.",
    lead: "Auditores, procuradores e consultores que conduziram, fiscalizaram e responderam por processos reais.",
    items: [
      {
        name: "Marcio José Assumpção",
        institution: "Tribunal de Contas do Estado do Paraná",
        photoSrc: "/licitaexpo/palestrantes/marcio-jose-assumpcao.jpg",
        bio: "Auditor do TCE/PR. Mestre em Administração e Finanças (Universidad de Extremadura). Contador público, ex-professor da Universidade Positivo, especialista em contabilidade aplicada ao setor público e auditoria.",
      },
      {
        name: "Rafael Costa Santos",
        institution: "Procurador-Chefe PGE/PR",
        photoSrc: "/licitaexpo/palestrantes/rafael-costa-santos.jpg",
        bio: "Procurador-Chefe da Procuradoria de Obras e Serviços de Engenharia da PGE/PR. Doutorando e Mestre em Direito (UFPR). Presidiu os grupos que regulamentaram a Lei 14.133/21 no Paraná. Autor pela Editora Fórum.",
      },
      {
        name: "Everson da Silva Biazon",
        institution: "Procurador do Estado do Paraná",
        photoSrc: "/licitaexpo/palestrantes/everson-da-silva-biazon.jpg",
        bio: "Procurador do Estado do Paraná, ex-Procurador-Chefe da Consultiva junto à Governadoria. Pós-graduado em Direito do Estado (UEL). Coautor de Direito Administrativo Sancionador nas Estatais. Professor de pós-graduação.",
      },
      {
        name: "Igor Pires Gomes da Costa",
        institution: "Procurador do Estado do Paraná",
        photoSrc: "/licitaexpo/palestrantes/igor-pires-gomes-da-costa.jpg",
        bio: "Procurador do Estado do Paraná. Mestre em Direito Público (Université de Nantes) e em Direito do Estado (UFPR). Pesquisa e publica sobre governança pública e gestão de riscos na nova Lei de Licitações.",
      },
      {
        name: "Gabriela Lira Borges",
        institution: "Consultora Jurídica e Parecerista",
        photoSrc: "/licitaexpo/palestrantes/gabriela-lira-borges.jpg",
        bio: "Mestre em Governança e Planejamento Público (UTFPR). Ex-Procuradora do Estado do Acre e ex-consultora da Zênite. Coautora de Horizontes e Perspectivas da Lei nº 14.133/2021 (Lumen Juris).",
      },
      {
        name: "Caroline de Souza",
        institution: "Tribunal de Contas do Estado de Santa Catarina",
        photoSrc: "/licitaexpo/palestrantes/caroline-de-souza.jpg",
        bio: "Mais de 23 anos de TCE/SC. Ex-Diretora da Diretoria de Licitações e Contratações, hoje Coordenadora Jurídica com ênfase na Lei 14.133/21. Palestrante nos Ciclos de Estudos do TCE/SC.",
      },
    ],
  },

  /* gallery (seção 08, OPCIONAL): desligada — os únicos assets fotográficos do
     evento já são usados como fundos. Para ligar, forneça fotos e descomente:
  gallery: {
    title: "A experiência presencial",
    photos: [
      { src: "/licitaexpo/galeria/foto-1.jpg", alt: "...", caption: "..." },
      { src: "/licitaexpo/galeria/foto-2.jpg", alt: "..." },
      { src: "/licitaexpo/galeria/foto-3.jpg", alt: "...", caption: "..." },
    ],
  },
  */

  plans: {
    title: "Escolha como quer viver o LicitaExpo.",
    lead: "Todos os planos dão acesso aos 4 dias, aos 6 painéis e ao certificado. A diferença está no que você leva além do conteúdo.",
    note: "O que protege sua decisão é o conteúdo — e ele é o mesmo em todos os planos. O restante é o que torna os quatro dias mais leves: alimentação, materiais e, nos planos superiores, formação que continua depois do evento.",
    items: [
      {
        name: "Online Ao Vivo",
        price: "R$ 2.000",
        badge: "100% online · ao vivo",
        features: [
          {
            label: "Acesso à transmissão ao vivo dos 4 dias + 6 painéis",
            included: true,
          },
          { label: "Certificado", included: true },
          {
            label: "Itens presenciais (coffee-breaks, almoço, kit e vouchers)",
            included: false,
          },
        ],
      },
      {
        name: "BasicClass",
        price: "R$ 3.300",
        features: planoFeatures([
          true, true, true, true, true, false, false, false, false, false, false,
        ]),
      },
      {
        name: "MasterClass",
        price: "R$ 3.800",
        highlighted: true,
        highlightLabel: "Mais escolhido",
        features: planoFeatures([
          true, true, true, true, true, true, true, true, false, false, true,
        ]),
      },
      {
        name: "PremiumClass",
        price: "R$ 5.200",
        features: planoFeatures([
          true, true, true, true, true, true, true, true, true, true, true,
        ]),
      },
    ],
    paymentNote: "Aceitamos empenho, cartão e PIX.",
    batchNote:
      "Estes são os valores do 1º lote. A partir de 25/10, o preço sobe 10%. Inscrições até 21/11.",
    ctaLabel: "Garanta sua vaga",
  },

  /* reviews (seção 10, OPCIONAL): desligada até existirem os dados reais do
     Google (nota, volume e 3 avaliações). NÃO publicar com dados inventados.
     Para ligar, preencha e descomente:
  reviews: {
    rating: "5,0",
    ratingValue: 5.0,
    volume: "+450 avaliações",
    sourceLabel: "Google",
    items: [
      { text: "[PLACEHOLDER] Texto da avaliação real.", author: "[PLACEHOLDER] Nome", role: "Cargo · Órgão" },
      { text: "[PLACEHOLDER] Texto da avaliação real.", author: "[PLACEHOLDER] Nome" },
      { text: "[PLACEHOLDER] Texto da avaliação real.", author: "[PLACEHOLDER] Nome" },
    ],
  },
  */

  /* compare (seção 11, OPCIONAL): desligada — com os fatos disponíveis a tabela
     teria só 3 linhas. As 3 linhas factuais já ficam prontas aqui:
  compare: {
    title: "Presencial ou online?",
    columns: ["Presencial", "Online Ao Vivo"],
    rows: [
      { label: "Acesso aos 4 dias + 6 painéis", a: true, b: true },
      { label: "Certificado", a: true, b: true },
      { label: "Coffee-breaks, almoço, kit e vouchers", a: true, b: false },
    ],
  },
  */

  /* FAQ nova (não existia na LP atual): 6 respostas 100% factuais, montadas com
     informações que já estão nesta página. */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Quando e onde acontece?",
        a: "De 24 a 27 de novembro de 2026, presencial em Curitiba-PR. São 4 dias e 17 horas de conteúdo, em 6 painéis.",
      },
      {
        q: "Para quem é o seminário?",
        a: "Para quem conduz (agente de contratação, pregoeiro, equipe de apoio, comissão de contratação), quem fiscaliza (gestor e fiscal de contrato, controle interno, auditoria), quem respalda (assessor e procurador jurídico, contador, ordenador de despesas) e para servidores e agentes de Câmaras Municipais que licitam e contratam — nas esferas municipal, estadual e federal.",
      },
      {
        q: "Posso participar online?",
        a: "Sim. O plano Online Ao Vivo (R$ 2.000) dá acesso à transmissão ao vivo dos 4 dias e dos 6 painéis, com certificado. Os itens presenciais (coffee-breaks, almoço, kit e vouchers) não estão incluídos.",
      },
      {
        q: "Qual a diferença entre os planos?",
        a: "Todos os planos dão acesso aos 4 dias, aos 6 painéis e ao certificado. A diferença está no que você leva além do conteúdo. A parceria com a Unyboss e a Faculdade Unypública é o que torna possível oferecer, nos planos MasterClass e PremiumClass, semestre de graduação e bolsa de pós — formação que continua depois que o seminário acaba.",
      },
      {
        q: "Até quando posso me inscrever?",
        a: "As inscrições vão até 21/11. Os valores do 1º lote valem até 24/10 — a partir de 25/10, o preço sobe 10%.",
      },
      {
        q: "Quais são as formas de pagamento?",
        a: "Aceitamos empenho, cartão e PIX.",
      },
    ],
  },

  form: {
    title: "Garanta sua vaga no LicitaExpo",
    meta: "4 dias · 17 horas · Curitiba-PR · 24 a 27 de novembro de 2026",
    bgSrc: "/licitaexpo/cta-final.jpg",
    // TODO na promoção a definitivo: trocar para "lp-licitaexpo" para continuar
    // a série do CRM. O id -v2 evita misturar leads de teste com produção.
    formId: "lp-licitaexpo-v2",
    submitLabel: "Garanta sua vaga",
    thankYou: { url: "/obrigado", withPii: false },
  },

  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    partnersLabel: "Uma iniciativa Unyflex, com Unyboss e Faculdade Unypública.",
    partners: [
      // invert: os logos originais são escuros — em marca branca sobre o rodapé.
      { src: "/licitaexpo/parceiros/unyboss.png", alt: "Unyboss", invert: true },
      {
        src: "/licitaexpo/parceiros/faculdade-unypublica.png",
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
    label: "Garanta sua vaga",
    href: "#inscricao",
  },
};
