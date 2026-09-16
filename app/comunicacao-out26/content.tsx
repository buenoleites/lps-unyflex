import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* Os 12 itens da tabela de preços, na ordem do print de 11/09/2026. Os três
   vetores dizem o que cada plano inclui — servem aos cards E à tabela, para as
   duas nunca divergirem. Bloco idêntico ao da /engenharia-nov26 (a tabela é a
   mesma para todos os cursos e seminários — briefing de 16/09/2026). */
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

   Seminário Comunicação Pública e Mídias Sociais — Ferramentas, restrições e
   impulsionamento — 2ª EDIÇÃO, 27 a 30/10/2026 (/comunicacao-out26). A 1ª
   edição (01–04/09) é a rota /comunicacao, que não é tocada. Estrutura,
   componentes e instrumentação da /engenharia-nov26, com o tratamento de
   SEMINÁRIO pedido pelo briefing de 16/09/2026:
   - selo "2ª edição" no hero (`hero.badge`, extensão opt-in do template);
   - "seminário" e "painéis" no lugar de "curso" e "módulos" em toda a página
     (os ids de âncora #modulos/#programacao são internos e não mudam);
   - palestrantes em destaque ANTES da programação (`speakers.placement`,
     extensão opt-in do template);
   - programação por dia (`schedule`, timeline de 4 nós) com os painéis
     distribuídos 1·2·2·1 — DISTRIBUIÇÃO PROVISÓRIA a confirmar (o documento
     não diz qual painel cai em que dia; decisão do Gustavo em 16/09/2026,
     mesmo status da 1ª edição), seguida dos 6 painéis em acordeão;
   - identidade própria só via ./theme.css (accent #4faef7 da vertical
     Comunicação, display do hero um pouco maior).

   FONTES:
   1. Documento 4 do briefing de 16/09/2026 — descrição, 6 painéis (itens
      verbatim; títulos vieram em caixa alta e foram normalizados),
      palestrantes (fatos das bios; o currículo do Max Miller veio com palavras
      coladas e foi corrigido), público-alvo, datas e carga horária.
   2. app/engenharia-nov26/content.tsx — ticker, reviews, Investimento (3
      planos, card recomendado, tabela, rodapé), "Como seu órgão contrata", as
      3 FAQs fixas, formulário, rodapé, stickyCta. Só a palavra "curso" virou
      "seminário" nesses blocos; nenhum valor mudou.
   3. Catálogo de fotos já no repositório (sede em Curitiba). NÃO existem
      fotos da 1ª edição do seminário — a galeria usa as da sede, sem legenda
      "1ª edição". Nenhum dos três palestrantes tem foto no repositório
      (monograma do template). Alt de imagem é acessibilidade, não copy.

   COPY ESCRITA NESTA PR (pedida pelo briefing, para revisão do Gustavo):
   hero.title, hero.subtitle, audience (4 cards e closing), problem (4
   citações), speakers.title/lead e as 3 bios reescritas, schedule.title e os
   rótulos da agenda, modules.title, as FAQs 1–6, form.meta.

   INSTRUMENTAÇÃO: formId lp-comunicacao-out26 · produto comunicacao-out26
   (chave a cadastrar no mapa de cursos do n8n ANTES de rodar tráfego) ·
   título do lead LP|comunicacao-out26|s=…|c=…|x=…|f=lp-comunicacao-out26
   (token = slug, sem tituloProduto, por instrução do briefing). */

export const comunicacaoOut26Content: EventLpContent = {
  /* O accent (#4faef7, azul da vertical Comunicação) NÃO é definido aqui:
     todos os tokens de cor da LP vivem em ./theme.css. */

  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    links: [
      { href: "#para-quem", label: "Para quem" },
      { href: "#problema", label: "Desafios" },
      { href: "#bancada", label: "Palestrantes" },
      { href: "#programacao", label: "Programação" },
      { href: "#planos", label: "Investimento" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: { href: "#inscricao", label: "Receber proposta" },
  },

  hero: {
    badge: "2ª edição",
    // O CSS do eyebrow (.lp2-eyebrow) já aplica uppercase.
    eyebrow: "Seminário presencial em Curitiba · 27 a 30/10 · 17 horas",
    title: (
      <>
        Publicidade institucional tem limite. Impulsionamento tem regra. A
        fronteira entre informar e promover é{" "}
        <Kw>onde o órgão é autuado</Kw>.
      </>
    ),
    subtitle:
      "Imprensa, redação institucional, mídias sociais, gestão de crise, publicidade institucional e impulsionamento pago: seis painéis em 4 dias, com quem faz comunicação pública todo dia na Câmara, na Prefeitura e nos eventos do setor.",
    audiences:
      "Analista e assessor de comunicação · chefia de imprensa · ouvidoria · procuradoria · controle interno · diretor e secretário que define a presença digital",
    // Sem href ⇒ o CTA vai para #inscricao.
    cta: { label: "Quero receber a programação com nota de empenho" },
    meta: "Rua Voluntários da Pátria, 547 · Centro, Curitiba/PR · Certificado emitido pela Faculdade Unypública, IES credenciada no MEC",
    // Sala de aula clara da sede, alunos em aula, sem slide legível (foto real
    // já no repositório, luma média 154 — sem ganho de gama). É o LCP da
    // página — o layout da rota faz o preload.
    bgSrc: "/comunicacao-out26/hero.jpg",
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
    title: "Este seminário é para quem responde pela comunicação do órgão",
    variant: "grid",
    groups: [
      {
        id: "comunicacao",
        label: "Comunicação e Redes Sociais",
        description:
          "Analistas e assessores de comunicação responsáveis por redes sociais em Prefeituras e Governos Estaduais; chefias de assessoria de imprensa e comunicação social de autarquias, fundações e consórcios.",
      },
      {
        id: "ouvidoria",
        label: "Ouvidoria",
        description:
          "Ouvidores e servidores de Ouvidoria que usam mídias digitais para atender o cidadão — e precisam de protocolo, governança e acessibilidade.",
      },
      {
        id: "juridico",
        label: "Jurídico e Controle",
        description:
          "Procuradores e assessores jurídicos que orientam os limites da publicidade institucional e do impulsionamento pago; controladores internos que avaliam os gastos com comunicação.",
      },
      {
        id: "direcao",
        label: "Direção e Secretariado",
        description:
          "Diretores e secretários que definem a presença digital institucional e respondem por ela — inclusive em período eleitoral.",
      },
    ],
    closing:
      "Serve também para chefias de gabinete e cerimonial que aprovam o que sai — mas o centro do seminário é quem produz e publica todo dia.",
  },

  /* 4 citações curtas, no tom de um servidor falando (briefing). O grid vira
     2×2 via theme.css (o template assume 6–10 cards). */
  problem: {
    title: "Se alguma dessas frases podia ser sua, o seminário é seu",
    items: [
      {
        title: "O post do prefeito é institucional ou promoção pessoal?",
        desc: "“Toda semana chega um pedido de post com a foto e o nome da autoridade. Eu publico, e quem responde no Ministério Público sou eu.”",
      },
      {
        title: "Impulsionar dá para fazer? Com que contrato?",
        desc: "“A gente quer impulsionar a campanha da vacina, mas ninguém sabe se pode pagar a plataforma direto, se precisa de agência, se tem que prestar contas.”",
      },
      {
        title: "A crise começa no comentário e ninguém tem protocolo",
        desc: "“O boato viraliza às 22h, o gabinete quer nota oficial, o jurídico não atende. Nos primeiros minutos a gente improvisa — e o improviso fica registrado.”",
      },
      {
        title: "Perfil pessoal, perfil institucional, período eleitoral",
        desc: "“O secretário posta a entrega da obra no perfil dele. Em ano de eleição eu não sei mais o que é vedado, o que sai do ar e quando.”",
      },
    ],
  },

  /* Agenda do seminário por dia (timeline de 4 nós, um por dia). Os painéis
     distribuídos 1·2·2·1 — PROVISÓRIO, a confirmar (o documento não traz a
     distribuição). Sem horários no documento: `hours` mostra o dia da semana
     e a data. `panels` é renderizado dentro de <p>: só conteúdo inline. Os
     títulos completos e os itens de cada painel ficam no acordeão abaixo. */
  schedule: {
    title: "Agenda do seminário: quatro dias, seis painéis",
    days: [
      {
        label: "Dia 1",
        hours: "Terça, 27/10",
        panels: (
          <>
            <strong>Painel 1</strong> — Comunicação Pública, Jornalismo e
            Relacionamento com a Imprensa
          </>
        ),
      },
      {
        label: "Dia 2",
        hours: "Quarta, 28/10",
        panels: (
          <>
            <strong>Painel 2</strong> — Redação, Narrativa Institucional e
            Comunicação
            <br />
            <strong>Painel 3</strong> — Mídias Sociais e Estratégia Digital
          </>
        ),
      },
      {
        label: "Dia 3",
        hours: "Quinta, 29/10",
        panels: (
          <>
            <strong>Painel 4</strong> — Gestão de Crises, Reputação e Ética
            <br />
            <strong>Painel 5</strong> — Publicidade Institucional, Identidade e
            Limites (parte I)
          </>
        ),
      },
      {
        label: "Dia 4",
        hours: "Sexta, 30/10",
        panels: (
          <>
            <strong>Painel 6</strong> — Impulsionamento, Contratações,
            Tecnologia e Condutas Vedadas (parte II)
          </>
        ),
      },
    ],
  },

  /* Os 6 painéis VERBATIM do documento 4, na ordem do documento. O componente
     numera 01–06 (= Painel 1–6), por isso os títulos entram sem o prefixo
     "Painel N -"; títulos em caixa alta normalizados; cada item numerado do
     documento é uma string em `topics`. Só ortografia e espaçamento. */
  modules: {
    title: "Os seis painéis, um a um",
    lead: "Cada painel fecha com uma oficina ou simulação prática — imprensa, transformação da informação, crise e o “pode ou não pode?” do impulsionamento.",
    items: [
      {
        title: "Comunicação Pública, Jornalismo e Relacionamento com a Imprensa",
        topics: [
          "Comunicação pública, institucional e governamental",
          "Fundamentos do jornalismo aplicados à gestão pública",
          "Como funciona uma redação",
          "Particularidades dos veículos de comunicação",
          "Relacionamento estratégico com a imprensa",
          "Release, nota oficial e sugestão de pauta",
          "Entrevistas e media training",
          "Gestão do relacionamento em situações sensíveis",
          "Oficina prática de imprensa",
        ],
      },
      {
        title: "Redação, Narrativa Institucional e Comunicação",
        topics: [
          "O lead aplicado à gestão pública",
          "Da burocracia para a linguagem simples",
          "Interesse público e critérios de relevância",
          "Storytelling e narrativa institucional",
          "Pautas positivas e agenda institucional",
          "Comunicação de utilidade pública",
          "Transparência ativa e bastidores da gestão",
          "Oficina de transformação da informação",
        ],
      },
      {
        title: "Mídias Sociais e Estratégia Digital na Gestão Pública",
        topics: [
          "O ecossistema digital da comunicação pública",
          "Estratégia por plataforma (Instagram, Facebook, WhatsApp, YouTube e demais)",
          "Posicionamento e tom de voz institucional",
          "Planejamento e calendário editorial",
          "Formatos de conteúdo (feed, carrossel, stories, reels, vídeos curtos, transmissões, cards, fotografias)",
          "Cobertura em tempo real",
          "Relacionamento e atendimento ao cidadão",
          "Governança e segurança das contas institucionais",
          "Acessibilidade na comunicação digital",
        ],
      },
      {
        title: "Gestão de Crises, Reputação e Ética",
        topics: [
          "Problema e crise de comunicação",
          "Os primeiros minutos de uma crise",
          "Comitê de crise e fluxo de decisão",
          "Porta-voz, nota oficial e posicionamento público",
          "Crises nas redes sociais",
          "Fake news, boatos e desinformação",
          "Ética, impessoalidade e responsabilidade do comunicador",
          "Situações de assédio, discriminação e violência",
          "Simulação de crise",
        ],
      },
      {
        title: "Publicidade Institucional, Identidade e Limites da Comunicação Pública (parte I)",
        topics: [
          "Fundamentos da publicidade institucional",
          "Comunicação pública, institucional, governamental e política",
          "Impessoalidade e promoção pessoal de autoridades",
          "A autoridade como fonte da informação",
          "Prestação de contas × promoção da gestão",
          "Identidade institucional e marca de governo",
          "Conteúdo institucional nas mídias sociais",
          "Uso de imagem, voz e dados de cidadãos e servidores",
          "Análise prática — institucional ou promocional?",
        ],
      },
      {
        title: "Impulsionamento, Contratações, Tecnologia e Condutas Vedadas (parte II)",
        topics: [
          "Impulsionamento e mídia paga na Administração Pública",
          "Planejamento e prestação de contas da publicidade digital",
          "Contratação de publicidade, agências e serviços de comunicação",
          "Contratação direta de plataformas e veículos digitais",
          "Ferramentas, softwares e soluções tecnológicas",
          "LGPD, mailing, WhatsApp e bases de dados",
          "Condutas vedadas e comunicação pública em período eleitoral",
          "Perfis institucionais × perfis pessoais de agentes públicos",
          "Oficina prática — “pode ou não pode?”",
        ],
      },
    ],
  },

  /* Palestrantes em destaque, ANTES da programação (placement). Os três são
     de Câmara, Prefeitura e eventos do setor — é o argumento do seminário.
     Nenhum tem foto no repositório → monograma (lacuna registrada na PR).
     Uanilla: sem nota e sem horas (base de 3 h no documento). */
  speakers: {
    title: "Quem ensina faz comunicação pública todo dia",
    lead: "Câmara Municipal, Prefeitura e os maiores eventos de contratações públicas do país: os três palestrantes operam o que ensinam.",
    placement: "before-program",
    items: [
      {
        name: "Michelle Stival",
        institution: "DIRETORIA DE COMUNICAÇÃO · CÂMARA MUNICIPAL DE CURITIBA",
        photoSrc: null,
        bio: "Jornalista (PUC-PR), pós-graduada em Gestão da Comunicação Organizacional (FAE). Desde 2009 na Diretoria de Comunicação da Câmara Municipal de Curitiba, onde coordena as mídias sociais; desde 2019 lidera a presença do Legislativo curitibano no Instagram, TikTok, X e YouTube e idealizou o CMC Podcasts. O modelo de comunicação pública que ajudou a construir virou referência nacional, replicado por câmaras de todo o país. Passagens pela Secretaria de Segurança Pública do Paraná e por jornais, revistas, rádio e TV; seis prêmios Sangue Bom. 21+ horas de aula na Unyflex, avaliação 9,6.",
      },
      {
        name: "Uanilla Marcela dos Santos Pivetta",
        institution: "DIRETORIA DE COMUNICAÇÃO · PREFEITURA DE ITAPOÁ/SC",
        photoSrc: null,
        bio: "Jornalista com mais de 15 anos em comunicação, conteúdo, audiovisual, marketing político e comunicação institucional. Diretora de Comunicação da Prefeitura de Itapoá (SC), onde lidera equipe multidisciplinar e responde pelo planejamento e pela gestão da comunicação institucional e digital do município.",
      },
      {
        name: "Max Miller Candido Alves Pereira",
        institution: "DIRETOR DE DESENVOLVIMENTO INSTITUCIONAL · AMPLA E CONECTA",
        photoSrc: null,
        bio: "Comunicador, professor e coordenador técnico-científico de eventos em mais de 15 áreas da gestão pública. Articulista em publicidade oficial e contratação de serviços de comunicação (agências, comunicação digital, contratação direta e credenciamento); um dos idealizadores da Maratona das Contratações Públicas. Marketing com ênfase em Digital & Data Science, Personal Branding (ESPM). Coautor de “Contratações nos Sistemas: Perspectivas e Desafios” (JML, 2025) e autor de “Descomplicando a Elaboração de Editais para Licitações de Serviços Publicitários” (2022). 15+ horas de aula na Unyflex, avaliação 9,2.",
      },
    ],
  },

  /* Galeria (pedido do Bruno: mais fotos da sede). Não há fotos da 1ª edição
     do seminário no repositório — entram nove fotos reais da sala de aula da
     sede, sem legenda "1ª edição". Múltiplo de 3 (o grid é CSS columns: 3). */
  gallery: {
    title: "A experiência presencial",
    photos: [
      {
        src: "/comunicacao-out26/galeria/turma-01.jpg",
        alt: "Turma posada em pé na sala de aula da Unyflex, em Curitiba, ao fim de um curso presencial.",
        width: 1000,
        height: 750,
      },
      {
        src: "/comunicacao-out26/galeria/professor-01.jpg",
        alt: "Professora à frente da sala, explicando o conteúdo para a turma.",
        width: 1000,
        height: 750,
      },
      {
        src: "/comunicacao-out26/galeria/alunos-01.jpg",
        alt: "Duas alunas acompanhando a aula, com notebook e material sobre a mesa.",
        width: 1000,
        height: 750,
      },
      {
        src: "/comunicacao-out26/galeria/sala-01.jpg",
        alt: "Sala de aula vista do fundo durante a aula: alunos sentados e o professor junto ao telão.",
        width: 1000,
        height: 750,
      },
      {
        src: "/comunicacao-out26/galeria/sala-03.jpg",
        alt: "Sala de aula em perspectiva lateral, com o professor à esquerda e o kit do curso sobre a mesa.",
        width: 1000,
        height: 750,
      },
      {
        src: "/comunicacao-out26/galeria/turma-02.jpg",
        alt: "Grupo de alunos posando diante da TV com a marca Unyflex, na sala de aula.",
        width: 1000,
        height: 750,
      },
      {
        src: "/comunicacao-out26/galeria/alunos-03.jpg",
        alt: "Três alunos em mesa em L acompanhando a aula, com copos e crachás.",
        width: 1000,
        height: 750,
      },
      {
        src: "/comunicacao-out26/galeria/professor-02.jpg",
        alt: "Professor em pé, gesticulando enquanto conduz a aula.",
        width: 1000,
        height: 750,
      },
      {
        src: "/comunicacao-out26/galeria/sala-04.jpg",
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
      src: "/comunicacao-out26/turma.jpg",
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

  /* Investimento — bloco IDÊNTICO ao da /engenharia-nov26 em valores, planos,
     card recomendado, tabela e rodapé (tabela única para cursos e seminários,
     briefing de 16/09/2026). Só "curso" virou "seminário". Sem plano online. */
  plans: {
    title: "Três planos de participação",
    lead: "O mesmo seminário, com três níveis de experiência. O PremiumClass é o plano recomendado: capacitação em 4 dias e a agenda completa fora da sala.",
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
      desc: "Quatro dias de capacitação prática e uma agenda pensada para quem vem de fora: city tour, almoço no Madalosso, mentoria individual com os palestrantes e benefícios que seguem com o aluno depois do seminário.",
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
      "Aceitamos nota de empenho, com prazo de pagamento de 7 dias após a finalização do seminário. Fornecemos toda a documentação necessária para a contratação pelo seu órgão. Pessoa física pode se inscrever por qualquer forma de pagamento.",
    batchNote: "Inscrições até o dia do seminário.",
    footnote:
      "Valores por aluno: Benefícios do PremiumClass (tour, almoço, assinatura premium, semestre de graduação, kit exclusivo e UNYPOINTS) são concedidos na confirmação da matrícula e não são convertidos em desconto.",
    ctaLabel: "Receber proposta",
  },

  /* "Como seu órgão contrata" — verbatim da referência ("curso" → "seminário"). */
  procurement: {
    title: "Como seu órgão contrata",
    items: [
      {
        title: "Proposta formal",
        desc: "Em nome do seu órgão, com valores, condições e prazo — feita sob medida pelo consultor.",
      },
      {
        title: "Nota de empenho",
        desc: "Pagamento em até 7 dias após a conclusão do seminário.",
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

  /* FAQ: 1–6 adaptadas ao seminário (a partir dos painéis e do público do
     documento); 7–9 fixas, da referência (empenho/PF, documentação e online). */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "É seminário: tem prática ou é só palestra?",
        a: "Tem prática em todos os painéis: oficina de imprensa, oficina de transformação da informação, simulação de crise, análise “institucional ou promocional?” e a oficina “pode ou não pode?” do impulsionamento.",
      },
      {
        q: "Sou de prefeitura pequena, equipe de uma ou duas pessoas. É para mim?",
        a: "Sim. Planejamento editorial, governança das contas, protocolo de crise e os limites legais valem para quem acumula texto, foto, rede e atendimento na mesma mesa.",
      },
      {
        q: "Sou do jurídico ou do controle interno, não da comunicação. Serve?",
        a: "Serve — os painéis 5 e 6 são sobre os limites: impessoalidade, promoção pessoal, contratação de agências e plataformas, prestação de contas da publicidade digital, LGPD e condutas vedadas.",
      },
      {
        q: "O que exatamente vou aprender sobre período eleitoral?",
        a: "O painel 6 trata das condutas vedadas e da comunicação pública em período eleitoral, e da diferença entre perfil institucional e perfil pessoal do agente público — com a oficina prática “pode ou não pode?”.",
      },
      {
        q: "Vou aprender a impulsionar publicação com dinheiro público?",
        a: "Vai aprender o que a lei permite e exige: planejamento e prestação de contas da mídia paga, contratação de agências e serviços de comunicação e contratação direta de plataformas e veículos digitais.",
      },
      {
        q: "Quem ministra?",
        a: "Três palestrantes que operam comunicação pública todo dia: a coordenação de mídias sociais da Câmara Municipal de Curitiba, a Diretoria de Comunicação da Prefeitura de Itapoá (SC) e a curadoria dos maiores eventos de contratações públicas do país.",
      },
      {
        q: "Posso pagar com nota de empenho? E como pessoa física?",
        a: "Nota de empenho com pagamento em 7 dias após o seminário. Pessoa física paga por PIX, cartão ou boleto.",
      },
      {
        q: "Que documentos vocês enviam para a contratação?",
        a: "No primeiro contato: proposta formal em nome do órgão, CNPJ, declaração de notória especialização e singularidade (art. 74, III, “f”, da Lei 14.133), escopo de Termo de Referência para inexigibilidade e atestado de capacidade técnica.",
      },
      {
        q: "Tem opção online?",
        a: "Sim, ao vivo, com os mesmos painéis e transmissão em tempo real. Kit, coffee e vouchers são exclusivos do presencial.",
      },
    ],
  },

  form: {
    title: "Garanta sua participação",
    // O CSS do meta (.lp2-form-section__meta) já aplica caixa alta.
    meta: "2ª edição · 27 a 30/10 em Curitiba · Empenho leva tempo no seu órgão — comece o processo agora.",
    // Sala menor da sede, professor com microfone de cabeça (foto real já no
    // repositório, luma média 138).
    bgSrc: "/comunicacao-out26/cta-final.jpg",
    // BLOQUEIO DE PUBLICAÇÃO: o slug `comunicacao-out26` (campo `produto`
    // abaixo) precisa estar no mapa de cursos do n8n antes de a página receber
    // tráfego, senão o lead entra como "Curso não identificado".
    formId: "lp-comunicacao-out26",
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
    // Chave do mapa de cursos do n8n. Solução no Omie: "Comunicação Pública
    // e Mídias Sociais" (confirmar o id — 2ª edição).
    produto: "comunicacao-out26",
    paginaOrigem: "comunicacao-out26",
    // Sem tituloProduto: o briefing manda o token do título ser o slug
    // (LP|comunicacao-out26|s=…|c=…|x=…|f=lp-comunicacao-out26).
  },

  /* Rodapé replicado da referência (mesma parceira e mesmas redes). */
  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    partners: [
      // invert: o logo original é escuro — em marca branca sobre o rodapé.
      {
        src: "/comunicacao-out26/parceiros/faculdade-unypublica.png",
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
