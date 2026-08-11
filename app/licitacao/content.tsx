import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp2/) não têm texto próprio.

   Turma de 15 a 18/09/2026. Reconstrução da rota no template lp2 (antes era o
   template v1), a partir do briefing do cliente de 11/08/2026. O conteúdo
   programático dos 6 módulos é VERBATIM do programa do cliente; as frases de
   resultado (`result`) vieram prontas do briefing. Copy derivada (marcada nos
   comentários): micro-títulos do problema, título da seção de módulos, linhas
   de instituição dos professores e a redação das respostas do FAQ (as
   diretrizes por pergunta são do briefing). */

/* Conferência aritmética obrigatória do briefing — se qualquer número do
   design divergir destas contas, parar e reportar em vez de ajustar:
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

export const licitacaoContent: EventLpContent = {
  /* O accent (#00aeef, ciano da vertical Licitações) NÃO é definido aqui:
     todos os tokens de cor da LP vivem em um único bloco em ./theme.css. */

  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    links: [
      { href: "#para-quem", label: "Para quem" },
      { href: "#problema", label: "Desafios" },
      { href: "#modulos", label: "Módulos" },
      { href: "#planos", label: "Investimento" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: { href: "#inscricao", label: "Receber proposta" },
  },

  hero: {
    eyebrow: "Curso presencial em Curitiba · 15 a 18/09 · 17 horas",
    title: (
      <>
        DFD, ETP, TR e Mapa de Riscos com <Kw>Inteligência Artificial</Kw>
      </>
    ),
    subtitle:
      "A fase de planejamento da Lei nº 14.133/2021, do jeito que o Tribunal de Contas espera — com a IA acelerando o trabalho sem fragilizar o processo. Para quem assina ou revisa os documentos da contratação.",
    // Linha derivada dos 4 perfis da seção "Para quem é" do briefing (o campo
    // é obrigatório no template e o briefing não traz linha própria de públicos).
    audiences:
      "Pregoeiro e agente de contratação · licitações e compras · jurídico · controle interno",
    // Sem href ⇒ o CTA vai para #inscricao (briefing: âncora para o formulário).
    cta: { label: "Quero receber proposta com nota de empenho" },
    // Os 3 badges do briefing na linha de meta (small muted) — o template não
    // tem slot próprio de badges (mesma solução da /patrimonio).
    meta: "Rua Voluntários da Pátria, 547 — Centro, Curitiba/PR · Certificado emitido após a conclusão por instituição reconhecida pelo MEC · Também disponível online ao vivo",
    bgSrc: "/licitacao/hero.jpg",
  },

  ticker: {
    metrics: [
      { value: "49.000+", label: "alunos formados" },
      { value: "1.200+", label: "órgãos atendidos" },
      { value: "5,0", label: "no Google · +450 avaliações" },
      { value: "17", label: "horas de capacitação" },
    ],
  },

  /* variant "grid" (briefing): os 4 perfis visíveis de uma vez, como filtro de
     autoqualificação — mesmo padrão da /patrimonio. */
  audience: {
    title: "Este curso é para quem responde pela contratação",
    variant: "grid",
    groups: [
      {
        id: "pregoeiro",
        label: "Pregoeiro e Agente de Contratação",
        description:
          "E a equipe de planejamento da contratação: quem assina ou produz DFD, ETP, TR, Mapa de Riscos e alimenta o PCA.",
      },
      {
        id: "licitacoes",
        label: "Setor de Licitações e Compras",
        description:
          "Chefe de compras e coordenador de licitações que respondem pelo fluxo do processo.",
      },
      {
        id: "juridico",
        label: "Jurídico e Procuradoria",
        description:
          "Quem revisa e dá parecer sobre as peças e precisa aceitar ou vetar o uso de IA nos documentos.",
      },
      {
        id: "controle",
        label: "Controle interno e auditoria",
        description:
          "Foco na qualidade do planejamento e na mitigação de riscos antes da publicação do edital.",
      },
    ],
    closing:
      "Se você lida com DFD, ETP, TR e Mapa de Riscos — e agora precisa usar IA sem fragilizar o processo — o curso é seu.",
  },

  /* As 3 citações do briefing, verbatim, como cards ("voz do servidor"). Os
     micro-títulos são derivados — o contrato do grid exige `title` por card e
     o briefing só trouxe as falas; flagado no relatório para validação. O grid
     vira 1+2 via theme.css (o template assume 6–10 cards). */
  problem: {
    title: "Se alguma dessas frases podia ser sua, o curso é seu",
    items: [
      {
        title: "Modelo velho e copiar/colar",
        desc: "“Eu já faço DFD, ETP, TR e Mapa de Riscos na marra, com modelo velho e copiar/colar. Todo mundo fala em IA, mas tenho medo de gerar documento genérico e dar munição pro controle interno ou pro TCE anular o processo.”",
      },
      {
        title: "O planejamento virou gargalo",
        desc: "“A fase de planejamento virou gargalo: montar ETP, TR e MR bem feitos leva semanas. Se tento acelerar com IA genérica, fico inseguro de base legal, jurisprudência e coerência entre as peças.”",
      },
      {
        title: "Ninguém me ensinou as regras",
        desc: "“Ninguém me ensinou a usar IA dentro das regras da Lei 14.133 — o que posso ou não jogar na ferramenta, como revisar o que ela gera, e como continuar responsável pelo texto sem virar apertador de botão.”",
      },
    ],
  },

  /* schedule (timeline por dia) desligada nesta LP: o briefing pede o
     conteúdo programático em accordion — seção `modules`. */

  /* Conteúdo programático VERBATIM do programa do cliente (turma 15 a 18/09).
     As frases de `result` (visíveis com o card fechado) vieram prontas do
     briefing. Convenção dos sub-itens: cada item lettrado (a, b, c…) é uma
     string própria em `topics`, com a letra preservada; o tópico-pai termina
     em dois-pontos. Nada aqui é reconstruído ou resumido.
     Módulo 5 (PCA): a numeração do programa original tinha itens repetidos
     (5, 6 e 7 apareciam duas vezes); renumerado sequencialmente preservando o
     texto de cada item — único ajuste permitido pelo cliente. */
  modules: {
    // Título derivado (o briefing não traz título para a seção).
    title: "Em 17 horas, a fase de planejamento inteira — peça por peça",
    items: [
      {
        title: "Planejamento In Foco: Ensino e Soluções de I.A.",
        result:
          "Governança, eficiência, gestão de riscos e os novos paradigmas da Lei nº 14.133 — com soluções de IA para o planejamento",
        topics: [
          "Governança (envolvimento dos níveis hierárquicos)",
          "Planejamento (o quê, para quê, quanto e como?)",
          "Eficiência (gestão por competência e preparação técnica)",
          "Gestão de Riscos (Mitigação — como reduzir falhas?)",
          "Transparência (para ampliar a competição e permitir controle)",
          "Para correção de falhas (por erros recorrentes)",
          "Para impedimento de responsabilidades (maioria é por falha técnica)",
          "Para eliminação de prejuízos (sobrepreço, superfaturamento e inexecução)",
          "Para facilitação dos procedimentos (agilidade e desburocratização)",
          "Usando os novos paradigmas:",
          "a) Conversar com fornecedores (modalidade e procedimentos auxiliares)",
          "b) Contratante do Projetista (fornecedor do projeto pode participar da licitação)",
          "c) Proteção da boa-fé (defesa dos agentes públicos pela advocacia do Órgão)",
          "d) Do presencial para o eletrônico (como regra geral, de uma vez por todas)",
          "Soluções de Inteligência Artificial para o Planejamento",
        ],
      },
      {
        title: "TR: Elaboração do Termo de Referência: Ensino e Soluções de I.A.",
        result:
          "Do objeto às sanções e aditivos, com minutas, modelos e IA aplicada à elaboração",
        topics: [
          "Apresentação de MINUTAS e MODELOS",
          "Definição do objeto",
          "Orçamentação",
          "Estratégias de suprimentos",
          "Planejamentos iniciais",
          "Regras para a contratação de ME e EPP",
          "Critérios para o cumprimento do contrato",
          "Obrigações da contratada",
          "Gestão e fiscalização",
          "Marca e qualidade padrão",
          "Condições de pagamentos",
          "Critérios para a entrega",
          "Ateste dos produtos e serviços",
          "Regras dos reajustes e repactuação",
          "Reequilíbrio econômico financeiro",
          "Processo de aplicação de sanções",
          "Aditivos contratuais",
          "Soluções de Inteligência Artificial para o TR",
        ],
      },
      {
        title: "ETP: Estudo Técnico Preliminar: Ensino e Soluções de I.A.",
        result:
          "Os elementos constitutivos completos, atos complementares e quando o ETP pode ser dispensado — com minutas e IA",
        topics: [
          "Apresentação de MINUTAS e MODELOS",
          "Aplicabilidade (tamanho do Município, recursos humanos e prazo)",
          "ETP na Lei Licitatória 14.133/21",
          "Aplicabilidade e/ou dispensa do ETP",
          "Finalidade e objetivo do ETP",
          "Atos complementares do ETP:",
          "a) DFD ou Projetos",
          "b) PCA",
          "c) Matriz de Riscos",
          "d) Formação do Preço",
          "e) TR",
          "f) Edital",
          "Elementos constitutivos do ETP:",
          "a) Necessidade da contratação",
          "b) Requisitos necessários",
          "c) Levantamento de mercado",
          "d) Descrição da solução como um todo",
          "e) Estimativa das quantidades",
          "f) Estimativa do valor da contratação",
          "g) Justificativas para o parcelamento ou não da solução",
          "h) Contratações correlatas e/ou interdependentes",
          "i) Providências a serem adotadas pela administração (preparação dos fiscais etc.)",
          "j) Sustentabilidade (logística reversa, descartes, reciclagem etc.)",
          "k) Análise de riscos",
          "l) Justificativas (parcelamento, economicidade, aproveitamento etc.)",
          "m) Forma de aquisição/contratação (direta ou licitada, modalidade e critério de julgamento)",
          "Aprovação e assinatura",
          "Soluções de Inteligência Artificial para o ETP",
        ],
      },
      {
        title: "Mapeamento de Riscos: Ensino e Soluções de I.A.",
        result:
          "Mapa versus matriz de riscos, fases de avaliação e o papel do mapeamento na governança — com soluções de IA",
        topics: [
          "Definição de mapa de riscos na NLL",
          "Diferença entre mapa de riscos e matriz de riscos",
          "Papel do mapeamento de riscos na governança das contratações",
          "Fases de avaliação de riscos",
          "Identificação de riscos",
          "Análise, priorização e resposta",
          "Monitoramento e controle de riscos",
          "Soluções de Inteligência Artificial para o Mapeamento",
        ],
      },
      {
        title: "PCA: Plano de Contratações Anual: Ensino e Soluções de I.A.",
        result:
          "Exigência legal, prazos, agentes envolvidos e modelos prontos para implantar o PCA local",
        topics: [
          "Apresentação de MINUTAS e MODELOS",
          "Aplicabilidade (tamanho do Município, recursos humanos e prazo)",
          "Exigência do Plano de Contratações Anual (PCA) na Lei 14.133",
          "Apresentação de PCAs que servem como modelos",
          "Correções e alterações nos Planos de Contratações Anuais",
          "Prazo para implantação do PCA",
          "Agentes envolvidos na elaboração e acompanhamento do PCA:",
          "a) Controle Interno",
          "b) Jurídico",
          "c) Solicitante",
          "d) Responsável pelos ETPs",
          "e) Formador do preço",
          "f) Compras",
          "g) Almoxarifado",
          "h) Contabilidade",
          "i) Financeiro",
          "j) Condutor do certame (Agente de Contratação, Pregoeiro e Comissão)",
          "k) Gestor do Órgão (homologador)",
          "l) Gestor e Fiscal do contrato",
          "Fornecimento de modelos",
          "Orientações para implantar o PCA local",
          "Soluções de Inteligência Artificial para o PCA",
        ],
      },
      {
        title: "Ferramentas e Tecnologias de IA para Municípios",
        // "Do análise" no briefing — corrigido para "Da análise" (concordância).
        result:
          "Da análise de documentos ao antifraude: o panorama das ferramentas aplicáveis à realidade municipal",
        topics: [
          "Gemini (Vertex AI) para análise de documentos e relatórios",
          "Vision AI para monitoramento urbano e ambiental",
          "Video AI para segurança pública e eventos",
          "Dialogflow e Agent Garden para atendimento ao cidadão",
          "BigQuery ML para planejamento estratégico municipal",
          "AI Dashboards para transparência e controle social",
          "IoT + IA para sustentabilidade e gestão ambiental",
          "Sistemas especialistas aplicados à gestão pública",
          "Computação cognitiva e redes neurais generativas",
          "IA antifraude e biometria em serviços municipais",
          "RFID e inteligência artificial: predição e automação estratégica",
          "Integração de IA com plataformas governamentais (SICONFI, Transferegov, SIT)",
        ],
      },
    ],
  },

  /* quote (seção opcional): não pedida pelo briefing — desligada. */

  /* 3 professores = grid default do template, sem patch de layout. Ordem
     proposital do briefing: os dois juristas primeiro — a maior objeção do
     público é jurídica, e a autoridade que a neutraliza é quem padroniza
     minuta de edital na PGE. Bios verbatim do briefing; as linhas de
     instituição (small uppercase antes do nome) são derivadas das bios.
     Fotos: Rafael e Gabriela em 400×400 (mesmos assets da /licitaexpo-v2 — o
     template recorta em 4:5 via CSS); a do Marcus é o upscale 640×800 já
     aceito na /patrimonio. */
  speakers: {
    title: "Quem ensina responde por isso na prática",
    items: [
      {
        name: "Rafael Costa Santos",
        institution: "PROCURADOR-CHEFE · PGE-PR",
        photoSrc: "/licitacao/palestrantes/rafael-costa-santos.jpg",
        bio: "Procurador-Chefe da Procuradoria Consultiva de Obras e Serviços de Engenharia da PGE-PR há mais de oito anos. Doutorando e mestre em Direito pela UFPR. Presidiu os grupos de trabalho do regulamento paranaense da Lei nº 14.133/2021 e é membro fixo da comissão de padronização de minutas de editais da PGE-PR. Autor de “Convênios Administrativos” e coautor de “Contrato Público Built to Suit” (Editora Fórum).",
      },
      {
        name: "Gabriela Lira Borges",
        institution: "CONSULTORA JURÍDICA · PARECERISTA",
        photoSrc: "/licitacao/palestrantes/gabriela-lira-borges.jpg",
        bio: "Consultora jurídica e parecerista. Mestre em Governança e Planejamento Público pela UTFPR. Ex-Procuradora do Estado do Acre, ex-consultora jurídica da Zênite. Coautora de “Horizontes e Perspectivas da Lei nº 14.133/2021” (Lumen Juris, 2022).",
      },
      {
        name: "Marcus Gualberto Ganter",
        institution: "CÂMARA MUNICIPAL DE CURITIBA · IA APLICADA",
        photoSrc: "/licitacao/palestrantes/marcus-gualberto-ganter.jpg",
        bio: "Engenheiro pelo ITA, mestre em Políticas Públicas (UFPR) e em Administração Pública (LSE). Chefe de Gabinete na Câmara Municipal de Curitiba, ex-Diretor de Projetos no Governo do Estado do Paraná. Responsável pelo eixo de IA.",
      },
    ],
  },

  /* gallery (seção opcional): não pedida pelo briefing — desligada. */

  /* Pricing "combo" do briefing — substitui a tabela de turmas (`plans`) das
     outras LPs. Valores conferidos pela checagem aritmética no topo do
     arquivo. A tabela comparativa entra quando o print com as células ✓/✗
     chegar (nenhuma célula pode ser inventada — veto do briefing). */
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
    // Células transcritas do print do briefing (recebido em 11/08/2026) —
    // nenhuma inventada.
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
    // Bloco de pagamento crítico para B2G — verbatim do briefing.
    paymentNote:
      "Aceitamos nota de empenho, com prazo de pagamento de 7 dias após a finalização do curso. Fornecemos toda a documentação necessária para a contratação pelo seu órgão. Pessoa física pode se inscrever por qualquer forma de pagamento.",
  },

  /* reviews (seção opcional): desligada — sem textos reais de avaliação. */

  /* compare (seção opcional): não pedida — o online aparece no hero, no card
     do pricing e no campo de modalidade. */

  /* FAQ: as 8 perguntas do briefing; respostas de 2 a 4 frases redigidas a
     partir das diretrizes por pergunta. Vetos respeitados: sem afirmar posição
     de tribunal específico (P3), sem prometer prompts prontos (P4). */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Preciso saber mexer em IA antes? É curso de licitação ou de tecnologia?",
        a: "É um curso da fase de planejamento da contratação — a IA entra como ferramenta de trabalho. O uso é ensinado do zero, sem exigir nenhum repertório técnico prévio.",
      },
      {
        q: "É para quem está começando na Lei 14.133 ou para quem já aplica?",
        a: "O foco é aprofundamento: DFD, ETP, TR, Mapa de Riscos e PCA na prática. Quem está começando acompanha, porque cada peça é construída do conceito.",
      },
      {
        q: "O Tribunal de Contas aceita documento feito com IA? Não corro risco de responsabilização?",
        a: "A responsabilidade pelo conteúdo continua sendo do servidor — e é exatamente isso que o curso ensina a proteger: o que pode ir à ferramenta, como revisar o que ela gera e como documentar o processo.",
      },
      {
        q: "Vou sair com modelos prontos?",
        a: "Sim, para minutas e modelos: os Módulos 2, 3 e 5 apresentam minutas e modelos de TR, ETP e PCA, e o programa inclui orientações para implantar o PCA local. O uso das ferramentas de IA é demonstrado em aula.",
      },
      {
        q: "Serve para município pequeno, com equipe enxuta?",
        a: "Sim. A aplicabilidade por tamanho de município, recursos humanos e prazo é tópico explícito dos Módulos 3 e 5.",
      },
      {
        q: "O curso trata do risco de a IA inventar jurisprudência ou valores?",
        a: "Sim. Revisão, validação e limites da ferramenta atravessam todos os módulos — do planejamento ao PCA.",
      },
      {
        q: "O foco é licitação em geral ou só a fase de planejamento?",
        a: "A fase de planejamento: DFD, ETP, TR, Mapa de Riscos e PCA. É onde o processo nasce bem — ou nasce com os problemas que aparecem depois.",
      },
      {
        q: "Posso pagar com nota de empenho? E como pessoa física?",
        a: "Sim. Aceitamos nota de empenho, com prazo de pagamento de 7 dias após a finalização do curso, e fornecemos toda a documentação necessária para a contratação pelo seu órgão. Pessoa física pode se inscrever por qualquer forma de pagamento.",
      },
    ],
  },

  form: {
    title: "Garanta sua participação",
    // Urgência factual, sem escassez fabricada (vetada pelo briefing).
    meta: "Turma de 15 a 18/09, em Curitiba. Empenho leva tempo no seu órgão — comece o processo agora.",
    // [ASSET PROVISÓRIO]: foto oficial Unyflex reaproveitada da /patrimonio
    // (que por sua vez veio da /comunicacao). TODO: substituir quando chegar.
    bgSrc: "/licitacao/cta-final.jpg",
    // NÃO ALTERAR: slug mapeado no n8n, campanha no ar (briefing).
    formId: "lp-licitacao-ia",
    submitLabel: "Receber proposta",
    thankYou: { url: "/obrigado", withPii: false },
    modalidade: {
      label: "Modalidade preferida",
      options: ["Presencial em Curitiba", "Online ao vivo"],
    },
  },

  /* Rodapé replicado da /patrimonio (mesma parceira e mesmas redes). */
  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    partners: [
      // invert: o logo original é escuro — em marca branca sobre o rodapé.
      {
        src: "/licitacao/parceiros/faculdade-unypublica.png",
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
