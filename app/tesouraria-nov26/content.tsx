import type { Lp3Content } from "@/components/lp3/types";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp3/) não têm texto próprio.

   A Nova Era da Tesouraria e Contabilidade Municipal — turma de 10 a
   13/11/2026, Curitiba-PR (/tesouraria-nov26). Piloto do visual novo (lp3).

   FONTES (nada aqui é de autoria do agente — regra do Gustavo, 03/09/2026):
   1. Briefing de 30/09/2026 (Gustavo), 1ª parte: título, datas, "IA na
      prática", planos e nota de rodapé dos benefícios.
   2. Briefing de 30/09/2026, 2ª parte (rodada 2): promessa do topo, faixa de
      prova social, os 4 itens de "Para quem", "O que muda", as linhas de
      resultado dos módulos, rótulo e frase de "IA na prática", rótulo do
      BasicClass, título e "Como funciona" da inscrição, as 5 perguntas
      frequentes. Textos usados como estão.
   3. Página institucional unyflex.com.br/curso/novaera-tesouraria-comIA-2-2
      (lida em 30/09/2026): descrição (hoje introdução da Programação), os 6
      módulos com seus tópicos, título e nota do público-alvo, rótulos das
      seções, textos dos planos.
   4. Rodapé e nota do Google: replicados das LPs ativas (/engenharia-nov26),
      número verificado (memória de 09/2026).
   Textos de ligação escritos pelo agente (para auditoria, TIRAR se não
   aprovados): hero.ctaSecondary.label, o hint do WhatsApp em
   components/lp3/Form.tsx e o rótulo do consentimento em form.consent.
   (form.meta, do agente, saiu na rodada 2: o "Como funciona" cobre o papel.)

   TODO (sem dado confirmado — não inventar):
   - Professores: seção não existe até a confirmação da bancada.
   Fechados na rodada 4 (30/09): endereço da sede na FAQ e no JSON-LD;
   foto do topo fica a sala da sede (public/engenharia-nov26/hero.jpg copiada
   para public/tesouraria-nov26/), ancorada à esquerda no desktop para o
   professor e a TV aparecerem.

   PRODUTO / n8n — BLOQUEIO DE PUBLICAÇÃO: cadastrar `tesouraria-nov26` no
   mapa de cursos do n8n antes de rodar tráfego, senão o lead entra como
   "Curso não identificado". Chaves NOVAS no payload desta LP que o n8n
   precisa mapear: plano_interesse, Municipio, Orgao, c, consentimento (além
   de `titulo`, pendente desde 11/09). */

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
    promise:
      "Feche o exercício sem pendência, responda ao TCE com segurança e deixe a IA com o trabalho repetitivo da tesouraria.",
    title: TITULO,
    subtitle: SUBTITULO,
    dates: "10, 11, 12 e 13 de novembro",
    place: "Curitiba-PR",
    // A antiga ficha técnica virou esta linha: os dois últimos itens são as
    // áreas e os materiais que só existiam lá.
    facts: [
      "4 dias",
      "20 horas",
      "6 painéis",
      "certificado",
      "Controle Interno e Finanças Municipais",
      "materiais didáticos com acesso ilimitado",
    ],
    bgSrc: `/${SLUG}/hero.jpg`,
    bgAlt: "Turma em sala de aula da Unyflex em Curitiba",
    ctaPrimary: { href: "#inscricao", label: "Receber proposta" },
    ctaSecondary: { href: "#planos", label: "Ver planos e preços" },
  },

  /* Prova social: os três textos do briefing (rodada 2), como estão. Aparece
     no topo (abaixo dos botões) e ao lado do formulário. */
  proof: {
    items: [
      "5,0 no Google · +450 avaliações",
      "Desde 2009 · 49.000+ alunos",
      "Faculdade Unypública · nota 5 no MEC",
    ],
  },

  /* "O que muda" substitui a "Visão Geral" (rodada 2). Os 4 blocos são do
     briefing; o parágrafo institucional virou a introdução da Programação. */
  outcomes: {
    eyebrow: "Resultados",
    title: "O que muda na sua tesouraria depois dos 4 dias",
    items: [
      {
        title: "Conciliação sem ressalva",
        text: "Os erros de conciliação bancária que viram apontamento no TCE e a conciliação automática por arquivo OFX.",
      },
      {
        title: "Fechamento sob controle",
        text: "Restos a pagar, fontes de recursos e decretos de encerramento preparados desde o início do ano.",
      },
      {
        title: "Risco mapeado",
        text: "Matriz de impacto e probabilidade e checklist diário de controle interno na tesouraria.",
      },
      {
        title: "IA na rotina",
        text: "Cada módulo termina com uma aplicação de IA para usar no trabalho da semana seguinte.",
      },
    ],
  },

  /* As linhas `result` (visíveis com o acordeão fechado) são do briefing da
     rodada 2, "01…06", como estão. */
  modules: {
    eyebrow: "Programação",
    title: "6 módulos do curso",
    lead: DESCRICAO,
    items: [
      {
        title: "Execução Orçamentária e Financeira na Prática",
        result: "Cronograma de desembolso, ordem cronológica e encerramento do exercício sob controle.",
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
        result: "Os motivos de ressalva nas contas municipais e como evitá-los antes do envio.",
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
        result: "Matriz de riscos e checklists diários para tesouraria e contabilidade.",
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
        result: "Conciliação automática, despesa sem papel e painel de indicadores para o gestor.",
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
        result: "Projeção de receitas próprias e como explicar números a quem não é contador.",
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
        result: "Custos no setor público, Lei 14.133 no fluxo de caixa, reforma tributária e LGPD.",
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

  /* Os 4 itens são os do briefing de 30/09; rótulo e frase da rodada 2. */
  highlight: {
    eyebrow: "Em todos os módulos",
    title: "IA na prática",
    lead: "Cada módulo termina com uma aplicação de IA que você usa na semana seguinte.",
    items: [
      "Automação da conciliação bancária (OFX/TXT)",
      "Monitoramento de CNDs de fornecedores",
      "Ferramentas que resumem acórdãos do TCE",
      "Agentes de auditoria para achar anomalias",
    ],
  },

  /* Público-alvo: título e nota da página institucional; os 4 itens são do
     briefing da rodada 2 (Gustavo, 30/09), como estão. */
  audience: {
    eyebrow: "Para quem",
    title: "Para quem responde, no dia a dia, pela tesouraria e pela contabilidade do município",
    items: [
      "Tesoureiros e contadores de prefeituras e câmaras",
      "Controladores internos",
      "Secretários e diretores de Fazenda e Finanças",
      "Equipes financeiras de autarquias, fundações e consórcios",
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
        // Rótulo longo só neste card (rodada 2); a tabela mantém o curto.
        features: planoFeatures(BASIC, {
          0: "Capacitação prática em 3 dias: terça a quinta (10 a 12/11) ou quarta a sexta (11 a 13/11)",
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
        a: "Sim, no BasicClass: terça a quinta (10 a 12/11) ou quarta a sexta (11 a 13/11).",
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
