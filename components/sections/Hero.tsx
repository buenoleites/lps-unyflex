export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#071016] overflow-hidden">
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071016]/80 via-[#071016]/60 to-[#071016]" />

      {/* Background image from original LP */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://pages.greatpages.com.br/landingpages.unyflex.com.br-licitacao/1781125294/imagens/desktop/3584854_1_17792795126a0da6983a0a4.jpg')`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 sm:pt-28 pb-14 sm:pb-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            IA na fase preparatória
            <br />
            sem perder segurança técnica.
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed mb-4">
            Curso presencial em Curitiba para quem precisa usar IA em DFD, ETP,
            TR e mapa de riscos sem gerar documentos genéricos.
          </p>

          <p className="text-white/55 text-sm mb-10">
            licitações • compras • agente de contratação • controle interno • jurídico
          </p>

          <a
            href="#inscricao"
            className="inline-flex items-center bg-[#1565c0] hover:bg-[#0e5aaf] text-white font-bold px-8 py-4 rounded text-base transition-colors"
          >
            Garantir minha vaga
          </a>

          <p className="mt-6 text-white/55 text-sm">
            28 a 31 de julho • 17 horas • Curitiba
          </p>
        </div>
      </div>
    </section>
  );
}
