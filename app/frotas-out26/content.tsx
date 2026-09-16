import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

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

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp2/) não têm texto próprio.

   Frotas Públicas — Transformação Digital, Auditoria e I.A. na Gestão de
   Veículos Oficiais — turma de 20 a 23/10/2026 (/frotas-out26). Estrutura,
   componentes e instrumentação da /engenharia-nov26 (a referência do briefing
   de 16/09/2026).

   FONTES:
   1. Documento 3 do briefing de 16/09/2026 — descrição, 6 módulos (itens
      verbatim, só ortografia/espaçamento; os itens vinham numerados e
      separados por "·" numa linha só), professores (fatos das bios), datas e
      carga horária. O documento NÃO traz seção de público-alvo (só "Áreas:
      Licitações Públicas"): os 4 cards de "para quem" e a linha de cargos do
      hero foram derivados dos módulos — registrado na PR.
   2. app/patrimonio/content.tsx — bios do Nilson e do Marcus (fonte canônica
      das bios recorrentes, regra do Gustavo). Marcus SEM a frase final
      "Responsável pelo módulo de IA aplicada." (decisão do Gustavo,
      16/09/2026). O documento traz bios diferentes para os dois — divergências
      listadas na PR, não aplicadas. Nota e horas na última frase, por pedido
      do briefing.
   3. app/engenharia-nov26/content.tsx — ticker, reviews, Investimento (3
      planos, card recomendado, tabela, rodapé), "Como seu órgão contrata", as
      3 FAQs fixas, formulário, rodapé, stickyCta.
   4. Catálogo de fotos já no repositório (sede em Curitiba). O hero mostra a
      sala com o slide "Formulários com Inteligência Artificial embarcada" e
      a galeria inclui a foto com o slide "Diários de Bordo Digital" — os dois
      são itens do módulo 4 deste curso, por isso entram AQUI e não nas
      outras LPs. Alt de imagem é acessibilidade, não copy.

   COPY ESCRITA NESTA PR (pedida pelo briefing, para revisão do Gustavo):
   hero.title, hero.subtitle, hero.audiences, audience (4 cards e closing),
   problem (4 citações), speakers.title e as bios de Everton e José Augusto
   reescritas, modules.title, as FAQs 1–6, form.meta.

   INSTRUMENTAÇÃO: formId lp-frotas-out26 · produto frotas-out26 (chave a
   cadastrar no mapa de cursos do n8n ANTES de rodar tráfego) · título do lead
   LP|frotas-out26|s=…|c=…|x=…|f=lp-frotas-out26 (token = slug, sem
   tituloProduto, por instrução do briefing). */

export const frotasOut26Content: EventLpContent = {
  /* O accent (#00aeef, ciano — vertical Licitações) NÃO é definido aqui:
     todos os tokens de cor da LP vivem em ./theme.css. */

  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    links: [
      { href: "#para-quem", label: "Para quem" },
      { href: "#problema", label: "Desafios" },
      { href: "#modulos", label: "Programação" },
      { href: "#planos", label: "Investimento" },
      { href: "#como-contratar", label: "Como contratar" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: { href: "#inscricao", label: "Receber proposta" },
  },

  hero: {
    // O CSS do eyebrow (.lp2-eyebrow) já aplica uppercase.
    eyebrow: "Curso presencial em Curitiba · 20 a 23/10 · 17 horas",
    title: (
      <>
        O Tribunal pede abastecimento, odômetro e GPS conciliados. Diário de
        bordo em papel <Kw>não prova nada</Kw>.
      </>
    ),
    subtitle:
      "Diagnóstico da frota, auditoria digital com painéis de fiscalização, diário de bordo digital, contratos por desempenho na Lei 14.133, IA aplicada e descarbonização — em 4 dias, com quem implantou a gestão de frota em cerca de 40 prefeituras.",
    audiences:
      "Gestor de frota e transportes · secretaria de administração · compras, licitações e contratos · fiscal de contrato · controle interno e auditoria",
    // Sem href ⇒ o CTA vai para #inscricao.
    cta: { label: "Quero receber a programação com nota de empenho" },
    meta: "Rua Voluntários da Pátria, 547 · Centro, Curitiba/PR · Certificado emitido pela Faculdade Unypública, IES credenciada no MEC",
    // Sala de aula da sede com o slide "Formulários com Inteligência
    // Artificial embarcada" (item do módulo 4 deste curso). Mesmo arquivo do
    // hero da /engenharia-nov26, que já leva o ganho de gama eq=gamma=1.30
    // (luma média 62) — regerar do original sem esse ganho devolve a página
    // preta. É o LCP da página — o layout da rota faz o preload.
    bgSrc: "/frotas-out26/hero.jpg",
  },

  ticker: {
    metrics: [
      { value: "49.000+", label: "alunos formados" },
      { value: "1.200+", label: "órgãos atendidos" },
      { value: "5,0", label: "no Google · +450 avaliações" },
      { value: "17", label: "horas de capacitação" },
    ],
  },

  /* 4 cards derivados dos módulos (o documento não traz público-alvo).
     variant "grid": todos visíveis de uma vez, como filtro de autoqualificação. */
  audience: {
    title: "Este curso é para quem responde pelos veículos oficiais",
    variant: "grid",
    groups: [
      {
        id: "frota",
        label: "Gestão de Frota e Transportes",
        description:
          "Gestores e encarregados de frota, garagem e transportes que respondem por uso, abastecimento, manutenção e diário de bordo dos veículos oficiais.",
      },
      {
        id: "administracao",
        label: "Secretaria de Administração",
        description:
          "Secretários e diretores administrativos que decidem entre frota própria e terceirizada, renovação, desfazimento e leilão de veículos inservíveis.",
      },
      {
        id: "contratos",
        label: "Compras, Licitações e Contratos",
        description:
          "Quem elabora o Termo de Referência por desempenho, fiscaliza locação, manutenção e combustível e aplica penalidades a fornecedores.",
      },
      {
        id: "controle",
        label: "Controle Interno e Auditoria",
        description:
          "Controladores e auditores que conciliam abastecimento, odômetro e GPS, montam a amostra por matriz de risco e respondem ao Tribunal de Contas.",
      },
    ],
    closing:
      "Serve também para Câmaras, autarquias e consórcios com frota própria ou locada — mas o centro do curso é quem opera e fiscaliza os veículos no município.",
  },

  /* 4 citações curtas, no tom de um servidor falando (briefing). O grid vira
     2×2 via theme.css (o template assume 6–10 cards). */
  problem: {
    title: "Se alguma dessas frases podia ser sua, o curso é seu",
    items: [
      {
        title: "O diário de bordo é um caderno na garagem",
        desc: "“Quilometragem anotada a caneta, sem assinatura, sem foto. Quando o Tribunal pede a conciliação com o abastecimento, não fecha — e eu é que assino.”",
      },
      {
        title: "O combustível some e ninguém sabe onde",
        desc: "“A fatura da locação e do abastecimento chega, a gente ataca e paga. Glosar o quê, se eu não tenho odômetro nem GPS para comparar?”",
      },
      {
        title: "A oficina manda o orçamento e a gente aceita",
        desc: "“Não tenho histórico por veículo. Cada manutenção parece a primeira, e o carro que dá prejuízo continua na frota porque ninguém provou que dá.”",
      },
      {
        title: "IA, elétrico, telemetria: todo mundo fala",
        desc: "“Sei que dá para prever manutenção e detectar desvio com dado. Na prática, continuo com planilha e vale de combustível.”",
      },
    ],
  },

  /* Programação VERBATIM do documento 3 (6 módulos), na ordem do documento.
     O componente numera 01–06, por isso os títulos entram sem o prefixo
     "Módulo N -"; cada item numerado do documento é uma string em `topics`.
     Só ortografia e espaçamento foram corrigidos. */
  modules: {
    title: "Em 17 horas, do diagnóstico da frota à frota verde",
    items: [
      {
        title: "Inteligência Artificial Aplicada",
        topics: [
          "Fundamentos de IA aplicados ao ecossistema público",
          "Ferramentas práticas de IA para o dia a dia do gestor",
          "IA na governança pública: transparência, automação e decisão",
          "Análise preditiva para manutenção, previsão de despesas e compliance",
          "Consciência situacional em gestão e controle de crises",
          "Prática de IA na gestão de frotas: modelagem de dados e cenários reais",
          "Reconhecimento de padrões de condução e alertas de risco",
          "Mineração de texto de ordens de serviço para detecção de anomalias",
        ],
      },
      {
        title: "Gestão da Frota — Diagnóstico e Processos",
        topics: [
          "Levantamento de dados: uso, gastos, manutenções, controle",
          "Identificação de gargalos operacionais",
          "Maturidade digital da gestão de frota",
          "Perfil dos motoristas e operadores",
          "Ativos, obsolescência e uso por setor",
          "Falhas recorrentes e retrabalhos",
          "Documentos e formulários dos registros manuais",
          "Relacionamento com oficinas, contratos vigentes e prestadores",
        ],
      },
      {
        title: "Frotas — Auditoria Digital e Fiscalização",
        topics: [
          "Gestão de riscos, painéis de fiscalização e dashboards contratuais",
          "Amostras por matriz de risco para auditoria focada",
          "Conciliação automatizada entre abastecimento, odômetro, GPS e ordens de tráfego",
          "Alertas automáticos para desvios, fraudes ou uso indevido",
          "Classificação de veículos em conformes, pendentes ou críticos",
          "Monitoramento de infrações, falhas de manutenção e licenciamento",
          "Exportação de relatórios para o Tribunal de Contas e Controladoria",
          "Relatórios automatizados como prova legal em processos administrativos",
        ],
      },
      {
        title: "Integração de Diários de Bordo Digitais",
        topics: [
          "Campos obrigatórios, rastreamento e automação",
          "Formulários com IA embarcada",
          "Validação automática (ex.: inconsistência de quilometragem)",
          "Assinaturas digitais e fotos de operação",
          "Preenchimento via celular/tablet",
          "Sincronização com sensores e telemetria",
          "Histórico por veículo e motorista",
          "Painel de conformidade com taxa de registros completos",
        ],
      },
      {
        title: "Contratos Inteligentes, Nova Lei de Licitações e Terceirização",
        topics: [
          "Lei nº 14.133/2021 na gestão e aquisição de frotas",
          "Viabilidade: frota própria × terceirização",
          "Termos de Referência por desempenho e SLAs",
          "Fiscalização eletrônica de locação, manutenção e combustível",
          "Faturas automatizadas e auditoria de glosas",
          "Matriz de riscos em contratos de transporte",
          "Penalidades, notificações eletrônicas e processos integrados",
          "Painel de eficiência de fornecedores",
        ],
      },
      {
        title: "Descarbonização, Frota Verde e Sustentabilidade",
        topics: [
          "Matriz energética e transição para elétricos e híbridos",
          "Eletropostos: dimensionamento e viabilidade",
          "Pegada de carbono e relatórios ESG",
          "Ciclo de vida de baterias, logística reversa de pneus e lubrificantes",
          "Condução econômica e incentivos",
          "Desfazimento de bens: leilão de veículos inservíveis",
          "Micromobilidade como modal alternativo",
          "Auditoria de metas ambientais",
        ],
      },
    ],
  },

  /* Bancada com 4 professores (documento 3), na ordem do documento. Nilson e
     Marcus têm foto no repositório (as mesmas da /patrimonio); Everton e José
     Augusto ficam com o monograma. O grid de 3 colunas vira 2×2 via
     theme.css. José Augusto: mesma bio da /dispensa-out26. */
  speakers: {
    title: "Quem ensina implantou a gestão de frota em dezenas de prefeituras",
    items: [
      {
        name: "Everton Rosa de Jesus",
        institution: "GESTÃO DE FROTAS PÚBLICAS · 18 ANOS",
        photoSrc: null,
        bio: "Administrador, MBA Executivo em Gestão de Negócios Internacionais (Unicesusc e Universidade Lusófona) e MBA em Value Investing (AGF Grupo Barsi). Na Secretaria de Estado da Administração de SC (2008–2019) desenvolveu o sistema GVE, licenciado ao Executivo estadual; desde 2019 orienta rotinas de gestão de frota em cerca de 40 prefeituras de SC e uma do RS. 18 anos em administração de veículos públicos. 27+ horas de aula na Unyflex, avaliação 9,8.",
      },
      {
        name: "Nilson Francisco Tognato",
        institution: "CONTADOR PÚBLICO · 33 ANOS",
        photoSrc: "/frotas-out26/palestrantes/nilson-francisco-tognato.jpg",
        bio: "Contador público por 33 anos. MBA em Gestão Pública e Inovação (UNICENTRO), especialista em Contabilidade Gerencial. Ex-professor de Ciências Contábeis na UNESPAR. Instrutor da Unyflex desde 2020, com ênfase em contabilidade, patrimônio, finanças, orçamento e planejamento municipal. 1350+ horas de aula na Unyflex, avaliação 9,6.",
      },
      {
        name: "Marcus Gualberto Ganter",
        institution: "CHEFE DE GABINETE · CÂMARA MUNICIPAL DE CURITIBA",
        photoSrc: "/frotas-out26/palestrantes/marcus-gualberto-ganter.jpg",
        bio: "Engenheiro pelo ITA, mestre em Políticas Públicas (UFPR) e em Administração Pública (LSE). Chefe de Gabinete na Câmara Municipal de Curitiba, ex-Diretor de Projetos no Governo do Estado do Paraná. 285+ horas de aula na Unyflex, avaliação 9,7.",
      },
      {
        name: "José Augusto Alexandria Alves",
        institution: "PROCURADOR · CÂMARA MUNICIPAL DE CURITIBA",
        photoSrc: null,
        bio: "Procurador efetivo da Câmara Municipal de Curitiba, atua em licitações e contratos administrativos. Pós-graduado em Direito Público, Trabalho e Previdenciário (Anhanguera-Uniderp), graduado em Direito (Universidade de Cuiabá). 552+ horas de aula na Unyflex, avaliação 9,6.",
      },
    ],
  },

  /* Galeria (pedido do Bruno: mais fotos da sede). Doze fotos reais da sala
     de aula da Unyflex em Curitiba já existentes no repositório, reprocessadas
     a 1000px — incluindo a foto com o slide "Diários de Bordo Digital"
     (módulo 4 deste curso). Múltiplo de 3 (o grid é CSS columns: 3). */
  gallery: {
    title: "A experiência presencial",
    photos: [
      {
        src: "/frotas-out26/galeria/turma-01.jpg",
        alt: "Turma posada em pé na sala de aula da Unyflex, em Curitiba, ao fim de um curso presencial.",
        width: 1000,
        height: 750,
      },
      {
        src: "/frotas-out26/galeria/debate-01.jpg",
        alt: "Três participantes debatendo em mesa, com o slide sobre diário de bordo digital na TV ao fundo.",
        width: 1000,
        height: 750,
      },
      {
        src: "/frotas-out26/galeria/professor-01.jpg",
        alt: "Professora à frente da sala, explicando o conteúdo para a turma.",
        width: 1000,
        height: 750,
      },
      {
        src: "/frotas-out26/galeria/alunos-01.jpg",
        alt: "Duas alunas acompanhando a aula, com notebook e material sobre a mesa.",
        width: 1000,
        height: 750,
      },
      {
        src: "/frotas-out26/galeria/sala-01.jpg",
        alt: "Sala de aula vista do fundo durante a aula: alunos sentados e o professor junto ao telão.",
        width: 1000,
        height: 750,
      },
      {
        src: "/frotas-out26/galeria/alunos-02.jpg",
        alt: "Alunos em aula na sala clara da Unyflex, com copos e o kit do curso sobre as mesas.",
        width: 1000,
        height: 750,
      },
      {
        src: "/frotas-out26/galeria/turma-02.jpg",
        alt: "Grupo de alunos posando diante da TV com a marca Unyflex, na sala de aula.",
        width: 1000,
        height: 750,
      },
      {
        src: "/frotas-out26/galeria/sala-02.jpg",
        alt: "Professor com microfone de cabeça conduzindo a aula para uma turma pequena.",
        width: 1000,
        height: 750,
      },
      {
        src: "/frotas-out26/galeria/aluno-01.jpg",
        alt: "Aluno acompanhando a aula em primeiro plano, com a turma ao fundo.",
        width: 1000,
        height: 750,
      },
      {
        src: "/frotas-out26/galeria/professor-02.jpg",
        alt: "Professor em pé, gesticulando enquanto conduz a aula.",
        width: 1000,
        height: 750,
      },
      {
        src: "/frotas-out26/galeria/sala-03.jpg",
        alt: "Sala de aula em perspectiva lateral, com o professor à esquerda e o kit do curso sobre a mesa.",
        width: 1000,
        height: 750,
      },
      {
        src: "/frotas-out26/galeria/alunos-03.jpg",
        alt: "Três alunos em mesa em L acompanhando a aula, com copos e crachás.",
        width: 1000,
        height: 750,
      },
    ],
  },

  /* Avaliações públicas do Google, texto integral e nomes como publicados —
     reutilizadas da referência. Foto de turma em sala, também da referência. */
  reviews: {
    rating: "5,0",
    ratingValue: 5,
    volume: "+450 avaliações",
    sourceLabel: "Google",
    photo: {
      src: "/frotas-out26/turma.jpg",
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

  /* Investimento — bloco IDÊNTICO ao da /engenharia-nov26 (tabela de preços
     única para todos os cursos, briefing de 16/09/2026). Sem plano online (a
     modalidade continua como campo do formulário). */
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

  /* "Como seu órgão contrata" — verbatim da referência. */
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

  /* FAQ: 1–6 adaptadas ao curso (a partir dos módulos do documento); 7–9
     fixas, verbatim da referência (empenho/PF, documentação e online). */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Minha frota é pequena. Vale a pena?",
        a: "Vale — o diagnóstico do módulo 2 (uso, gastos, manutenções, gargalos e maturidade digital) e o diário de bordo digital funcionam com dez veículos ou com duzentos. Quanto menor a equipe, mais o registro manual custa.",
      },
      {
        q: "Não temos GPS nem telemetria. Dá para aplicar?",
        a: "Dá. A conciliação começa com o que já existe: abastecimento, odômetro e ordens de tráfego. Telemetria e sensores entram como etapa seguinte, com o dimensionamento tratado no curso.",
      },
      {
        q: "A parte de IA exige saber programar?",
        a: "Não. São ferramentas de uso direto para o gestor: análise preditiva de manutenção, previsão de despesas, reconhecimento de padrões de condução e mineração das ordens de serviço.",
      },
      {
        q: "Vou sair com modelos prontos?",
        a: "Sim: campos obrigatórios do diário de bordo digital, estrutura de Termo de Referência por desempenho com SLAs, matriz de riscos para contratos de transporte e o roteiro de relatórios para o Tribunal de Contas e a Controladoria.",
      },
      {
        q: "Nossa frota é terceirizada. O curso serve?",
        a: "Serve. O módulo de contratos trata da viabilidade entre frota própria e terceirização, da fiscalização eletrônica de locação, manutenção e combustível, da auditoria de glosas e das penalidades a fornecedores.",
      },
      {
        q: "Serve para Câmara, autarquia ou consórcio?",
        a: "Sim. Os controles, a Lei 14.133 e as exigências do Tribunal de Contas são os mesmos para qualquer órgão que opera ou loca veículos oficiais.",
      },
      {
        q: "Posso pagar com nota de empenho? E como pessoa física?",
        a: "Nota de empenho com pagamento em 7 dias após o curso. Pessoa física paga por PIX, cartão ou boleto.",
      },
      {
        q: "Que documentos vocês enviam para a contratação?",
        a: "No primeiro contato: proposta formal em nome do órgão, CNPJ, declaração de notória especialização e singularidade (art. 74, III, “f”, da Lei 14.133), escopo de Termo de Referência para inexigibilidade e atestado de capacidade técnica.",
      },
      {
        q: "Tem opção online?",
        a: "Sim, ao vivo, com as mesmas aulas e transmissão em tempo real. Kit, coffee e vouchers são exclusivos do presencial.",
      },
    ],
  },

  form: {
    title: "Garanta sua participação",
    // O CSS do meta (.lp2-form-section__meta) já aplica caixa alta.
    meta: "Turma de 20 a 23/10 em Curitiba · Empenho leva tempo no seu órgão — comece o processo agora.",
    bgSrc: "/frotas-out26/cta-final.jpg",
    // BLOQUEIO DE PUBLICAÇÃO: o slug `frotas-out26` (campo `produto` abaixo)
    // precisa estar no mapa de cursos do n8n antes de a página receber
    // tráfego, senão o lead entra como "Curso não identificado".
    formId: "lp-frotas-out26",
    submitLabel: "Receber proposta",
    thankYou: { url: "/obrigado", withPii: false },
    modalidade: {
      label: "Modalidade preferida",
      options: ["Presencial em Curitiba", "Online ao vivo"],
    },
    vinculo: {
      label: "Seu vínculo",
      // Mesmo select da referência: o toggle Sim/Não reprovava lead
      // qualificado (o n8n fechava "Não" como Perdido). Values = payload.
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
    // Chave do mapa de cursos do n8n. Solução no Omie: "Frotas Públicas"
    // (confirmar o id).
    produto: "frotas-out26",
    paginaOrigem: "frotas-out26",
    // Sem tituloProduto: o briefing manda o token do título ser o slug
    // (LP|frotas-out26|s=…|c=…|x=…|f=lp-frotas-out26).
  },

  /* Rodapé replicado da referência (mesma parceira e mesmas redes). */
  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    partners: [
      // invert: o logo original é escuro — em marca branca sobre o rodapé.
      {
        src: "/frotas-out26/parceiros/faculdade-unypublica.png",
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
