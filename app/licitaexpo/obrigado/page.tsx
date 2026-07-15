import Footer from "@/components/lp/Footer";

export default function LicitaexpoObrigadoPage() {
  return (
    <div className="lp-root">
      <main id="conteudo-principal">
        <section className="hero" id="topo">
          <div className="hero__media" aria-hidden="true" />
          <div className="hero__overlay" aria-hidden="true" />

          <div className="container hero__inner">
            <div className="hero__content">
              <h1 className="hero__title">Você está na lista.</h1>

              <p className="hero__subtitle">
                Avisaremos você assim que as inscrições da LicitaExpo abrirem, em
                setembro. O aviso chega no e-mail e no WhatsApp que você cadastrou.
              </p>

              <p className="hero__microcopy hero__microcopy--wrap">
                4 dias · 17 horas · Curitiba-PR · 23 a 26 de novembro de 2026
              </p>
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
