import type { Lp3Content } from "@/components/lp3/types";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp3/) não têm texto próprio.

   Portal, LGPD, e-SIC e Ouvidoria — turma de 20 a 23/10/2026 (/portal).
   MIGRAÇÃO do template lp2 para o lp3 (30/09/2026, briefing "migrar Portal,
   Patrimônio e Comunicação 360 para o lp3"): o conteúdo é o da versão lp2,
   VERBATIM — programa de 6 módulos, professores e bios, galeria, depoimentos,
   "Como seu órgão contrata", planos e as 12 perguntas do FAQ. O histórico das
   decisões de copy (briefings de agosto, setembro e outubro) está no git:
   app/portal/content.tsx antes do commit da migração.

   O que MUDOU na migração (briefing de 30/09):
   - visual lp3 com accent azul (theme.css);
   - tabela comparativa e card largo do PremiumClass saíram; ficam os 3 cards;
   - formulário do lp3: órgão e município separados e obrigatórios, plano de
     interesse, consentimento; "Modalidade preferida" continua;
   - `produto: "portal"` e `c` entram no payload;
   - nova pergunta de FAQ "Onde é o curso?" (texto do briefing).

   Textos de ligação do template lp3 (rótulos de seção, "Inscrições abertas",
   "Como funciona" e o consentimento, os dois últimos copiados da
   /tesouraria-nov26) estão listados para auditoria no relatório da entrega.

   TODO (sem dado confirmado):
   - `produto` "portal" precisa apontar, no mapa de cursos do n8n, para a
     turma de 20 a 23/10 (antes apontava para a de setembro). */

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

export const SLUG = "portal";

export const portalContent: Lp3Content = {
  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    cta: { href: "#inscricao", label: "Receber proposta" },
  },

  hero: {
    badge: "Inscrições abertas",
    title: "Publicar ou proteger? Quem decide é você.",
    subtitle:
      "Portal da Transparência, e-SIC, Ouvidoria e LGPD em um curso só — com o módulo de IA aplicada ao setor público. 17 horas para sair com o portal em conformidade, a ouvidoria estruturada e o RIPD encaminhado.",
    dates: "20, 21, 22 e 23 de outubro",
    place: "Curitiba-PR",
    facts: [
      "4 dias",
      "17 horas",
      "certificado emitido por instituição reconhecida pelo MEC",
      "também disponível online ao vivo",
    ],
    bgSrc: "/portal/hero.jpg",
    bgAlt: "Turma em sala de aula da Unyflex em Curitiba",
    ctaPrimary: { href: "#inscricao", label: "Quero receber a programação com nota de empenho" },
  },

  /* Os números do topo da versão lp2 (ticker), como estavam. */
  proof: {
    items: [
      "49.000+ alunos formados",
      "1.200+ órgãos atendidos",
      "5,0 no Google · +450 avaliações",
    ],
  },

  /* Faixa de remarketing, verbatim do lp2: fala com quem perdeu a turma de
     setembro (mesma turma, 20 a 23/10). */
  banner: {
    text: "Não deu em setembro? A mesma turma, com a mesma programação, em 20 a 23 de outubro. Tempo de sobra para o empenho.",
  },

  audience: {
    eyebrow: "Para quem",
    title: "Este curso é para quem responde pela transparência — e pelos dados",
    items: [
      {
        label: "Ouvidores e equipe da Ouvidoria",
        description:
          "Quem recebe, trata e responde manifestações e opera o e-SIC com o prazo da LAI correndo.",
      },
      {
        label: "Controle interno e controladoria",
        description:
          "Quem responde pelos indicadores de transparência e pelo que o portal publica — ou deixa de publicar.",
      },
      {
        label: "Encarregado de dados (DPO)",
        description:
          "Quem assina a adequação à LGPD: inventário de dados, RIPD, políticas internas e resposta ao titular.",
      },
      {
        label: "TI e gestão da informação",
        description:
          "Quem sustenta o portal, o e-SIC e a segurança da informação por trás dos dois.",
      },
      {
        label: "Gestores de transparência",
        description:
          "Quem decide o que é divulgação obrigatória, dado aberto e boa prática de publicação.",
      },
      {
        label: "Câmaras Municipais",
        description:
          "Mesas diretoras, controladores e servidores do Legislativo: as mesmas obrigações de portal, e-SIC e LGPD do Executivo — com equipe menor.",
      },
    ],
    note: "Serve também para quem responde só por uma das pontas — só e-SIC, só portal, só LGPD. O curso é modular: cada painel fecha um tema.",
  },

  problem: {
    id: "problema",
    tone: "elevated",
    eyebrow: "Desafios",
    title: "A linha entre publicar e proteger passa pela sua mesa",
    items: [
      {
        title: "Transparência de um lado, LGPD do outro",
        text: "Publicar demais expõe dados pessoais e vira incidente; publicar de menos derruba o índice de transparência e vira apontamento. Ninguém disse ao município onde passa a linha.",
      },
      {
        title: "O e-SIC com o prazo correndo — e a licitação no portal",
        text: "Pedido de acesso acumulado, prazo da LAI vencendo, e ninguém sabe o que pode ir para o portal quando o documento de licitação tem dado pessoal.",
      },
      {
        title: "A ouvidoria como enxugadeira de gelo",
        text: "Manifestação entrando por todo canal, sem fluxo definido, sem registro central e sem resposta padronizada.",
      },
      {
        title: "A adequação que não saiu do papel",
        text: "Encarregado nomeado no Diário, e só: sem mapeamento de processos, sem inventário de dados, sem RIPD, sem política interna.",
      },
      {
        title: "Equipe pequena, obrigação grande",
        text: "No município — e na Câmara — as exigências são as mesmas dos grandes órgãos, com duas ou três pessoas para dar conta de tudo.",
      },
    ],
  },

  modules: {
    eyebrow: "Programação",
    title: "Em 17 horas, do marco legal à prática — Ouvidoria, Portal, LGPD e IA",
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
        // Título do briefing de outubro (lista oficial dos 6 módulos); result
        // e topics são os do Módulo 6 da /licitacao, cujo conteúdo é idêntico.
        title: "Inteligência Artificial no Setor Público",
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

  speakers: {
    title: "Quem ensina responde por isso na prática",
    items: [
      {
        name: "Mayara Magda da Silva Pastor",
        institution: "ESPECIALISTA EM LGPD · ADVOGADA",
        photoSrc: "/portal/palestrantes/mayara-magda-da-silva-pastor.jpg",
        bio: "Especialista em LGPD (ESMAFE-PR) e Lead Implementer em Gestão da Privacidade da Informação (ISO/IEC 27701). Membro do Comitê Brasileiro de Segurança da Informação e Proteção da Privacidade (ABNT). Advogada, sócia e coordenadora de projetos da Égide Pro, onde implementa programas de compliance com LGPD e ISO 27001/27701, elabora relatórios de impacto e planos de resposta a incidentes.",
      },
      {
        name: "Nilson Francisco Tognato",
        institution: "CONTADOR PÚBLICO · 33 ANOS",
        photoSrc: "/portal/palestrantes/nilson-francisco-tognato.jpg",
        bio: "Contador público por 33 anos. MBA em Gestão Pública e Inovação (UNICENTRO), especialista em Contabilidade Gerencial. Ex-professor de Ciências Contábeis na UNESPAR. Instrutor da Unyflex desde 2020, com ênfase em contabilidade, patrimônio, finanças, orçamento e planejamento municipal.",
      },
      {
        name: "Marcus Gualberto Ganter",
        institution: "CÂMARA MUNICIPAL DE CURITIBA · IA APLICADA",
        photoSrc: "/portal/palestrantes/marcus-gualberto-ganter.jpg",
        bio: "Engenheiro pelo ITA, mestre em Políticas Públicas (UFPR) e em Administração Pública (LSE). Chefe de Gabinete na Câmara Municipal de Curitiba, ex-Diretor de Projetos no Governo do Estado do Paraná. Responsável pelo módulo de IA.",
      },
    ],
  },

  gallery: {
    title: "A experiência presencial",
    photos: [
      {
        src: "/portal/galeria/aula-01.jpg",
        alt: "Plateia durante a palestra",
        width: 1000,
        height: 750,
      },
      {
        src: "/portal/galeria/professor-01.jpg",
        alt: "Palestrante durante a aula",
        width: 1000,
        height: 750,
      },
      {
        src: "/portal/galeria/debate-01.jpg",
        alt: "Participantes em debate durante o curso",
        width: 1000,
        height: 750,
      },
      /* As 9 abaixo entraram em 16/09/2026 (pedido do Bruno: mais fotos da
         sede) — fotos reais da sala de aula já no repositório, reprocessadas
         a 1000px, sem repetir as 3 acima (aula-01 e professor-01 são as mesmas
         sala-01 e professor-02 da /engenharia-nov26). */
      {
        src: "/portal/galeria/turma-01.jpg",
        alt: "Turma posada em pé na sala de aula da Unyflex, em Curitiba, ao fim de um curso presencial.",
        width: 1000,
        height: 750,
      },
      {
        src: "/portal/galeria/professor-02.jpg",
        alt: "Professora à frente da sala, explicando o conteúdo para a turma.",
        width: 1000,
        height: 750,
      },
      {
        src: "/portal/galeria/alunos-01.jpg",
        alt: "Duas alunas acompanhando a aula, com notebook e material sobre a mesa.",
        width: 1000,
        height: 750,
      },
      {
        src: "/portal/galeria/alunos-02.jpg",
        alt: "Alunos em aula na sala clara da Unyflex, com copos e o kit do curso sobre as mesas.",
        width: 1000,
        height: 750,
      },
      {
        src: "/portal/galeria/turma-02.jpg",
        alt: "Grupo de alunos posando diante da TV com a marca Unyflex, na sala de aula.",
        width: 1000,
        height: 750,
      },
      {
        src: "/portal/galeria/sala-02.jpg",
        alt: "Professor com microfone de cabeça conduzindo a aula para uma turma pequena.",
        width: 1000,
        height: 750,
      },
      {
        src: "/portal/galeria/sala-03.jpg",
        alt: "Sala de aula em perspectiva lateral, com o professor à esquerda e o kit do curso sobre a mesa.",
        width: 1000,
        height: 750,
      },
      {
        src: "/portal/galeria/alunos-03.jpg",
        alt: "Três alunos em mesa em L acompanhando a aula, com copos e crachás.",
        width: 1000,
        height: 750,
      },
      {
        src: "/portal/galeria/sala-04.jpg",
        alt: "Sala de aula vista do corredor central, com o professor ao fundo junto à TV.",
        width: 1000,
        height: 666,
      },
    ],
  },

  reviews: {
    rating: "5,0",
    volume: "+450 avaliações",
    sourceLabel: "Google",
    photo: {
      src: "/portal/turma.jpg",
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
          0: "Capacitação prática em 3 dias: terça a quinta (20 a 22/10) ou quarta a sexta (21 a 23/10)",
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
    paymentNote:
      "Aceitamos nota de empenho, com prazo de pagamento de 7 dias após a finalização do curso. Fornecemos toda a documentação necessária para a contratação pelo seu órgão. Pessoa física pode se inscrever por qualquer forma de pagamento.",
    footnote:
      "Valores por aluno. Benefícios do PremiumClass (tour, almoço, assinatura premium, semestre de graduação, kit exclusivo e UNYPOINTS) são concedidos na confirmação da matrícula e não são convertidos em desconto.",
  },

  procurement: {
    id: "como-contratar",
    tone: "paper",
    eyebrow: "Contratação",
    title: "Como seu órgão contrata",
    items: [
      {
        title: "Proposta formal",
        text: "Em nome do seu órgão, com valores, condições e prazo — feita sob medida pelo consultor.",
      },
      {
        title: "Nota de empenho",
        text: "Pagamento em até 7 dias após a conclusão do curso.",
      },
      {
        title: "Documentação para contratação direta",
        text: "CNPJ, declaração de notória especialização e singularidade (art. 74, III, “f”, da Lei 14.133), escopo de Termo de Referência para inexigibilidade e atestado de capacidade técnica — enviados no primeiro contato.",
      },
      {
        title: "Certificado reconhecido",
        text: "Emitido pela Faculdade Unypública, IES credenciada no MEC.",
      },
    ],
    cta: { label: "Quero receber a proposta", href: "#inscricao" },
  },

  form: {
    eyebrow: "Inscrição",
    title: "Garanta sua participação",
    meta: "Turma de 20 a 23/10 em Curitiba ou online ao vivo · Empenho leva tempo no seu órgão — comece o processo agora.",
    steps: {
      title: "Como funciona",
      items: [
        "Você envia seus dados.",
        "Recebe nossa mensagem no WhatsApp, e um consultor monta a proposta com a documentação para a contratação.",
        "O órgão emite a nota de empenho e a vaga está garantida.",
      ],
    },
    // formId e paginaOrigem não mudam (instrução do briefing de outubro);
    // `produto` é novo nesta migração.
    formId: "lp-portal-lgpd",
    produto: SLUG,
    paginaOrigem: SLUG,
    campaignFallback: SLUG,
    planOptions: ["BasicClass", "MasterClass", "PremiumClass"],
    modalidade: {
      label: "Modalidade preferida",
      options: ["Presencial em Curitiba", "Online ao vivo"],
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

  faq: {
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes",
    items: [
      {
        q: "Não consegui ir em setembro. É a mesma turma?",
        a: "Mesma programação, mesmos professores, 20 a 23 de outubro. Com 45 dias de antecedência, dá tempo de empenhar.",
      },
      {
        q: "Só preciso da parte de e-SIC e Portal. Vale a pena?",
        a: "Vale — são dois painéis inteiros. E os demais respondem à pergunta que sempre aparece depois: o que pode ou não ir para o portal quando há dado pessoal.",
      },
      {
        q: "Meu setor de compras pediu o programa e a documentação da empresa para a inexigibilidade. Vocês mandam?",
        a: "Sim, no primeiro contato: programação completa, CNPJ, declaração de notória especialização (art. 74, III, \"f\", da Lei 14.133), escopo de TR e atestado de capacidade técnica. A proposta vem sob medida pelo consultor.",
      },
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
      {
        q: "Onde é o curso?",
        a: "Na sede da Unyflex: R. Voluntários da Pátria, 547, Centro, Curitiba-PR.",
      },
    ],
  },

  footer: {
    logoSrc: "/portal/logo-escura.png", // recorte do /logo-escura.png (que tem margens enormes)
    logoAlt: "Unyflex",
    partnersLabel: "Certificação",
    partners: [{ src: "/portal/faculdade-unypublica.png", alt: "Faculdade Unypública" }],
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
