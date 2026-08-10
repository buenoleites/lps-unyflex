import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp2/) não têm texto próprio.

   A copy do briefing está completa (os 10 pontos que chegaram truncados foram
   fechados pelo cliente em 05/08/2026). Os "[PENDENTE" que sobram são lacunas
   declaradas pelo próprio cliente, não truncagem: instituição e complemento de
   bio do prof. Marcelo, "[DISTRIBUIÇÃO A CONFIRMAR]" da programação, os
   "[ASSET PROVISÓRIO]" do hero e do CTA final, e os blocos comentados das
   seções desligadas (citação, galeria, avaliações). */

/* A ordem dos itens é a mesma nos 3 planos presenciais — as linhas se alinham
   visualmente entre os cards (mesmo padrão da /comunicacao). */
const PLANO_ITENS = [
  "", // índice 0 recebe label próprio por plano (dias de capacitação)
  "6 coffee breaks gourmet",
  "Certificado",
  "Desconto na pós-graduação",
  "Kit boas-vindas",
  "Assinatura premium",
  "2 vouchers churrascaria",
  "Mentoria exclusiva VIP",
];

function planoFeatures(primeiroItem: string, inclui: boolean[]) {
  return PLANO_ITENS.map((label, i) => ({
    label: i === 0 ? primeiroItem : label,
    included: inclui[i],
  }));
}

export const tesourariaContent: EventLpContent = {
  /* O accent (#69acf1) NÃO é definido aqui: todos os tokens de cor da LP vivem
     em um único bloco em ./theme.css (accent + deep/ring/tint/ink derivados). */

  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    links: [
      { href: "#para-quem", label: "Para quem" },
      { href: "#problema", label: "Desafios" },
      { href: "#programacao", label: "Programação" },
      { href: "#planos", label: "Planos" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: { href: "#inscricao", label: "Garanta sua vaga" },
  },

  hero: {
    eyebrow: "CURSO PRESENCIAL E ONLINE AO VIVO · CURITIBA",
    title: (
      <>
        Uma conciliação atrasada hoje é a{" "}
        <Kw>ressalva de amanhã</Kw>.
      </>
    ),
    subtitle:
      "Empenho, liquidação, conciliação diária, restos a pagar, encerramento de exercício — e a IA aplicada a cada etapa: 4 dias para tirar a tesouraria do manual e do improviso, com checklists, fluxos e prompts prontos para usar no dia seguinte.",
    audiences:
      "Tesoureiro municipal · contador público · secretário de finanças · controle interno",
    // #planos, não #inscricao: o lead precisa ver o preço antes do formulário
    // (mesma decisão da /comunicacao — briefing pede href "#planos").
    cta: { label: "Garanta sua vaga", href: "#planos" },
    meta: "4 dias · 17 horas · Curitiba-PR · 15 a 18 de setembro de 2026 · presencial e online ao vivo",
    // [ASSET PROVISÓRIO]: o briefing pede foto real de evento Unyflex ainda não
    // fornecida; este arquivo é a foto oficial já usada na /comunicacao
    // (salão cheio, ninguém identificável), copiada para o namespace desta LP.
    // TODO: substituir por public/tesouraria/hero.jpg definitivo quando chegar.
    bgSrc: "/tesouraria/hero.jpg",
  },

  ticker: {
    metrics: [
      { value: "49.000+", label: "alunos formados" },
      { value: "1.200+", label: "órgãos atendidos" },
      { value: "5,0", label: "no Google · +450 avaliações" },
      { value: "17", label: "horas de capacitação" },
    ],
  },

  /* O briefing não forneceu título para esta seção — o h2 usa o nome da seção
     no próprio briefing ("Para quem"), sem copy inventada. */
  audience: {
    title: "Para quem",
    groups: [
      {
        id: "tesouraria",
        label: "Tesouraria",
        description:
          "tesoureiro municipal · chefe de tesouraria · quem cuida de pagamentos, fluxo de caixa, conciliação e restos a pagar",
      },
      {
        id: "contabilidade",
        label: "Contabilidade",
        description:
          "contador público municipal · coordenador de contabilidade · responsável por lançamentos, demonstrações, MSC/Siconfi e encerramento de exercício",
      },
      {
        id: "financas",
        label: "Gestão",
        description:
          "secretário de Finanças ou Fazenda · diretor financeiro · quem responde por caixa, prazos e contas aprovadas",
      },
      {
        id: "controle",
        label: "Controle",
        description:
          "controlador interno focado em execução orçamentária e financeira e prestação de contas",
      },
    ],
  },

  /* Título: nome da seção no briefing ("O problema") — sem copy inventada. */
  problem: {
    title: "O problema",
    items: [
      {
        // 1º card: o grid dá largura dupla automaticamente ([CARD DUPLO] do briefing).
        title: "A rotina ainda é manual",
        desc: "Planilha, papel e conciliação atrasada. Todo mundo sabe que dá para automatizar — ninguém ensinou como fazer isso sem perder o controle nem violar norma.",
      },
      {
        title: "Cada sistema, um número",
        desc: "Tesouraria, contabilidade e planejamento não falam a mesma língua. Os saldos nunca batem de primeira, e quem explica a diferença é você.",
      },
      {
        title: "O erro bobo que vira ressalva",
        desc: "Um lançamento errado, um prazo de MSC estourado, uma CND vencida — e a irregularidade aparece meses depois, com o seu nome no processo.",
      },
      {
        title: "A IA chegou sem manual",
        desc: "Cobram modernização, dashboards e inteligência artificial. Mas ninguém treinou a equipe, e testar no dinheiro público não é opção.",
      },
      {
        title: "Restos a pagar sem gestão",
        desc: "Empilham no fim do ano, estouram a LRF e viram o primeiro apontamento da prestação de contas.",
      },
      {
        title: "O encerramento que começa tarde",
        desc: "Decretos, conciliações e ajustes de dezembro deveriam começar em janeiro. Nunca começam.",
      },
      {
        title: "Tesoureiro tratado como pagador",
        desc: "A função virou gestão de riscos. A estrutura, o reconhecimento e o treinamento continuam os de vinte anos atrás.",
      },
    ],
  },

  /* [DISTRIBUIÇÃO A CONFIRMAR]: a alocação dos módulos por dia veio como
     provisória no briefing. Os horários por dia não foram fornecidos — o campo
     `hours` exibe a data de cada dia (padrão /comunicacao). A linha
     "Programação completa..." não tem campo no contrato; vai como <em> no nó
     do Dia 4. */
  schedule: {
    title: "Programação",
    days: [
      {
        label: "Dia 1",
        hours: "15/09",
        panels: (
          <>
            Tesouraria 4.0 e Novas Normas em Vigor: CASP atualizada, custos,
            reflexos da Lei 14.133 e da Reforma Tributária no caixa{" "}
            <em>(IA: consulta ao MCASP por chat)</em>
          </>
        ),
      },
      {
        label: "Dia 2",
        hours: "16/09",
        panels: (
          <>
            Eficiência Operacional I e II: processo de despesa paperless,
            conciliação automatizada via OFX, dashboards e a transição do
            operacional para o consultivo{" "}
            <em>(IA: relatórios gerenciais e GPT personalizado de procedimentos)</em>
          </>
        ),
      },
      {
        label: "Dia 3",
        hours: "17/09",
        panels: (
          <>
            Execução Orçamentária e Financeira na Prática: cronograma de
            desembolso, ordem cronológica, convênios, encerramento de
            exercício{" "}
            <em>(IA: monitoramento de CNDs e fluxos de pagamento automatizados)</em>
          </>
        ),
      },
      {
        label: "Dia 4",
        hours: "18/09",
        panels: (
          <>
            Mapa de Riscos + Apontamentos Críticos e Jurisprudência: matriz de
            riscos, checklists de verificação diária, principais
            irregularidades e defesa técnica em processos de contas{" "}
            <em>(IA: agentes de auditoria e resumo de acórdãos do TCE)</em>{" "}
            <em>Programação completa módulo a módulo disponível na inscrição.</em>
          </>
        ),
      },
    ],
  },

  /* quote (seção 06, OPCIONAL): desligada pelo briefing. Para ligar, preencha
     e descomente:
  quote: {
    text: "[PENDENTE] Citação ou manifesto aprovado.",
    support: "[PENDENTE] Linha de apoio opcional.",
    bgSrc: "/tesouraria/citacao.jpg",
  },
  */

  /* Bancada com 2 professores — o grid é centralizado via theme.css para não
     ficar esparso (o template assume 3 colunas no desktop).
     Título: nome da seção no briefing ("Bancada") — sem copy inventada. */
  speakers: {
    title: "Bancada",
    items: [
      {
        name: "Nilson Francisco Tognato",
        institution: "CONTADOR PÚBLICO MUNICIPAL · 33 ANOS",
        photoSrc: "/tesouraria/palestrantes/nilson-francisco-tognato.jpg",
        bio: "33 anos como contador de carreira na gestão pública municipal. Especialista/MBA em Gestão Pública e Inovação (UNICENTRO) e em Contabilidade Gerencial (FECILCAM). Professor de Ciências Contábeis (UNESPAR) e instrutor Unyflex desde 2020, com atuação em contabilidade, patrimônio, finanças, orçamento e planejamento municipal.",
      },
      {
        name: "Marcelo Ribeiro Zimmer",
        // [PENDENTE]: o briefing não forneceu a linha de instituição deste
        // professor (small uppercase que vem antes do nome).
        institution: "[PENDENTE]",
        photoSrc: "/tesouraria/palestrantes/marcelo-ribeiro-zimmer.jpg",
        // [PENDENTE]: o próprio briefing marca "[COMPLEMENTAR COM ATUAÇÃO ATUAL]".
        bio: "MBA em Administração Pública e Gerência de Cidades, pós-graduado em Contabilidade Pública e Responsabilidade Fiscal, contador desde 2009. [PENDENTE — complementar com atuação atual]",
      },
    ],
  },

  /* gallery (seção 08, OPCIONAL): desligada pelo briefing. Para ligar, forneça
     fotos em /public/tesouraria/galeria/ e descomente:
  gallery: {
    title: "A experiência presencial",
    photos: [
      { src: "/tesouraria/galeria/foto-1.jpg", alt: "...", caption: "..." },
      { src: "/tesouraria/galeria/foto-2.jpg", alt: "..." },
    ],
  },
  */

  /* Título: nome da seção no briefing ("Planos") — sem copy inventada. */
  plans: {
    title: "Planos",
    items: [
      {
        name: "Online Ao Vivo",
        price: "R$ 2.000",
        badge: "100% online · ao vivo",
        features: [
          { label: "Transmissão ao vivo dos 4 dias", included: true },
          { label: "Certificado", included: true },
          {
            label: "Itens presenciais (coffee breaks, kit e vouchers)",
            included: false,
          },
        ],
      },
      {
        name: "BasicClass",
        price: "R$ 2.980",
        features: planoFeatures("Capacitação prática em 3 dias", [
          true, true, true, false, false, false, false, false,
        ]),
      },
      {
        name: "MasterClass",
        price: "R$ 3.200",
        // "MasterClass destacado" (briefing); o label do selo não veio —
        // reusado o da /comunicacao.
        highlighted: true,
        highlightLabel: "Mais escolhido",
        features: planoFeatures("Capacitação prática em 4 dias", [
          true, true, true, true, false, false, false, false,
        ]),
      },
      {
        // A lista do briefing termina truncada em "desconto " — os booleans de
        // "Desconto na pós-graduação" e "Certificado" seguem a estrutura
        // Premium ⊇ Master (reportado no relatório da tarefa).
        name: "PremiumClass",
        price: "R$ 3.800",
        features: planoFeatures("Capacitação prática em 4 dias", [
          true, true, true, true, true, true, true, true,
        ]),
      },
    ],
    // O briefing chegou truncado em "…ceitamos nota de empenho" — o texto
    // abaixo completa apenas o "A" inicial, corroborado pela P3 do FAQ deste
    // mesmo briefing (reportado no relatório da tarefa).
    paymentNote:
      "Aceitamos nota de empenho, cartão e PIX. Pagamento em até 7 dias após a conclusão do curso. Fornecemos toda a documentação necessária para a contratação.",
    // SEM regra de lote e SEM contagem de vagas (briefing). O campo abaixo
    // (small muted sob os cards) aloja a linha de certificação.
    batchNote:
      "Certificado por instituição reconhecida pelo MEC, emitido após a conclusão.",
    ctaLabel: "Garanta sua vaga",
  },

  /* reviews (seção 10, OPCIONAL): desligada pelo briefing. NÃO publicar com
     dados inventados. Para ligar, preencha e descomente:
  reviews: {
    rating: "5,0",
    ratingValue: 5.0,
    volume: "+450 avaliações",
    sourceLabel: "Google",
    items: [
      { text: "[PENDENTE] Texto da avaliação real.", author: "[PENDENTE] Nome", role: "Cargo · Órgão" },
      { text: "[PENDENTE] Texto da avaliação real.", author: "[PENDENTE] Nome" },
      { text: "[PENDENTE] Texto da avaliação real.", author: "[PENDENTE] Nome" },
    ],
  },
  */

  /* "Mesma tabela booleana da /comunicacao" (briefing). Título: nome da seção
     no briefing. */
  compare: {
    title: "Presencial × Online Ao Vivo",
    columns: ["Presencial", "Online Ao Vivo"],
    rows: [
      { label: "Certificado", a: true, b: true },
      {
        label: "4 dias em Curitiba (Rua Voluntários da Pátria, 547 — Centro)",
        a: true,
        b: false,
      },
      { label: "Oficinas e exercícios práticos ao vivo", a: true, b: false },
      {
        label: "Coffee breaks e networking com outros municípios",
        a: true,
        b: false,
      },
      { label: "Transmissão em tempo real dos 4 dias", a: false, b: true },
      { label: "Participação nas dinâmicas à distância", a: false, b: true },
      { label: "Sem deslocamento e sem diária", a: false, b: true },
    ],
  },

  /* FAQ fechado em 6 itens pelo briefing — não acrescentar perguntas. */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Quanto de IA eu preciso saber? Vou usar na prática?",
        a: "Nenhum pré-requisito. Cada módulo tem aplicações práticas de IA — da consulta ao MCASP por chat aos agentes de auditoria — e você sai com os prompts prontos para adaptar à sua rotina, não com conceito solto.",
      },
      {
        q: "Sou de município pequeno, equipe enxuta. É para mim?",
        a: "Sim — o curso foi desenhado para a realidade em que a mesma pessoa acumula tesouraria, contabilidade e às vezes planejamento. Os 1.200+ órgãos que já atendemos são, em maioria, municípios de pequeno e médio porte.",
      },
      {
        q: "Posso pagar com nota de empenho? Vocês emitem os documentos que o controle interno exige?",
        a: "Sim. Trabalhamos com nota de empenho, prazo de pagamento de até 7 dias após o curso, e fornecemos toda a documentação necessária para a contratação pelo seu órgão.",
      },
      {
        q: "E se o órgão não liberar? Posso ir como pessoa física?",
        a: "Sim — aceitamos todas as formas de pagamento para pessoa física, incluindo cartão e PIX.",
      },
      {
        q: "Vou sair com material prático?",
        a: "Sim: checklists de verificação diária, fluxos de pagamento, matriz de riscos e os prompts de IA usados em aula — material feito para aplicar no dia seguinte.",
      },
      {
        q: "Qual a diferença entre este curso e o Seminário de Finanças Municipais de outubro?",
        a: "Este curso é operacional e de aprofundamento: a rotina da tesouraria e da contabilidade, com IA aplicada, em turma de curso. O Seminário de Finanças (20 a 23/10) é o encontro macro da área — painéis, networking e o panorama das finanças municipais. Quem opera o dia a dia começa por aqui; os dois se complementam.",
      },
    ],
  },

  form: {
    title: "Garanta sua vaga na Nova Era da Tesouraria",
    meta: "4 dias · 17 horas · Curitiba-PR · 15 a 18 de setembro de 2026 · presencial e online ao vivo",
    // [ASSET PROVISÓRIO]: foto oficial Unyflex reaproveitada da /comunicacao
    // (plateia atenta). TODO: substituir quando o asset desta LP chegar.
    bgSrc: "/tesouraria/cta-final.jpg",
    formId: "lp-tesouraria",
    submitLabel: "Garanta sua vaga",
    thankYou: { url: "/obrigado", withPii: false },
  },

  /* Rodapé não especificado no briefing — replicado da /comunicacao (mesma
     parceira do desconto de pós e mesmas redes). */
  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    partners: [
      // invert: o logo original é escuro — em marca branca sobre o rodapé.
      {
        src: "/tesouraria/parceiros/faculdade-unypublica.png",
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
    label: "Garanta sua vaga",
    href: "#inscricao",
  },
};
