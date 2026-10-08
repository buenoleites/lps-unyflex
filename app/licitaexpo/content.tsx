import type { Lp3Content } from "@/components/lp3/types";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp3/) não têm texto próprio.

   LicitaExpo · Blindagem nas Licitações e Contratos — seminário presencial,
   Curitiba-PR, 24 a 27/11/2026 (4 dias · 17 horas). Migração da página inline
   (template antigo, app/lp.css) para o lp3 em 06/10/2026.

   FONTES (nada aqui é de autoria do agente):
   1. Grade oficial de 06/10/2026 (Gustavo): nome oficial, datas, carga horária,
      lista e ordem dos 7 professores, programação por dia/horário, texto do
      certificado, regra do 1º lote, formato "presencial ou ● ao vivo".
   2. A própria LP anterior (app/licitaexpo/page.tsx até 06/10): título e
      subtítulo do topo, "Para quem", as 8 falhas (viram os tópicos da
      programação), prova social (270 inscritos / edições / 98 municípios),
      metodologia, planos e itens, bios de Everson, Rafael, Marcio, Gabriela e
      Igor, parceiros.
   3. Das LPs lp3 (/comunicacao-nov26): consentimento, rodapé, link da política.
   4. Briefings do Gustavo de 08/10/2026: Edilson Liberal (painel do Dia 3 14h,
      foto); instituição e bio são o texto exato do 2º briefing, a pedido do
      professor (sem citar a instituição onde trabalha).
   Jarbas Renê não estava na LP anterior: a bio é a enviada pelo Gustavo em
   06/10; a instituição resume a bio. Caroline de Souza saiu (grade de 06/10).
   Texto do certificado: o exato enviado em 06/10. */

/* Itens dos planos presenciais, na ordem da LP anterior. "6 painéis" saiu do
   primeiro item (decisão de 06/10: a grade tem 8 painéis em 7 blocos). */
const PLANO_ITENS = [
  "Acesso aos 4 dias",
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
const BASIC = [true, true, true, true, true, false, false, false, false, false, false];
const MASTER = [true, true, true, true, true, true, true, true, false, false, true];
const PREMIUM = [true, true, true, true, true, true, true, true, true, true, true];
function planoFeatures(inclui: boolean[]) {
  return PLANO_ITENS.map((label, i) => ({ label, included: inclui[i] }));
}

export const SLUG = "licitaexpo";
export const TITULO = "LicitaExpo";
export const SUBTITULO = "Blindagem nas Licitações e Contratos";
export const NOME_OFICIAL = `${TITULO} · ${SUBTITULO}`;
export const GANCHO = "Todo erro no processo tem um nome no papel. Geralmente é o seu.";
export const DESCRICAO =
  "Os pontos onde o certame e a execução contratual travam — pesquisa de preços, ETP, TR, edital, parecer jurídico, julgamento de propostas, prorrogação e segregação de funções — mapeados para você decidir com respaldo, não no escuro.";

export const licitaexpoContent: Lp3Content = {
  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    cta: { href: "#inscricao", label: "Garanta sua vaga" },
  },

  hero: {
    badge: "Inscrições abertas",
    // Nome oficial repartido: "Blindagem…" na linha de promessa (accent) e
    // "LicitaExpo" no título — o nome inteiro no h1 dava 4 linhas a 1440px
    // (regra do topo: até 2 de título, 3 de subtítulo, CTA dentro da dobra).
    // Subtítulo = o gancho da LP anterior + a frase da descrição sem a lista
    // de temas (eles estão na programação).
    promise: SUBTITULO,
    title: TITULO,
    subtitle: `${GANCHO} Os pontos onde o certame e a execução contratual travam, mapeados para você decidir com respaldo, não no escuro.`,
    dates: "24 a 27 de novembro de 2026",
    place: "Curitiba-PR · presencial ou ● ao vivo",
    facts: ["Seminário presencial", "4 dias", "17 horas", "Certificado emitido pela Faculdade Unypública, instituição credenciada pelo MEC"],
    bgSrc: `/${SLUG}/hero.jpg`,
    bgAlt: "Plenário do LicitaExpo em Curitiba",
    ctaPrimary: { href: "#inscricao", label: "Garanta sua vaga" },
  },

  /* Números já publicados na LP anterior (nenhum novo). */
  proof: {
    items: [
      "Mais de 270 inscritos",
      "Edições em 2023, 2024, 2025 e 2026",
      "98 municípios do Paraná e de Santa Catarina",
    ],
  },

  audience: {
    eyebrow: "Para quem",
    title: "Feito para quem assina, decide ou fiscaliza a contratação.",
    items: [
      {
        label: "Quem conduz",
        description: "agente de contratação · pregoeiro · equipe de apoio · comissão de contratação",
      },
      {
        label: "Quem fiscaliza",
        description: "gestor e fiscal de contrato · controle interno · auditoria",
      },
      {
        label: "Quem respalda",
        description: "assessor e procurador jurídico · contador · ordenador de despesas",
      },
      {
        label: "Legislativo",
        description: "servidores e agentes de Câmaras Municipais que licitam e contratam",
      },
    ],
    note: "Se o seu nome aparece no processo, o risco é seu. Servidores das esferas municipal, estadual e federal.",
  },

  /* Programação da grade de 06/10: um item por painel, na ordem dos dias.
     `result` = dia · data · horário · professor; `topics` = a frase do card de
     falhas da LP anterior correspondente ao painel. */
  modules: {
    eyebrow: "Programação",
    title: "As falhas que mais geram apontamento — uma a uma.",
    lead: "4 dias · 17 horas · 24 a 27 de novembro de 2026",
    items: [
      {
        title: "O certame é um campo minado",
        result: "Dia 1 · 24/11 · 14h–17h · Jarbas Renê",
        topics: ["Pontos críticos, deficiências, restrições e direcionamento na fase interna e externa."],
      },
      {
        title: "As ciladas da execução contratual",
        result: "Dia 1 · 24/11 · 14h–17h · Jarbas Renê",
        topics: ["Os pontos nevrálgicos da gestão e fiscalização que mais viram responsabilização."],
      },
      {
        title: "O poder condicionado do parecer jurídico",
        result: "Dia 2 · 25/11 · 9h–12h · Everson Biazon",
        topics: ["Onde termina a função consultiva e começa a sua responsabilidade."],
      },
      {
        title: "ETP, TR e edital",
        result: "Dia 2 · 25/11 · 14h–17h · Rafael Costa",
        topics: ["Elaborar com segurança técnica e jurídica."],
      },
      {
        title: "Cesta de preços",
        result: "Dia 3 · 26/11 · 9h–12h · Marcio Assumpção",
        topics: ["Como estruturar pesquisa de preços sem sobrepreço nem inexequibilidade."],
      },
      {
        title: "Julgamento de propostas",
        result: "Dia 3 · 26/11 · 14h–17h · Edilson Liberal",
        topics: ["Reduzir subjetividade e prevenir desclassificação indevida."],
      },
      {
        title: "Prorrogação contratual",
        result: "Dia 4 · 27/11 · 9h–10h · Gabriela Lira",
        topics: ["O que o controle exige que você demonstre."],
      },
      {
        title: "Segregação de funções",
        result: "Dia 4 · 27/11 · 10h–11h · Igor Pires",
        topics: ["Como a concentração indevida de atribuições vira responsabilização."],
      },
    ],
  },

  /* Metodologia da LP anterior, a frase repartida em itens. */
  highlight: {
    eyebrow: "Metodologia",
    title: "Não é aula sobre a lei. É como o Tribunal lê a sua decisão.",
    items: [
      "Exposição dialogada",
      "Análise de casos concretos",
      "Interpretação de decisões dos órgãos de controle",
      "Dinâmicas de fixação nos módulos de ETP/TR/edital e julgamento de propostas",
    ],
  },

  /* Ordem da grade de 06/10. Bios: as da LP anterior; Jarbas = linha da grade. */
  speakers: {
    eyebrow: "Palestrantes",
    title: "Quem vai te ensinar já esteve onde você está.",
    items: [
      {
        name: "Jarbas Renê",
        institution: "Analista Judiciário · Contabilidade · TRT da 24ª Região",
        photoSrc: "/licitaexpo/palestrantes/jarbas-rene.jpg",
        bio: "Graduado em Ciências Contábeis pela Universidade de Santo Amaro. Analista Judiciário, especialidade Contabilidade, no Tribunal Regional do Trabalho da 24ª Região (MS).",
      },
      {
        name: "Everson da Silva Biazon",
        institution: "Procurador do Estado do Paraná",
        photoSrc: `/${SLUG}/palestrantes/everson-da-silva-biazon.jpg`,
        bio: "Procurador do Estado do Paraná, ex-Procurador-Chefe da Consultiva junto à Governadoria. Pós-graduado em Direito do Estado (UEL). Coautor de Direito Administrativo Sancionador nas Estatais. Professor de pós-graduação.",
      },
      {
        name: "Rafael Costa Santos",
        institution: "Procurador-Chefe PGE/PR",
        photoSrc: `/${SLUG}/palestrantes/rafael-costa-santos.jpg`,
        bio: "Procurador-Chefe da Procuradoria de Obras e Serviços de Engenharia da PGE/PR. Doutorando e Mestre em Direito (UFPR). Presidiu os grupos que regulamentaram a Lei 14.133/21 no Paraná. Autor pela Editora Fórum.",
      },
      {
        name: "Marcio José Assumpção",
        institution: "Tribunal de Contas do Estado do Paraná",
        photoSrc: `/${SLUG}/palestrantes/marcio-jose-assumpcao.jpg`,
        bio: "Auditor do TCE/PR. Mestre em Administração e Finanças (Universidad de Extremadura). Contador público, ex-professor da Universidade Positivo, especialista em contabilidade aplicada ao setor público e auditoria.",
      },
      {
        name: "Edilson Liberal",
        institution: "Mestre em Direito Público · Especialista em Licitações e Contratos",
        photoSrc: `/${SLUG}/palestrantes/edilson-liberal.jpg`,
        bio: "Mestre em Direito Público pela FGV-SP, bacharel em Direito, pós-graduado em Gestão Pública e especialista em licitações e contratos. Foi diretor de escola de gestão pública e supervisor de licitações e contratos.",
      },
      {
        name: "Gabriela Lira Borges",
        institution: "Consultora Jurídica e Parecerista",
        photoSrc: `/${SLUG}/palestrantes/gabriela-lira-borges.jpg`,
        bio: "Mestre em Governança e Planejamento Público (UTFPR). Ex-Procuradora do Estado do Acre e ex-consultora da Zênite. Coautora de Horizontes e Perspectivas da Lei nº 14.133/2021 (Lumen Juris).",
      },
      {
        name: "Igor Pires Gomes da Costa",
        institution: "Procurador do Estado do Paraná",
        photoSrc: `/${SLUG}/palestrantes/igor-pires-gomes-da-costa.jpg`,
        bio: "Procurador do Estado do Paraná. Mestre em Direito Público (Université de Nantes) e em Direito do Estado (UFPR). Pesquisa e publica sobre governança pública e gestão de riscos na nova Lei de Licitações.",
      },
    ],
  },

  /* Planos e preços como estavam (Online Ao Vivo, Basic, Master, Premium).
     O "Mais escolhido" do MasterClass é o destaque da LP anterior. */
  plans: {
    eyebrow: "Planos",
    title: "Escolha como quer viver o LicitaExpo.",
    lead: "Todos os planos dão acesso aos 4 dias e ao certificado. A diferença está no que você leva além do conteúdo. O que protege sua decisão é o conteúdo — e ele é o mesmo em todos os planos. O restante é o que torna os quatro dias mais leves: alimentação, materiais e, nos planos superiores, formação que continua depois do evento.",
    items: [
      {
        name: "Online Ao Vivo",
        sub: "100% ao vivo",
        price: "R$ 2.000",
        features: [
          { label: "Acesso à transmissão ao vivo dos 4 dias", included: true },
          { label: "Certificado", included: true },
          { label: "Itens presenciais (coffee-breaks, almoço, kit e vouchers)", included: false },
        ],
        ctaLabel: "Quero o Online Ao Vivo",
      },
      {
        name: "BasicClass",
        sub: "Presencial",
        price: "R$ 3.300",
        features: planoFeatures(BASIC),
        ctaLabel: "Quero o BasicClass",
      },
      {
        name: "MasterClass",
        sub: "Presencial",
        price: "R$ 3.800",
        highlighted: true,
        highlightLabel: "Mais escolhido",
        features: planoFeatures(MASTER),
        ctaLabel: "Quero o MasterClass",
      },
      {
        name: "PremiumClass",
        sub: "Presencial",
        price: "R$ 5.200",
        features: planoFeatures(PREMIUM),
        ctaLabel: "Quero o PremiumClass",
      },
    ],
    footnote: "Estes são os valores do 1º lote. A partir de 25/10, o preço sobe 10%. Inscrições até 21/11.",
  },

  form: {
    eyebrow: "Inscrição",
    title: "Garanta sua vaga",
    meta: "24 a 27 de novembro de 2026 · Curitiba-PR · presencial ou ● ao vivo",
    // Mesmo formId da LP anterior: é por ele que o n8n identifica a origem.
    // Sem `produto`/`paginaOrigem` (decisão de 06/10: nenhum cadastro novo no n8n).
    formId: "lp-licitaexpo",
    // `c` do payload quando a URL não traz ?c=; também cobre utm_campaign ausente.
    campaignFallback: SLUG,
    planOptions: ["Online Ao Vivo", "BasicClass", "MasterClass", "PremiumClass"],
    submitLabel: "Garanta sua vaga",
    consent: {
      label: (
        <>
          Autorizo o contato da Unyflex por WhatsApp, telefone e e-mail sobre este seminário, conforme a{" "}
          <a href="https://unyflex.com.br/lgpd" target="_blank" rel="noopener noreferrer">
            política de privacidade
          </a>
          .
        </>
      ),
      value: "sim",
    },
    thankYou: { url: "/obrigado", withPii: false },
  },

  footer: {
    logoSrc: `/${SLUG}/logo-escura.png`,
    logoAlt: "Unyflex",
    partnersLabel: "Uma iniciativa Unyflex, com Unyboss e Faculdade Unypública.",
    partners: [
      { src: `/${SLUG}/parceiros/unyboss.png`, alt: "Unyboss" },
      { src: `/${SLUG}/parceiros/faculdade-unypublica.png`, alt: "Faculdade Unypública" },
    ],
    legal: [{ href: "https://unyflex.com.br/lgpd", label: "Política de privacidade" }],
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
