import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* Os 9 itens da tabela de preços, substituídos em 22/09/2026 pelo print que o
   Gustavo mandou (Plano 01/02/03, R$ 3.300/3.600/3.900) — o bloco herdado da
   /engenharia-nov26 (BasicClass/MasterClass/PremiumClass) saiu. Os três
   vetores dizem o que cada plano inclui — servem aos cards E à tabela, para
   as duas nunca divergirem. */
const PLANO_ITENS = [
  "Acesso aos 4 dias de imersão",
  "Material didático em PDF",
  "Certificado reconhecido pelo MEC",
  "Coffee breaks gourmet",
  "Coquetel de encerramento",
  "Almoço no Restaurante Madalosso",
  "Kit personalizado + brindes",
  "Mentoria e tutoria individual",
  "Um semestre de EAD",
];
const BASIC = [true, true, true, true, false, false, false, false, false];
const MASTER = [true, true, true, true, true, true, true, false, false];
const PREMIUM = [true, true, true, true, true, true, true, true, true];
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
   2. app/engenharia-nov26/content.tsx — ticker, reviews, "Como seu órgão
      contrata", as 3 FAQs fixas, formulário, rodapé, stickyCta. Só a palavra
      "curso" virou "seminário" nesses blocos; nenhum valor mudou. O bloco
      `plans` NÃO segue mais essa referência (ver item 4 abaixo).
   3. Fotos de seminário (troca de 22/09/2026, pedido do Gustavo) — catálogo
      da planilha do cliente (FOTOS AGENTE DE IMAGEM PUBLICAR CSV.xlsx), ~90
      URLs remotas com descrição/categoria por foto. As fotos de sala de aula
      da sede saíram: não representavam um seminário. Evitadas de propósito
      as fotos do mesmo catálogo com marca "Licita Expo" visível (evento e
      produto diferentes desta LP). Nenhum dos três palestrantes tem foto no
      repositório (monograma do template). Alt de imagem é acessibilidade,
      não copy.
   4. Tabela de preços (22/09/2026): print fornecido pelo Gustavo (Plano
      01/02/03, R$ 3.300/3.600/3.900, 9 itens) substituiu o bloco herdado da
      /engenharia-nov26 — não é mais a mesma referência do item 2.

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
    // Headline em 2 linhas e subheadline em 3 a >=1440px (regra de 16/09; medido
    // no preview com o texto injetado no h1, nao estimado por contagem).
    title: (
      <>
        Informar tem regra. <Kw>Promover é infração.</Kw>
      </>
    ),
    subtitle:
      "Imprensa, redação institucional, mídias sociais, gestão de crise, publicidade institucional e impulsionamento pago: seis painéis em 4 dias, com quem faz comunicação pública todo dia.",
    audiences:
      "Analista e assessor de comunicação · chefia de imprensa · ouvidoria · procuradoria · controle interno · diretor e secretário que define a presença digital",
    // Sem href ⇒ o CTA vai para #inscricao.
    cta: { label: "Quero receber a programação com nota de empenho" },
    meta: "Rua Voluntários da Pátria, 547 · Centro, Curitiba/PR · Certificado emitido pela Faculdade Unypública, IES credenciada no MEC",
    // Foto de seminário (troca de 22/09/2026, pedido do Gustavo: a foto de
    // sala de aula da sede saiu — não representava um seminário). Fonte:
    // catálogo da planilha do cliente (FOTOS AGENTE DE IMAGEM), foto
    // "IMG_6831" — auditório com palestrante e plateia às mesas, 3:2 nativo
    // (sem crop), luma média 123 — sem ganho de gama. É o LCP da página — o
    // layout da rota faz o preload.
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
     Fotos dos três no repositório desde 17/09/2026 (antes ficavam com o
     monograma — lacuna registrada na PR). Uanilla: sem nota e sem horas
     (base de 3 h no documento). */
  speakers: {
    title: "Quem ensina faz comunicação pública todo dia",
    lead: "Câmara Municipal, Prefeitura e os maiores eventos de contratações públicas do país: os três palestrantes operam o que ensinam.",
    placement: "before-program",
    items: [
      {
        name: "Michelle Stival",
        institution: "DIRETORIA DE COMUNICAÇÃO · CÂMARA MUNICIPAL DE CURITIBA",
        photoSrc: "/comunicacao-out26/palestrantes/michelle-stival.jpg",
        bio: "Jornalista (PUC-PR), pós-graduada em Gestão da Comunicação Organizacional (FAE). Desde 2009 na Diretoria de Comunicação da Câmara Municipal de Curitiba, onde coordena as mídias sociais; desde 2019 lidera a presença do Legislativo curitibano no Instagram, TikTok, X e YouTube e idealizou o CMC Podcasts. O modelo de comunicação pública que ajudou a construir virou referência nacional, replicado por câmaras de todo o país. Passagens pela Secretaria de Segurança Pública do Paraná e por jornais, revistas, rádio e TV; seis prêmios Sangue Bom. 21+ horas de aula na Unyflex, avaliação 9,6.",
      },
      {
        name: "Uanilla Marcela dos Santos Pivetta",
        institution: "DIRETORIA DE COMUNICAÇÃO · PREFEITURA DE ITAPOÁ/SC",
        photoSrc: "/comunicacao-out26/palestrantes/uanilla-marcela-dos-santos-pivetta.jpg",
        bio: "Jornalista com mais de 15 anos em comunicação, conteúdo, audiovisual, marketing político e comunicação institucional. Diretora de Comunicação da Prefeitura de Itapoá (SC), onde lidera equipe multidisciplinar e responde pelo planejamento e pela gestão da comunicação institucional e digital do município.",
      },
      {
        name: "Max Miller Candido Alves Pereira",
        institution: "DIRETOR DE DESENVOLVIMENTO INSTITUCIONAL · AMPLA E CONECTA",
        photoSrc: "/comunicacao-out26/palestrantes/max-miller-candido-alves-pereira.jpg",
        bio: "Comunicador, professor e coordenador técnico-científico de eventos em mais de 15 áreas da gestão pública. Articulista em publicidade oficial e contratação de serviços de comunicação (agências, comunicação digital, contratação direta e credenciamento); um dos idealizadores da Maratona das Contratações Públicas. Marketing com ênfase em Digital & Data Science, Personal Branding (ESPM). Coautor de “Contratações nos Sistemas: Perspectivas e Desafios” (JML, 2025) e autor de “Descomplicando a Elaboração de Editais para Licitações de Serviços Publicitários” (2022). 15+ horas de aula na Unyflex, avaliação 9,2.",
      },
    ],
  },

  /* Galeria trocada em 22/09/2026 (pedido do Gustavo): as nove fotos de sala
     de aula da sede saíram — não representavam um seminário — e entraram
     nove fotos de seminário do catálogo da planilha do cliente (FOTOS AGENTE
     DE IMAGEM PUBLICAR CSV.xlsx). Evitadas de propósito as fotos do mesmo
     catálogo com marca "Licita Expo" visível (evento e produto diferentes) —
     ver [[catalogo-fotos-unyflex-duas-linhas]]. Múltiplo de 3 (o grid é CSS
     columns: 3). */
  gallery: {
    title: "A experiência presencial",
    photos: [
      {
        src: "/comunicacao-out26/galeria/palco-01.jpg",
        alt: "Palestrante ao microfone no palco do seminário, com cortina escura ao fundo.",
        width: 1000,
        height: 666,
      },
      {
        src: "/comunicacao-out26/galeria/palestrante-01.jpg",
        alt: "Palestrante de terno claro apresentando no palco, com o telão ao fundo.",
        width: 1000,
        height: 666,
      },
      {
        src: "/comunicacao-out26/galeria/palestrante-02.jpg",
        alt: "Retrato em preto e branco de um palestrante ao microfone, gesticulando.",
        width: 1000,
        height: 666,
      },
      {
        src: "/comunicacao-out26/galeria/plateia-01.jpg",
        alt: "Participantes sentados acompanhando o seminário, em plano fechado.",
        width: 1000,
        height: 666,
      },
      {
        src: "/comunicacao-out26/galeria/plateia-02.jpg",
        alt: "Plateia acompanhando a apresentação, com anotações sobre a mesa.",
        width: 1000,
        height: 666,
      },
      {
        src: "/comunicacao-out26/galeria/coffee-break-01.jpg",
        alt: "Mesa de coffee break do seminário, com salgados e decoração de folhagem.",
        width: 1000,
        height: 666,
      },
      {
        src: "/comunicacao-out26/galeria/coquetel-01.jpg",
        alt: "Detalhe do coquetel de confraternização: garrafa em balde de gelo.",
        width: 666,
        height: 1000,
      },
      {
        src: "/comunicacao-out26/galeria/networking-01.jpg",
        alt: "Momento de networking entre participantes durante o intervalo.",
        width: 1000,
        height: 666,
      },
      {
        src: "/comunicacao-out26/galeria/brindes-01.jpg",
        alt: "Duas participantes com crachá da Unyflex conferindo o material recebido.",
        width: 1000,
        height: 666,
      },
    ],
  },

  /* Avaliações públicas do Google, texto integral e nomes como publicados —
     reutilizadas da referência. Foto trocada em 22/09/2026 (mesmo motivo das
     outras): foto oficial de grupo do catálogo da planilha do cliente, sem
     marca "Licita Expo" visível. */
  reviews: {
    rating: "5,0",
    ratingValue: 5,
    volume: "+450 avaliações",
    sourceLabel: "Google",
    photo: {
      src: "/comunicacao-out26/turma.jpg",
      alt: "Foto oficial de grupo em um evento da Unyflex, plateia em plenário ao fundo.",
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

  /* Investimento — tabela substituída em 22/09/2026 pelo print que o Gustavo
     mandou (copy exatamente igual ao print; layout segue o componente lp2 de
     sempre, `featured` saiu por não ter fonte para essa cópia nos novos 9
     itens — o destaque do Plano 03 fica só no badge + highlighted do card). */
  plans: {
    title: "Escolha o plano ideal",
    lead: "Três formatos de participação. Valores por participante.",
    items: [
      {
        name: "Plano 01",
        sub: "Por participante",
        price: "R$ 3.300",
        features: planoFeatures(BASIC),
        ctaLabel: "Quero o Plano 01",
      },
      {
        name: "Plano 02",
        sub: "Por participante",
        price: "R$ 3.600",
        features: planoFeatures(MASTER),
        ctaLabel: "Quero o Plano 02",
      },
      {
        name: "Plano 03",
        sub: "Por participante",
        price: "R$ 3.900",
        badge: "MAIS COMPLETO",
        highlighted: true,
        features: planoFeatures(PREMIUM),
        ctaLabel: "Quero o Plano 03",
      },
    ],
    comparison: {
      itemsLabel: "Benefícios",
      columns: [
        { name: "Plano 01", price: "R$ 3.300" },
        { name: "Plano 02", price: "R$ 3.600" },
        { name: "Plano 03", price: "R$ 3.900", highlighted: true },
      ],
      rows: [
        ...PLANO_ITENS.map((label, i) => ({
          label,
          cells: [BASIC[i], MASTER[i], PREMIUM[i]],
        })),
        {
          label: "Valores",
          cells: ["R$ 3.300", "R$ 3.600", "R$ 3.900"],
        },
      ],
    },
    paymentNote:
      "Parcelamento facilitado e condições especiais para grupos e órgãos públicos. Empenho e nota fiscal conforme a necessidade do órgão.",
    batchNote: "Inscrições até o dia do seminário.",
    footnote: "Valores por participante — turma de 27 a 30 de outubro de 2026.",
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
    // Foto de seminário (troca de 22/09/2026, mesmo motivo do hero acima).
    // Fonte: catálogo da planilha do cliente, "musica-ao-vivo-01" — show ao
    // vivo com a marca Unyflex/Faculdade Unypública no telão. Recortada de
    // 1600×1066 (3:2) para 16:9 (1600×900); luma original 58, ganho de gama
    // (eq=gamma=1.30) levou para 72 antes do recorte — abaixo da referência
    // de ~83, do lado seguro.
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
    priceAnchor: "a partir de R$ 3.300",
    label: "Receber proposta",
    href: "#inscricao",
  },
};
