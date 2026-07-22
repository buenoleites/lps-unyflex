"use client";
import { useEffect } from "react";
import { trackEvent } from "@/lib/lp/meta";
import { handleAnchorClick } from "@/lib/lp/scroll";
import { useReveal } from "@/lib/lp/useReveal";
import LeadForm from "@/components/lp/LeadForm";
import Footer from "@/components/lp/Footer";

/* Copy das seções novas. A ordem de PLANO_ITENS é a mesma nos 3 planos — é o
   que faz o subgrid alinhar as linhas horizontalmente no desktop, então os
   arrays de `inclui` têm de ter sempre o mesmo comprimento. */
const PLANO_ITENS = [
  "Acesso aos 4 dias + 6 painéis",
  "Certificado",
  "Kit escolar exclusivo",
  "6 coffee-breaks gourmet",
  "Almoço no Madalosso",
  "Voucher churrascaria",
  "Assinatura Premium",
  "Semestre de graduação",
  "Mochila de couro",
  "Mentoria exclusiva",
  "Bolsa de pós-graduação",
];

const PLANOS: {
  nome: string;
  preco: string;
  destaque: boolean;
  inclui: boolean[];
}[] = [
  {
    nome: "BasicClass",
    preco: "R$ 3.300",
    destaque: false,
    inclui: [true, true, true, true, true, false, false, false, false, false, false],
  },
  {
    nome: "MasterClass",
    preco: "R$ 3.800",
    destaque: true,
    inclui: [true, true, true, true, true, true, true, true, false, false, true],
  },
  {
    nome: "PremiumClass",
    preco: "R$ 5.200",
    destaque: false,
    inclui: [true, true, true, true, true, true, true, true, true, true, true],
  },
];

/* `foto: null` renderiza o círculo com o gradiente escuro de fallback. Para
   publicar a foto, basta trocar por "/licitaexpo/palestrantes/<nome>.jpg". */
const PALESTRANTES: { nome: string; foto: string | null; bio: string }[] = [
  {
    nome: "Antonio Lima",
    foto: "/licitaexpo/palestrantes/antonio-lima.jpg",
    bio: "Pregoeiro e ex-Diretor Geral de Licitações e Compras. Coautor de livro sobre a Nova Lei de Licitações, podcaster no CONLICITAÇÃO e criador do @licitacaodadepressao. Professor em Escolas de Governo e pós-graduação.",
  },
  {
    nome: "Gisella Leitão",
    foto: "/licitaexpo/palestrantes/gisella-leitao.jpg",
    bio: "Advogada, mestra em Direito, especialista em Licitações e Contratos. Ex-pregoeira e controladora interna. Idealizadora do @diariodalicitante.",
  },
  {
    nome: "Raphael Icaro",
    foto: "/licitaexpo/palestrantes/raphael-icaro.jpg",
    bio: "Consultor sênior em contratações públicas, 20 anos de atuação e mais de R$1 bilhão em processos licitatórios. Professor de pós-graduação com mais de 5.000 alunos capacitados.",
  },
  {
    nome: "Augusto Alexandria",
    foto: "/licitaexpo/palestrantes/augusto-alexandria.jpg",
    bio: "Procurador da Câmara Municipal de Curitiba, com atuação em Licitações e Contratos Administrativos. Pós-graduado em Direito Público.",
  },
  {
    nome: "Jarbas Rene",
    foto: "/licitaexpo/palestrantes/jarbas-rene.jpg",
    bio: "Analista Judiciário na área de Contabilidade do TRT-24ª Região (MS). Graduado em Ciências Contábeis.",
  },
];

export default function LicitaexpoPage() {
  useEffect(() => {
    trackEvent("PageView");
  }, []);

  // Reveal no scroll, espelhando os componentes de seção das LPs completas.
  const [pqRef, pqVisible] = useReveal();
  const [falhasRef, falhasVisible] = useReveal();
  const [progRef, progVisible] = useReveal();
  const [provaRef, provaVisible] = useReveal();
  const [metRef, metVisible] = useReveal();
  const [planosRef, planosVisible] = useReveal();
  const [palRef, palVisible] = useReveal();
  const [parcRef, parcVisible] = useReveal();

  return (
    <div className="lp-root">
      <header className="navbar">
        <div className="navbar__inner container">
          <a className="logo" href="#topo" aria-label="Unyflex — início">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo__img" src="/logo.png" alt="Unyflex" />
          </a>
        </div>
      </header>

      <main id="conteudo-principal">
        <section className="hero" id="topo">
          <div
            className="hero__media"
            aria-hidden="true"
            style={{ "--media-bg": "url(/licitaexpo/hero.jpg)" } as React.CSSProperties}
          />
          <div className="hero__overlay" aria-hidden="true" />

          <div className="container hero__inner">
            <div className="hero__content">
              <p className="eyebrow">SEMINÁRIO PRESENCIAL · CURITIBA</p>

              <h1 className="hero__title">
                Todo erro no processo tem um nome no papel. Geralmente é o seu.
              </h1>

              <p className="hero__subtitle">
                Os pontos onde o certame e a execução contratual travam — pesquisa de
                preços, ETP, TR, edital, parecer jurídico, julgamento de propostas,
                prorrogação e segregação de funções — mapeados para você decidir com
                respaldo, não no escuro.
              </p>

              <p className="hero__tags">
                Licitações • compras • agente de contratação • pregoeiro • vereador •
                controle interno • jurídico
              </p>

              <a
                className="btn btn--primary btn--lg hero__cta"
                href="#inscricao"
                onClick={handleAnchorClick}
              >
                Quero ser avisado da abertura
              </a>

              <p className="hero__microcopy hero__microcopy--wrap">
                4 dias · 17 horas · Curitiba-PR · 23 a 26 de novembro de 2026 ·
                Inscrições abrem em setembro
              </p>
            </div>
          </div>
        </section>

        {/* Seção 2 — Para quem é */}
        <section
          ref={pqRef as React.RefObject<HTMLElement>}
          className={`section para-quem${pqVisible ? " is-visible" : ""}`}
          aria-labelledby="para-quem-title"
        >
          <div className="container">
            <div
              className="pq-band"
              data-reveal
              style={{ "--reveal-i": 0 } as React.CSSProperties}
            >
              <div
                className="pq-band__media"
                aria-hidden="true"
                style={{ "--media-bg": "url(/licitaexpo/para-quem.jpg)" } as React.CSSProperties}
              />
              <div className="pq-band__overlay" aria-hidden="true" />
              <div className="pq-band__content">
                <h2 id="para-quem-title" className="pq-band__title">
                  Feito para quem assina, decide ou fiscaliza a contratação.
                </h2>
                <p className="pq-band__text">
                  Se o seu nome aparece no processo, o risco é seu.
                </p>
              </div>
            </div>

            <div className="modulos__grid">
              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 1 } as React.CSSProperties}
              >
                <span className="modulo__num">Quem conduz</span>
                <p className="modulo__desc">
                  agente de contratação · pregoeiro · equipe de apoio · comissão de
                  contratação
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 2 } as React.CSSProperties}
              >
                <span className="modulo__num">Quem fiscaliza</span>
                <p className="modulo__desc">
                  gestor e fiscal de contrato · controle interno · auditoria
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 3 } as React.CSSProperties}
              >
                <span className="modulo__num">Quem respalda</span>
                <p className="modulo__desc">
                  assessor e procurador jurídico · contador · ordenador de despesas
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 4 } as React.CSSProperties}
              >
                <span className="modulo__num">Legislativo</span>
                <p className="modulo__desc">
                  servidores e agentes de Câmaras Municipais que licitam e contratam
                </p>
              </article>
            </div>

            <p
              className="pq-closing"
              data-reveal
              style={{ "--reveal-i": 5 } as React.CSSProperties}
            >
              <em>Servidores das esferas municipal, estadual e federal.</em>
            </p>
          </div>
        </section>

        {/* Seção 3 — As falhas que mais geram apontamento */}
        <section
          ref={falhasRef as React.RefObject<HTMLElement>}
          className={`section modulos${falhasVisible ? " is-visible" : ""}`}
          aria-labelledby="falhas-title"
        >
          <div className="container">
            <h2
              id="falhas-title"
              className="modulos__heading"
              data-reveal
              style={{ "--reveal-i": 0 } as React.CSSProperties}
            >
              As falhas que mais geram apontamento — uma a uma.
            </h2>

            <div className="modulos__grid">
              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 1 } as React.CSSProperties}
              >
                <span className="modulo__num">01</span>
                <h3 className="modulo__title">O certame é um campo minado</h3>
                <p className="modulo__desc">
                  pontos críticos, deficiências, restrições e direcionamento na fase
                  interna e externa.
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 2 } as React.CSSProperties}
              >
                <span className="modulo__num">02</span>
                <h3 className="modulo__title">As ciladas da execução contratual</h3>
                <p className="modulo__desc">
                  os pontos nevrálgicos da gestão e fiscalização que mais viram
                  responsabilização.
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 3 } as React.CSSProperties}
              >
                <span className="modulo__num">03</span>
                <h3 className="modulo__title">Momento de alto risco: cesta de preços</h3>
                <p className="modulo__desc">
                  como estruturar pesquisa de preços sem sobrepreço nem inexequibilidade.
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 4 } as React.CSSProperties}
              >
                <span className="modulo__num">04</span>
                <h3 className="modulo__title">Atenção redobrada: ETP, TR e edital</h3>
                <p className="modulo__desc">
                  elaborar com segurança técnica e jurídica.
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 5 } as React.CSSProperties}
              >
                <span className="modulo__num">05</span>
                <h3 className="modulo__title">
                  Perigo zero? O poder condicionado do parecer jurídico
                </h3>
                <p className="modulo__desc">
                  onde termina a função consultiva e começa a sua responsabilidade.
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 6 } as React.CSSProperties}
              >
                <span className="modulo__num">06</span>
                <h3 className="modulo__title">Tensão total: julgamento e desclassificação</h3>
                <p className="modulo__desc">
                  reduzir subjetividade e prevenir desclassificação indevida.
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 7 } as React.CSSProperties}
              >
                <span className="modulo__num">07</span>
                <h3 className="modulo__title">
                  Prorrogação sem justificativa de vantajosidade
                </h3>
                <p className="modulo__desc">
                  o que o controle exige que você demonstre.
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 8 } as React.CSSProperties}
              >
                <span className="modulo__num">08</span>
                <h3 className="modulo__title">Violação da segregação de funções</h3>
                <p className="modulo__desc">
                  como a concentração indevida de atribuições vira responsabilização.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Seção 4 — Programação */}
        <section
          ref={progRef as React.RefObject<HTMLElement>}
          className={`section modulos${progVisible ? " is-visible" : ""}`}
          aria-labelledby="programacao-title"
        >
          <div className="container">
            <h2
              id="programacao-title"
              className="modulos__heading"
              data-reveal
              style={{ "--reveal-i": 0 } as React.CSSProperties}
            >
              Programação
            </h2>

            <div className="modulos__grid">
              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 1 } as React.CSSProperties}
              >
                <span className="modulo__num">Dia 1</span>
                <h3 className="modulo__title">14h às 17h</h3>
                <p className="modulo__desc">
                  Abertura: o certame como campo minado · As ciladas da execução
                  contratual
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 2 } as React.CSSProperties}
              >
                <span className="modulo__num">Dia 2</span>
                <h3 className="modulo__title">9h às 12h / 14h às 17h</h3>
                <p className="modulo__desc">
                  Cesta de preços · ETP, TR e edital{" "}
                  <em>(com dinâmica coletiva de fixação)</em>
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 3 } as React.CSSProperties}
              >
                <span className="modulo__num">Dia 3</span>
                <h3 className="modulo__title">9h às 12h / 14h às 17h</h3>
                <p className="modulo__desc">
                  Parecer jurídico · Julgamento de propostas{" "}
                  <em>(com dinâmica coletiva de fixação)</em>
                </p>
              </article>

              <article
                className="modulo"
                data-reveal
                style={{ "--reveal-i": 4 } as React.CSSProperties}
              >
                <span className="modulo__num">Dia 4</span>
                <h3 className="modulo__title">9h às 11h</h3>
                <p className="modulo__desc">
                  Prorrogação contratual · Segregação de funções
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Seção 5 — Prova.
            "Mais de 270 inscritos": 271 inscritos históricos, arredondado para baixo.
            "inscritos" (não "servidores") porque ~14 dos 271 eram do setor privado —
            só ~257 eram servidores, então "mais de 270 servidores" seria overclaim.
            "98 municípios": contagem real de municípios distintos citados como
            Órgão/Município nos 271 inscritos históricos, deduplicando acentuação,
            hífen e variações de grafia (ex.: "Caçador" e "CACADOR-" eram o mesmo
            município). Número exato, não arredondado — resiste a ser checado. */}
        <section
          ref={provaRef as React.RefObject<HTMLElement>}
          className={`section resultados${provaVisible ? " is-visible" : ""}`}
          aria-labelledby="prova-title"
        >
          <div className="container">
            <h2
              id="prova-title"
              className="resultados__heading"
              data-reveal
              style={{ "--reveal-i": 0 } as React.CSSProperties}
            >
              Mais de 270 inscritos já passaram pelo LicitaExpo.
            </h2>

            <p
              className="resultados__text"
              data-reveal
              style={{ "--reveal-i": 1 } as React.CSSProperties}
            >
              Edições em 2023, 2024, 2025 e 2026 — presenciais, em Curitiba.
            </p>

            <p
              className="resultados__text"
              data-reveal
              style={{ "--reveal-i": 2 } as React.CSSProperties}
            >
              Prefeituras, Câmaras Municipais, autarquias, consórcios e institutos de
              previdência de 98 municípios do Paraná e de Santa Catarina.
            </p>
          </div>
        </section>

        {/* Seção 6 — Metodologia */}
        <section
          ref={metRef as React.RefObject<HTMLElement>}
          className={`section abordagem${metVisible ? " is-visible" : ""}`}
          aria-labelledby="metodologia-title"
        >
          <div className="container">
            <div
              className="abordagem-band"
              data-reveal
              style={{ "--reveal-i": 0 } as React.CSSProperties}
            >
              <div
                className="abordagem-band__media"
                aria-hidden="true"
                style={{ "--media-bg": "url(/licitaexpo/metodologia.jpg)" } as React.CSSProperties}
              />
              <div className="abordagem-band__overlay" aria-hidden="true" />
              <div className="abordagem-band__content">
                <h2 id="metodologia-title" className="abordagem-band__title">
                  Não é aula sobre a lei. É como o Tribunal lê a sua decisão.
                </h2>
                <p className="abordagem-band__text">
                  Exposição dialogada, análise de casos concretos, interpretação de
                  decisões dos órgãos de controle e dinâmicas de fixação nos módulos de
                  ETP/TR/edital e julgamento de propostas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 7 — Planos */}
        <section
          ref={planosRef as React.RefObject<HTMLElement>}
          className={`section planos${planosVisible ? " is-visible" : ""}`}
          aria-labelledby="planos-title"
        >
          <div className="container">
            <h2
              id="planos-title"
              className="modulos__heading"
              data-reveal
              style={{ "--reveal-i": 0 } as React.CSSProperties}
            >
              Escolha como quer viver o LicitaExpo.
            </h2>

            <p
              className="resultados__text"
              data-reveal
              style={{ "--reveal-i": 1 } as React.CSSProperties}
            >
              Todos os planos dão acesso aos 4 dias, aos 6 painéis e ao certificado. A
              diferença está no que você leva além do conteúdo.
            </p>

            <p
              className="planos__lead"
              data-reveal
              style={{ "--reveal-i": 2 } as React.CSSProperties}
            >
              O que protege sua decisão é o conteúdo — e ele é o mesmo nos três planos. O
              restante é o que torna os quatro dias mais leves: alimentação, materiais e,
              nos planos superiores, formação que continua depois do evento.
            </p>

            <div
              className="planos__grid"
              data-reveal
              style={{ "--reveal-i": 3 } as React.CSSProperties}
            >
              {PLANOS.map((plano) => (
                <article
                  key={plano.nome}
                  className={`plano${plano.destaque ? " plano--destaque" : ""}`}
                >
                  <div className="plano__head">
                    {plano.destaque && (
                      <span className="plano__selo">Mais escolhido</span>
                    )}
                    <h3 className="plano__nome">{plano.nome}</h3>
                    <p className="plano__preco">{plano.preco}</p>
                  </div>

                  <ul className="plano__itens">
                    {PLANO_ITENS.map((item, i) => (
                      <li
                        key={item}
                        className={`plano__item${
                          plano.inclui[i] ? "" : " plano__item--off"
                        }`}
                      >
                        <span
                          className="plano__mark"
                          role="img"
                          aria-label={plano.inclui[i] ? "incluso" : "não incluso"}
                        >
                          {plano.inclui[i] ? "✓" : "—"}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p
              className="planos__microcopy"
              data-reveal
              style={{ "--reveal-i": 4 } as React.CSSProperties}
            >
              Estes são os valores do 1º lote. A partir de 25/10, o preço sobe 10%.
              Inscrições até 21/11.
            </p>

            <div
              className="planos__cta"
              data-reveal
              style={{ "--reveal-i": 5 } as React.CSSProperties}
            >
              <a
                className="btn btn--primary btn--lg"
                href="#inscricao"
                onClick={handleAnchorClick}
              >
                Quero ser avisado da abertura
              </a>
            </div>
          </div>
        </section>

        {/* Seção 8 — Palestrantes */}
        <section
          ref={palRef as React.RefObject<HTMLElement>}
          className={`section palestrantes${palVisible ? " is-visible" : ""}`}
          aria-labelledby="palestrantes-title"
        >
          <div className="container">
            <h2
              id="palestrantes-title"
              className="modulos__heading"
              data-reveal
              style={{ "--reveal-i": 0 } as React.CSSProperties}
            >
              Quem vai te ensinar já esteve onde você está.
            </h2>

            <p
              className="resultados__text"
              data-reveal
              style={{ "--reveal-i": 1 } as React.CSSProperties}
            >
              Pregoeiros, procuradores e consultores que conduziram, fiscalizaram e
              responderam por processos reais.
            </p>

            <div className="palestrantes__grid">
              {PALESTRANTES.map((p, i) => (
                <article
                  key={p.nome}
                  className="palestrante"
                  data-reveal
                  style={{ "--reveal-i": i + 2 } as React.CSSProperties}
                >
                  <div
                    className="palestrante__foto"
                    aria-hidden="true"
                    style={
                      p.foto
                        ? ({ "--foto": `url(${p.foto})` } as React.CSSProperties)
                        : undefined
                    }
                  />
                  <h3 className="palestrante__nome">{p.nome}</h3>
                  <p className="palestrante__bio">{p.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Seção 9 — Parceiros */}
        <section
          ref={parcRef as React.RefObject<HTMLElement>}
          className={`section parceiros${parcVisible ? " is-visible" : ""}`}
          aria-labelledby="parceiros-title"
        >
          <div className="container">
            <h2
              id="parceiros-title"
              className="modulos__heading"
              data-reveal
              style={{ "--reveal-i": 0 } as React.CSSProperties}
            >
              Uma iniciativa Unyflex, com Unyboss e Faculdade Unypública.
            </h2>

            <p
              className="resultados__text"
              data-reveal
              style={{ "--reveal-i": 1 } as React.CSSProperties}
            >
              A parceria com a Unyboss e a Faculdade Unypública é o que torna possível
              oferecer, nos planos MasterClass e PremiumClass, semestre de graduação e
              bolsa de pós — formação que continua depois que o seminário acaba.
            </p>

            <div
              className="parceiros__grid"
              data-reveal
              style={{ "--reveal-i": 2 } as React.CSSProperties}
            >
              <div className="parceiro">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="parceiro__logo parceiro__logo--invert"
                  src="/logo.png"
                  alt="Unyflex"
                />
              </div>
              <div className="parceiro">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="parceiro__logo"
                  src="/licitaexpo/parceiros/unyboss.png"
                  alt="Unyboss"
                />
              </div>
              <div className="parceiro">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="parceiro__logo"
                  src="/licitaexpo/parceiros/faculdade-unypublica.png"
                  alt="Faculdade Unypública"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="cta-final" id="inscricao">
          <div
            className="cta-final__media"
            aria-hidden="true"
            style={{ "--media-bg": "url(/licitaexpo/cta-final.jpg)" } as React.CSSProperties}
          />
          <div className="cta-final__overlay" aria-hidden="true" />

          <div className="container cta-final__inner">
            <div className="cta-final__card">
              <LeadForm
                formId="lp-licitaexpo"
                submitLabel="Quero ser avisado da abertura"
                thankYou={{ url: "/licitaexpo/obrigado", withPii: false }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer
        content={{
          logoSrc: "/logo.png",
          logoAlt: "Unyflex",
          copyright: "© Unyflex 2026",
        }}
      />
    </div>
  );
}
