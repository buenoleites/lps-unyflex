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

/* Conferência aritmética obrigatória (mesmo bloco de Investimento da
   /engenharia, replicado porque o briefing repete os mesmos números) — se
   qualquer número divergir destas contas, parar e reportar em vez de ajustar:
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
    bgSrc: "/reforma/hero-bg.jpg",
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

  /* Bloco de Investimento replicado EXATAMENTE da /engenharia (o briefing
     §7 diz "bloco idêntico às outras" e repete os mesmos números e o mesmo
     paymentNote, inclusive a frase "Inscrições até o dia do curso."). Valores
     conferidos pela checagem aritmética no topo do arquivo. */
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
    // Verbatim do briefing §7.
    paymentNote:
      "Aceitamos nota de empenho, com prazo de pagamento de 7 dias após a finalização do curso. Fornecemos toda a documentação necessária para a contratação pelo seu órgão. Pessoa física pode se inscrever por qualquer forma de pagamento. Inscrições até o dia do curso.",
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
    priceAnchor: "a partir de R$ 2.000",
    label: "Receber proposta",
    href: "#inscricao",
  },
};
