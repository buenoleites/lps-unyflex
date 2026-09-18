import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp2/) não têm texto próprio.

   Turma de 20 a 23/10/2026 — a de setembro não aconteceu e esta página
   passou a vendê-la em 03/09/2026 (briefing Prompt_ClaudeCode_LP_Portal_out26:
   mesmo slug, mesmo formId; hero, faixa de remarketing, card 02 de problema,
   fechamento do "para quem", 3 perguntas novas de FAQ, linha do formulário,
   bloco "Como seu órgão contrata" e órgão opcional vieram dele). O conteúdo
   programático dos 6 módulos é VERBATIM do programa do cliente
   (conteudo-modulos-portal.md, recebido em 11/08/2026); o Módulo 6 tem os
   tópicos do Módulo 6 da /licitacao com o título do briefing de outubro.
   Copy derivada (marcada nos comentários): frases de `result`, título da
   seção de módulos, cards 01 e 03-05 de problema e as 9 FAQs antigas — o
   briefing original só trouxe o programa.

   Correções do briefing aplicadas em 11/08/2026: investimento (mesmos
   valores da /licitacao) e carga horária de 17 horas. Fotos do hero, do CTA e
   da galeria escolhidas em 11/08/2026 no catálogo Unyflex; retratos dos 3
   professores em 03/09/2026 (ver o bloco de `speakers`). Ainda pendente (não
   bloqueia): textos de avaliação — reviews segue DESLIGADA por ausência da
   chave. */

/* ATUALIZAÇÃO DE 16/09/2026 (briefing "padrão da /engenharia-nov26"): o
   pricingCombo (combo curso + biblioteca + minissérie, online R$ 2.000) SAIU
   e entrou o bloco de Investimento da /engenharia-nov26 (3 planos 2.980 /
   3.200 / 3.980, card recomendado, tabela, rodapé — decisão do Gustavo);
   reviews LIGADAS com os 3 depoimentos públicos da referência e foto de
   turma; galeria de 3 para 12 fotos reais da sede (pedido do Bruno);
   `paginaOrigem: "portal"` para o título do lead sair LP|portal|…. Hero,
   datas, professores, banner, "Como seu órgão contrata", FAQ, formId e
   campos do formulário NÃO mudaram. */

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
      { href: "#como-contratar", label: "Como contratar" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: { href: "#inscricao", label: "Receber proposta" },
  },

  hero: {
    // O CSS do eyebrow (.lp2-eyebrow) já aplica uppercase.
    eyebrow: "Curso presencial em Curitiba · 20 a 23/10 · 17 horas",
    // Headline reformulada em 16/09 (decisão do Gustavo: "nós não respondemos
    // à LAI"). A anterior era o título do anúncio de Portal que se pagou
    // ("A LAI manda publicar. A LGPD manda proteger. Quem decide é você."):
    // anúncio e página deixam de dizer a mesma coisa até o anúncio ser
    // atualizado. 2 linhas a >=1440px, medido no preview.
    title: (
      <>
        Publicar ou proteger? <Kw>Quem decide é você.</Kw>
      </>
    ),
    subtitle:
      "Portal da Transparência, e-SIC, Ouvidoria e LGPD em um curso só — com o módulo de IA aplicada ao setor público. 17 horas para sair com o portal em conformidade, a ouvidoria estruturada e o RIPD encaminhado.",
    audiences:
      "Ouvidor · encarregado de dados (DPO) · controle interno · TI e gestão da informação · assessoria de comunicação · procuradoria · câmaras municipais",
    // Sem href ⇒ o CTA vai para #inscricao.
    cta: { label: "Quero receber a programação com nota de empenho" },
    meta: "Rua Voluntários da Pátria, 547 — Centro, Curitiba/PR · Certificado emitido após a conclusão por instituição reconhecida pelo MEC · Também disponível online ao vivo",
    // Foto do catálogo Unyflex (produtos/auditorio-01.jpg): aula em plenário
    // institucional. Original é retrato 2858×3812; aqui entra a banda central
    // recortada em 3:2 (1600×1066), que preserva o professor, o banner e as
    // poltronas. O preload correspondente está no layout da rota.
    bgSrc: "/portal/hero.jpg",
  },

  ticker: {
    metrics: [
      { value: "49.000+", label: "alunos formados" },
      { value: "1.200+", label: "órgãos atendidos" },
      { value: "5,0", label: "no Google · +450 avaliações" },
      { value: "17", label: "horas de capacitação" },
    ],
  },

  /* Faixa de remarketing (briefing de outubro, verbatim): a página recebe o
     tráfego das negociações abertas da turma de setembro — é a única menção
     legítima a "setembro" na LP, junto com a 1ª pergunta do FAQ. */
  banner: {
    text: "Não deu em setembro? A mesma turma, com a mesma programação, em 20 a 23 de outubro. Tempo de sobra para o empenho.",
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
    // Verbatim do briefing de outubro (objeção real: "eu só queria e-SIC e portal").
    closing:
      "Serve também para quem responde só por uma das pontas — só e-SIC, só portal, só LGPD. O curso é modular: cada painel fecha um tema.",
  },

  /* 5 cards: o template dá largura dupla ao 1º card, fechando duas linhas
     exatas no grid de 3 colunas, sem patch CSS. O card 02 é verbatim do
     briefing de outubro; os demais são copy derivada do programa (o briefing
     original não trouxe seção de dores). Sem números inventados. */
  problem: {
    title: "A linha entre publicar e proteger passa pela sua mesa",
    items: [
      {
        title: "Transparência de um lado, LGPD do outro",
        desc: "Publicar demais expõe dados pessoais e vira incidente; publicar de menos derruba o índice de transparência e vira apontamento. Ninguém disse ao município onde passa a linha.",
      },
      {
        title: "O e-SIC com o prazo correndo — e a licitação no portal",
        desc: "Pedido de acesso acumulado, prazo da LAI vencendo, e ninguém sabe o que pode ir para o portal quando o documento de licitação tem dado pessoal.",
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

  /* Conteúdo programático VERBATIM do programa do cliente (mesmo programa da
     turma de setembro, confirmado pelo briefing de outubro: "a mesma turma,
     com a mesma programação").
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

  /* quote (seção opcional): sem material — desligada. */

  /* Os 3 professores da turma de outubro, na ordem do briefing (José Augusto
     Alexandria Alves saiu — não está nesta turma). Bios: Nilson e Marcus
     byte-idênticos à /patrimonio (fonte canônica decretada pelo Gustavo; o
     briefing de outubro trouxe versões divergentes e ele decidiu em
     03/09/2026 manter as atuais), com a frase final do Marcus ajustada para
     "módulo de IA" como pede o briefing; Mayara mantém a bio de agosto. As
     linhas de instituição (small uppercase antes do nome) vêm do briefing
     (a da Mayara mudou para "ADVOGADA").
     FOTOS (03/09/2026): a regra do monograma foi cumprida — as três chegaram
     juntas e entraram de uma vez, sem card misto em nenhum momento. Todas em
     4:5, 640×800, o padrão dos retratos do repo. As de Nilson e Marcus são
     cópia byte a byte dos recortes da /patrimonio (mesma foto de origem; os
     assets são namespaced por LP, então copiar é o certo, não referenciar a
     pasta de outra rota). A da Mayara TROCOU em 17/09/2026: o arquivo INÉDITO
     de 150×150 (ampliação 6,7×, dívida registrada em memória) foi substituído
     por uma foto em resolução real mandada pelo Gustavo — mesmo nome de
     arquivo, nenhuma mudança de código. */
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

  /* Fotos do catálogo Unyflex, linha "curso" (sala de aula e plenário) — as
     fotos de salão/palco do catálogo são da LicitaExpo e prometeriam uma
     experiência de evento que este curso não entrega. `alt` é a descrição do
     próprio catálogo; sem `caption`, porque local e data não estão
     confirmados. */
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

  /* Investimento — bloco IDÊNTICO ao da /engenharia-nov26 (tabela de preços
     única para todos os cursos, briefing de 16/09/2026): três planos, card
     recomendado, tabela comparativa e nota de rodapé. Substituiu o combo em
     16/09/2026; sem plano online (a modalidade continua no formulário). */
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

  /* "Como seu órgão contrata" — pedido pelo briefing de outubro (§9), que
     descreve o card de documentação exatamente como o da /engenharia; os 4
     cards e o CTA são cópia byte a byte de app/engenharia/content.tsx
     (decisão do Gustavo em 03/09/2026). Renderiza antes do FAQ. */
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

  /* Avaliações públicas do Google (texto integral e nomes como publicados),
     as mesmas da /engenharia-nov26 e da /reforma-tributaria — ligadas em
     16/09/2026 (briefing: "Depoimentos: reutilize os da referência").
     Renderiza entre a galeria e o Investimento. Foto de turma em sala, da
     referência. */
  reviews: {
    rating: "5,0",
    ratingValue: 5,
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

  /* compare (seção opcional): não pedida — o online aparece no hero, no card
     do pricing e no campo de modalidade. */

  /* As 3 primeiras perguntas são verbatim do briefing de outubro (§7, "no
     topo da lista"). As 9 seguintes são as de agosto, derivadas do programa:
     cada resposta ancorada em tópico verbatim, sem prometer o que não está no
     programa; a de empenho é a resposta B2G verbatim das outras LPs. */
  faq: {
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
    ],
  },

  form: {
    title: "Garanta sua participação",
    // Verbatim do briefing de outubro; o CSS (.lp2-form-section__meta) já
    // aplica uppercase.
    meta: "Turma de 20 a 23/10 em Curitiba ou online ao vivo · Empenho leva tempo no seu órgão — comece o processo agora.",
    // Foto do catálogo Unyflex (produtos/grupo-oficial-plenario-01.jpg): a
    // turma inteira no plenário. Substituiu a provisória que vinha da
    // /licitacao — o arquivo agora é próprio da rota.
    bgSrc: "/portal/cta-final.jpg",
    // Novo slug desta LP — precisa ser mapeado no n8n ANTES de rodar mídia.
    formId: "lp-portal-lgpd",
    submitLabel: "Receber proposta",
    thankYou: { url: "/obrigado", withPii: false },
    // Briefing de outubro: órgão NÃO é obrigatório nesta LP (o default do
    // LeadForm segue true nas demais rotas).
    orgaoRequired: false,
    modalidade: {
      label: "Modalidade preferida",
      options: ["Presencial em Curitiba", "Online ao vivo"],
    },
    // Slug da página (16/09/2026): vai como `pagina_origem` e é o token do
    // título do lead — LP|portal|s=…|c=…|x=…|f=lp-portal-lgpd. O formId não
    // muda (instrução do briefing), por isso o f= não segue lp-{slug}. Sem
    // `produto`: o slug `portal` do mapa de cursos do n8n ainda aponta para a
    // turma de setembro (pendência anterior a esta atualização).
    paginaOrigem: "portal",
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
    priceAnchor: "a partir de R$ 2.980",
    label: "Receber proposta",
    href: "#inscricao",
  },
};
