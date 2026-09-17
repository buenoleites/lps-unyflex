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

   Câmaras Municipais — Orçamento/LOA 2027: Pontos de Atenção Máxima — turma
   de 13 a 16/10/2026 (/camara-out26). Estrutura, componentes e instrumentação
   da /engenharia-nov26 (a referência do briefing de 16/09/2026).

   FONTES:
   1. Documento 2 do briefing de 16/09/2026 — descrição, 6 módulos (objetivo e
      itens verbatim, só ortografia/espaçamento), professores (fatos das bios),
      público-alvo, datas e carga horária.
   2. app/patrimonio/content.tsx — bio do Nilson (fonte canônica das bios
      recorrentes, regra do Gustavo). O documento traz uma bio diferente
      (FECILCAM, Plano Diretor/PME/PPA/LDO/LOA, sem UNESPAR) — divergência
      listada na PR, não aplicada. Nota e horas acrescentadas na última frase
      por pedido do briefing.
   3. app/engenharia-nov26/content.tsx — ticker, reviews, Investimento (3
      planos, card recomendado, tabela, rodapé), "Como seu órgão contrata", as
      3 FAQs fixas, formulário, rodapé, stickyCta.
   4. Catálogo de fotos já no repositório — hero e CTA: plenário de Câmara
      Municipal com banner Unyflex (linha "plenário" do catálogo, fotos da
      /portal); galeria: sala de aula da sede. Alt de imagem é acessibilidade.

   COPY ESCRITA NESTA PR (pedida pelo briefing, para revisão do Gustavo):
   hero.title, hero.subtitle, audience (4 cards e closing), problem (4
   citações), speakers.title e as bios de Marlon e Aurenilson reescritas,
   modules.title, as FAQs 1–6, form.meta.

   INSTRUMENTAÇÃO: formId lp-camara-out26 · produto camara-out26 (chave a
   cadastrar no mapa de cursos do n8n ANTES de rodar tráfego) · título do lead
   LP|camara-out26|s=…|c=…|x=…|f=lp-camara-out26 (token = slug, sem
   tituloProduto, por instrução do briefing). */

export const camaraOut26Content: EventLpContent = {
  /* O accent (#00aeef, ciano — decisão do Gustavo em 16/09/2026) NÃO é
     definido aqui: todos os tokens de cor da LP vivem em ./theme.css. */

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
    eyebrow: "Curso presencial em Curitiba · 13 a 16/10 · 17 horas",
    // Headline em 2 linhas e subheadline em 3 a >=1440px (regra de 16/09; medido
    // no preview com o texto injetado no h1, nao estimado por contagem).
    title: (
      <>
        A LOA 2027 chega em outubro. <Kw>Quem vai ler?</Kw>
      </>
    ),
    subtitle:
      "Ler o projeto do Executivo com olho de auditor: receita superestimada, dotação global sem especificação, emendas exequíveis e o acompanhamento da execução em 2027 — em 4 dias, com quem audita isso no município.",
    audiences:
      "Contador e analista de orçamento de Câmara · diretor financeiro · controle interno · assessor parlamentar e legislativo · procurador · secretário de finanças",
    // Sem href ⇒ o CTA vai para #inscricao.
    cta: { label: "Quero receber a programação com nota de empenho" },
    meta: "Rua Voluntários da Pátria, 547 · Centro, Curitiba/PR · Certificado emitido pela Faculdade Unypública, IES credenciada no MEC",
    // Plenário de Câmara Municipal com o banner Unyflex, palestrante ao
    // microfone (foto real da linha "plenário" do catálogo, já usada na
    // /portal; luma média 141 — sem ganho de gama). É o LCP da página — o
    // layout da rota faz o preload.
    bgSrc: "/camara-out26/hero.jpg",
  },

  ticker: {
    metrics: [
      { value: "49.000+", label: "alunos formados" },
      { value: "1.200+", label: "órgãos atendidos" },
      { value: "5,0", label: "no Google · +450 avaliações" },
      { value: "17", label: "horas de capacitação" },
    ],
  },

  /* 4 cards a partir do público-alvo do documento, agrupando perfis próximos.
     variant "grid": todos visíveis de uma vez, como filtro de autoqualificação. */
  audience: {
    title: "Este curso é para quem responde pela LOA 2027 na Câmara",
    variant: "grid",
    groups: [
      {
        id: "contabilidade",
        label: "Contabilidade e Orçamento da Câmara",
        description:
          "Contadores e analistas de orçamento de Câmaras Municipais responsáveis pela análise e instrução da LOA 2027.",
      },
      {
        id: "financeiro",
        label: "Direção Financeira",
        description:
          "Diretores financeiros e chefes de departamento orçamentário de Câmaras e Prefeituras; secretários de Finanças e chefias que dialogam com o Legislativo sobre a proposta.",
      },
      {
        id: "controle",
        label: "Controle Interno",
        description:
          "Controladores internos que fiscalizam a conformidade orçamentária — limites da LRF, repasses mínimos e execução ao longo do ano.",
      },
      {
        id: "assessoria",
        label: "Assessoria Parlamentar e Jurídica",
        description:
          "Assessores parlamentares e legislativos envolvidos na análise e aprovação do projeto; procuradores e assessores jurídicos que revisam a legalidade das peças orçamentárias.",
      },
    ],
    closing:
      "Serve também para vereadores e relatores da Comissão de Finanças e Orçamento — mas o centro do curso é quem instrui a análise e redige as emendas.",
  },

  /* 4 citações curtas, no tom de um servidor falando (briefing). O grid vira
     2×2 via theme.css (o template assume 6–10 cards). */
  problem: {
    title: "Se alguma dessas frases podia ser sua, o curso é seu",
    items: [
      {
        title: "O projeto chega e o prazo já está correndo",
        desc: "“O Executivo manda a LOA no fim de outubro, a Comissão tem semanas, e a gente aprova sem saber de onde vem a receita.”",
      },
      {
        title: "A receita nunca fecha com o realizado",
        desc: "“Todo ano a arrecadação prevista é maior que a do ano anterior, e no meio do exercício vem o contingenciamento. Ninguém apontou na votação.”",
      },
      {
        title: "O cheque em branco passa no artigo das autorizações",
        desc: "“Tem um artigo lá no fim autorizando remanejar 30% sem passar pela Câmara. Quando a gente percebe, a lei já está sancionada.”",
      },
      {
        title: "A emenda volta por vício de técnica",
        desc: "“O vereador quer criar a dotação, eu não sei de onde anular, e a emenda volta do jurídico como inexequível.”",
      },
    ],
  },

  /* Programação VERBATIM do documento 2 (6 módulos), na ordem do documento.
     O componente numera 01–06, por isso os títulos entram sem o prefixo
     "Módulo N -". Os módulos 1 e 2 trazem objetivo no documento (campo
     `objective`); os itens a), b), c) viram tópicos. Só ortografia e
     espaçamento foram corrigidos. */
  modules: {
    title: "Em 17 horas, do ciclo orçamentário ao monitoramento de 2027",
    items: [
      {
        title: "O Ciclo Orçamentário e a LOA",
        objective:
          "Compreender a dinâmica do ciclo orçamentário municipal, dominando os prazos legais e as conexões entre PPA, LDO e LOA sob a ótica das exigências da CF e da LRF.",
        topics: [
          "Conceitos fundamentais: entendimento prático das peças orçamentárias (PPA, LDO e LOA) e suas interconexões",
          "Fundamentos legais: Constituição Federal (art. 165) e Lei de Responsabilidade Fiscal (LRF)",
          "Prazo legal: a importância do envio do Projeto de Lei pelo Executivo e o calendário limite de votação no Legislativo",
        ],
      },
      {
        title: "Leitura Crítica do Projeto de Lei do Executivo",
        objective:
          "Leitura crítica do orçamento enviado pelo Executivo, identificando riscos de receitas infladas e a correta destinação dos recursos livres e vinculados.",
        topics: [
          "Estrutura da peça orçamentária: de onde vem o dinheiro (receitas) e para onde vai (despesas)",
          "Análise de riscos: superestimativa de receitas (Executivo “infla” a arrecadação para gastar mais) e falsos superávits",
          "Fontes de recursos: recursos livres × vinculados (Educação, Saúde e Assistência Social)",
        ],
      },
      {
        title: "O Papel das Comissões Técnicas e Audiências Públicas",
        topics: [
          "Comissão de Finanças e Orçamento (CFO): rito de tramitação, pareceres e o papel dos relatores",
          "Participação cidadã: audiências públicas eficientes e extração de demandas reais",
          "Transparência e controle social: ferramentas de fiscalização a cargo do Legislativo municipal",
        ],
      },
      {
        title: "Apontamentos de Alerta e Pontos de Atenção",
        topics: [
          "Dotação global × especificação: alerta contra “cheques em branco” (Executivo pedindo autorização para remanejar percentuais abusivos sem aval da Câmara)",
          "Pessoal e encargos: limites de gastos com folha previstos pela LRF",
          "Despesas obrigatórias: repasses mínimos constitucionais para Saúde e Educação",
        ],
      },
      {
        title: "Como Corrigir Incoerências do Executivo",
        topics: [
          "Tipos de emendas: regras regimentais e constitucionais (individuais, de bancada/comissão)",
          "Limite de emendas: cálculo e destinação de emendas parlamentares",
          "Técnica legislativa orçamentária: redigir emendas claras e exequíveis (criar, anular, suplementar ou modificar dotações)",
        ],
      },
      {
        title: "Resolutividade, Aprovação e Monitoramento",
        topics: [
          "Negociação política: articular a aprovação do relatório final e negociar com o Executivo para sanção",
          "Sistema de controle: mecanismos para acompanhar a execução orçamentária ao longo de 2027",
          "Estudo de caso prático: simulação de análise de um projeto de LOA real e elaboração de emendas",
        ],
      },
    ],
  },

  /* Bancada com 3 professores (documento 2). Fotos dos três no repositório
     desde 17/09/2026 (Marlon e Aurenilson chegaram junto com o lote de fotos
     do Gustavo — antes ficavam com o monograma do template). Bios em até 4
     linhas com os fatos do documento; nota e horas na última frase. */
  speakers: {
    title: "Quem ensina audita e contabiliza o orçamento municipal",
    items: [
      {
        name: "Marlon Stafin",
        institution: "COORDENADOR DE AUDITORIA · GOVERNO DO ESTADO DO PARANÁ",
        photoSrc: "/camara-out26/palestrantes/marlon-stafin.jpg",
        bio: "Coordenador de auditoria no Governo do Estado do Paraná desde 2019: implementou o Internal Audit Capability Model (IA-CM), assessorou o Controlador-Geral do Estado, coordenou o GT CGE-SESA (2022–2023) e desde 2024 lidera a auditoria do Projeto PR Eficiente. Administração (FAE), três MBAs pela UNIBF e Contabilidade em andamento (Unifatecie); de 1995 a 2014 no setor privado, até gerente administrativo. 63+ horas de aula na Unyflex, avaliação 9,6.",
      },
      {
        name: "Aurenilson Cipriano",
        institution: "CONTADOR EFETIVO · MUNICÍPIO DE ANDIRÁ/PR",
        photoSrc: "/camara-out26/palestrantes/aurenilson-cipriano.jpg",
        bio: "Contador efetivo do Município de Andirá/PR desde 2014. Ciências Contábeis (UENP) e Gestão Pública (IFPR); especialista em Administração e Finanças e em Gestão Pública (UNINA). Presidente da APEPREV (2017/2019), diretor-presidente do FUNPESPA (2011/2019) e professor de Administração e Ciências Contábeis na FACCREI (2017/2022). Experiência em orçamento, finanças e gestão pública com ênfase em RPPS. 228+ horas de aula na Unyflex, avaliação 9,7.",
      },
      {
        name: "Nilson Francisco Tognato",
        institution: "CONTADOR PÚBLICO · 33 ANOS",
        photoSrc: "/camara-out26/palestrantes/nilson-francisco-tognato.jpg",
        bio: "Contador público por 33 anos. MBA em Gestão Pública e Inovação (UNICENTRO), especialista em Contabilidade Gerencial. Ex-professor de Ciências Contábeis na UNESPAR. Instrutor da Unyflex desde 2020, com ênfase em contabilidade, patrimônio, finanças, orçamento e planejamento municipal. 1350+ horas de aula na Unyflex, avaliação 9,6.",
      },
    ],
  },

  /* Galeria (pedido do Bruno: mais fotos da sede). Doze fotos reais da sala de
     aula da Unyflex em Curitiba já existentes no repositório (as seis da
     /engenharia-nov26 mais seis de outras rotas), reprocessadas a 1000px.
     Múltiplo de 3 (o grid é CSS columns: 3). Ficaram de fora: a linha
     LicitaExpo, fotos stock/IA e fotos com slide legível de outro curso. */
  gallery: {
    title: "A experiência presencial",
    photos: [
      {
        src: "/camara-out26/galeria/turma-01.jpg",
        alt: "Turma posada em pé na sala de aula da Unyflex, em Curitiba, ao fim de um curso presencial.",
        width: 1000,
        height: 750,
      },
      {
        src: "/camara-out26/galeria/professor-01.jpg",
        alt: "Professora à frente da sala, explicando o conteúdo para a turma.",
        width: 1000,
        height: 750,
      },
      {
        src: "/camara-out26/galeria/alunos-01.jpg",
        alt: "Duas alunas acompanhando a aula, com notebook e material sobre a mesa.",
        width: 1000,
        height: 750,
      },
      {
        src: "/camara-out26/galeria/sala-01.jpg",
        alt: "Sala de aula vista do fundo durante a aula: alunos sentados e o professor junto ao telão.",
        width: 1000,
        height: 750,
      },
      {
        src: "/camara-out26/galeria/alunos-02.jpg",
        alt: "Alunos em aula na sala clara da Unyflex, com copos e o kit do curso sobre as mesas.",
        width: 1000,
        height: 750,
      },
      {
        src: "/camara-out26/galeria/turma-02.jpg",
        alt: "Grupo de alunos posando diante da TV com a marca Unyflex, na sala de aula.",
        width: 1000,
        height: 750,
      },
      {
        src: "/camara-out26/galeria/sala-02.jpg",
        alt: "Professor com microfone de cabeça conduzindo a aula para uma turma pequena.",
        width: 1000,
        height: 750,
      },
      {
        src: "/camara-out26/galeria/aluno-01.jpg",
        alt: "Aluno acompanhando a aula em primeiro plano, com a turma ao fundo.",
        width: 1000,
        height: 750,
      },
      {
        src: "/camara-out26/galeria/professor-02.jpg",
        alt: "Professor em pé, gesticulando enquanto conduz a aula.",
        width: 1000,
        height: 750,
      },
      {
        src: "/camara-out26/galeria/sala-03.jpg",
        alt: "Sala de aula em perspectiva lateral, com o professor à esquerda e o kit do curso sobre a mesa.",
        width: 1000,
        height: 750,
      },
      {
        src: "/camara-out26/galeria/alunos-03.jpg",
        alt: "Três alunos em mesa em L acompanhando a aula, com copos e crachás.",
        width: 1000,
        height: 750,
      },
      {
        src: "/camara-out26/galeria/sala-04.jpg",
        alt: "Sala de aula vista do corredor central, com o professor ao fundo junto à TV.",
        width: 1000,
        height: 666,
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
      src: "/camara-out26/turma.jpg",
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

  /* FAQ: 1–6 adaptadas ao curso (a partir dos módulos e do público do
     documento); 7–9 fixas, verbatim da referência (empenho/PF, documentação
     e online). */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Minha Câmara não tem contador. O curso serve?",
        a: "Serve. O curso parte dos conceitos das peças orçamentárias (PPA, LDO e LOA) e da leitura da estrutura de receitas e despesas — é feito para quem vai analisar o projeto do Executivo, seja contador, assessor ou controlador.",
      },
      {
        q: "Sou assessor parlamentar, não sou da área contábil. É pesado?",
        a: "O foco é a leitura crítica e a emenda: identificar receita superestimada, dotação global sem especificação e limites da LRF, e redigir emendas claras e exequíveis. A contabilidade entra pelo que a análise exige.",
      },
      {
        q: "Vou sair sabendo redigir emendas?",
        a: "Sim. O módulo de técnica legislativa orçamentária trata dos tipos de emenda, do cálculo do limite e da redação para criar, anular, suplementar ou modificar dotações, e o curso fecha com a simulação de análise de um projeto de LOA real e elaboração de emendas.",
      },
      {
        q: "O curso é só para Câmara ou também para a Prefeitura?",
        a: "O centro é o Poder Legislativo municipal, mas diretores financeiros e secretários de Finanças de Prefeituras que dialogam com a Câmara sobre a proposta estão no público-alvo — e saem sabendo o que a Câmara vai apontar.",
      },
      {
        q: "Serve para município pequeno, onde uma pessoa faz tudo?",
        a: "É o público principal. Os módulos foram desenhados para quem acumula análise, parecer e acompanhamento da execução ao longo do ano.",
      },
      {
        q: "A turma é em outubro. Dá tempo de aplicar na LOA 2027?",
        a: "É por isso que a turma é em outubro: o projeto de lei chega à Câmara nesse período e a votação tem calendário limite — o módulo 1 trata exatamente desse prazo.",
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
    meta: "Turma de 13 a 16/10 em Curitiba · Empenho leva tempo no seu órgão — comece o processo agora.",
    // Turma reunida no plenário de Câmara Municipal (foto real, já usada na
    // /portal; luma média 118).
    bgSrc: "/camara-out26/cta-final.jpg",
    // BLOQUEIO DE PUBLICAÇÃO: o slug `camara-out26` (campo `produto` abaixo)
    // precisa estar no mapa de cursos do n8n antes de a página receber
    // tráfego, senão o lead entra como "Curso não identificado".
    formId: "lp-camara-out26",
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
    // Chave do mapa de cursos do n8n. Solução no Omie: "Câmaras Municipais
    // Orçamento/LOA 2027" (confirmar o id).
    produto: "camara-out26",
    paginaOrigem: "camara-out26",
    // Sem tituloProduto: o briefing manda o token do título ser o slug
    // (LP|camara-out26|s=…|c=…|x=…|f=lp-camara-out26).
  },

  /* Rodapé replicado da referência (mesma parceira e mesmas redes). */
  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    partners: [
      // invert: o logo original é escuro — em marca branca sobre o rodapé.
      {
        src: "/camara-out26/parceiros/faculdade-unypublica.png",
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
