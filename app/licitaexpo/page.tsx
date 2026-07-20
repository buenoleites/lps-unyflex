"use client";
import { useEffect } from "react";
import { trackEvent } from "@/lib/lp/meta";
import { handleAnchorClick } from "@/lib/lp/scroll";
import { useReveal } from "@/lib/lp/useReveal";
import LeadForm from "@/components/lp/LeadForm";
import Footer from "@/components/lp/Footer";

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
