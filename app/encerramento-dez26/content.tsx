import type { Lp3Content } from "@/components/lp3/types";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp3/) não têm texto próprio.

   Seminário Encerramento do Exercício — presencial, Curitiba-PR, 08 a
   11/12/2026 (4 dias · 20 horas). Rota /encerramento-dez26, no padrão da
   /licitaexpo (template lp3, seminário só presencial, 3 planos).

   FONTES (nada aqui é de autoria do agente):
   1. Gustavo, 11/11/2026: "presencial em Curitiba, 08 a 11/12"; LP no padrão da
      LicitaExpo; anúncio no ar até 16/11.
   2. Carga de 20 horas: regra do Bruno de 13/10/2026 (todos os cursos e
      seminários).
   3. Preços e nomes dos planos: tabela de seminário (Bruno, 15/10/2026):
      Basic R$ 3.300 · Master R$ 3.600 (Recomendado) · Premium R$ 3.900.
   4. Texto do certificado: "emitido pela Faculdade Unypública, instituição
      credenciada pelo MEC" (correção de 03/11/2026, vale para todas as peças).
   5. Prova social: "Desde 2009 · 49.000+ alunos" e nota no MEC das LPs lp3
      (/tesouraria-nov26); "5,0 no Google · 510 avaliações" = print do perfil
      (10/11/2026; sem "número 1"). Consentimento, rodapé e política: /licitaexpo.
   6. Slug no n8n: `encerramento-dez26` (solução 5300722526, v4.30.6, 29/10).
      Chave de campanha ?c= por anúncio; sem ?c=, cai no slug.

   PENDENTE (sem fonte; NÃO inventar): ver PENDENTE abaixo. Enquanto a lista
   não estiver vazia, o build de produção FALHA de propósito, para que um
   out/ com texto provisório nunca chegue ao nginx. Para ver a página com os
   marcadores: ENCERRAMENTO_PREVIEW=1 npm run build. */

export const PENDENTE: string[] = [
  "SUBTITULO / DESCRICAO / GANCHO: nome oficial e descrição do seminário (programática de 28/10)",
  "audience: público-alvo (4 itens)",
  "modules: 6 painéis (título, dia/horário, professor)",
  "speakers: professores confirmados (só Nilson Tognato estava confirmado em 30/10)",
  "plans: itens de cada plano (kit, almoço, voucher, assinatura...) do Encerramento",
  "hero.bgSrc: foto (hoje a sala da Tesouraria, copiada como provisória)",
];

export const SLUG = "encerramento-dez26";
export const TITULO = "Encerramento do Exercício";
export const SUBTITULO = "[PENDENTE: subtítulo oficial]";
export const NOME_OFICIAL = `Seminário ${TITULO}`;
export const DESCRICAO = "[PENDENTE: descrição do seminário]";

if (PENDENTE.length > 0 && process.env.ENCERRAMENTO_PREVIEW !== "1" && process.env.NODE_ENV === "production") {
  throw new Error(
    `app/${SLUG}/content.tsx tem ${PENDENTE.length} itens PENDENTES (sem fonte). Preencha e esvazie PENDENTE, ou use ENCERRAMENTO_PREVIEW=1 só para pré-visualizar.\n- ${PENDENTE.join("\n- ")}`,
  );
}

const PLANO_ITENS = ["[PENDENTE: itens dos planos]"];
function planoFeatures(inclui: boolean[]) {
  return PLANO_ITENS.map((label, i) => ({ label, included: inclui[i] ?? true }));
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
    dates: "08 a 11 de dezembro de 2026",
    place: "Presencial em Curitiba",
    facts: [
      "Seminário presencial",
      "4 dias",
      "20 horas",
      "Certificado emitido pela Faculdade Unypública, instituição credenciada pelo MEC",
    ],
    bgSrc: `/${SLUG}/hero.jpg`,
    bgAlt: "Turma em sala de aula da Unyflex em Curitiba",
    ctaPrimary: { href: "#inscricao", label: "Garanta sua vaga" },
  },

  proof: {
    items: ["5,0 no Google · 510 avaliações", "Desde 2009 · 49.000+ alunos", "Faculdade Unypública · nota 5 no MEC"],
  },

  modules: {
    eyebrow: "Programação",
    title: "[PENDENTE: título da programação]",
    lead: "4 dias · 20 horas · 08 a 11 de dezembro de 2026",
    items: [
      { title: "[PENDENTE: painel 1]", result: "[dia · horário · professor]", topics: ["[PENDENTE]"] },
    ],
  },

  plans: {
    eyebrow: "Planos",
    title: "Escolha como quer viver o seminário.",
    items: [
      { name: "BasicClass", sub: "Presencial", price: "R$ 3.300", features: planoFeatures([]), ctaLabel: "Quero o BasicClass" },
      {
        name: "MasterClass",
        sub: "Presencial",
        price: "R$ 3.600",
        highlighted: true,
        highlightLabel: "Recomendado",
        features: planoFeatures([]),
        ctaLabel: "Quero o MasterClass",
      },
      { name: "PremiumClass", sub: "Presencial", price: "R$ 3.900", features: planoFeatures([]), ctaLabel: "Quero o PremiumClass" },
    ],
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
    priceAnchor: "a partir de R$ 3.300",
    label: "Garanta sua vaga",
    href: "#inscricao",
  },
};
