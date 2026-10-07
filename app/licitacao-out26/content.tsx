import type { Lp3Content } from "@/components/lp3/types";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp3/) não têm texto próprio.

   Turma de 27 a 30/10/2026 (/licitacao-out26). Migrada do lp2 para o lp3 em
   07/10/2026, a pedido do Gustavo: mesma copy, mesmos professores e mesmo
   formulário (formId/produto/paginaOrigem) da versão lp2, com três decisões
   dele: carga horária 17 → 20 horas (alinhada ao PR #38 das outras lp3),
   "presencial ou ● ao vivo" no topo e no formulário, e o bloco de planos
   padrão das LPs lp3 (BasicClass/MasterClass/PremiumClass, copiado da
   /portal) no lugar do "combo" do lp2 — o card "Online ao vivo R$ 2.000" e o
   combo R$ 2.980 saíram da página; a modalidade segue no formulário.

   O que veio VERBATIM da versão lp2 (briefing de 27/08/2026): título,
   subtítulo, 4 perfis de "Para quem", as 3 citações de "Desafios", os 6
   módulos (programa do cliente, com as frases de `result` do briefing), os 3
   professores com bio, "Como seu órgão contrata", as 8 perguntas do FAQ, o
   campo de vínculo e a prova social. Da /portal (lp3): fatos do hero,
   passos "Como funciona", consentimento, planos, nota de empenho e rodapé.

   Ainda sem slot no lp3 (ficou de fora, não reescrito): a linha de endereço
   do hero (segue no JSON-LD do layout), o lead "Você recebe tudo pronto…" de
   "Como seu órgão contrata" e o 5º item (Notória Especialização), que
   continua PENDENTE de confirmação do Gustavo. */

/* Os 12 itens dos planos, na ordem do briefing. Os três vetores dizem o que
   cada plano inclui. */
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
   card ("3 dias" não aparece como não incluso no Master e no Premium). */
function planoFeatures(inclui: boolean[], rotulos: Record<number, string> = {}, omitir: number[] = []) {
  return PLANO_ITENS.map((label, i) => ({ label: rotulos[i] ?? label, included: inclui[i] })).filter(
    (_, i) => !omitir.includes(i),
  );
}

export const SLUG = "licitacao-out26";
/* O h1 do lp2 ("DFD, ETP, TR e Mapa de Riscos com Inteligência Artificial")
   dava 4 linhas no h1 do lp3 a 1440px. Repartido como na /licitaexpo: a
   linha de promessa (accent) fica com "Licitações com Inteligência
   Artificial" (o nome da LP no title/metadata) e o título com as peças. */
export const NOME_OFICIAL = "Licitações com Inteligência Artificial";
export const GANCHO = "DFD, ETP, TR e Mapa de Riscos";
/* Subtítulo = só a primeira frase do subtítulo do lp2 (as duas frases davam
   4 linhas a 1440px e 7 a 390px; regra do topo: até 3). A segunda frase,
   "Para quem assina ou revisa os documentos da contratação.", já está
   coberta pela seção "Para quem". */
export const DESCRICAO =
  "A fase de planejamento da Lei nº 14.133/2021, do jeito que o Tribunal de Contas espera — com a IA acelerando o trabalho sem fragilizar o processo.";

export const licitacaoOut26Content: Lp3Content = {
  /* O accent (#4EABE9, ciano da vertical Licitações) NÃO é definido aqui:
     todos os tokens de cor da LP vivem em um único bloco em ./theme.css. */

  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    cta: { href: "#inscricao", label: "Receber proposta" },
  },

  hero: {
    badge: "Inscrições abertas",
    promise: NOME_OFICIAL,
    title: GANCHO,
    subtitle: DESCRICAO,
    dates: "27, 28, 29 e 30 de outubro",
    place: "Curitiba-PR · presencial ou ● ao vivo",
    facts: [
      "4 dias",
      "20 horas",
      "certificado emitido por instituição reconhecida pelo MEC",
    ],
    bgSrc: `/${SLUG}/hero.jpg`,
    bgAlt: "Turma em sala de aula da Unyflex em Curitiba",
    // Label da versão lp2 ("Quero receber proposta com nota de empenho")
    // dava 3 linhas no botão a 390px e jogava o CTA para fora da primeira
    // dobra; fica o label do CTA de "Como seu órgão contrata" (mesma copy).
    ctaPrimary: { href: "#inscricao", label: "Quero receber a proposta" },
  },

  proof: {
    items: [
      "49.000+ alunos formados",
      "1.200+ órgãos atendidos",
      "5,0 no Google · +450 avaliações",
    ],
  },

  audience: {
    eyebrow: "Para quem",
    title: "Este curso é para quem responde pela contratação",
    items: [
      {
        label: "Pregoeiro e Agente de Contratação",
        description:
          "E a equipe de planejamento da contratação: quem assina ou produz DFD, ETP, TR, Mapa de Riscos e alimenta o PCA.",
      },
      {
        label: "Setor de Licitações e Compras",
        description:
          "Chefe de compras e coordenador de licitações que respondem pelo fluxo do processo.",
      },
      {
        label: "Jurídico e Procuradoria",
        description:
          "Quem revisa e dá parecer sobre as peças e precisa aceitar ou vetar o uso de IA nos documentos.",
      },
      {
        label: "Controle interno e auditoria",
        description:
          "Foco na qualidade do planejamento e na mitigação de riscos antes da publicação do edital.",
      },
    ],
    note: "Se você lida com DFD, ETP, TR e Mapa de Riscos — e agora precisa usar IA sem fragilizar o processo — o curso é seu.",
  },

  /* As 3 citações do briefing, verbatim ("voz do servidor"); micro-títulos
     derivados, herdados da versão lp2. */
  problem: {
    id: "problema",
    tone: "elevated",
    eyebrow: "Desafios",
    title: "Se alguma dessas frases podia ser sua, o curso é seu",
    items: [
      {
        title: "Modelo velho e copiar/colar",
        text: "“Eu já faço DFD, ETP, TR e Mapa de Riscos na marra, com modelo velho e copiar/colar. Todo mundo fala em IA, mas tenho medo de gerar documento genérico e dar munição pro controle interno ou pro TCE anular o processo.”",
      },
      {
        title: "O planejamento virou gargalo",
        text: "“A fase de planejamento virou gargalo: montar ETP, TR e MR bem feitos leva semanas. Se tento acelerar com IA genérica, fico inseguro de base legal, jurisprudência e coerência entre as peças.”",
      },
      {
        title: "Ninguém me ensinou as regras",
        text: "“Ninguém me ensinou a usar IA dentro das regras da Lei 14.133 — o que posso ou não jogar na ferramenta, como revisar o que ela gera, e como continuar responsável pelo texto sem virar apertador de botão.”",
      },
    ],
  },

  /* Conteúdo programático VERBATIM do programa do cliente (mesmo programa da
     turma de setembro). As frases de `result` (visíveis com o acordeão
     fechado) vieram prontas do briefing. Convenção dos sub-itens: cada item
     lettrado (a, b, c…) é uma string própria em `topics`, com a letra
     preservada; o tópico-pai termina em dois-pontos. Nada aqui é
     reconstruído ou resumido. Módulo 5 (PCA): a numeração do programa
     original tinha itens repetidos; renumerado sequencialmente preservando o
     texto de cada item — único ajuste permitido pelo cliente. */
  modules: {
    eyebrow: "Programação",
    // Título derivado (o briefing não traz título para a seção); 20 horas
    // por decisão do Gustavo em 07/10.
    title: "Em 20 horas, a fase de planejamento inteira — peça por peça",
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

  /* Turma de outubro (briefing de 27/08): Igor Pires Gomes da Costa no lugar
     do Rafael Costa Santos; Marcus e Gabriela como na /licitacao. Ordem
     numerada do briefing: Marcus, Gabriela, Igor. Bios verbatim. */
  speakers: {
    title: "Quem ensina responde por isso na prática",
    items: [
      {
        name: "Marcus Gualberto Ganter",
        institution: "CÂMARA MUNICIPAL DE CURITIBA · IA APLICADA",
        photoSrc: "/licitacao-out26/palestrantes/marcus-gualberto-ganter.jpg",
        bio: "Engenheiro pelo ITA, mestre em Políticas Públicas (UFPR) e em Administração Pública (LSE). Chefe de Gabinete na Câmara Municipal de Curitiba, ex-Diretor de Projetos no Governo do Estado do Paraná. Responsável pelo eixo de IA.",
      },
      {
        name: "Gabriela Lira Borges",
        institution: "CONSULTORA JURÍDICA · PARECERISTA",
        photoSrc: "/licitacao-out26/palestrantes/gabriela-lira-borges.jpg",
        bio: "Consultora jurídica e parecerista. Mestre em Governança e Planejamento Público pela UTFPR. Ex-Procuradora do Estado do Acre, ex-consultora jurídica da Zênite. Coautora de “Horizontes e Perspectivas da Lei nº 14.133/2021” (Lumen Juris, 2022).",
      },
      {
        name: "Igor Pires Gomes da Costa",
        institution: "PROCURADOR DO ESTADO DO PARANÁ",
        photoSrc: "/licitacao-out26/palestrantes/igor-pires-gomes-da-costa.jpg",
        bio: "Mestre em Direito Público pela Universidade de Nantes (França) e Mestre em Direito do Estado pela UFPR. Procurador do Estado do Paraná em dedicação exclusiva e membro do Grupo Permanente de Trabalho de Direitos Humanos da PGE. Autor de artigos sobre governança pública, responsabilidade fiscal e gestão de riscos na nova Lei de Licitações.",
      },
    ],
  },

  /* Bloco de planos padrão das LPs lp3 (copiado da /portal, decisão do
     Gustavo em 07/10): substitui o "combo" da versão lp2. Só o rótulo dos
     3 dias do BasicClass muda, para as datas desta turma. */
  plans: {
    eyebrow: "Planos e Preços",
    title: "Três planos de participação",
    lead: "O mesmo curso, com três níveis de experiência. O PremiumClass é o plano recomendado: capacitação em 4 dias e a agenda completa fora da sala de aula.",
    items: [
      {
        name: "BasicClass",
        sub: "Investimento por aluno",
        price: "R$ 2.980,00",
        features: planoFeatures(BASIC, {
          0: "Capacitação prática em 3 dias: terça a quinta (27 a 29/10) ou quarta a sexta (28 a 30/10)",
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
        features: planoFeatures(PREMIUM, {}, [0]),
        ctaLabel: "Quero o PremiumClass",
      },
    ],
    // Bloco de pagamento crítico para B2G — verbatim do briefing.
    paymentNote:
      "Aceitamos nota de empenho, com prazo de pagamento de 7 dias após a finalização do curso. Fornecemos toda a documentação necessária para a contratação pelo seu órgão. Pessoa física pode se inscrever por qualquer forma de pagamento.",
    footnote:
      "Valores por aluno. Benefícios do PremiumClass (tour, almoço, assinatura premium, semestre de graduação, kit exclusivo e UNYPOINTS) são concedidos na confirmação da matrícula e não são convertidos em desconto.",
  },

  /* "Como seu órgão contrata": copy verbatim do briefing (os 4 itens). O
     lead "Você recebe tudo pronto para levar ao gestor — não precisa montar
     nada." não tem slot no lp3. */
  procurement: {
    id: "como-contratar",
    tone: "paper",
    eyebrow: "Contratação",
    title: "Como seu órgão contrata",
    items: [
      {
        title: "Proposta formal",
        text: "Em nome do seu órgão, com valores e condições.",
      },
      {
        title: "Nota de empenho",
        text: "Pagamento em até 7 dias após a conclusão do curso.",
      },
      {
        title: "Documentação para contratação",
        text: "Enviamos todos os documentos exigidos no processo.",
      },
      {
        title: "Certificado reconhecido",
        text: "Emitido por instituição reconhecida pelo MEC após a conclusão.",
      },
      // PENDENTE DE CONFIRMAÇÃO (Gustavo) — NÃO ativar sem ok. Quinto item,
      // pronto para entrar:
      // {
      //   title: "Declaração de Notória Especialização",
      //   text: "Permite a contratação direta por inexigibilidade.",
      // },
    ],
    cta: { label: "Quero receber a proposta", href: "#inscricao" },
  },

  form: {
    eyebrow: "Inscrição",
    title: "Garanta sua participação",
    // Urgência factual, sem escassez fabricada (vetada pelo briefing).
    meta: "Turma de 27 a 30/10 · Curitiba-PR · presencial ou ● ao vivo · Empenho leva tempo no seu órgão — comece o processo agora.",
    steps: {
      title: "Como funciona",
      items: [
        "Você envia seus dados.",
        "Recebe nossa mensagem no WhatsApp, e um consultor monta a proposta com a documentação para a contratação.",
        "O órgão emite a nota de empenho e a vaga está garantida.",
      ],
    },
    // formId, produto e paginaOrigem NÃO mudam na migração: é por eles que
    // o n8n identifica a turma (slug `licitacao-out26` já no mapa de cursos).
    formId: "lp-licitacao-out26",
    produto: SLUG,
    paginaOrigem: SLUG,
    // `c` = ?c= da URL com fallback no slug; também preenche utm_campaign e o
    // token c= do `titulo` quando não há UTM (antes ia "-").
    campaignFallback: SLUG,
    planOptions: ["BasicClass", "MasterClass", "PremiumClass"],
    modalidade: {
      label: "Modalidade preferida",
      // Valores vão no payload (Modalidade_Preferida) e não mudam; só o rótulo.
      options: ["Presencial em Curitiba", "Online ao vivo"],
      labels: ["Presencial em Curitiba", "Ao vivo"],
    },
    vinculo: {
      label: "Seu vínculo",
      // O toggle Sim/Não reprovava lead qualificado (contador de prefeitura
      // marcava "Não" e o n8n fechava como Perdido). Values = payload.
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

  /* FAQ: as 8 perguntas do briefing; respostas herdadas da versão lp2. */
  faq: {
    eyebrow: "Dúvidas",
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

  footer: {
    logoSrc: `/${SLUG}/logo-escura.png`, // mesmo recorte das outras lp3
    logoAlt: "Unyflex",
    partnersLabel: "Certificação",
    partners: [{ src: `/${SLUG}/parceiros/faculdade-unypublica.png`, alt: "Faculdade Unypública" }],
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
