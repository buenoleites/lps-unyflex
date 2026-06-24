export function ProvasSocial() {
  return (
    <section className="bg-[#0a0a0a] py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Presença construída
          <br />na gestão pública.
        </h2>
        <p className="text-white/60 text-base max-w-2xl">
          A Unyflex atua com capacitações voltadas à rotina de órgãos, equipes e
          profissionais que precisam licitar, revisar e decidir com mais
          segurança.
        </p>

        {/* Logo grid using original LP image */}
        <div className="mt-12">
          <img
            src="https://pages.greatpages.com.br/landingpages.unyflex.com.br-licitacao/1781125294/imagens/desktop/3584854_1_17792795126a0da6983afad317041336_m.png"
            alt="Órgãos públicos atendidos pela Unyflex"
            className="w-full max-w-full sm:max-w-3xl rounded-lg opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
