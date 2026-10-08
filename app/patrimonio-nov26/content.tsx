import type { Lp3Content } from "@/components/lp3/types";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp3/) não têm texto próprio.

   Patrimônio & Frotas — turma 2330, 16 a 19/11/2026 (confirmado pela Gestão em 08/10), Curitiba-PR
   (/patrimonio-nov26). CLONE da /patrimonio-out26 (turma 20–23/10) em 08/10/2026,
   a pedido do Gustavo: mesma copy, módulos, planos e accent (#84C776); mudam só as
   datas (hero, rótulo do BasicClass, FAQ, JSON-LD, OG) e os identificadores do lead
   (formId lp-patrimonio-nov26, produto/pagina_origem/c = patrimonio-nov26). A
   /patrimonio-out26 não foi tocada.

   FONTES (nada aqui é de autoria do agente — regra do Gustavo, 03/09/2026):
   1. Briefing de 30/09/2026 (Gustavo) e complemento do mesmo dia: topo,
      promessa, "Para quem", "O que muda", linhas de resultado e tópicos
      completos dos 6 módulos, "IA na prática", rótulo do BasicClass.
   2. Regras comuns do briefing: planos, nota de rodapé, endereço da sede.
   3. Da /tesouraria-nov26 (mesma base): prova social, "Como funciona", as 5
      perguntas frequentes (com as datas desta turma), consentimento, rodapé,
      foto do topo (public/tesouraria-nov26/hero.jpg, copiada).
   Textos de ligação escritos pelo agente (para auditoria, TIRAR se não
   aprovados): hero.ctaSecondary.label (copiado da Tesouraria), o título da
   seção "O que muda" ("O que muda"), o título de "Para quem" ("Para quem é o
   curso") e o título da programação ("6 módulos do curso"). A descrição da
   rota (metadata/OG/JSON-LD) é a promessa do topo, verbatim do briefing.

   TODO (sem dado confirmado — não inventar):
   - Professores: seção oculta até a Gestão confirmar a bancada com a Emily.
   - n8n: cadastrar `patrimonio-nov26` (produto) e `lp-patrimonio-nov26`
     (formId) antes de rodar tráfego, senão o lead entra como "Curso não
     identificado". Chaves
     novas no payload que o n8n precisa mapear: plano_interesse, Municipio,
     Orgao, c, consentimento (além de `titulo`).
   - Número de alunos: "49.000+" confirmado para todas as LPs. */

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

export const SLUG = "patrimonio-nov26";
export const TITULO = "Patrimônio & Frotas";
export const SUBTITULO = "Gestão, registro e controle com dicas de IA";
export const DESCRICAO =
  "Inventário sem divergência, bem registrado do tombamento à baixa e frota sob controle, com a IA cruzando os dados por você.";

export const patrimonioNov26Content: Lp3Content = {
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
    dates: "16, 17, 18 e 19 de novembro",
    place: "Curitiba-PR",
    facts: [
      "4 dias",
      "20 horas",
      "6 painéis",
      "certificado",
      "Patrimônio",
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
        title: "Inventário sem divergência",
        text: "Planejamento, comissão inventariante e tratamento de divergências no inventário anual.",
      },
      {
        title: "Base patrimonial saneada",
        text: "Duplicidades encontradas e notas fiscais eletrônicas cruzadas com os termos de incorporação.",
      },
      {
        title: "Frota rastreada",
        text: "Abastecimento, odômetro e GPS conciliados, com alerta automático de desvio e uso indevido.",
      },
      {
        title: "Prestação de contas pronta",
        text: "Relatórios parametrizados para o Tribunal de Contas e a Controladoria.",
      },
    ],
  },

  modules: {
    eyebrow: "Programação",
    title: "6 módulos do curso",
    items: [
      {
        title: "Registro e Controle do Ativo Imobilizado",
        result: "Classificação STN, tombamento, plaquetagem e termo de responsabilidade.",
        topics: [
          "Ativo imobilizado no setor público: conceito e importância contábil; bens de consumo (almoxarifado) × bens permanentes.",
          "Classificação dos bens: normas da STN; bens móveis, imóveis, intangíveis e de infraestrutura.",
          "Cadastramento e incorporação: fluxo documental (notas fiscais, doações, transferências e comodatos); tombamento, plaquetagem e registro em sistemas municipais.",
          "Controle dos bens públicos: termo de cautela/responsabilidade e o papel do agente patrimonial; segregação de funções (quem compra, quem recebe e quem registra).",
        ],
      },
      {
        title: "Avaliação, Inventário e Desfazimento",
        result: "Depreciação, inventário e baixa por leilão, doação, inutilização ou extravio.",
        topics: [
          "Avaliação e reavaliação: valor de aquisição, valor justo e valor residual; depreciação, amortização e exaustão no setor público.",
          "Inventário patrimonial: tipos (anual, de transferência de responsabilidade, de extinção); planejamento, comissão inventariante, execução e tratamento de divergências.",
          "Desincorporação e baixa: alienação (leilão), doação, permuta, inutilização e baixa por extravio/furto; fluxo do desfazimento e baixa contábil.",
          "Outros pontos e casos práticos: bens inservíveis (ociosos, recuperáveis e antieconômicos); dúvidas comuns e cenários reais enviados pelos servidores.",
        ],
      },
      {
        title: "Integração de Diários de Bordo Digitais",
        result: "Diário de bordo digital com validação automática e assinatura pelo celular.",
        topics: [
          "Campos obrigatórios, rastreamento e automação",
          "formulários com IA embarcada",
          "validação automática de dados (ex.: inconsistência de quilometragem)",
          "assinaturas digitais e fotos da operação",
          "preenchimento pelo celular ou tablet",
          "sincronização com sensores e telemetria",
          "histórico por veículo e motorista",
          "painel de conformidade com taxa de registros completos",
        ],
      },
      {
        title: "Gestão da Frota: Diagnóstico e Processos",
        result: "Diagnóstico da frota: gastos, manutenção, oficinas e contratos.",
        topics: [
          "Levantamento de uso, gastos, manutenções e controle",
          "gargalos operacionais",
          "maturidade digital da gestão de frota",
          "perfil de motoristas e operadores",
          "ativos, obsolescência e uso por setor",
          "falhas recorrentes e retrabalho",
          "documentos e formulários dos registros manuais",
          "oficinas, contratos vigentes e prestadores",
        ],
      },
      {
        title: "Patrimônio e Frotas: Auditoria Digital e Fiscalização",
        result: "Auditoria digital: abastecimento, odômetro e GPS cruzados, com alertas.",
        topics: [
          "Gestão de riscos e painéis de fiscalização: dashboards por contrato e setor; amostras por matriz de risco.",
          "Cruzamento de dados da frota: abastecimento × odômetro/GPS × ordens de tráfego; alertas de desvio, fraude ou uso indevido.",
          "Criticidade da frota: veículos conformes, pendentes ou críticos; infrações graves, falhas de manutenção e licenciamento.",
          "Saneamento da base patrimonial: duplicidades e ausência de registro; notas fiscais eletrônicas × termos de incorporação.",
          "Prestação de contas: relatórios parametrizados para Tribunal de Contas e Controladoria; relatórios automatizados como prova em processo administrativo.",
        ],
      },
      {
        title: "Ferramentas e Tecnologias de IA para Municípios",
        result: "Ferramentas de IA para municípios, do atendimento ao antifraude.",
        topics: [
          "Gemini (Vertex AI) para documentos e relatórios",
          "Vision AI para monitoramento urbano e ambiental",
          "Video AI para segurança pública e eventos",
          "Dialogflow e Agent Garden para atendimento ao cidadão",
          "BigQuery ML para planejamento",
          "dashboards de IA para transparência",
          "IoT + IA para gestão ambiental",
          "sistemas especialistas",
          "computação cognitiva e redes neurais generativas",
          "IA antifraude e biometria",
          "RFID e IA para predição",
          "integração com SICONFI, Transferegov e SIT",
        ],
      },
    ],
  },

  highlight: {
    eyebrow: "Módulos 3, 5 e 6",
    title: "IA na prática",
    lead: "Três módulos dedicados a automação e IA aplicadas ao patrimônio e à frota.",
    items: [
      "Formulários com IA embarcada",
      "Validação automática de quilometragem",
      "Alertas de fraude e uso indevido da frota",
      "Integração de IA com SICONFI e Transferegov",
    ],
  },

  audience: {
    eyebrow: "Para quem",
    title: "Para quem é o curso",
    items: [
      "Agentes de patrimônio e almoxarifado",
      "Gestores de frota e transporte",
      "Controle interno e comissões de inventário",
      "Secretários e diretores de Administração",
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
          0: "Capacitação prática em 3 dias: segunda a quarta (16 a 18/11) ou terça a quinta (17 a 19/11)",
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
    formId: "lp-patrimonio-nov26",
    produto: SLUG,
    paginaOrigem: SLUG,
    // Token da vertical no título do lead: LP|patrimonio|s=…|c=…|x=…|f=…
    tituloProduto: "patrimonio",
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
        a: "Sim, no BasicClass: segunda a quarta (16 a 18/11) ou terça a quinta (17 a 19/11).",
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
