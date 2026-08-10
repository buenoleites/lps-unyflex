import type { EventLpContent } from "@/components/lp2/types";
import Kw from "@/components/lp2/Kw";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp2/) não têm texto próprio.

   A copy veio fechada do briefing (não reescrever) e os trechos que chegaram
   truncados foram batidos com o original pelo Gustavo em 04/08/2026. */

/* A ordem dos itens é a mesma nos 3 planos presenciais — as linhas se alinham
   visualmente entre os cards. Os arrays de booleans têm sempre o mesmo
   comprimento. O 1º item varia só no número de dias (3 no Basic, 4 nos demais). */
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

export const comunicacaoContent: EventLpContent = {
  /* O accent (#4faef7) NÃO é definido aqui: todos os tokens de cor da LP vivem
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
    eyebrow: "CURSO PRESENCIAL E ONLINE · CURITIBA",
    title: (
      <>
        Em ano de eleição, um post errado não se apaga. Alguém responde por
        ele — <Kw>e o nome é o seu</Kw>.
      </>
    ),
    subtitle:
      "Crises, fake news, período eleitoral e o limite entre informar e fazer promoção pessoal: 4 dias para tirar a comunicação do seu órgão do improviso, com protocolo, técnica e critério jurídico. Você sai com método — e com os checklists prontos.",
    audiences:
      "Assessoria de imprensa • social media • coordenação de comunicação • chefia de gabinete",
    // #planos, não #inscricao: o lead precisa ver o preço antes do formulário —
    // quem preenche sem saber que custa R$ 2.980+ chega desqualificado ao
    // comercial, que é o gargalo da operação.
    cta: { label: "Garanta sua vaga", href: "#planos" },
    meta: "4 dias · 17 horas · Curitiba-PR · 01 a 04 de setembro de 2026 · presencial e online ao vivo",
    // Foto oficial Unyflex (planilha de fotos, "palestrante-e-plateia"):
    // salão cheio com palestrante de costas — ninguém identificável como
    // professor deste curso, cuja bancada ainda não foi confirmada.
    bgSrc: "/comunicacao/hero.jpg",
  },

  ticker: {
    metrics: [
      { value: "49.000+", label: "alunos formados" },
      { value: "1.200+", label: "órgãos atendidos" },
      { value: "5,0", label: "no Google · +450 avaliações" },
      { value: "17", label: "horas de capacitação" },
    ],
  },

  audience: {
    title: "Feito para quem responde pela comunicação do órgão.",
    groups: [
      {
        id: "imprensa",
        label: "Imprensa e pauta",
        description:
          "assessores de comunicação · jornalistas de órgãos públicos · responsáveis por release, coletiva e relacionamento com a mídia",
      },
      {
        id: "redes",
        label: "Redes e digital",
        description:
          "social media institucional · responsáveis por posts, atendimento em redes, monitoramento e campanhas digitais",
      },
      {
        id: "coordenacao",
        label: "Coordenação",
        description:
          "coordenadores e chefes de comunicação · chefia de gabinete · quem aprova campanha e responde por crise, desinformação e período eleitoral",
      },
      {
        id: "apoio",
        label: "Apoio e conformidade",
        description:
          "ouvidoria que acumula redes · jurídico, LGPD e controle interno que respaldam a comunicação",
      },
    ],
  },

  problem: {
    title: "Os incêndios que a comunicação apaga todo dia — um a um.",
    items: [
      {
        // 1º card: o grid dá largura dupla automaticamente (card síntese).
        title: "Comunicação no improviso",
        desc: "Cada crise, cada fake news e cada comentário pesado vira um incêndio novo — sem protocolo, sem alinhamento com gabinete e ouvidoria.",
      },
      {
        title: "A nota oficial que chega tarde",
        desc: "A mentira viraliza em minutos; a resposta institucional leva dias. Sem protocolo de resposta rápida, o boato vence.",
      },
      {
        title: "O post que vira improbidade",
        desc: "A linha entre caráter informativo e promoção pessoal é o Art. 37 da Constituição. Cruzá-la sem saber não protege ninguém.",
      },
      {
        title: "Período eleitoral: o relógio já corre",
        desc: "As vedações de publicidade institucional já estão em vigor desde julho. O que não sair do ar no prazo tem nome, cargo e responsabilização.",
      },
      {
        title: "Equipe que faz tudo — sem método",
        desc: "Texto, foto, rede, atendimento: tudo na mesma mesa, nada com critério de LGPD, regra eleitoral ou medição de resultado.",
      },
      {
        title: "Reclamação sem destino",
        desc: "Comentário nas redes não vira protocolo, não chega à Ouvidoria, e o cidadão conclui que ninguém responde.",
      },
      {
        title: "A pauta que ninguém treinou",
        desc: "Assédio, conduta e violência laboral passam pela comunicação — e quase nenhuma equipe foi preparada para orientar o fluxo.",
      },
    ],
  },

  /* [DISTRIBUIÇÃO A CONFIRMAR]: a alocação dos módulos por dia veio como
     provisória no briefing. Os horários por dia não foram fornecidos — o campo
     `hours` exibe a data de cada dia. A linha "Programação completa..." não tem
     campo no contrato; vai como <em> no nó do Dia 4. */
  schedule: {
    title: "Programação",
    days: [
      {
        label: "Dia 1",
        hours: "01/09",
        panels: (
          <>
            Monitoramento, Crises e Desinformação{" "}
            <em>(oficina: nota oficial sob pressão de 15 minutos)</em>
          </>
        ),
      },
      {
        label: "Dia 2",
        hours: "02/09",
        panels: (
          <>
            Jornalismo e Rotina Governamental · Redação Jornalística e Marketing
            Institucional <em>(prática de media training)</em>
          </>
        ),
      },
      {
        label: "Dia 3",
        hours: "03/09",
        panels: (
          <>
            Mídias Sociais e Marketing Digital · Conduta Ética, Assédio e
            Violências Laborais <em>(estudos de caso reais)</em>
          </>
        ),
      },
      {
        label: "Dia 4",
        hours: "04/09",
        panels: (
          <>
            Contratação, Impulsionamento e Período Eleitoral — entrega do
            checklist do que sai do ar antes do pleito.{" "}
            <em>Programação completa módulo a módulo disponível na inscrição.</em>
          </>
        ),
      },
    ],
  },

  /* quote (seção 06, OPCIONAL): desligada por decisão do briefing — sem
     citação/manifesto aprovado para esta LP. Para ligar, preencha e descomente:
  quote: {
    text: "[PENDENTE] Citação ou manifesto aprovado.",
    support: "[PENDENTE] Linha de apoio opcional.",
    bgSrc: "/comunicacao/citacao.jpg",
  },
  */

  /* speakers (seção 07, OPCIONAL): desligada — professores ainda NÃO
     confirmados. NÃO publicar bancada especulativa. Quando confirmar, preencha,
     descomente e atualize também a resposta "Quem vai ministrar?" do FAQ:
  speakers: {
    title: "[PENDENTE] Título da bancada.",
    items: [
      {
        name: "[PENDENTE]",
        institution: "[PENDENTE]",
        photoSrc: "/comunicacao/palestrantes/nome.jpg",
        bio: "[PENDENTE]",
      },
    ],
  },
  */

  /* gallery (seção 08, OPCIONAL): desligada — sem fotos próprias do evento.
     Para ligar, forneça fotos em /public/comunicacao/galeria/ e descomente:
  gallery: {
    title: "A experiência presencial",
    photos: [
      { src: "/comunicacao/galeria/foto-1.jpg", alt: "...", caption: "..." },
      { src: "/comunicacao/galeria/foto-2.jpg", alt: "..." },
    ],
  },
  */

  plans: {
    title: "Escolha como quer viver o Comunicação Pública 360º.",
    lead: "Todos os planos incluem certificado. A diferença está nos dias de imersão e no que você leva além do conteúdo.",
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
        highlighted: true,
        highlightLabel: "Mais escolhido",
        features: planoFeatures("Capacitação prática em 4 dias", [
          true, true, true, true, false, false, false, false,
        ]),
      },
      {
        name: "PremiumClass",
        price: "R$ 3.800",
        features: planoFeatures("Capacitação prática em 4 dias", [
          true, true, true, true, true, true, true, true,
        ]),
      },
    ],
    paymentNote:
      "Aceitamos nota de empenho, cartão e PIX. Pagamento em até 7 dias após a conclusão do curso. Fornecemos toda a documentação necessária para a contratação.",
    // Não existe regra de lote neste evento (não inventar contagem regressiva).
    // O campo abaixo (small muted sob os cards) aloja a linha de certificação.
    batchNote:
      "Certificado por instituição reconhecida pelo MEC, emitido após a conclusão.",
    ctaLabel: "Garanta sua vaga",
  },

  /* reviews (seção 10, OPCIONAL): desligada — aguardando a seleção das
     avaliações reais do Google. NÃO publicar com dados inventados. Para ligar,
     preencha e descomente:
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

  /* O briefing pedia "2 cards empilhados no mobile"; o contrato modela a seção
     como tabela booleana de 2 colunas — mesmos fatos, forma do template. */
  compare: {
    title: "Presencial ou online ao vivo?",
    columns: ["Presencial", "Online Ao Vivo"],
    rows: [
      { label: "Acesso ao vivo aos 4 dias de conteúdo", a: true, b: true },
      { label: "Certificado", a: true, b: true },
      {
        label: "4 dias em Curitiba (Rua Voluntários da Pátria, 547 — Centro)",
        a: true,
        b: false,
      },
      {
        label: "Oficinas práticas e media training presenciais",
        a: true,
        b: false,
      },
      {
        label: "Coffee breaks e networking com outros órgãos",
        a: true,
        b: false,
      },
      { label: "Participação nas dinâmicas à distância", a: false, b: true },
      { label: "Sem deslocamento e sem diária", a: false, b: true },
    ],
  },

  /* FAQ fechado em 6 itens pelo briefing — não acrescentar perguntas. */
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "É só para quem é da comunicação, ou serve para ouvidoria e jurídico?",
        a: "Foco em comunicação pública institucional — imprensa, redes, crises e campanhas. Ouvidoria, jurídico e controle interno aproveitam os recortes de LGPD, conduta e período eleitoral como apoio à função.",
      },
      {
        q: "O que exatamente vou aprender sobre o período eleitoral?",
        a: "O módulo final é inteiro sobre isso: o que pode e o que não pode ser publicado ou impulsionado, e você sai com um checklist prático do que deve sair do ar antes do pleito.",
      },
      {
        q: "Sou de prefeitura pequena, equipe de 1–2 pessoas. É para mim?",
        a: "Sim — protocolos e checklists foram desenhados para funcionar também em equipe mínima, onde a mesma pessoa acumula funções. E os 1.200+ órgãos que já atendemos são, em maioria, municípios de pequeno e médio porte.",
      },
      {
        // TODO [ATUALIZAR QUANDO CONFIRMAR bancada]: ao publicar a seção
        // speakers, revisar esta resposta.
        q: "Quem vai ministrar?",
        a: "Profissionais que operam comunicação pública real — imprensa, redes e crise em órgãos públicos. A bancada completa será publicada nesta página.",
      },
      {
        q: "Posso pagar com nota de empenho? Que documentos vocês emitem?",
        a: "Sim. Trabalhamos com nota de empenho, prazo de pagamento de até 7 dias após o curso, e fornecemos toda a documentação necessária para a contratação pelo seu órgão.",
      },
      {
        q: "Posso ir como pessoa física?",
        a: "Sim — aceitamos todas as formas de pagamento para pessoa física, incluindo cartão e PIX.",
      },
    ],
  },

  form: {
    title: "Garanta sua vaga no Comunicação Pública 360º",
    meta: "4 dias · 17 horas · Curitiba-PR · 01 a 04 de setembro de 2026 · presencial e online ao vivo",
    // Foto oficial Unyflex (planilha de fotos, "IMG_5948"): plateia atenta.
    bgSrc: "/comunicacao/cta-final.jpg",
    formId: "lp-comunicacao",
    submitLabel: "Garanta sua vaga",
    thankYou: { url: "/obrigado", withPii: false },
  },

  footer: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    // O desconto de pós dos planos vem da Faculdade Unypública — parceira
    // institucional mantida no rodapé. Unyboss removida a pedido do Gustavo.
    partners: [
      // invert: o logo original é escuro — em marca branca sobre o rodapé.
      {
        src: "/comunicacao/parceiros/faculdade-unypublica.png",
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
