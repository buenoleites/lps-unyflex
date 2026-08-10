import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp2/) não têm texto próprio.

   O briefing chegou truncado em alguns pontos (mesmo caso da /tesouraria).
   Convenção aplicada, confirmada com o Gustavo em 10/08/2026: reconstruir SEM
   marca o que a /tesouraria ou o próprio briefing corroboram (título e desc do
   Módulo 6, FAQ 3 e 8, linha dos vouchers de churrascaria, bio do Tognato) e
   marcar "[PENDENTE]" o resto.

   O conteúdo programático integral dos 6 módulos chegou na 2ª rodada e está
   aqui. Com ele saíram os dois últimos "[PENDENTE]" da página: o fim do
   subtítulo do hero veio íntegro e a linha final do "Para quem é" fechou pela
   fusão das duas versões truncadas.
   As fotos reais (hero e os três professores) chegaram em 10/08/2026. O único
   "[ASSET PROVISÓRIO]" que sobrou é o fundo do CTA final: segue a foto oficial
   da /comunicacao, copiada para este namespace até chegar a definitiva. */

/* A ordem dos itens é a mesma nos 3 planos presenciais — as linhas se alinham
   visualmente entre os cards (mesmo padrão da /comunicacao e /tesouraria).
   As linhas são EXATAMENTE as da tabela do briefing (sem linha de certificado
   nem mentoria); a linha dos vouchers chegou truncada ("2 vouchers de
   churrascar…") e foi fechada como exclusiva do PremiumClass, padrão da
   /tesouraria. */
const PLANO_ITENS = [
  "", // índice 0 recebe label próprio por plano (dias de capacitação)
  "6 coffee breaks gourmet",
  "Desconto em pós-graduação",
  "Kit boas-vindas",
  "Assinatura Premium",
  "2 vouchers de churrascaria",
];

function planoFeatures(primeiroItem: string, inclui: boolean[]) {
  return PLANO_ITENS.map((label, i) => ({
    label: i === 0 ? primeiroItem : label,
    included: inclui[i],
  }));
}

export const patrimonioContent: EventLpContent = {
  /* O accent (#69acf1) NÃO é definido aqui: todos os tokens de cor da LP vivem
     em um único bloco em ./theme.css (accent + deep/ring/tint/ink derivados). */

  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    links: [
      { href: "#para-quem", label: "Para quem" },
      { href: "#problema", label: "Desafios" },
      { href: "#modulos", label: "Módulos" },
      { href: "#planos", label: "Planos" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: { href: "#inscricao", label: "Receber proposta" },
  },

  hero: {
    eyebrow: "Curso presencial em Curitiba · 29 e 30/09, 01 e 02/10 · 17 horas",
    title: (
      <>
        Faça o inventário <Kw>bater com a contabilidade</Kw> — antes que o
        Tribunal de Contas aponte primeiro
      </>
    ),
    subtitle:
      "Gestão de ativos, inventário físico, contabilidade patrimonial conforme NBC TSP e MCASP, e Inteligência Artificial aplicada ao patrimônio público. Para quem responde pelos bens do órgão na prática.",
    // Linha derivada dos 4 perfis da seção "Para quem é" do briefing (o campo
    // é obrigatório no template e o briefing não traz linha própria de públicos).
    audiences:
      "Chefe de patrimônio · almoxarifado patrimonial · contador público · controle interno",
    // Sem href ⇒ o CTA vai para #inscricao (briefing: âncora para o formulário).
    cta: { label: "Quero receber proposta com nota de empenho" },
    // Os dois badges do hero + a nota de modalidade do briefing, na linha de
    // meta (small muted) — o template não tem slot próprio de badges.
    meta: "Rua Voluntários da Pátria, 547 — Centro, Curitiba/PR · Certificado emitido após a conclusão por instituição reconhecida pelo MEC · Também disponível online ao vivo",
    // Foto real de turma Unyflex (10/08/2026). O scrim do template é forte à
    // esquerda, onde o texto senta: o instrutor fica sob o texto e a turma, à
    // direita, permanece visível — é o enquadramento pretendido.
    bgSrc: "/patrimonio/hero.jpg",
  },

  /* 3 métricas: o número de avaliações do Google saiu por não estar
     confirmado (número não confirmado não entra na página, ainda que venha do
     template clonado). O grid de 4 colunas é ajustado em theme.css. */
  ticker: {
    metrics: [
      { value: "49.000+", label: "alunos formados" },
      { value: "1.200+", label: "órgãos atendidos" },
      { value: "17", label: "horas de capacitação" },
    ],
  },

  /* variant "grid": esta seção é filtro de autoqualificação — o leitor tem que
     se reconhecer em segundos, sem clicar. Por isso os 4 perfis ficam visíveis
     ao mesmo tempo (2×2 no desktop) em vez das abas do template. */
  audience: {
    title: "Este curso é para quem responde pelo patrimônio",
    variant: "grid",
    groups: [
      {
        id: "patrimonio",
        label: "Patrimônio",
        description:
          "Chefe ou coordenador do Setor de Patrimônio — bens móveis, imóveis e intangíveis, inventário, tombamento, baixas e guarda.",
      },
      {
        id: "almoxarifado",
        label: "Almoxarifado",
        description:
          "Servidor de patrimônio e almoxarifado patrimonial — quem confere, plaqueta, lança movimentação e executa o inventário físico.",
      },
      {
        id: "contabilidade",
        label: "Contabilidade",
        description:
          "Contador público e coordenador de contabilidade patrimonial — imobilizado, depreciação, baixas e reavaliações corretos para fechar o balanço.",
      },
      {
        id: "controle",
        label: "Controle",
        description:
          "Controlador e auditor interno — conciliação físico-contábil e resposta a apontamentos de Tribunal de Contas.",
      },
    ],
    // Íntegra pela fusão das duas versões truncadas do briefing: a 1ª rodada
    // trouxe a cauda ("…de imóveis e incorporação de obras — …"), a 2ª trouxe
    // a cabeça ("Serve também para procuradoria e engenharia…").
    closing:
      "Serve também para procuradoria e engenharia quando o tema é regularização de imóveis e incorporação de obras — mas o centro do curso é quem vive o patrimônio no dia a dia.",
  },

  /* As 4 citações do briefing, verbatim, como cards ("voz do servidor"). Os
     micro-títulos são derivados — o contrato do grid exige `title` por card e
     o briefing só trouxe as falas; flagado no relatório para validação. O grid
     vira 2×2 via theme.css (o template assume 6–10 cards). */
  problem: {
    title: "Se alguma dessas frases podia ser sua, o curso é seu",
    items: [
      {
        title: "O inventário nunca fecha",
        desc: "“Nosso inventário nunca fecha com a contabilidade: bem com plaqueta que não está no sistema, bem no sistema que ninguém acha, imóvel sem documentação. Uma hora isso estoura no TCE.”",
      },
      {
        title: "Depósito de problema velho",
        desc: "“O patrimônio virou depósito de problema velho: anos sem depreciação direito, inservível ocupando espaço, baixa mal feita — mas o balanço tem que sair.”",
      },
      {
        title: "Tudo circula sem termo",
        desc: "“Tudo entra, sai e muda de sala sem termo de responsabilidade. Se sumir um computador, todo mundo olha pro patrimônio.”",
      },
      {
        title: "A IA longe da planilha",
        desc: "“Falam de IA, mas meu inventário é planilha e papel. Queria cruzar NF com empenho, achar divergência, gerar relatório pro Tribunal — e não sei por onde começar.”",
      },
    ],
  },

  /* schedule (timeline por dia) desligada nesta LP: o briefing pede módulos em
     cards com accordion — seção `modules`, criada para esta LP. */

  /* Conteúdo programático integral, com objetivo + tópicos por módulo. As
     frases de `result` (visíveis com o card fechado) vêm da seção "O que você
     leva" do briefing; objetivo e tópicos são VERBATIM do programa do cliente.
     Seis trechos chegaram corrompidos na 2ª rodada — a truncagem era do
     transporte, não do briefing: o Gustavo mandou os originais íntegros em
     10/08/2026 e eles substituíram as reconstruções. Nada aqui é reconstruído. */
  modules: {
    title: "Em 17 horas, você sai com o ciclo completo sob controle",
    items: [
      {
        title: "Patrimônio Móvel: Governança, Logística e Guarda",
        result:
          "Fluxos de aquisição, recebimento, guarda, movimentação e responsabilização de usuários que fecham as portas por onde bem público some",
        objective:
          "Capacitar para estruturar processos eficientes de aquisição, recebimento, armazenamento, distribuição e guarda dos bens públicos. Fortalecer os controles patrimoniais, a responsabilização dos usuários e a governança dos ativos móveis.",
        topics: [
          "Planejamento de aquisições de bens móveis segundo a Lei nº 14.133/2021",
          "Fluxo de recebimento técnico, aceitação e conferência de materiais permanentes",
          "Técnicas de armazenagem, controle de estoque patrimonial e segurança física",
          "Logística de distribuição, carga, descarga e controle de rotas internas",
          "Termo de responsabilidade, guarda, cautela, movimentação e responsabilização dos usuários",
          "Fluxo operacional do patrimônio público: entrada, movimentação, controle e saída dos bens públicos",
          "Gestão de contratos de assistência técnica, seguros e garantias de fábrica",
          "Regularização de ativos: licenciamento, taxas e operacionalização de máquinas",
          "Controle da localização física dos bens e atualização cadastral das movimentações internas",
          "Processos de responsabilização administrativa por danos, negligência ou extravios",
          "Indicadores de desempenho e benefícios da gestão patrimonial para apoio à tomada de decisão",
        ],
      },
      {
        title: "Inventário Físico e Auditoria Patrimonial",
        result:
          "Planejar e executar o inventário anual ou inicial com conciliação físico-contábil e relatório final pronto para o Controle Interno e Externo",
        objective:
          "Desenvolver competências para planejar, executar e validar inventários patrimoniais com segurança técnica e conformidade legal. Aplicar métodos de auditoria que assegurem a integridade entre os registros físicos, patrimoniais e contábeis, com rastreabilidade documental e operacional do ciclo de vida dos ativos públicos.",
        topics: [
          "Alinhamento conceitual do ativo imobilizado: bens móveis, imóveis e intangíveis",
          "Planejamento, normatização e constituição da Comissão Especial de Inventário",
          "Metodologias práticas para a execução do inventário físico anual ou inicial",
          "Técnicas de auditoria de bens patrimoniais e conciliação físico-contábil",
          "Classificação de materiais: inservível, ocioso, recuperável, antieconômico e irrecuperável",
          "Emissão de registros patrimoniais, tombamento oficial e plaquetas de identificação",
          "Diferença entre tombamento patrimonial e tombamento cultural: finalidades, legislação e efeitos jurídicos",
          "Identificação de divergências, sobras físicas e bens não localizados",
          "Elaboração do relatório final de inventário para o Controle Interno e Externo",
        ],
      },
      {
        title: "Depreciação, Desincorporação e Baixa de Ativos",
        result:
          "Depreciação, vida útil, valor residual, alienação, leilão, doação e baixa por furto ou sinistro — o ciclo de vida inteiro, com respaldo legal",
        objective:
          "Demonstrar os procedimentos técnicos e legais para depreciação, alienação, desfazimento e baixa de bens públicos. Promover uma gestão eficiente do ciclo de vida dos ativos com foco em economicidade, conformidade e sustentabilidade.",
        topics: [
          "Gestão do ciclo de vida dos ativos públicos: aquisição, utilização, manutenção, avaliação e desfazimento",
          "Regras de depreciação acumulada, amortização e exaustão no setor público",
          "Critérios para determinação da vida útil econômica dos bens institucionais",
          "Fixação e revisão periódica do valor residual dos ativos permanentes",
          "Métodos matemáticos de depreciação aplicados à realidade das repartições",
          "Procedimentos legais para alienação por venda ou leilão público de bens",
          "Destinação legal de ativos inservíveis por meio de doação e cessão definitiva",
          "Instrução de processos administrativos para baixas por furto, sinistro ou incêndio",
          "Rotinas para destruição física de materiais irrecuperáveis e descarte ecologicamente correto",
        ],
      },
      {
        title: "Incorporação, Mensuração e Avaliação Patrimonial",
        result:
          "Reconhecer, mensurar e reavaliar ativos conforme NBC TSP e MCASP, incluindo teste de recuperabilidade e intangíveis",
        objective:
          "Orientar os participantes para reconhecer, mensurar, avaliar e controlar os ativos conforme as Normas Brasileiras de Contabilidade Aplicadas ao Setor Público. Produzir informações patrimoniais confiáveis que apoiem a gestão e a prestação de contas.",
        topics: [
          "Métodos de incorporação de ativos: compras, doações, permutas e fabricação própria",
          "Critérios técnicos para definição de bem permanente e fatores excludentes",
          "Mensuração inicial do ativo e métodos de avaliação e reavaliação de bens",
          "Teste de recuperabilidade de ativos públicos (impairment) conforme as NBC TSP",
          "Identificação de perda por desvalorização e procedimentos de reversão do valor",
          "Ativo intangível: critérios para reconhecimento, mensuração e controle contábil",
          "Alinhamento de registros com as diretrizes do Manual de Contabilidade (MCASP)",
          "Governança de dados patrimoniais e reflexos nas demonstrações contábeis",
        ],
      },
      {
        title: "Cadastramento e Regularização de Bens Móveis e Imóveis",
        result:
          "Regularização cartorial, cessão de uso, obras em andamento, benfeitorias e proteção jurídica da posse",
        objective:
          "Apresentar procedimentos para cadastramento, incorporação e regularização jurídica dos bens públicos móveis e imóveis. Garantir registros atualizados, proteção patrimonial e maior segurança na gestão dos ativos públicos.",
        topics: [
          "Fluxo de cadastramento e identificação completa dos bens móveis e imóveis, incluindo características físicas, técnicas e documentais",
          "Incorporação de edificações construídas pela entidade e obras em andamento",
          "Regularização cartorial de imóveis doados ou cedidos ao ente público",
          "Cessão de uso, permissão, concessão ou autorização de uso a terceiros",
          "Recebimento de imóveis emprestados ou cedidos por outros entes federativos",
          "Registro de benfeitorias, reformas ampliadas e recuperação de estruturas públicas",
          "Controle de ocupação, inventário de terrenos e conformidade socioambiental",
          "Relatórios gerenciais e providências jurídicas para proteção da posse do patrimônio",
        ],
      },
      {
        title: "Inteligência Artificial Aplicada ao Patrimônio Público",
        result:
          "Cruzamento de notas fiscais com empenhos, visão computacional em inventário e oficina prática de relatórios para Tribunais de Contas — sem exigir que você saiba programar",
        objective:
          "Apresentar aplicações práticas da Inteligência Artificial para automatizar inventários, auditorias e controles patrimoniais. Orientar os participantes a utilizar tecnologias inteligentes para aumentar a eficiência, reduzir riscos e aprimorar a tomada de decisão na gestão do patrimônio público.",
        topics: [
          "Introdução a algoritmos de Inteligência Artificial focados em gestão patrimonial",
          "Automação de processos de tombamento e extração de dados com IA",
          "Cruzamento automático de notas fiscais e ordens de fornecimento para incorporação",
          "Análise preditiva para cálculo de vida útil, obsolescência e depreciação de bens",
          "Visão computacional aplicada à contagem e auditoria remota de inventários físicos",
          "Uso de IA na varredura de termos de responsabilidade e detecção de pendências",
          "Modelagem preditiva para estimativa de gastos com manutenção e reformas imobiliárias",
          "Oficina prática: IA na geração automática de relatórios para Tribunais de Contas",
        ],
      },
    ],
  },

  /* quote (seção opcional): não pedida pelo briefing — desligada. */

  /* 3 professores = grid default do template (3 colunas no desktop), sem
     patch de layout. As linhas de instituição (small uppercase antes do nome)
     são derivadas das bios — o briefing não traz esse campo.
     As três fotos chegaram em 10/08/2026 e estão recortadas em 4:5 (640×800),
     padrão da /tesouraria. A do Marcus veio em 225×225 e foi ampliada: fica
     mais suave que as outras duas no retina — entrar assim mesmo foi decisão
     do Gustavo, para os três cards ficarem iguais. */
  speakers: {
    title: "Quem ensina passou pela cadeira que você ocupa",
    items: [
      {
        name: "Valdir Miranda Pinto",
        institution: "AUDITOR · TRE-PR",
        photoSrc: "/patrimonio/palestrantes/valdir-miranda-pinto.jpg",
        bio: "Auditor e Chefe da Seção de Contas Eleitorais e Partidárias do TRE-PR. Ex-contador da Prefeitura de Curitiba. Professor titular de Contabilidade Pública (UNIOPET e FACET), ex-professor substituto na UFPR e ex-instrutor da ESAF/Ministério da Fazenda em Contabilidade Pública e SIAFI.",
      },
      {
        name: "Nilson Francisco Tognato",
        institution: "CONTADOR PÚBLICO · 33 ANOS",
        photoSrc: "/patrimonio/palestrantes/nilson-francisco-tognato.jpg",
        // O fim da bio chegou truncado ("…contabilidade, panejamento
        // municipal") — fechado com a bio íntegra da /tesouraria.
        bio: "Contador público por 33 anos. MBA em Gestão Pública e Inovação (UNICENTRO), especialista em Contabilidade Gerencial. Ex-professor de Ciências Contábeis na UNESPAR. Instrutor da Unyflex desde 2020, com ênfase em contabilidade, patrimônio, finanças, orçamento e planejamento municipal.",
      },
      {
        name: "Marcus Gualberto Ganter",
        institution: "CÂMARA MUNICIPAL DE CURITIBA · IA APLICADA",
        photoSrc: "/patrimonio/palestrantes/marcus-gualberto-ganter.jpg",
        bio: "Engenheiro pelo ITA, mestre em Políticas Públicas (UFPR) e em Administração Pública (LSE). Chefe de Gabinete na Câmara Municipal de Curitiba, ex-Diretor de Projetos no Governo do Estado do Paraná. Responsável pelo módulo de IA aplicada.",
      },
    ],
  },

  /* gallery (seção opcional): não pedida pelo briefing — desligada. */

  /* Sem `highlighted` em nenhum card: o briefing veta plano recomendado
     forçado. O "card destacado abaixo da tabela" do Online Ao Vivo vira o 4º
     card da fileira com badge — o template renderiza os planos em uma única
     fileira, sem slot de card avulso abaixo. */
  plans: {
    title: "Escolha sua turma",
    items: [
      {
        name: "BasicClass",
        price: "R$ 2.980",
        features: planoFeatures("Capacitação prática em 3 dias", [
          true,
          true,
          false,
          false,
          false,
          false,
        ]),
      },
      {
        name: "MasterClass",
        price: "R$ 3.200",
        features: planoFeatures("Capacitação prática em 4 dias", [
          true,
          true,
          true,
          false,
          false,
          false,
        ]),
      },
      {
        name: "PremiumClass",
        price: "R$ 3.800",
        features: planoFeatures("Capacitação prática em 4 dias", [
          true,
          true,
          true,
          true,
          true,
          true,
        ]),
      },
      {
        name: "Online Ao Vivo",
        price: "R$ 2.000",
        badge: "100% online · ao vivo",
        features: [
          { label: "Mesmas aulas, transmitidas em tempo real", included: true },
          {
            label: "Itens presenciais (coffee breaks, kit e vouchers)",
            included: false,
          },
        ],
      },
    ],
    // Bloco de pagamento crítico para B2G — verbatim do briefing.
    paymentNote:
      "Aceitamos nota de empenho, com prazo de pagamento de 7 dias após a finalização do curso. Fornecemos toda a documentação necessária para a contratação pelo seu órgão. Pessoa física pode se inscrever por qualquer forma de pagamento.",
    // SEM regra de lote e SEM contagem de vagas (escassez fabricada é vetada).
    // O campo (small muted sob os cards) aloja a linha de certificação.
    batchNote:
      "Certificado emitido após a conclusão por instituição reconhecida pelo MEC.",
    ctaLabel: "Receber proposta",
  },

  /* reviews (seção opcional): desligada — NÃO publicar com dados inventados.
     O briefing pede o bloco de avaliações do Google; [PENDENTE] os prints das
     avaliações reais (pedido no relatório). Para ligar, preencha e descomente:
  reviews: {
    rating: "[PENDENTE] 4,9",
    ratingValue: 4.9,
    volume: "[PENDENTE] nº de avaliações",
    sourceLabel: "Google",
    items: [
      { text: "[PENDENTE] Texto da avaliação real.", author: "[PENDENTE] Nome", role: "Cargo · Órgão" },
      { text: "[PENDENTE] Texto da avaliação real.", author: "[PENDENTE] Nome" },
      { text: "[PENDENTE] Texto da avaliação real.", author: "[PENDENTE] Nome" },
    ],
  },
  */

  /* compare (seção opcional): não pedida pelo briefing — desligada. A opção
     online aparece no hero, no card de plano e no campo de modalidade. */

  /* FAQ: 8 itens do briefing. As respostas seguem as diretrizes (2 a 4
     frases); as perguntas 3 e 8 chegaram truncadas e foram fechadas com a
     P3/P4 do FAQ da /tesouraria e o bloco de pagamento deste briefing como
     corroboração. Sem número de edição do MCASP nem prazo normativo (vetado);
     sem prometer material não confirmado (vetado na P4). */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Preciso ser contador para aproveitar o curso?",
        a: "Não. O curso atende do servidor de patrimônio ao contador — a parte contábil é construída do conceito à prática, sem exigir formação prévia em contabilidade.",
      },
      {
        q: "Vocês mostram como regularizar patrimônio atrasado — inventário inicial, bens sem plaqueta, divergências antigas?",
        a: "Sim. Inventário inicial, sobras físicas, bens não localizados e conciliação de exercícios anteriores estão no Módulo 2, de Inventário Físico e Auditoria Patrimonial.",
      },
      {
        q: "O conteúdo segue o MCASP e as NBC TSP?",
        a: "Sim. Mensuração, depreciação, teste de recuperabilidade e intangíveis são trabalhados conforme as normas de contabilidade aplicadas ao setor público.",
      },
      {
        q: "Vou sair com modelos prontos (termo de responsabilidade, formulários, checklists)?",
        a: "A metodologia é prática e orientada a fluxos aplicáveis: você trabalha em aula os processos de ponta a ponta — inventário, termos, baixas, relatórios — para reproduzi-los na realidade do seu órgão.",
      },
      {
        q: "A parte de IA exige saber programar?",
        a: "Não. O módulo é aplicado, com ferramentas acessíveis e uma oficina prática de relatórios para Tribunais de Contas — nenhum pré-requisito técnico.",
      },
      {
        q: "Serve para município pequeno, onde uma pessoa faz tudo?",
        a: "Sim. Os fluxos são dimensionáveis para equipes de uma pessoa — a realidade de boa parte dos 1.200+ órgãos que já atendemos.",
      },
      {
        q: "O curso ajuda a responder apontamentos do Tribunal de Contas?",
        a: "Sim — esse é o núcleo do curso: conciliação físico-contábil, relatório de inventário e fundamentação técnica de baixas e reavaliações.",
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
    meta: "Turma de 29/09 a 02/10, em Curitiba. Empenho leva tempo no seu órgão — comece o processo agora.",
    // [ASSET PROVISÓRIO]: foto oficial Unyflex reaproveitada da /comunicacao
    // (plateia atenta). TODO: substituir quando o asset desta LP chegar.
    bgSrc: "/patrimonio/cta-final.jpg",
    // TODO-BLOQUEANTE: antes do deploy, confirmar no flow n8n
    // "[IA] Recebimento de Leads (Landing Pages)" que o roteamento por slug
    // reconhece "lp-patrimonio" (padrão do repo, decidido pelo Gustavo em
    // 10/08/2026 — o briefing dizia só "patrimonio"). Lead com slug não
    // mapeado roteia errado no Omie — bug já ocorrido nesta operação.
    formId: "lp-patrimonio",
    submitLabel: "Receber proposta",
    thankYou: { url: "/obrigado", withPii: false },
    // Campo novo desta LP (radio de modalidade, obrigatório) — entra no
    // payload como Modalidade_Preferida.
    modalidade: {
      label: "Modalidade preferida",
      options: ["Presencial em Curitiba", "Online ao vivo"],
    },
  },

  /* Rodapé não especificado no briefing — replicado da /tesouraria (mesma
     parceira do desconto de pós e mesmas redes). */
  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    partners: [
      // invert: o logo original é escuro — em marca branca sobre o rodapé.
      {
        src: "/patrimonio/parceiros/faculdade-unypublica.png",
        alt: "Faculdade Unypública",
        invert: true,
      },
    ],
    legal: [],
    social: [
      {
        kind: "google",
        href: "https://www.google.com/search?q=Unyflex",
        // Sem número: a contagem de avaliações não está confirmada.
        label: "Avaliações no Google",
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
