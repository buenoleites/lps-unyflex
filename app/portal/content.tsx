import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp2/) não têm texto próprio.

   Turma de 15 a 18/09/2026 (mesmas datas da /licitacao). O conteúdo
   programático dos 6 módulos é VERBATIM do programa do cliente
   (conteudo-modulos-portal.md, recebido em 11/08/2026); o Módulo 6 é
   byte-idêntico ao Módulo 6 da /licitacao. Copy derivada (marcada nos
   comentários): frases de `result`, título da seção de módulos, subtitle do
   hero, cards de problema e FAQ — o briefing só trouxe o programa.

   Correções do briefing aplicadas em 11/08/2026: professores (4, bios
   verbatim), investimento (mesmos valores da /licitacao), 3 perguntas de FAQ
   e carga horária de 17 horas. Ainda pendente (não bloqueia): fotos reais
   (hero, CTA, professores, galeria) e textos de avaliação — gallery e reviews
   seguem DESLIGADAS por ausência da chave. */

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

export const portalContent: EventLpContent = {
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
        Portal, <Kw>LGPD</Kw>, e-SIC e Ouvidoria
      </>
    ),
    // Copy derivada do programa: o conflito LAI × LGPD é o Módulo 3 inteiro.
    subtitle:
      "O portal manda publicar; a LGPD manda proteger. Em 17 horas, o caminho para cumprir a LAI e a Lei nº 13.709 ao mesmo tempo — portal, e-SIC, ouvidoria e adequação de dados, na prática do município e da Câmara.",
    audiences:
      "Ouvidores · controle interno · encarregado de dados (DPO) · TI · gestão da transparência · Câmaras Municipais",
    // Sem href ⇒ o CTA vai para #inscricao.
    cta: { label: "Quero receber proposta com nota de empenho" },
    meta: "Rua Voluntários da Pátria, 547 — Centro, Curitiba/PR · Certificado emitido após a conclusão por instituição reconhecida pelo MEC · Também disponível online ao vivo",
    // Sem bgSrc: a foto do hero ainda não chegou — o template cai no
    // gradiente escuro de fallback. TODO: /portal/hero.jpg + preload no layout.
  },

  ticker: {
    metrics: [
      { value: "49.000+", label: "alunos formados" },
      { value: "1.200+", label: "órgãos atendidos" },
      { value: "5,0", label: "no Google · +450 avaliações" },
      { value: "17", label: "horas de capacitação" },
    ],
  },

  /* variant "grid": os perfis visíveis de uma vez, como filtro de
     autoqualificação — mesmo padrão da /patrimonio e /licitacao. Câmaras
     Municipais em card próprio: mesmas obrigações do Executivo com equipe
     menor, e é o público historicamente sub-atendido pelas campanhas. */
  audience: {
    title: "Este curso é para quem responde pela transparência — e pelos dados",
    variant: "grid",
    groups: [
      {
        id: "ouvidoria",
        label: "Ouvidores e equipe da Ouvidoria",
        description:
          "Quem recebe, trata e responde manifestações e opera o e-SIC com o prazo da LAI correndo.",
      },
      {
        id: "controle",
        label: "Controle interno e controladoria",
        description:
          "Quem responde pelos indicadores de transparência e pelo que o portal publica — ou deixa de publicar.",
      },
      {
        id: "dpo",
        label: "Encarregado de dados (DPO)",
        description:
          "Quem assina a adequação à LGPD: inventário de dados, RIPD, políticas internas e resposta ao titular.",
      },
      {
        id: "ti",
        label: "TI e gestão da informação",
        description:
          "Quem sustenta o portal, o e-SIC e a segurança da informação por trás dos dois.",
      },
      {
        id: "transparencia",
        label: "Gestores de transparência",
        description:
          "Quem decide o que é divulgação obrigatória, dado aberto e boa prática de publicação.",
      },
      {
        id: "camaras",
        label: "Câmaras Municipais",
        description:
          "Mesas diretoras, controladores e servidores do Legislativo: as mesmas obrigações de portal, e-SIC e LGPD do Executivo — com equipe menor.",
      },
    ],
    closing:
      "Se o seu nome está na resposta do e-SIC, no portal ou no RIPD — o curso é seu.",
  },

  /* 5 cards (copy derivada do programa — o briefing não trouxe seção de
     dores): o template dá largura dupla ao 1º card, fechando duas linhas
     exatas no grid de 3 colunas, sem patch CSS. Sem números inventados. */
  problem: {
    title: "A linha entre publicar e proteger passa pela sua mesa",
    items: [
      {
        title: "Transparência de um lado, LGPD do outro",
        desc: "Publicar demais expõe dados pessoais e vira incidente; publicar de menos derruba o índice de transparência e vira apontamento. Ninguém disse ao município onde passa a linha.",
      },
      {
        title: "O e-SIC com o prazo correndo",
        desc: "Pedidos de acesso acumulando, prazos da LAI vencendo e o recurso batendo na porta da autoridade de monitoramento.",
      },
      {
        title: "A ouvidoria como enxugadeira de gelo",
        desc: "Manifestação entrando por todo canal, sem fluxo definido, sem registro central e sem resposta padronizada.",
      },
      {
        title: "A adequação que não saiu do papel",
        desc: "Encarregado nomeado no Diário, e só: sem mapeamento de processos, sem inventário de dados, sem RIPD, sem política interna.",
      },
      {
        title: "Equipe pequena, obrigação grande",
        desc: "No município — e na Câmara — as exigências são as mesmas dos grandes órgãos, com duas ou três pessoas para dar conta de tudo.",
      },
    ],
  },

  /* schedule (timeline por dia) desligada nesta LP: conteúdo programático em
     accordion — seção `modules`. */

  /* Conteúdo programático VERBATIM do programa do cliente (turma 15 a 18/09).
     Convenção dos sub-itens: cada item lettrado (a, b, c…) é uma string
     própria em `topics`, com a letra preservada; o tópico-pai termina em
     dois-pontos. As frases de `result` são derivadas (o programa não as traz);
     a do Módulo 6 é a mesma da /licitacao, cujo módulo é idêntico. */
  modules: {
    // Título derivado (o programa não traz título para a seção).
    title:
      "Em 17 horas, do marco legal à prática — Ouvidoria, Portal, LGPD e IA",
    items: [
      {
        title: "Ouvidoria: Canal de Controle e Cidadania",
        result:
          "Da base legal ao Conselho de Usuários: estruturação da ouvidoria, atendimento, e-SIC e prazos de resposta",
        topics: [
          "Base Legal e Normativa",
          "Finalidades e Competências",
          "Estruturação e Princípios de Funcionamento",
          "O Papel da Ouvidoria Pública",
          "Atendimento Presencial",
          "Ferramenta e-SIC:",
          "a) Promover transparência passiva",
          "b) Facilitar participação cidadã",
          "c) Centralizar e gerenciar manifestações",
          "d) Organizar procedimentos",
          "e) Proporcionar acompanhamento pelo manifestante",
          "Prazos e Fluxos de Resposta",
          "Recursos e Reclamações sobre o Atendimento",
          "Conselho Municipal de Usuários",
        ],
      },
      {
        title: "Todos de Olho: O Monitoramento do Portal",
        result:
          "LAI, transparência ativa e passiva e o que o portal é obrigado a publicar — com indicadores e boas práticas",
        topics: [
          "Princípios Constitucionais",
          "Lei de Acesso à Informação (LAI)",
          "Transparência Ativa e Passiva",
          "Obrigatoriedade do Portal da Transparência",
          "Informações de Divulgação Obrigatória",
          "Responsabilidades na Gestão da Informação",
          "Dados Abertos",
          "Indicadores de Transparência",
          "Boas Práticas na Publicação",
        ],
      },
      {
        title: "Intersecções e Conflitos: Portal, LGPD e Ouvidoria",
        result:
          "Onde transparência e proteção de dados colidem: denunciante, anonimato, dados pessoais no portal e incidentes de segurança",
        topics: [
          "Transparência vs. Proteção de Dados",
          "Hierarquia de Normas",
          "Tratamento de Dados na Ouvidoria",
          "Proteção ao Denunciante de Boa-fé",
          "Anonimato nas Manifestações",
          "Dados Pessoais no Portal da Transparência",
          "Controle Social e a LGPD",
          "Comitê Gestor Integrado",
          "Gestão de Incidentes de Segurança",
        ],
      },
      {
        title: "Proteção de Dados: Orientações Pontuais",
        result:
          "Mapeamento, inventário, RIPD, políticas internas, treinamento e auditoria: o roteiro da adequação na prática",
        topics: [
          "Mapeamento de Processos",
          "Inventário de Dados",
          "Relatório de Impacto à Proteção de Dados (RIPD)",
          "Segurança da Informação e Boas Práticas",
          "Criação de Políticas e Normas Internas",
          "Treinamento e Conscientização Continuada",
          "Canal de Comunicação com o Titular",
          "Gestão Documental",
          "Monitoramento e Auditoria",
        ],
      },
      {
        title: "LGPD no Setor Público",
        result:
          "A Lei nº 13.709/2018 aplicada ao ente público: bases legais, direitos do titular, ANPD, sanções e adequações municipais",
        topics: [
          "Contexto e Objetivos da LGPD (Lei nº 13.709/2018)",
          "Definições Chave",
          "Princípios do Tratamento de Dados",
          "Bases Legais para o Setor Público",
          "Direitos do Titular dos Dados",
          "A Autoridade Nacional de Proteção de Dados (ANPD)",
          "Agentes de Tratamento",
          "Penalidades e Sanções",
          "Adequações Municipais",
        ],
      },
      {
        // Módulo idêntico ao Módulo 6 da /licitacao (título, result e topics).
        title: "Ferramentas e Tecnologias de IA para Municípios",
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

  /* quote (seção opcional): sem material — desligada. */

  /* Os 4 professores do briefing, na ordem pedida. Bios verbatim; a do
     Nilson é byte-idêntica à da /patrimonio (fonte decretada pelo Gustavo —
     o próprio briefing chegou sem "especialista em Contabilidade Gerencial").
     As linhas de instituição (small uppercase antes do nome) são derivadas
     das bios.
     REGRA DO MONOGRAMA (ordem do briefing): enquanto os quatro não tiverem
     foto, os QUATRO usam monograma (photoSrc: null) — nunca card misto.
     Nilson e Marcus já têm foto em public/patrimonio/palestrantes/; quando as
     de Mayara e José Augusto chegarem, copiar as 4 para
     public/portal/palestrantes/ e preencher os 4 paths de uma vez. */
  speakers: {
    title: "Quem ensina responde por isso na prática",
    items: [
      {
        name: "Mayara Magda da Silva Pastor",
        institution: "ESPECIALISTA EM LGPD · ÉGIDE PRO",
        photoSrc: null,
        bio: "Especialista em LGPD (ESMAFE-PR) e Lead Implementer em Gestão da Privacidade da Informação (ISO/IEC 27701). Membro do Comitê Brasileiro de Segurança da Informação e Proteção da Privacidade (ABNT). Advogada, sócia e coordenadora de projetos da Égide Pro, onde implementa programas de compliance com LGPD e ISO 27001/27701, elabora relatórios de impacto e planos de resposta a incidentes.",
      },
      {
        name: "José Augusto Alexandria Alves",
        institution: "PROCURADOR · CÂMARA MUNICIPAL DE CURITIBA",
        photoSrc: null,
        bio: "Procurador efetivo da Câmara Municipal de Curitiba, com atuação em Licitações e Contratos Administrativos. Pós-graduado em Direito Público, Direito do Trabalho e Previdenciário.",
      },
      {
        name: "Nilson Francisco Tognato",
        institution: "CONTADOR PÚBLICO · 33 ANOS",
        photoSrc: null,
        bio: "Contador público por 33 anos. MBA em Gestão Pública e Inovação (UNICENTRO), especialista em Contabilidade Gerencial. Ex-professor de Ciências Contábeis na UNESPAR. Instrutor da Unyflex desde 2020, com ênfase em contabilidade, patrimônio, finanças, orçamento e planejamento municipal.",
      },
      {
        name: "Marcus Gualberto Ganter",
        institution: "CÂMARA MUNICIPAL DE CURITIBA · IA APLICADA",
        photoSrc: null,
        bio: "Engenheiro pelo ITA, mestre em Políticas Públicas (UFPR) e em Administração Pública (LSE). Chefe de Gabinete na Câmara Municipal de Curitiba, ex-Diretor de Projetos no Governo do Estado do Paraná. Responsável pelo eixo de IA.",
      },
    ],
  },

  /* gallery (seção opcional): DESLIGADA até as fotos chegarem. */

  /* Pricing "combo" com os mesmos valores da /licitacao (briefing). Valores
     conferidos pela checagem aritmética no topo do arquivo; tabela
     comparativa com as mesmas células — nenhuma inventada. */
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

  /* FAQ derivado do programa: cada resposta ancorada em tópico verbatim, sem
     prometer o que não está no programa. A resposta de empenho é a mesma
     resposta B2G verbatim das outras LPs. */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "É curso jurídico? Preciso ser da área do Direito?",
        a: "Não. O curso é operacional, para quem executa: portal, e-SIC, ouvidoria e adequação à LGPD. A base legal (LAI, Lei nº 13.709) é ensinada a partir da rotina do órgão, não do contencioso.",
      },
      {
        q: "Serve para quem está começando a adequação à LGPD do zero?",
        a: "Sim. O Módulo 4 é o roteiro completo da adequação: mapeamento de processos, inventário de dados, RIPD, políticas internas, treinamento e auditoria — nessa ordem.",
      },
      {
        q: "Vale para Câmara Municipal ou só para Prefeitura?",
        a: "Vale. Portal da transparência, e-SIC, ouvidoria e LGPD são obrigações do Legislativo tanto quanto do Executivo, e a turma atende os dois. A diferença costuma ser a equipe menor — e é exatamente por isso que estruturar fluxos importa mais na Câmara.",
      },
      {
        q: "O curso trata do conflito entre publicar no portal e proteger dados pessoais?",
        a: "Sim — é o Módulo 3 inteiro: hierarquia de normas, tratamento de dados na ouvidoria, proteção ao denunciante, anonimato nas manifestações, dados pessoais no portal e gestão de incidentes de segurança.",
      },
      {
        // Veto do briefing: não citar guia nem órgão como fonte.
        q: "A LGPD revogou a LAI? O que ainda sou obrigado a publicar?",
        a: "Não — as duas leis convivem e se complementam. O Módulo 2 cobre o que é de divulgação obrigatória no portal, e o Módulo 3 ensina a decidir, caso a caso, o que se publica e o que se protege.",
      },
      {
        q: "Como tratar denúncia anônima e dado sensível sem descumprir a LGPD?",
        a: "É tópico explícito do Módulo 3: tratamento de dados na ouvidoria, proteção ao denunciante de boa-fé e anonimato nas manifestações — com a gestão de incidentes de segurança fechando o fluxo.",
      },
      {
        q: "Quem deve ser o Encarregado (DPO) no município?",
        a: "Os agentes de tratamento e o papel do encarregado são tópicos do Módulo 5, incluindo como o DPO se articula com a ouvidoria e o e-SIC na rotina do órgão.",
      },
      {
        q: "Serve para município pequeno, com equipe enxuta?",
        a: "Sim. As adequações municipais são tópico explícito do Módulo 5, e a estruturação da ouvidoria e dos fluxos de resposta do Módulo 1 é dimensionável ao tamanho do órgão.",
      },
      {
        q: "Posso pagar com nota de empenho? E como pessoa física?",
        a: "Sim. Aceitamos nota de empenho, com prazo de pagamento de 7 dias após a finalização do curso, e fornecemos toda a documentação necessária para a contratação pelo seu órgão. Pessoa física pode se inscrever por qualquer forma de pagamento.",
      },
    ],
  },

  form: {
    title: "Garanta sua participação",
    // Urgência factual, sem escassez fabricada.
    meta: "Turma de 15 a 18/09, em Curitiba. Empenho leva tempo no seu órgão — comece o processo agora.",
    // [ASSET PROVISÓRIO]: foto oficial Unyflex copiada da /licitacao (que já
    // era reuso da /patrimonio ← /comunicacao). TODO: substituir o arquivo
    // public/portal/cta-final.jpg quando a foto desta turma chegar.
    bgSrc: "/portal/cta-final.jpg",
    // Novo slug desta LP — precisa ser mapeado no n8n ANTES de rodar mídia.
    formId: "lp-portal-lgpd",
    submitLabel: "Receber proposta",
    thankYou: { url: "/obrigado", withPii: false },
    modalidade: {
      label: "Modalidade preferida",
      options: ["Presencial em Curitiba", "Online ao vivo"],
    },
  },

  /* Rodapé replicado da /licitacao (mesma parceira e mesmas redes). */
  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    partners: [
      // invert: o logo original é escuro — em marca branca sobre o rodapé.
      {
        src: "/portal/parceiros/faculdade-unypublica.png",
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
