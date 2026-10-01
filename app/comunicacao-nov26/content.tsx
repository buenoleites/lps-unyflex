import type { Lp3Content } from "@/components/lp3/types";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp3/) não têm texto próprio.

   Comunicação Pública 360º — turma de 24 a 27/11/2026, Curitiba-PR
   (/comunicacao-nov26). LP nova no template lp3. A /comunicacao-out26
   (seminário, outro produto) não foi tocada.

   FONTES (nada aqui é de autoria do agente — regra do Gustavo, 03/09/2026):
   1. Briefing de 30/09/2026 (Gustavo) e complemento do mesmo dia: topo,
      promessa, descrição, "Para quem", "O que muda", linhas de resultado e
      tópicos completos dos 6 módulos, "Foco prático", professores e bios,
      rótulo do BasicClass.
   2. Regras comuns do briefing: planos, nota de rodapé, endereço da sede.
   3. Da /tesouraria-nov26 (mesma base): prova social, "Como funciona", as 5
      perguntas frequentes (com as datas desta turma), consentimento, rodapé,
      foto do topo (public/comunicacao-nov26/hero.jpg, copiada da Tesouraria).
   Textos de ligação (aprovados pelo Gustavo em 01/10): hero.ctaSecondary.label,
   os títulos "O que muda", "Para quem é o curso" e "6 módulos do curso".
   A descrição da rota (metadata/OG/JSON-LD) é a promessa do topo, verbatim.

   TODO (sem dado confirmado — não inventar):
   - Foto da Ana Paula em 201×251 px (baixa resolução); trocar quando
     chegar uma maior em ~/Downloads/fotos-professores/.
   - n8n: cadastrar `comunicacao-nov26` no mapa de cursos antes de rodar
     tráfego, senão o lead entra como "Curso não identificado". Chaves
     novas no payload que o n8n precisa mapear: plano_interesse, Municipio,
     Orgao, c, consentimento (além de `titulo`). */

/* Os 12 itens dos planos, na ordem do briefing. Os três vetores dizem o que
   cada plano inclui (a tabela comparativa saiu na rodada 2; só os cards ficam). */
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
/* `rotulos` troca o texto de um item só neste card; `omitir` tira índices do
   card (rodada 3: "3 dias" não aparece como não incluso no Master e no Premium). */
function planoFeatures(inclui: boolean[], rotulos: Record<number, string> = {}, omitir: number[] = []) {
  return PLANO_ITENS.map((label, i) => ({ label: rotulos[i] ?? label, included: inclui[i] })).filter(
    (_, i) => !omitir.includes(i),
  );
}

export const SLUG = "comunicacao-nov26";
export const TITULO = "Comunicação Pública 360º";
export const SUBTITULO = "Estratégias e impacto: técnicas modernas de atuação e assessoramento";
export const DESCRICAO =
  "Da nota de crise ao post no Instagram: comunicação pública que informa, engaja e não vira improbidade.";

export const comunicacaoNov26Content: Lp3Content = {
  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    cta: { href: "#inscricao", label: "Receber proposta" },
  },

  hero: {
    badge: "Inscrições abertas",
    promise: DESCRICAO,
    title: TITULO,
    subtitle: SUBTITULO,
    dates: "24, 25, 26 e 27 de novembro",
    place: "Curitiba-PR",
    facts: [
      "4 dias",
      "17 horas",
      "6 painéis",
      "certificado",
      "Comunicação e mídias",
      "materiais didáticos com acesso ilimitado",
    ],
    bgSrc: `/${SLUG}/hero.jpg`,
    bgAlt: "Turma em sala de aula da Unyflex em Curitiba",
    ctaPrimary: { href: "#inscricao", label: "Receber proposta" },
    ctaSecondary: { href: "#planos", label: "Ver planos e preços" },
  },

  proof: {
    items: [
      "5,0 no Google · +450 avaliações",
      "Desde 2009 · 49.000+ alunos",
      "Faculdade Unypública · nota 5 no MEC",
    ],
  },

  outcomes: {
    eyebrow: "Resultados",
    title: "O que muda",
    items: [
      {
        title: "Crise respondida rápido",
        text: "Monitoramento de menções, protocolo contra fake news e nota oficial pronta em 15 minutos.",
      },
      {
        title: "Imprensa a favor",
        text: "Release que vira pauta e media training para entrevistar e ser entrevistado.",
      },
      {
        title: "Redes que prestam contas",
        text: "Tom certo por plataforma, Reels e Stories, e acessibilidade digital obrigatória.",
      },
      {
        title: "Sem risco jurídico",
        text: "Impessoalidade (art. 37 da CF), impulsionamento legal e condutas vedadas no período eleitoral.",
      },
    ],
  },

  modules: {
    eyebrow: "Programação",
    title: "6 módulos do curso",
    lead: "Um panorama 360º sobre a comunicação pública contemporânea, integrando gestão de crises, relacionamento com a mídia, marketing digital e conformidade ética e jurídica. O curso combina fundamentos teóricos com oficinas práticas para transformar a comunicação estatal em um canal eficiente, transparente e focado no cidadão.",
    items: [
      {
        title: "Jornalismo e Rotina Governamental",
        result: "Release que vira pauta e media training para entrevistas.",
        topics: [
          "Fundamentos do jornalismo público (fato, fonte, notícia e estratégia)",
          "relacionamento com o ecossistema de mídia (pauteiro, editor e repórter)",
          "características de jornal, rádio, TV e internet",
          "deadline, linha editorial e relatividade da notícia",
          "técnicas de assessoria: release eficiente e prevenção de conflitos",
          "prática: exercícios de media training",
        ],
      },
      {
        title: "Monitoramento, Crises e Desinformação",
        result: "Monitoramento, protocolo contra fake news e nota oficial em 15 minutos.",
        topics: [
          "Alertas de menções para identificar críticas e risco de viralização",
          "SAC 2.0 e resolutividade",
          "reclamação transformada em protocolo com encaminhamento à Ouvidoria",
          "respostas padrão × humanizadas e uso de FAQs",
          "protocolo contra fake news, artes \"Fato ou Fake\" e links oficiais",
          "prática: nota oficial de crise em 15 minutos",
        ],
      },
      {
        title: "Mídias Sociais e Marketing Digital",
        result: "Tom de voz por rede, Reels e Stories e acessibilidade digital.",
        topics: [
          "Tom de voz por plataforma (Instagram, Facebook e WhatsApp)",
          "Reels, Stories e vídeos curtos para prestação de contas",
          "acessibilidade digital obrigatória: legendas, contraste e #PraCegoVer",
        ],
      },
      {
        title: "Redação Jornalística e Marketing Institucional",
        result: "Ato administrativo virando notícia, sem ferir a impessoalidade.",
        topics: [
          "O lead na gestão pública",
          "impessoalidade (art. 37 da CF): promoção pessoal × caráter informativo",
          "narrativa institucional e marca da cidade",
          "pautas positivas",
          "humanização com foco no beneficiário",
          "transparência ativa nos bastidores",
          "campanhas de utilidade pública em linguagem simples",
        ],
      },
      {
        title: "Contratação, Impulsionamento e Período Eleitoral",
        result: "Impulsionamento legal, contratação de ferramentas e período eleitoral.",
        topics: [
          "Impulsionamento legal com foco informativo",
          "critérios para contratar softwares de monitoramento e newsletter (SaaS)",
          "condutas vedadas no período eleitoral",
          "prática: checklist do que sai do ar nos 3 meses antes do pleito",
        ],
      },
      {
        title: "Conduta Ética, Assédio e Violências Laborais",
        result: "Ética, assédio e violências laborais, com fluxo via Ouvidoria.",
        topics: [
          "Ética funcional, moralidade e decoro",
          "abuso de poder e de autoridade",
          "tipologias de assédio",
          "violências laborais",
          "prática: estudos de caso com orientação de chefias e acolhimento via Ouvidoria",
        ],
      },
    ],
  },

  highlight: {
    eyebrow: "Em todos os módulos",
    title: "Foco prático",
    items: [
      "Exercícios de media training",
      "Simulação de nota oficial em crise em 15 minutos",
      "Checklist do que sai do ar antes da eleição",
      "Estudos de caso reais com fluxo via Ouvidoria",
    ],
  },

  audience: {
    eyebrow: "Para quem",
    title: "Para quem é o curso",
    items: [
      "Assessores de comunicação e imprensa de prefeituras e câmaras",
      "Secretários e diretores de Comunicação",
      "Equipes de redes sociais do setor público",
      "Ouvidores e gestores que falam com a imprensa",
    ],
  },

  /* Professores: nome, foto e bio curta, sem nota de avaliação (briefing).
     Fotos: Uanilla (já no repositório), Adriane e Ana Paula (pasta do Gustavo,
     01/10). */
  speakers: {
    title: "Quem ensina",
    items: [
      {
        name: "Adriane Werner",
        photoSrc: `/${SLUG}/palestrantes/adriane-werner.jpg`,
        bio: "Jornalista e mestre em Administração; 16 anos na RIC (afiliada Record), onde dirigiu o jornalismo; professora de oratória e media training em pós-graduação.",
      },
      {
        name: "Ana Paula da Silva",
        photoSrc: `/${SLUG}/palestrantes/ana-paula-da-silva.jpg`,
        bio: "Jornalista, mestre em Comunicação e Consumo pela ESPM; 15 anos em telejornalismo (RIC Record, RBS, SBT SC, SBT Brasil e Band); foi diretora de comunicação da Câmara de Vereadores de Joinville e hoje é secretária de Comunicação de Araquari (SC).",
      },
      {
        name: "Uanilla Marcela dos Santos Pivetta",
        photoSrc: `/${SLUG}/palestrantes/uanilla-marcela-dos-santos-pivetta.jpg`,
        bio: "Jornalista com mais de 15 anos em comunicação institucional; diretora de Comunicação da Prefeitura de Itapoá (SC).",
      },
      {
        name: "Giovani Capri",
        photoSrc: `/${SLUG}/palestrantes/giovani-capri.jpg`,
        bio: "Mais de 10 mil alunos em mais de 300 turmas presenciais de treinamento.",
      },
    ],
  },

  plans: {
    eyebrow: "Planos e Preços",
    title: "Três planos de participação",
    lead: "O mesmo curso, com três níveis de experiência. O PremiumClass é o plano recomendado: capacitação em 4 dias e a agenda completa fora da sala de aula.",
    items: [
      {
        name: "BasicClass",
        sub: "Investimento por aluno",
        price: "R$ 2.980,00",
        // Rótulo longo só neste card (rodada 2); a tabela mantém o curto.
        features: planoFeatures(BASIC, {
          0: "Capacitação prática em 3 dias: terça a quinta (24 a 26/11) ou quarta a sexta (25 a 27/11)",
        }),
        ctaLabel: "Quero o BasicClass",
      },
      {
        name: "MasterClass",
        sub: "Investimento por aluno",
        price: "R$ 3.200,00",
        features: planoFeatures(MASTER, {}, [0]),
        ctaLabel: "Quero o MasterClass",
      },
      {
        name: "PremiumClass",
        sub: "Investimento por aluno",
        price: "R$ 3.980,00",
        highlighted: true,
        highlightLabel: "Recomendado",
        // Sem item não incluso: o card não mostra "ver o que não inclui".
        features: planoFeatures(PREMIUM, {}, [0]),
        ctaLabel: "Quero o PremiumClass",
      },
    ],
    footnote:
      "Valores por aluno. Benefícios do PremiumClass (tour, almoço, assinatura premium, semestre de graduação, kit exclusivo e UNYPOINTS) são concedidos na confirmação da matrícula e não são convertidos em desconto.",
  },

  form: {
    eyebrow: "Inscrição",
    title: "Receba a proposta para o seu órgão",
    /* "Como funciona": os 3 passos do briefing (rodada 2), como estão. */
    steps: {
      title: "Como funciona",
      items: [
        "Você envia seus dados.",
        "Recebe nossa mensagem no WhatsApp, e um consultor monta a proposta com a documentação para a contratação.",
        "O órgão emite a nota de empenho e a vaga está garantida.",
      ],
    },
    formId: "lp-comunicacao-nov26",
    produto: SLUG,
    paginaOrigem: SLUG,
    // Token da vertical no título do lead: LP|comunicacao|s=…|c=…|x=…|f=…
    tituloProduto: "comunicacao",
    campaignFallback: SLUG,
    planOptions: ["BasicClass", "MasterClass", "PremiumClass"],
    submitLabel: "Receber proposta",
    consent: {
      label: (
        <>
          Autorizo o contato da Unyflex por WhatsApp, telefone e e-mail sobre este curso, conforme a{" "}
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

  /* Perguntas frequentes: as 5 do briefing (rodada 2), como estão. Os
     documentos que embasam as respostas (declaração, atestado, CNPJ, roteiro)
     NÃO entram na página. */
  faq: {
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes",
    items: [
      {
        q: "O órgão pode pagar por nota de empenho?",
        a: "Sim. Na matrícula em curso aberto, a nota de empenho substitui o contrato, entendimento adotado pela União (Despacho n. 051/2022/ECJU/CGU/AGU e IN n. 21/2022).",
      },
      {
        q: "Quais documentos a Unyflex envia para a contratação?",
        a: (
          <>
            Declaração de notória especialização e singularidade (art. 74, III, &ldquo;f&rdquo;, da Lei 14.133/21),
            atestados de capacidade técnica, comprovante de CNPJ, certidões de regularidade fiscal e trabalhista e um
            roteiro do processo com modelos de DFD, ETP e Termo de Referência. Tudo em{" "}
            <a href="https://unyflex.com.br/certidoes#orientacoes" target="_blank" rel="noopener noreferrer">
              unyflex.com.br/certidoes#orientacoes
            </a>
            .
          </>
        ),
      },
      {
        q: "Posso fazer só 3 dias?",
        a: "Sim, no BasicClass: terça a quinta (24 a 26/11) ou quarta a sexta (25 a 27/11).",
      },
      {
        q: "Onde é o curso?",
        a: "Na sede da Unyflex: R. Voluntários da Pátria, 547, Centro, Curitiba-PR.",
      },
      {
        q: "O certificado é reconhecido?",
        a: "Sim, emitido pela Faculdade Unypública, instituição reconhecida pelo MEC.",
      },
    ],
  },

  footer: {
    logoSrc: `/${SLUG}/logo-escura.png`, // recorte do /logo-escura.png (que tem margens enormes)
    logoAlt: "Unyflex",
    partnersLabel: "Certificação",
    partners: [{ src: `/${SLUG}/faculdade-unypublica.png`, alt: "Faculdade Unypública" }],
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
    priceAnchor: "a partir de R$ 2.980",
    label: "Receber proposta",
    href: "#inscricao",
  },
};
