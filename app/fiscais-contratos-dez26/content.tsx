import type { Lp3Content } from "@/components/lp3/types";
import { FOOTER_COMPANY } from "@/lib/lp/empresa";

/* TODA a copy e todos os paths de imagem desta LP vivem aqui — os componentes
   do template (components/lp3/) não têm texto próprio.

   Curso Fiscais de Contratos e Papel do Gestor — presencial em Curitiba-PR ou
   ao vivo, 08, 09, 10 e 11/12/2026 (4 dias · 20 horas · 6 painéis). Rota
   /fiscais-contratos-dez26, template lp3 de CURSO (a estrutura da
   /comunicacao-nov26), não a de seminário da /encerramento-dez26.

   FONTES (nada aqui é de autoria do agente, salvo o marcado AGENTE):
   1. Página do curso no site (lida em 12/11/2026):
      unyflex.com.br/curso/Fiscais-de-Contratos-e-Papel-do-Gestor-Setembro-2026-2
      — título, subtítulo "Práticas Modernas do Técnico ao Administrativo",
      descrição, os 6 módulos e seus tópicos, datas, 6 painéis, certificado,
      acesso ilimitado aos materiais, preços e itens dos planos, nota do
      PremiumClass.
   2. Carga de 20 horas: regra do Bruno de 13/10/2026 (todos os cursos e
      seminários), aplicada pelo Gustavo em 12/11. A página do site ainda diz
      17 horas e precisa ser corrigida lá.
   3. Formato "presencial em Curitiba ou ao vivo", sem a palavra "online" e
      sem "últimas vagas": pedido do Gustavo, 12/11/2026.
   4. Texto do certificado: "emitido pela Faculdade Unypública, instituição
      credenciada pelo MEC" (correção de 03/11/2026, vale para todas as peças).
   5. Prova social, consentimento, rodapé, FAQ e "Como funciona": da
      /comunicacao-nov26 (mesma base lp3), com as datas desta turma; "5,0 no
      Google · 510 avaliações" = print do perfil (10/11/2026).
   6. Divisão dos itens por plano e Premium "Recomendado": a do site e das
      LPs lp3. Preços do site: Basic R$ 3.200 · Master R$ 3.500 · Premium
      R$ 4.280.
   7. AGENTE: "terça a quinta (08 a 10/12) ou quarta a sexta (09 a 11/12)" —
      a regra dos 3 dias das outras LPs lp3 aplicada às datas desta turma
      (08/12/2026 é terça).

   9. Gustavo, 12/11/2026: bios (uma frase) e fotos dos 3 professores; plano ao
      vivo R$ 2.000 (D-09a) com card e opção no formulário; seção "O que muda"
      fica de fora; certificado mantém "credenciada".

   PENDENTE (sem fonte; NÃO inventar). Enquanto a lista não estiver vazia, o
   build de produção FALHA de propósito, para que um out/ com conteúdo
   provisório nunca chegue ao nginx. Para ver a página: npm run dev, ou
   FISCAIS_PREVIEW=1 npm run build.

   n8n: cadastrar `fiscais-contratos-dez26` no mapa de cursos antes de rodar
   tráfego, senão o lead entra como "Curso não identificado" (confirmar com a
   Gestão ou o Sistemas). Chaves no payload que o n8n precisa mapear:
   plano_interesse, Municipio, Orgao, c, consentimento e `titulo`. */

export const PENDENTE: string[] = [
  "Público-alvo (\"Para quem\"): a página do curso não traz; a seção `audience` fica de fora até chegar.",
  "Foto do hero: public/fiscais-contratos-dez26/hero.jpg é cópia provisória da /comunicacao-nov26; trocar por foto do curso e remover este item.",
  "Cadastro do produto `fiscais-contratos-dez26` no n8n (Gestão/Sistemas) antes do tráfego.",
];

export const SLUG = "fiscais-contratos-dez26";
export const TITULO = "Fiscais de Contratos e Papel do Gestor";
export const SUBTITULO = "Práticas Modernas do Técnico ao Administrativo";
// Primeira frase da descrição da página do curso (FONTES item 1).
export const DESCRICAO =
  "Curso imersivo que desmistifica os papéis de Gestor e Fiscal de Contratos à luz da Lei 14.133/2021.";
// Descrição completa, para o rótulo do módulo de abertura.
export const DESCRICAO_COMPLETA =
  "Curso imersivo que desmistifica os papéis de Gestor e Fiscal de Contratos à luz da Lei 14.133/2021. Da fundamentação teórica à prática documental, o programa capacita os participantes a gerenciar o ciclo de vida do contrato com segurança, eficiência e conformidade legal, desde o planejamento até o encerramento.";

if (PENDENTE.length > 0 && process.env.FISCAIS_PREVIEW !== "1" && process.env.NODE_ENV === "production") {
  throw new Error(
    `app/${SLUG}/content.tsx tem ${PENDENTE.length} itens PENDENTES (sem fonte). Preencha e esvazie PENDENTE, ou use FISCAIS_PREVIEW=1 só para pré-visualizar.\n- ${PENDENTE.join("\n- ")}`,
  );
}

/* Os 12 itens dos planos, na ordem do site (FONTES item 1). */
const PLANO_ITENS = [
  "Capacitação prática em 3 dias",
  "Capacitação prática em 4 dias",
  "6 Coffee Breaks Gourmet",
  "Certificado emitido pela Faculdade Unypública, instituição credenciada pelo MEC",
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
/* `rotulos` troca o texto de um item só neste card; `omitir` tira índices do
   card ("3 dias" não aparece como não incluso no Master e no Premium). */
function planoFeatures(inclui: boolean[], rotulos: Record<number, string> = {}, omitir: number[] = []) {
  return PLANO_ITENS.map((label, i) => ({ label: rotulos[i] ?? label, included: inclui[i] })).filter(
    (_, i) => !omitir.includes(i),
  );
}

export const fiscaisContratosDez26Content: Lp3Content = {
  nav: {
    logoSrc: "/logo.png",
    logoAlt: "Unyflex",
    cta: { href: "#inscricao", label: "Receber proposta" },
  },

  hero: {
    badge: "Inscrições abertas",
    promise: DESCRICAO,
    title: TITULO,
    subtitle: SUBTITULO,
    dates: "8, 9, 10 e 11 de dezembro",
    place: "Curitiba-PR",
    facts: [
      "4 dias",
      "20 horas",
      "6 painéis",
      "certificado",
      "presencial em Curitiba ou ao vivo",
      "materiais didáticos com acesso ilimitado",
    ],
    bgSrc: `/${SLUG}/hero.jpg`,
    bgAlt: "Turma em sala de aula da Unyflex em Curitiba",
    ctaPrimary: { href: "#inscricao", label: "Receber proposta" },
    ctaSecondary: { href: "#planos", label: "Ver planos e preços" },
  },

  proof: {
    items: [
      "5,0 no Google · 510 avaliações",
      "Desde 2009 · 49.000+ alunos",
      "Faculdade Unypública · nota 5 no MEC",
    ],
  },

  modules: {
    eyebrow: "Programação",
    title: "6 módulos do curso",
    lead: DESCRICAO_COMPLETA,
    items: [
      {
        title: "Planejamento In Foco: Ensino e Soluções de I.A.",
        topics: [
          "Governança (envolvimento dos níveis hierárquicos)",
          "Planejamento (o quê, para quê, quanto e como?)",
          "Eficiência (gestão por competência e preparação técnica)",
          "Gestão de Riscos (Mitigação - como reduzir falhas?)",
          "Transparência (para ampliar a competição e permitir controle)",
          "Para correção de falhas (por erros recorrentes)",
          "Para Impedimento de responsabilidades (maioria é por falha técnica)",
          "Para Eliminação de prejuízos (sobrepreço, superfaturamento e inexecução)",
          "Para Facilitação dos Procedimentos (agilidade e desburocratização)",
          "Usando os novos paradigmas: conversar com fornecedores (modalidade e procedimentos auxiliares)",
          "Usando os novos paradigmas: contratante do projetista (fornecedor do projeto pode participar da licitação)",
          "Usando os novos paradigmas: proteção da boa-fé (defesa dos agentes públicos pela advocacia do Órgão)",
          "Usando os novos paradigmas: do presencial para o eletrônico (como regra geral, de uma vez por todas)",
          "Soluções de Inteligência Artificial para o Planejamento",
        ],
      },
      {
        title: "Alterações, Sanções e Encerramento do Pacto",
        result:
          "Instruir sobre a aplicação de penalidades e os limites legais para alterações contratuais, conduzindo o processo até o seu término formal.",
        topics: [
          "Aditivos: Limites de acréscimos e supressões (até 25% ou 50%).",
          "Processo de Sanção: Aplicação de penalidades (art. 156 da Lei 14.133).",
          "Encerramento: Recebimento definitivo, termo de encerramento e relatório final.",
        ],
      },
      {
        title: "Fiscalização Setorial e Administrativa",
        result:
          "Explorar as fiscalizações em contratos complexos e a indispensável verificação da regularidade fiscal e trabalhista da contratada.",
        topics: [
          "Fiscal Setorial: Atuação em diferentes locais/setores ou contratos complexos.",
          "Fiscal Administrativo: Regularidade fiscal e trabalhista da empresa (INSS, FGTS).",
          "Recebimento Definitivo: Prazos e formalidades para serviços terceirizados.",
          "Gestão documental: O prontuário da fiscalização (digital ou físico).",
        ],
      },
      {
        title: "O Papel do Gestor de Contrato",
        result:
          "Consolidar a visão do Gestor como centro decisório, tratando do aceite final, da análise financeira e da integração com as demais áreas de apoio.",
        topics: [
          "Responsabilidade Central: O Gestor como “líder” da contratação.",
          "Recebimento Definitivo: Responsabilidade do Gestor no aceite final.",
          "Repactuação, Reajuste e Reequilíbrio Financeiro: Como analisar solicitações.",
          "Integração: Diálogo entre fiscais, gestão, controladoria e assessoria jurídica.",
        ],
      },
      {
        title: "Oficina Prática e Estudos de Caso",
        result:
          "Aplicar o conhecimento teórico na resolução de problemas reais, desenvolvendo a capacidade de análise e a redação de peças técnicas da fiscalização.",
        topics: [
          "Estudo de Caso 1: Terceirização com dedicação exclusiva de mão de obra.",
          "Estudo de Caso 2: Alteração de objeto e reequilíbrio econômico.",
          "Simulação: Elaboração de relatório de fiscalização (ata de registro de ocorrências).",
          "Dúvidas Finais.",
        ],
      },
      {
        title: "Fiscalização Técnica – “Mão na Massa”",
        result:
          "Capacitar para o acompanhamento prático da execução contratual, desde o recebimento provisório até o uso de indicadores para mensurar a performance.",
        topics: [
          "Objeto: Acompanhamento de serviços e fornecimento de bens.",
          "Recebimento Provisório: Como formalizar o aceite provisório de produtos/obras.",
          "Indicadores: Acordos de Nível de Serviço (ANS) ou medição de resultado.",
          "Registro de Ocorrências: Como registrar falhas e defeitos para futura sanção.",
        ],
      },
    ],
  },

  /* Professores: nome, foto e bio de uma frase, do site que o Gustavo mandou ao
     Design (12/11/2026). Fotos: recortes enviados por ele, compostos em fundo
     escuro 640x800. Sem nota de avaliação. */
  speakers: {
    title: "Quem ensina",
    items: [
      {
        name: "Juliana Fiorese",
        photoSrc: `/${SLUG}/professores/juliana-fiorese.jpg`,
        bio: "Graduada em Direito pela PUCPR, especialista em licitações e contratos administrativos.",
      },
      {
        name: "Marcos Vinícius Henrique",
        photoSrc: `/${SLUG}/professores/marcos-vinicius-henrique.jpg`,
        bio: "Mestre em Desenvolvimento Econômico pela UFPR, analista de finanças na FAS Curitiba, com atuação em contratos administrativos.",
      },
      {
        name: "Everson da Silva Biazon",
        photoSrc: `/${SLUG}/professores/everson-da-silva-biazon.jpg`,
        bio: "Procurador do Estado do Paraná, ex-Procurador-Chefe da Procuradoria Consultiva junto à Governadoria.",
      },
    ],
  },

  plans: {
    eyebrow: "Planos e Preços",
    title: "Quatro formas de participar",
    lead: "O mesmo curso, do ao vivo à experiência Premium. O PremiumClass é o plano recomendado: capacitação em 4 dias e a agenda completa fora da sala de aula.",
    fourColumns: true,
    items: [
      /* Ao vivo: R$ 2.000 confirmado pelo Gustavo em 12/11/2026 (D-09a). Mesmo
         card da /comunicacao-nov26: sem lista de itens. */
      {
        name: "Ao vivo",
        // Valor do plano_interesse no n8n inalterado: só o rótulo muda.
        value: "Online ao vivo",
        sub: "Mesmas aulas, transmitidas em tempo real.",
        price: "R$ 2.000,00",
        features: [],
        ctaLabel: "Quero o ao vivo",
      },
      {
        name: "BasicClass",
        sub: "Investimento por aluno",
        price: "R$ 3.200,00",
        // Rótulo longo só neste card; a regra dos 3 dias é a das outras LPs lp3 (FONTES item 7).
        features: planoFeatures(BASIC, {
          0: "Capacitação prática em 3 dias: terça a quinta (08 a 10/12) ou quarta a sexta (09 a 11/12)",
        }),
        ctaLabel: "Quero o BasicClass",
      },
      {
        name: "MasterClass",
        sub: "Investimento por aluno",
        price: "R$ 3.500,00",
        features: planoFeatures(MASTER, {}, [0]),
        ctaLabel: "Quero o MasterClass",
      },
      {
        name: "PremiumClass",
        sub: "Investimento por aluno",
        price: "R$ 4.280,00",
        highlighted: true,
        highlightLabel: "Recomendado",
        features: planoFeatures(PREMIUM, {}, [0]),
        ctaLabel: "Quero o PremiumClass",
      },
    ],
    footnote:
      "Valores por aluno. Benefícios do PremiumClass (tour, almoço, assinatura premium, semestre de graduação, kit exclusivo e UNYPOINTS) são concedidos na confirmação da matrícula e não são convertidos em desconto.",
  },

  form: {
    eyebrow: "Inscrição",
    title: "Receba a proposta para o seu órgão",
    steps: {
      title: "Como funciona",
      items: [
        "Você envia seus dados.",
        "Recebe nossa mensagem no WhatsApp, e um consultor monta a proposta com a documentação para a contratação.",
        "O órgão emite a nota de empenho e a vaga está garantida.",
      ],
    },
    formId: "lp-fiscais-contratos-dez26",
    produto: SLUG,
    paginaOrigem: SLUG,
    // Token da vertical no título do lead: LP|fiscais-contratos|s=…|c=…|x=…|f=…
    tituloProduto: "fiscais-contratos",
    campaignFallback: SLUG,
    planOptions: [{ value: "Online ao vivo", label: "Ao vivo" }, "BasicClass", "MasterClass", "PremiumClass"],
    modalidade: {
      label: "Modalidade preferida",
      // Valores vão no payload (Modalidade_Preferida) e não mudam; só o rótulo.
      options: ["Presencial em Curitiba", "Online ao vivo"],
      labels: ["Presencial em Curitiba", "Ao vivo"],
    },
    submitLabel: "Receber proposta",
    consent: {
      label: (
        <>
          Ao enviar, você autoriza a Unyflex a entrar em contato sobre este curso por WhatsApp, telefone e
          e-mail, conforme a{" "}
          <a href="https://unyflex.com.br/lgpd" target="_blank" rel="noopener noreferrer">
            política de privacidade
          </a>
          .
        </>
      ),
      value: "aviso-v1",
      mode: "notice",
    },
    thankYou: { url: "/obrigado", withPii: false },
  },

  faq: {
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes",
    items: [
      {
        q: "O órgão pode pagar por nota de empenho?",
        a: "Sim. Na matrícula em curso aberto, a nota de empenho substitui o contrato, entendimento adotado pela União (Despacho n. 051/2022/ECJU/CGU/AGU e IN n. 21/2022).",
      },
      {
        q: "Quais documentos a Unyflex envia para a contratação?",
        a: (
          <>
            Declaração de notória especialização e singularidade (art. 74, III, &ldquo;f&rdquo;, da Lei 14.133/21),
            atestados de capacidade técnica, comprovante de CNPJ, certidões de regularidade fiscal e trabalhista e um
            roteiro do processo com modelos de DFD, ETP e Termo de Referência. Tudo em{" "}
            <a href="https://unyflex.com.br/certidoes#orientacoes" target="_blank" rel="noopener noreferrer">
              unyflex.com.br/certidoes#orientacoes
            </a>
            .
          </>
        ),
      },
      {
        q: "Posso fazer só 3 dias?",
        a: "Sim, no BasicClass: terça a quinta (08 a 10/12) ou quarta a sexta (09 a 11/12).",
      },
      {
        q: "Onde é o curso?",
        a: "Na sede da Unyflex: R. Voluntários da Pátria, 547, Centro, Curitiba-PR. Também há a opção de participar ao vivo.",
      },
      {
        q: "O certificado é reconhecido?",
        a: "Sim, emitido pela Faculdade Unypública, instituição credenciada pelo MEC.",
      },
    ],
  },

  footer: {
    logoSrc: `/${SLUG}/logo-escura.png`, // recorte do /logo-escura.png (que tem margens enormes)
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
    company: FOOTER_COMPANY,
  },

  stickyCta: {
    priceAnchor: "Presencial a partir de R$\u00a03.200\u00a0· ao vivo\u00a0R$\u00a02.000",
    label: "Receber proposta",
    href: "#inscricao",
  },
};
