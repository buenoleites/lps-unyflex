/* TODA a copy das duas rotas do totem vive aqui — page.tsx e consultor/page.tsx
   não têm texto próprio além de rótulos de campo.

   Totens do estande do LicitaExpo: pré-matrícula do LicitaExpo de abr/2027.
   - /totem-licitaexpo-abr27            quiosque (o aluno usa sozinho)
   - /totem-licitaexpo-abr27/consultor  menu do consultor (sem formulário, noindex)

   FONTES (nada aqui é de autoria do agente, salvo o marcado AGENTE):
   1. Briefing da Gestão/Growth, 16/11/2026 (entrega 18/11): campos, telefone
      com 13 dígitos (55 + DDD + 9), consentimento com a finalidade "contato da
      Unyflex sobre o LicitaExpo 2027", nada guardado no navegador, sem Pixel,
      erro "Não enviado. Chame o consultor.", 5 s de agradecimento, reset com
      90 s sem toque, timeout de 10 s, "de R$ X por R$ Y" no consultor, sem
      "online" e sem "últimas vagas", certificado "emitido pela Faculdade
      Unypública, instituição credenciada pelo MEC".
   2. Sistemas, 16/11/2026: produto=licitaexpo-abr27, utm_source=totem,
      utm_campaign=totem50; consentimento na mesma chave das outras LPs
      (`consentimento`; no modo checkbox o valor é "sim", como na /licitaexpo).
   3. Gustavo, 16/11/2026: política de privacidade num painel na própria tela
      (endereço + QR code, sem sair da página); WhatsApp só com dígitos (13);
      cargo opcional, como nas LPs.
   4. AGENTE: rótulos de campo, dicas e botões de ação ("Enviar", "Tentar
      novamente", "Voltar ao formulário", "Fechar") — microcopy de interface.
   5. Gustavo, 16/11/2026: aprovou o título, o subtítulo e o agradecimento do
      quiosque propostos pelo agente. Sem "50%" no quiosque: o número fica no
      /consultor, com o preço da Emily.
   6. Medidas da tela: sem resposta da Gestão em 16/11. Saíram do PENDENTE
      porque não mudam o código (layout testado em retrato 1080×1920 e paisagem
      1920×1080, fontes em vmax). CONFERIR NO APARELHO NO DIA DA MONTAGEM.

   PENDENTE (sem fonte; NÃO inventar). Enquanto a lista não estiver vazia, o
   build de produção FALHA de propósito, para que um out/ com conteúdo
   provisório nunca chegue ao nginx. Para ver a página: npm run dev, ou
   TOTEM_PREVIEW=1 npm run build.

   n8n: o slug `licitaexpo-abr27` precisa estar no mapa de cursos ANTES do
   evento, senão o lead entra como "Curso não identificado". Chaves que o n8n
   precisa mapear: `titulo` e `consentimento`. Confirmar que o n8n não
   acrescenta outro 55 ao WhatsApp, que aqui já chega com 13 dígitos. */

export const PENDENTE: string[] = [
  "Datas e local do LicitaExpo 2027 (linha de apoio do topo do quiosque)",
  "Ementa (dados da Emily)",
  "Programação (dados da Emily)",
  "Planos, itens e preço cheio / com 50% (dados da Emily)",
  "Cadastro do slug licitaexpo-abr27 no mapa de cursos do n8n (Sistemas)",
];

export const SLUG = "totem-licitaexpo-abr27";

// Só no build (Node): este arquivo também vai para o bundle do cliente (a page
// do quiosque é "use client"), e lá TOTEM_PREVIEW não existe — sem o
// `typeof window`, o preview quebraria no navegador.
if (
  typeof window === "undefined" &&
  PENDENTE.length > 0 &&
  process.env.TOTEM_PREVIEW !== "1" &&
  process.env.NODE_ENV === "production"
) {
  throw new Error(
    `app/${SLUG}/content.tsx tem ${PENDENTE.length} itens PENDENTES (sem fonte). Preencha e esvazie PENDENTE, ou use TOTEM_PREVIEW=1 só para pré-visualizar.\n- ${PENDENTE.join("\n- ")}`,
  );
}

/* ------------------------------------------------------------- quiosque --- */

export const totem = {
  logoSrc: "/logo.png",
  logoAlt: "Unyflex",
  eyebrow: "Pré-matrícula · LicitaExpo 2027",
  title: "Garanta seu lugar no LicitaExpo\u00a02027",
  subtitle:
    "Preencha seus dados e a equipe da Unyflex entra em contato com as condições da pré-matrícula.",
  meta: "PENDENTE: datas e local do LicitaExpo 2027",

  submit: {
    formId: "lp-totem-licitaexpo-abr27",
    produto: "licitaexpo-abr27",
    paginaOrigem: SLUG,
    utmSource: "totem",
    utmCampaign: "totem50",
    consentimento: "sim",
    timeoutMs: 10_000,
  },

  /** 5 s de agradecimento; 90 s sem toque reseta (FONTES item 1). */
  successMs: 5_000,
  idleMs: 90_000,

  fields: {
    nome: { label: "Nome completo", error: "Informe seu nome completo." },
    orgaoMunicipio: {
      label: "Órgão / Município",
      placeholder: "Prefeitura, Câmara, autarquia… – Cidade/UF",
      error: "Informe o órgão e o município.",
    },
    cargo: { label: "Cargo" },
    email: { label: "E-mail", placeholder: "nome@orgao.gov.br", error: "Informe um e-mail válido." },
    telefone: {
      label: "Telefone (WhatsApp)",
      prefix: "+55",
      placeholder: "41 99999-9999",
      hint: "DDD + número.",
      error: "Telefone inválido. Use DDD + número, ex.: 41 99999-9999 (13 dígitos com o 55).",
    },
  },

  consent: {
    // Finalidade escrita (FONTES item 1); o link abre o painel na tela (item 3).
    before: "Autorizo o contato da Unyflex sobre o LicitaExpo 2027, conforme a ",
    linkLabel: "política de privacidade",
    after: ".",
    error: "Marque a autorização para enviar.",
  },

  privacy: {
    title: "Política de privacidade",
    text: "Para ler a política completa, aponte a câmera do celular para o código ou acesse:",
    url: "unyflex.com.br/lgpd",
    qrSrc: `/${SLUG}/qr-lgpd.svg`,
    qrAlt: "QR code para unyflex.com.br/lgpd",
    close: "Fechar",
  },

  submitLabel: "Enviar",
  sendingLabel: "Enviando…",

  success: {
    title: "Pré-matrícula recebida.",
    text: "Vamos falar com você por WhatsApp ou e-mail. Se quiser, fale agora com um consultor do estande.",
  },

  error: {
    title: "Não enviado. Chame o consultor.",
    retry: "Tentar novamente",
    back: "Voltar ao formulário",
  },
};

/* ------------------------------------------------------------ consultor --- */

export type Plano = {
  nome: string;
  /** Preço cheio e com 50%, em reais (número). null = PENDENTE. */
  de: number | null;
  por: number | null;
  itens: string[];
};

export const consultor = {
  eyebrow: "Menu do consultor · LicitaExpo 2027",
  title: "LicitaExpo 2027",
  meta: "PENDENTE: datas e local do LicitaExpo 2027",

  ementa: {
    title: "Ementa",
    itens: ["PENDENTE: ementa (dados da Emily)"],
  },

  programacao: {
    title: "Programação",
    dias: [{ dia: "PENDENTE", itens: ["PENDENTE: programação (dados da Emily)"] }],
  },

  planos: {
    title: "Planos com 50%",
    lista: [
      {
        nome: "PENDENTE: plano",
        de: null,
        por: null,
        itens: ["PENDENTE: itens do plano (dados da Emily)"],
      },
    ] as Plano[],
  },

  certificado: "Certificado emitido pela Faculdade Unypública, instituição credenciada pelo MEC.",
};
