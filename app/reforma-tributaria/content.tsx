import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp2/) não têm texto próprio.

   Passo a Passo da Reforma Tributária — turma de 13 a 16/10/2026
   (/reforma-tributaria), no template lp2. Briefing de 03/09/2026
   (Prompt_ClaudeCode_LP_Reforma_Tributaria.md). Copy verbatim do briefing.

   app/reforma/ (rota antiga, template LpContent/LpPage, turma vencida de
   04-07/08) NÃO foi tocada: mesmo assunto, mas essa página não tem seção de
   preço, contratação nem avaliações — o briefing novo foi escrito pensando no
   template lp2 (ticker, problem, reviews, pricingCombo, procurement já
   prontos aqui). As imagens usadas abaixo (hero-bg, card-1, cta-final-bg)
   vêm de public/reforma/ por referência cruzada — pasta reaproveitada de
   propósito, sem mover/renomear, por decisão do Gustavo em 03/09/2026.

   Accent ciano #00aeef (mesma cor de Licitações/Portal/Engenharia) —
   decisão do Gustavo em 03/09/2026, tokens fixados em ./theme.css.

   NENHUMA STRING VISÍVEL DESTA PÁGINA É DE AUTORIA DO AGENTE: ou está no
   briefing, ou é cópia byte a byte da /engenharia (Investimento, avaliações,
   rodapé, botão fixo — o briefing repete os mesmos números e nomes), ou é
   rótulo de menu por convenção das outras LPs. A exceção declarada é o `alt`
   da foto de turma — acessibilidade, invisível na tela. */

/* PRODUTO NO OMIE: o briefing não dá a grafia exata ("confirmar com o chat de
   I.A.; usar a que já existe no CRM") — por isso o campo `produto` abaixo
   fica de fora. Sem ele, o lead não entra automaticamente no curso certo no
   Omie. BLOQUEIO DE PUBLICAÇÃO adicional: a chave `reforma-tributaria`
   AINDA NÃO EXISTE no mapa de cursos do n8n (cadastro é do chat de
   Implementação I.A.). Não rodar tráfego sem os dois. */

/* ATUALIZAÇÃO DE 16/09/2026 (briefing "padrão da /engenharia-nov26"): o
   pricingCombo (combo curso + biblioteca + minissérie, online R$ 2.000) SAIU
   e entrou o bloco de Investimento da /engenharia-nov26 (3 planos 2.980 /
   3.200 / 3.980, card recomendado, tabela, rodapé — decisão do Gustavo);
   galeria "A experiência presencial" NOVA com 12 fotos reais (pedido do
   Bruno), em public/reforma/galeria/ (pasta compartilhada, sem criar
   public/reforma-tributaria/); o hero trocou a foto stock/IA (hero-bg.jpg,
   que a /reforma antiga continua usando) por uma foto real da sede com o
   slide de IBS/ICMS (hero-sede.jpg). Hero (texto), datas, reviews, "Como seu
   órgão contrata", FAQ, formId, paginaOrigem e campos do formulário NÃO
   mudaram. `speakers` continua ausente: não há fonte com os professores
   desta turma. */

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

export const reformaTributariaContent: EventLpContent = {
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
    eyebrow: "Curso presencial em Curitiba · 13 a 16/10 · 17 horas",
    title: (
      <>
        O ISS vai acabar. Quem vai explicar ao prefeito como o município{" "}
        <Kw>arrecada</Kw> depois?
      </>
    ),
    subtitle:
      "A transição da Reforma Tributária começa em 2026 e vai até 2033. IBS, CBS, Imposto Seletivo, split payment, Comitê Gestor, Cadastro Nacional — o que muda na arrecadação do seu município, painel por painel, e o que fazer agora para não perder receita no caminho.",
    audiences:
      "Secretário de Fazenda · diretor de tributação · contador público · fiscal de tributos · procuradoria · controle interno",
    cta: { label: "Quero receber a programação com nota de empenho" },
    meta: "Rua Voluntários da Pátria, 547 · Centro, Curitiba/PR · Certificado emitido pela Faculdade Unypública, IES credenciada no MEC · Também disponível online ao vivo",
    // Foto REAL da sede (16/09/2026): professor apontando para a TV com o
    // slide de IBS/ICMS — conteúdo deste curso. Reprocessada de
    // public/reforma/modulos.jpg a 1600px/q45 (luma média 118, sem ganho de
    // gama). Substituiu hero-bg.jpg, que é stock/IA e segue só na /reforma
    // antiga. É o LCP da página — o layout da rota faz o preload.
    bgSrc: "/reforma/hero-sede.jpg",
  },

  ticker: {
    metrics: [
      { value: "49.000+", label: "alunos formados" },
      { value: "1.200+", label: "órgãos atendidos" },
      { value: "5,0", label: "no Google · +450 avaliações" },
      { value: "17", label: "horas de capacitação" },
    ],
  },

  /* variant "grid": os 4 perfis visíveis de uma vez, como filtro de
     autoqualificação — mesmo padrão da /engenharia, /patrimonio e
     /licitacao-out26. */
  audience: {
    title: "Este curso é para quem responde pela receita do município",
    variant: "grid",
    groups: [
      {
        id: "fazenda",
        label: "Secretaria de Fazenda e Tributação",
        description:
          "Secretário e diretores que respondem pela arrecadação e vão assinar a adequação à nova sistemática.",
      },
      {
        id: "contabilidade",
        label: "Contabilidade e Apuração Fiscal",
        description:
          "Contadores públicos e analistas de tributos que fazem a escrituração e vão operar IBS, CBS e IS na prática.",
      },
      {
        id: "fiscalizacao",
        label: "Fiscalização e Dívida Ativa",
        description:
          "Fiscais de tributos e quem recupera crédito — o que muda com split payment e ação fiscal conjunta.",
      },
      {
        id: "juridico",
        label: "Jurídico, Controle e TI",
        description:
          "Procuradoria que adequa a legislação municipal, controle interno que mapeia risco, TI que adapta o sistema fiscal.",
      },
    ],
    closing:
      "Feito para município pequeno e médio, onde a mesma equipe apura, fiscaliza e explica ao gestor.",
  },

  /* As 4 frases do briefing, verbatim (títulos e falas vieram prontos).
     O grid vira 2×2 via theme.css (o template assume 6–10 cards) — mesma
     solução da /engenharia. */
  problem: {
    title: "Se alguma dessas frases podia ser sua, o curso é seu",
    items: [
      {
        title: "O prefeito pergunta e ninguém sabe responder",
        desc: "“Ele quer saber quanto o município vai perder com o fim do ISS. Eu tenho a lei, não tenho a conta.”",
      },
      {
        title: "O sistema não está pronto para o IBS",
        desc: "“Nosso software fiscal ainda apura ISS. Ninguém sabe o que o split payment vai exigir dele.”",
      },
      {
        title: "A lei municipal está desatualizada",
        desc: "“Código tributário de 2010, e a reforma exige adequação legislativa com prazo. Por onde começa?”",
      },
      {
        title: "Todo mundo fala de 2033, mas a transição é agora",
        desc: "“O cronograma começa em 2026 e eu ainda não sei o que fazer neste exercício.”",
      },
    ],
  },

  /* schedule desligada: o briefing pede a programação em módulos. */

  /* Programação VERBATIM do briefing, já na ordem que ele dá (transição
     abre a lista — nota do próprio briefing: "ordem invertida em relação ao
     site"). Cada tópico separado por "·" no briefing é uma string própria em
     `topics` — com a inicial capitalizada, porque o template renderiza cada
     tópico como item de lista (<ul>) e no briefing a minúscula era só por
     estarem inline. Sem `result`/`objective`: o briefing não traz frase de
     resultado nem objetivo por módulo. */
  modules: {
    title: "Em 17 horas, da transição ao novo tributo — o que fazer agora",
    items: [
      {
        title: "Transição, Riscos e Estratégias Municipais de Adaptação",
        topics: [
          "Cronograma de transição 2026–2033",
          "Mapeamento de riscos",
          "Estratégias de arrecadação",
          "Adequação legislativa",
          "Treinamento da equipe",
        ],
      },
      {
        title: "Os Tributos na Prática: IBS, CBS e IS",
        topics: [
          "Fim do ISS e do ICMS",
          "Imposto Seletivo",
          "Cashback tributário",
          "Imunidades e isenções no IBS",
          "Situações especiais",
        ],
      },
      {
        title: "Fiscalização, Arrecadação e Rotinas no Novo Sistema",
        topics: [
          "Split payment",
          "Ação fiscal conjunta",
          "Processo administrativo fiscal",
          "Tecnologia e rotinas",
          "Recuperação de créditos e dívida ativa",
        ],
      },
      {
        title: "Cadastro Econômico e Cadastro Financeiro",
        topics: [
          "Cadastro Nacional do IBS",
          "Integração do CIB",
          "Cadastro territorial multifinalitário",
          "Compliance digital",
          "Mapeamento de contribuintes",
        ],
      },
      {
        title: "A Reforma Tributária e o Novo Federalismo Fiscal",
        topics: [
          "Fim da guerra fiscal",
          "Comitê Gestor do IBS",
          "Repartição de receitas",
          "Autonomia municipal",
          "Fundos de compensação",
        ],
      },
      {
        title: "O IVA Dual Brasileiro: Princípios, Escolhas e Limites",
        topics: [
          "Conceito de IVA dual",
          "Princípio do destino",
          "Não cumulatividade plena",
          "Alíquotas uniformes e exceções",
          "Regime da base ampla",
        ],
      },
    ],
  },

  /* quote / speakers / gallery: desligadas. Sem corpo docente definido — o
     briefing proíbe explicitamente criar um placeholder de "Quem ensina"
     (decisão registrada na FAQ, pergunta 1). */

  /* Galeria (16/09/2026, pedido do Bruno: mais fotos da sede). Doze fotos
     reais já no repositório, reprocessadas a 1000px: sala de aula da sede
     (linha "curso" do catálogo) e uma turma anterior no plenário de Câmara
     com banner Unyflex. Ficaram de fora a linha LicitaExpo, as fotos stock/IA
     de public/reforma/ e as com slide legível de outro curso. Título reusado
     da /engenharia-nov26; alt é acessibilidade, não copy. */
  gallery: {
    title: "A experiência presencial",
    photos: [
      {
        src: "/reforma/galeria/turma-01.jpg",
        alt: "Turma posada em pé na sala de aula da Unyflex, em Curitiba, ao fim de um curso presencial.",
        width: 1000,
        height: 750,
      },
      {
        src: "/reforma/galeria/professor-01.jpg",
        alt: "Professora à frente da sala, explicando o conteúdo para a turma.",
        width: 1000,
        height: 750,
      },
      {
        src: "/reforma/galeria/alunos-01.jpg",
        alt: "Duas alunas acompanhando a aula, com notebook e material sobre a mesa.",
        width: 1000,
        height: 750,
      },
      {
        src: "/reforma/galeria/sala-01.jpg",
        alt: "Sala de aula vista do fundo durante a aula: alunos sentados e o professor junto ao telão.",
        width: 1000,
        height: 750,
      },
      {
        src: "/reforma/galeria/alunos-02.jpg",
        alt: "Alunos em aula na sala clara da Unyflex, com copos e o kit do curso sobre as mesas.",
        width: 1000,
        height: 750,
      },
      {
        src: "/reforma/galeria/turma-02.jpg",
        alt: "Grupo de alunos posando diante da TV com a marca Unyflex, na sala de aula.",
        width: 1000,
        height: 750,
      },
      {
        src: "/reforma/galeria/sala-02.jpg",
        alt: "Professor com microfone de cabeça conduzindo a aula para uma turma pequena.",
        width: 1000,
        height: 750,
      },
      {
        src: "/reforma/galeria/turma-03.jpg",
        alt: "Turma de um curso anterior reunida no plenário de uma Câmara Municipal, com o banner da Unyflex.",
        width: 1000,
        height: 562,
      },
      {
        src: "/reforma/galeria/professor-02.jpg",
        alt: "Professor em pé, gesticulando enquanto conduz a aula.",
        width: 1000,
        height: 750,
      },
      {
        src: "/reforma/galeria/sala-03.jpg",
        alt: "Sala de aula em perspectiva lateral, com o professor à esquerda e o kit do curso sobre a mesa.",
        width: 1000,
        height: 750,
      },
      {
        src: "/reforma/galeria/alunos-03.jpg",
        alt: "Três alunos em mesa em L acompanhando a aula, com copos e crachás.",
        width: 1000,
        height: 750,
      },
      {
        src: "/reforma/galeria/sala-04.jpg",
        alt: "Sala de aula vista do corredor central, com o professor ao fundo junto à TV.",
        width: 1000,
        height: 666,
      },
    ],
  },

  /* Avaliações públicas do Google, texto e nomes idênticos aos da
     /engenharia — o briefing repete a mesma prova social (§6). Números
     coerentes com o ticker (5,0 · +450 avaliações).

     photo: foto de turma de public/reforma/ (preparada para a página antiga,
     reaproveitada aqui por referência cruzada). O `alt` é a exceção
     documentada a "copy só com fonte" — acessibilidade, não copy da página. */
  reviews: {
    rating: "5,0",
    ratingValue: 5,
    volume: "+450 avaliações",
    sourceLabel: "Google",
    photo: {
      src: "/reforma/card-1.jpg",
      alt: "Participantes acompanhando a aula durante a capacitação presencial da Unyflex.",
      width: 1100,
      height: 825,
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

  /* "Como seu órgão contrata" — briefing §8: "mesmos quatro cards das outras
     páginas (Proposta formal · Nota de empenho · Documentação para
     contratação direta · Certificado reconhecido)". Esses títulos são os do
     bloco compartilhado pela /engenharia e pela /portal (as duas LPs mais
     recentes) — copiado byte a byte de lá, descrições incluídas. A
     /licitacao-out26 tem uma versão mais antiga ("Documentação para
     contratação", sem "direta") que NÃO é a que o briefing cita. */
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

  /* compare: desligada — o online aparece no hero, no card do pricing e no
     campo de modalidade, mesma razão da /engenharia. */

  /* FAQ: as 8 perguntas e respostas verbatim do briefing §9. */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Quem são os professores?",
        a: "O corpo docente da turma está em confirmação e será publicado nesta página. A programação já está fechada; ao receber a proposta, o consultor informa os nomes assim que confirmados.",
      },
      {
        q: "A reforma só vale em 2033. Por que fazer o curso agora?",
        a: "Porque a transição começa em 2026 e tem cronograma até 2033. O painel 1 é exatamente sobre o que o município precisa fazer em cada etapa — e o que perde se esperar.",
      },
      {
        q: "Sou contador, não sou de tributação. Serve?",
        a: "Serve. IBS, CBS e IS entram pela apuração e pela escrituração, que é o seu trabalho.",
      },
      {
        q: "Vou sair com material para adequar a lei municipal?",
        a: "Sim: roteiro de adequação legislativa e mapeamento de riscos do painel 1, além dos materiais didáticos com acesso ilimitado.",
      },
      {
        q: "Nosso sistema fiscal é de outro fornecedor. O curso fala de sistema?",
        a: "Fala do que qualquer sistema vai precisar — cadastro, split payment, integração com o Comitê Gestor — sem depender de fornecedor.",
      },
      {
        q: "Serve para município pequeno?",
        a: "É o público principal. O curso foi desenhado para equipe enxuta que apura, fiscaliza e responde ao gestor.",
      },
      {
        q: "Posso pagar com nota de empenho? E como pessoa física?",
        a: "Nota de empenho com pagamento em 7 dias após o curso. Pessoa física por PIX, cartão ou boleto.",
      },
      {
        q: "Tem opção online?",
        a: "Sim, ao vivo, com as mesmas aulas. Kit, coffee e vouchers são exclusivos do presencial.",
      },
    ],
  },

  form: {
    title: "Garanta sua participação",
    meta: "Turma de 13 a 16/10 em Curitiba ou online ao vivo · Empenho leva tempo no seu órgão — comece o processo agora.",
    bgSrc: "/reforma/cta-final-bg.jpg",
    formId: "lp-reforma-tributaria",
    submitLabel: "Receber proposta",
    thankYou: { url: "/obrigado", withPii: false },
    // Briefing: órgão NÃO é obrigatório nesta LP.
    orgaoRequired: false,
    modalidade: {
      label: "Modalidade preferida",
      options: ["Presencial em Curitiba", "Online ao vivo"],
    },
    // Sem `produto`: ver nota de BLOQUEIO DE PUBLICAÇÃO no topo do arquivo.
    paginaOrigem: "reforma-tributaria",
  },

  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    partners: [
      {
        src: "/reforma/parceiros/faculdade-unypublica.png",
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
