import type { Lp3Content } from "@/components/lp3/types";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp3/) não têm texto próprio.

   Seminário Encerramento do Exercício Municipal — presencial, Curitiba-PR,
   08, 09, 10 e 11/12/2026 (4 dias · 20 horas · 6 painéis). Rota
   /encerramento-dez26, no padrão da /licitaexpo (template lp3, seminário só
   presencial, 3 planos).

   FONTES (nada aqui é de autoria do agente, salvo o marcado AGENTE):
   1. Página oficial (Gustavo, 11/11/2026):
      unyflex.com.br/curso/Seminario-Encerramento-do-Exercicio-Municipal-Dezembro-2026
      — título, subtítulo "Cuidados e Correções", descrição, os 6 módulos e
      seus tópicos, datas, 6 painéis, certificado, acesso ilimitado aos
      materiais, preços e itens dos planos, nota do PremiumClass. Trechos que
      chegaram corrompidos na colagem (M2 itens 2–3, M4 item 2, M6 item 1)
      foram reparados pela página, não por inferência.
   2. Carga de 20 horas: regra do Bruno de 13/10/2026 (todos os cursos e
      seminários). O site diz 17 horas; Gustavo decidiu 20 em 11/11.
   3. Preços (site, 11/11): Basic R$ 3.200 · Master R$ 3.500 · Premium R$ 4.280.
      Divisão dos itens por plano: Gustavo, 11/11 (igual à /tesouraria-nov26).
      MasterClass "Recomendado": Gustavo, 11/11 (padrão LP; no site é o Premium).
   4. Texto do certificado: "emitido pela Faculdade Unypública, instituição
      credenciada pelo MEC" (correção de 03/11/2026, vale para todas as peças).
   5. Prova social: "Desde 2009 · 49.000+ alunos" e nota no MEC das LPs lp3
      (/tesouraria-nov26); "5,0 no Google · 510 avaliações" = print do perfil
      (10/11/2026; sem "número 1"). Consentimento, rodapé e política: /licitaexpo.
   6. Público-alvo: Gustavo, 11/11 — mesmos 4 itens da /tesouraria-nov26.
   7. Slug no n8n: `encerramento-dez26` (solução 5300722526, v4.30.6, 29/10).
      Chave de campanha ?c= por anúncio; sem ?c=, cai no slug.
   8. Professores: nenhum confirmado (11/11) — sem seção `speakers`.
   9. Foto do hero: enviada pelo Gustavo em 11/11 (IMG_5997.jpg). Recortada
      para tirar as sacolas "Licita Expo" à direita (pedido dele, 11/11):
      ffmpeg crop=4000:3203:0:900,scale=1600:-2 → sips q45. Sem ganho de
      gama (luma 79,6).

   PENDENTE (sem fonte; NÃO inventar). Enquanto a lista não estiver vazia, o
   build de produção FALHA de propósito, para que um out/ com conteúdo
   provisório nunca chegue ao nginx. Para ver a página: npm run dev, ou
   ENCERRAMENTO_PREVIEW=1 npm run build. */

export const PENDENTE: string[] = [];

export const SLUG = "encerramento-dez26";
export const TITULO = "Encerramento do Exercício Municipal";
export const SUBTITULO = "Cuidados e Correções";
export const NOME_OFICIAL = `Seminário ${TITULO}`;
// Primeira frase da descrição oficial (FONTES item 1).
export const DESCRICAO =
  "O seminário aborda os principais cuidados e providências para o encerramento do exercício municipal de 2026.";

if (PENDENTE.length > 0 && process.env.ENCERRAMENTO_PREVIEW !== "1" && process.env.NODE_ENV === "production") {
  throw new Error(
    `app/${SLUG}/content.tsx tem ${PENDENTE.length} itens PENDENTES (sem fonte). Preencha e esvazie PENDENTE, ou use ENCERRAMENTO_PREVIEW=1 só para pré-visualizar.\n- ${PENDENTE.join("\n- ")}`,
  );
}

/* Os 12 itens dos planos, na ordem do site (FONTES item 1). */
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
/* `omitir` tira índices do card ("3 dias" não aparece como não incluso no
   Master e no Premium — regra da rodada 3 da /tesouraria-nov26). */
function planoFeatures(inclui: boolean[], omitir: number[] = []) {
  return PLANO_ITENS.map((label, i) => ({ label, included: inclui[i] })).filter((_, i) => !omitir.includes(i));
}

export const encerramentoDez26Content: Lp3Content = {
  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    cta: { href: "#inscricao", label: "Garanta sua vaga" },
  },

  hero: {
    badge: "Inscrições abertas",
    title: TITULO,
    subtitle: SUBTITULO,
    dates: "08, 09, 10 e 11 de dezembro de 2026",
    place: "Presencial em Curitiba",
    facts: [
      "Seminário presencial",
      "4 dias",
      "20 horas",
      "6 painéis",
      "Certificado emitido pela Faculdade Unypública, instituição credenciada pelo MEC",
      "Acesso ilimitado aos materiais",
    ],
    bgSrc: `/${SLUG}/hero.jpg`,
    bgAlt: "Palestrante apresenta para participantes em mesas redondas durante seminário presencial",
    ctaPrimary: { href: "#inscricao", label: "Garanta sua vaga" },
  },

  proof: {
    items: ["5,0 no Google · 510 avaliações", "Desde 2009 · 49.000+ alunos", "Faculdade Unypública · nota 5 no MEC"],
  },

  audience: {
    eyebrow: "Para quem",
    // AGENTE: título neutro, sem fonte — validar ou trocar.
    title: "Para quem é o seminário",
    items: [
      "Tesoureiros e contadores de prefeituras e câmaras",
      "Controladores internos",
      "Secretários e diretores de Fazenda e Finanças",
      "Equipes financeiras de autarquias, fundações e consórcios",
    ],
  },

  modules: {
    eyebrow: "Programação",
    title: "6 painéis em 4 dias",
    lead: "4 dias · 20 horas · 08 a 11 de dezembro de 2026",
    items: [
      {
        title: "Governança e Calendário de Encerramento do Exercício 2026",
        topics: [
          "Cronograma de Fechamento: Prazos limites para emissão de empenhos, liquidação e ordens de pagamento.",
          "Decreto de Encerramento: Elaboração e publicação das diretrizes de fechamento orçamentário e financeiro do município.",
          "Inventário Patrimonial: Regras para o levantamento físico e financeiro dos bens móveis, imóveis e almoxarifado.",
          "A conciliação bancária: Identificação e correção de pendências nas contas públicas antes da virada do ano.",
        ],
      },
      {
        title: "Gestão Financeira, Restos a Pagar e Disponibilidade de Caixa",
        topics: [
          "Inscrição em Restos a Pagar: Critérios rigorosos para Restos a Pagar Processados (RPP) e Não Processados (RPNP).",
          "Cancelamento de empenhos: Como e quando proceder com o cancelamento de saldos não utilizados de forma legal.",
          "Suficiência de Caixa: Análise da disponibilidade financeira para fazer frente às despesas inscritas em RP.",
          "Despesas de Exercícios Anteriores (DEA): Como reconhecer e tratar dívidas de anos passados sem gerar apontamentos.",
        ],
      },
      {
        title: "Parcerias 3º Setor e MROSC (Lei 13.019/14) no Fim do Ano",
        topics: [
          "Prestações de Contas no MROSC: Prazos e formalidades para a análise das contas das OSCs no encerramento do exercício.",
          "Saldos de Parcerias: Regras para a devolução de saldos remanescentes ou repactuação para o ano seguinte.",
          "Glosa de Despesas: Como proceder em caso de aplicação indevida dos recursos públicos pela organização parceira.",
          "Prorrogações de Termos de Colaboração/Fomento: Cuidados jurídicos para não interromper serviços essenciais na virada do ano.",
        ],
      },
      {
        title: "Limites Constitucionais e a Lei de Responsabilidade Fiscal",
        topics: [
          "Limites da Educação (MDE - 25%) e Saúde (15%): Estratégias legais para o cumprimento integral até 31 de dezembro.",
          "Despesa Total com Pessoal: Apuração do limite prudencial e total (Executivo e Legislativo) e medidas de correção de última hora.",
          "Operações de Crédito e Antecipação de Receita: Regras de vedação e quitação de obrigações financeiras.",
          "Inadimplência federativa: Como evitar a inscrição do município no CAUC/SIAFI no fechamento do ano.",
        ],
      },
      {
        title: "Fiscalização, Controle Interno e Jurisprudência dos TCs",
        topics: [
          "O papel do Controle Interno: Auditoria preventiva e emissão de alertas aos secretários e prefeitos.",
          "Correções tempestivas: Como sanar irregularidades contábeis e fiscais ainda dentro do próprio exercício.",
          "Julgados dos Tribunais de Contas (TCU e TCEs): Análise dos principais motivos de rejeição de contas municipais no encerramento do ano.",
          "Blindagem jurídica: Minimizando os riscos de responsabilização pessoal por improbidade ou crime de responsabilidade.",
        ],
      },
      {
        title: "Painel Prático – Checklist de Conformidade do Fechamento",
        topics: [
          "Mesa Redonda/Debate: Discussão de casos práticos e gargalos comuns vivenciados pelos participantes (Saúde, Educação, Assistência Social).",
          "Checklist Final: Apresentação de uma planilha passo a passo com todas as providências urgentes que não podem esquecer.",
          "Espaço para Consultoria: Resposta a consultas e dúvidas específicas enviadas previamente ou durante o seminário pelos servidores.",
        ],
      },
    ],
  },

  plans: {
    eyebrow: "Planos",
    title: "Escolha como quer viver o seminário.",
    items: [
      { name: "BasicClass", sub: "Presencial", price: "R$ 3.200", features: planoFeatures(BASIC), ctaLabel: "Quero o BasicClass" },
      {
        name: "MasterClass",
        sub: "Presencial",
        price: "R$ 3.500",
        highlighted: true,
        highlightLabel: "Recomendado",
        features: planoFeatures(MASTER, [0]),
        ctaLabel: "Quero o MasterClass",
      },
      {
        name: "PremiumClass",
        sub: "Presencial",
        price: "R$ 4.280",
        features: planoFeatures(PREMIUM, [0]),
        ctaLabel: "Quero o PremiumClass",
      },
    ],
    footnote:
      "Valores por aluno. Benefícios do PremiumClass (tour, almoço, assinatura premium, semestre de graduação, kit exclusivo e UNYPOINTS) são concedidos na confirmação da matrícula e não são convertidos em desconto.",
  },

  form: {
    eyebrow: "Inscrição",
    title: "Garanta sua vaga",
    meta: "08 a 11 de dezembro de 2026 · presencial em Curitiba",
    formId: "lp-encerramento-dez26",
    // Slug cadastrado no n8n (solução 5300722526): sem isso o lead cairia em "Curso não identificado".
    produto: SLUG,
    paginaOrigem: SLUG,
    tituloProduto: "encerramento",
    campaignFallback: SLUG,
    planOptions: ["BasicClass", "MasterClass", "PremiumClass"],
    submitLabel: "Garanta sua vaga",
    consent: {
      label: (
        <>
          Autorizo o contato da Unyflex por WhatsApp, telefone e e-mail sobre este seminário, conforme a{" "}
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
    logoSrc: `/${SLUG}/logo-escura.png`,
    logoAlt: "Unyflex",
    partnersLabel: "Certificação",
    partners: [{ src: `/${SLUG}/faculdade-unypublica.png`, alt: "Faculdade Unypública" }],
    legal: [{ href: "https://unyflex.com.br/lgpd", label: "Política de privacidade" }],
    social: [
      { kind: "google", href: "https://www.google.com/search?q=Unyflex", label: "5,0 no Google · 510 avaliações" },
      { kind: "linkedin", href: "https://linkedin.com/company/unyflex" },
      { kind: "instagram", href: "https://instagram.com/unyflex" },
      { kind: "youtube", href: "https://youtube.com/@unyflex" },
    ],
    copyright: "© Unyflex 2026",
  },

  stickyCta: {
    priceAnchor: "a partir de R$ 3.200",
    label: "Garanta sua vaga",
    href: "#inscricao",
  },
};
