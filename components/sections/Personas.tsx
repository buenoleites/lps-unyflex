const cards = [
  {
    title: "Quem revisa e sustenta o processo",
    desc: "Controle interno, jurídico e chefias que precisam reduzir documentos genéricos, falhas técnicas e riscos de responsabilização.",
    img: "https://pages.greatpages.com.br/landingpages.unyflex.com.br-licitacao/1781125294/imagens/desktop/3584854_1_17792795126a0da6983ab3b735036186.jpg",
  },
  {
    title: "Quem monta os documentos",
    desc: "Licitações, compras, planejamento e áreas técnicas que elaboram DFD, ETP, TR, PCA e mapa de riscos.",
    img: "https://pages.greatpages.com.br/landingpages.unyflex.com.br-licitacao/1781125294/imagens/desktop/3584854_1_17792795126a0da6983aba9323366969.jpg",
  },
];

export function Personas() {
  return (
    <section id="publico" className="bg-[#0f0f0f] py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Quem mais sente essa pressão no dia a dia
        </h2>
        <p className="text-white/60 text-base mb-12 max-w-2xl">
          Capacitação para quem elabora, revisa ou sustenta documentos da fase
          preparatória na Lei 14.133.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {cards.map((c) => (
            <div
              key={c.title}
              className="relative rounded-lg overflow-hidden h-52 sm:h-64 group"
            >
              <img
                src={c.img}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg mb-2">{c.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#inscricao"
            className="inline-flex items-center bg-[#1565c0] hover:bg-[#0e5aaf] text-white font-bold px-8 py-4 rounded text-base transition-colors"
          >
            Garantir minha vaga
          </a>
        </div>
      </div>
    </section>
  );
}
