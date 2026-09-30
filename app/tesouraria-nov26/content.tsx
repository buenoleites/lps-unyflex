import type { Lp3Content } from "@/components/lp3/types";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp3/) não têm texto próprio.

   A Nova Era da Tesouraria e Contabilidade Municipal — turma de 10 a
   13/11/2026, Curitiba-PR (/tesouraria-nov26). Piloto do visual novo (lp3).

   FONTES (nada aqui é de autoria do agente — regra do Gustavo, 03/09/2026):
   1. Briefing de 30/09/2026 (Gustavo): topo, "IA na prática", planos e nota
      de rodapé dos benefícios.
   2. Página institucional unyflex.com.br/curso/novaera-tesouraria-comIA-2-2
      (lida em 30/09/2026): descrição, os 6 módulos com seus tópicos, público-
      alvo, rótulos das seções ("Visão Geral", "Conteúdo do Curso",
      "Público-Alvo", "Três planos de participação"), textos dos planos.
   3. Rodapé e prova social do Google: replicados das LPs ativas
      (/engenharia-nov26), número verificado (memória de 09/2026).
   Textos de ligação escritos pelo agente (para auditoria, TIRAR se não
   aprovados): form.meta, hero.ctaSecondary.label, o hint do WhatsApp em
   components/lp3/Form.tsx e o rótulo do consentimento em form.consent.

   TODO (sem dado confirmado — não inventar):
   - Professores: seção não existe até a confirmação da bancada.
   - Endereço do local em Curitiba (JSON-LD em layout.tsx só tem a cidade).
   - Foto própria da turma de Tesouraria (hero reaproveita a sala da sede,
     public/engenharia-nov26/hero.jpg, copiada para public/tesouraria-nov26/).

   PRODUTO / n8n — BLOQUEIO DE PUBLICAÇÃO: cadastrar `tesouraria-nov26` no
   mapa de cursos do n8n antes de rodar tráfego, senão o lead entra como
   "Curso não identificado". Chaves NOVAS no payload desta LP que o n8n
   precisa mapear: plano_interesse, Municipio, Orgao, c, consentimento (além
   de `titulo`, pendente desde 11/09). */

/* Os 12 itens da tabela de planos, na ordem do briefing. Os três vetores
   dizem o que cada plano inclui — servem aos cards E à tabela. */
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

export const SLUG = "tesouraria-nov26";
export const TITULO = "A Nova Era da Tesouraria e Contabilidade Municipal";
export const SUBTITULO = "com apoio da Inteligência Artificial";
/* Descrição do curso, verbatim da página institucional. É a única descrição
   da rota: metadata, OG e JSON-LD apontam para cá. */
export const DESCRICAO =
  "O curso apresenta uma visão prática e moderna sobre a Tesouraria e a Contabilidade Municipal, destacando os principais atos preventivos e estratégias de mitigação de riscos na gestão pública. São exploradas ferramentas de controle financeiro, gestão de custos e boas práticas contábeis, com ênfase na utilização da Inteligência Artificial para otimizar processos, reduzir erros e melhorar a tomada de decisão no setor público.";

export const tesourariaNov26Content: Lp3Content = {
  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    cta: { href: "#inscricao", label: "Receber proposta" },
  },

  hero: {
    badge: "Inscrições abertas",
    title: TITULO,
    subtitle: SUBTITULO,
    dates: "10, 11, 12 e 13 de novembro",
    place: "Curitiba-PR",
    facts: ["4 dias", "17 horas", "6 painéis", "certificado"],
    bgSrc: `/${SLUG}/hero.jpg`,
    bgAlt: "Turma em sala de aula da Unyflex em Curitiba",
    ctaPrimary: { href: "#inscricao", label: "Receber proposta" },
    ctaSecondary: { href: "#planos", label: "Ver planos e preços" },
  },

  facts: {
    items: [
      { label: "Quando", value: "10, 11, 12 e 13 de novembro" },
      { label: "Onde", value: "Curitiba-PR" },
      { label: "Duração", value: "4 dias · 17 horas" },
      { label: "Painéis", value: "6" },
      { label: "Áreas", value: "Controle Interno · Finanças Municipais" },
      { label: "Certificado", value: "Sim" },
      { label: "Materiais didáticos", value: "Acesso ilimitado" },
    ],
  },

  about: {
    eyebrow: "Visão Geral",
    title: TITULO,
    paragraphs: [DESCRICAO],
  },

  modules: {
    eyebrow: "Conteúdo do Curso",
    title: "6 módulos do curso",
    items: [
      {
        title: "Execução Orçamentária e Financeira na Prática",
        topics: [
          "Cronograma de desembolso mensal: Como montar e cumprir.",
          "Empenho, Liquidação e Pagamento: O rigor da ordem cronológica.",
          "Suprimento de fundos (Adiantamentos) sob a ótica do controle interno.",
          "Gestão de convênios e transferências voluntárias (Plataforma Transferegov).",
          "Decretos de encerramento de exercício: O que preparar desde o início do ano.",
          "Gestão de fontes de recursos e o impacto no superávit financeiro.",
          "Retenções previdenciárias e o envio de informações ao eSocial/EFD-Reinf.",
          "Dica de IA: Fluxogramas automatizados para processos de pagamento.",
          "Dica de IA: Monitoramento de CNDs de fornecedores via scripts ou APIs.",
        ],
      },
      {
        title: "Apontamentos Críticos e Jurisprudência",
        topics: [
          "Principais motivos de irregularidades nas contas municipais.",
          "Gestão de restos a pagar e a conformidade com a LRF.",
          "Disponibilidade de caixa e \"recursos vinculados\".",
          "Conciliação bancária: Erros frequentes que geram ressalvas.",
          "Transparência ativa e o Portal da Transparência.",
          "Acompanhamento de índices em tempo real.",
          "Defesa em processos de contas: Prazos e argumentos técnicos.",
          "Dica de IA: Análise preditiva de inconsistências antes do envio de dados.",
          "Dica de IA: Ferramentas que resumem acórdãos e decisões do TCE.",
        ],
      },
      {
        title: "Mapa de Riscos na Tesouraria e Contabilidade Municipal",
        topics: [
          "Riscos na Tesouraria: Fraudes, erros, duplicidade e perda de prazos.",
          "Riscos na Contabilidade: Lançamentos, conciliação e divergências.",
          "Matriz de Impacto x Probabilidade: Prioridades na fiscalização.",
          "Riscos de Conformidade (Compliance): Descumprimento de prazos e da LRF.",
          "Controle Interno na Tesouraria: Checklists de verificação diária.",
          "Plano de Contas Aplicado ao Setor Público (PCASP) e a lógica dos lançamentos.",
          "Interpretação de Balanços (Financeiro, Patrimonial e Orçamentário).",
          "Relação Tesouraria x Bancos: Otimização de tarifas e aplicações financeiras.",
          "Dica de IA: \"Agentes de Auditoria\" para busca de padrões atípicos (anomalias).",
        ],
      },
      {
        title: "Eficiência Operacional I – Automação e Processos",
        topics: [
          "Mapeamento de processos: Identificando gargalos na burocracia municipal.",
          "Digitalização total do processo de despesa (Paperless).",
          "Assinatura eletrônica e certificação digital: Padronização e segurança.",
          "Automação da conciliação bancária via importação de arquivos (OFX/TXT).",
          "Dashboard de gestão: Indicadores financeiros para os Gestores.",
          "Padronização de históricos contábeis para facilitar a rastreabilidade.",
          "Gestão do tempo e produtividade para equipes de finanças.",
          "Dica de IA: Prompts para gerar relatórios gerenciais analíticos no Excel/BI.",
          "Dica de IA: Ferramentas \"No-Code\" para automatizar lembretes.",
        ],
      },
      {
        title: "Eficiência Operacional II – Inteligência Estratégica",
        topics: [
          "A transição do contador/tesoureiro operacional para o consultivo.",
          "Comunicação assertiva: Como explicar dados técnicos para não contadores.",
          "Técnicas de projeção de receitas próprias com precisão.",
          "Análise de impacto financeiro em novas leis municipais.",
          "Governança Pública: Liderança e ética no trato do dinheiro público.",
          "Benchmarking: Comparando indicadores municipais com cidades vizinhas.",
          "Gestão de conflitos entre o setor financeiro e as secretarias fins.",
          "Dica de IA: Análise de sentimentos e tendências em redes sociais sobre gastos.",
          "Dica de IA: Personalização de GPT para \"Manual de Procedimentos\".",
        ],
      },
      {
        title: "Tesouraria 4.0 e Novas Normas em Vigor",
        topics: [
          "Panorama da Contabilidade Aplicada ao Setor Público (CASP) atualizada.",
          "O papel do Tesoureiro como gestor de riscos e não apenas \"pagador\".",
          "Integração total entre Tesouraria, Contabilidade e Planejamento.",
          "Nova Contabilidade de Custos no Setor Público.",
          "Reflexos da Nova Lei de Licitações (Lei 14.133/21) no fluxo de caixa.",
          "Reforma Tributária e os Impactos no Tesouro Municipal.",
          "Segurança da informação e LGPD na movimentação de recursos públicos.",
          "Segregação de funções: Como evitar erros comuns apontados pela auditorias.",
          "Dica de IA: Dados de notas fiscais e contratos, uso de chat para consulta ao MCASP.",
        ],
      },
    ],
  },

  /* Os 4 itens são os do briefing de 30/09, na redação do briefing. */
  highlight: {
    eyebrow: "Dica de IA",
    title: "IA na prática",
    items: [
      "Automação da conciliação bancária (OFX/TXT)",
      "Monitoramento de CNDs de fornecedores",
      "Ferramentas que resumem acórdãos do TCE",
      "Agentes de auditoria para achar anomalias",
    ],
  },

  /* Público-alvo verbatim da página institucional. NÃO estava na lista de
     fatos do briefing de 30/09 — é opcional (chave `audience`): apagar o
     bloco se o Gustavo não quiser. */
  audience: {
    eyebrow: "Público-Alvo",
    title: "Para quem responde, no dia a dia, pela tesouraria e pela contabilidade do município",
    items: [
      "Tesoureiros e Contadores municipais responsáveis pela execução financeira e contábil em Prefeituras e Câmaras Municipais",
      "Secretários de Fazenda e Finanças que buscam modernizar processos de tesouraria com apoio de inteligência artificial",
      "Diretores e Chefes de Departamento Financeiro de Autarquias e Fundações Públicas municipais",
      "Controladores Internos que atuam na fiscalização da execução orçamentária e financeira de Prefeituras e Consórcios Públicos",
      "Procuradores e Assessores Jurídicos que assessoram órgãos municipais em questões contábeis e tributárias",
      "Analistas de Tecnologia da Informação que implementam soluções de automação e IA na gestão contábil municipal",
    ],
    note: "Não encontrou o seu cargo na lista? A turma é aberta a servidores e gestores de prefeituras, câmaras, autarquias, consórcios e tribunais — fale com um consultor e confirme a aderência antes de inscrever a equipe.",
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
      plan: "PremiumClass",
      ctaPrimary: "Quero o PremiumClass",
      ctaSecondary: "Falar com consultor",
    },
    comparison: {
      itemsLabel: "Benefícios",
      columns: [
        { name: "BasicClass", price: "R$ 2.980,00", sub: "Capacitação em 3 dias" },
        { name: "MasterClass", price: "R$ 3.200,00", sub: "Capacitação em 4 dias" },
        { name: "PremiumClass", price: "R$ 3.980,00", sub: "4 dias + experiência completa", highlighted: true },
      ],
      rows: [
        ...PLANO_ITENS.map((label, i) => ({ label, cells: [BASIC[i], MASTER[i], PREMIUM[i]] })),
        { label: "Valores", cells: ["R$ 2.980,00", "R$ 3.200,00", "R$ 3.980,00"] },
      ],
    },
    footnote:
      "Valores por aluno. Benefícios do PremiumClass (tour, almoço, assinatura premium, semestre de graduação, kit exclusivo e UNYPOINTS) são concedidos na confirmação da matrícula e não são convertidos em desconto.",
  },

  form: {
    eyebrow: "Inscrição",
    title: "Matricular no curso",
    // Texto do agente (auditoria).
    meta: "Preencha os dados e um consultor da Unyflex entra em contato para fechar a inscrição — inclusive por nota de empenho.",
    formId: "lp-tesouraria-nov26",
    produto: SLUG,
    paginaOrigem: SLUG,
    // Token da vertical no título do lead: LP|tesouraria|s=…|c=…|x=…|f=…
    tituloProduto: "tesouraria",
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
