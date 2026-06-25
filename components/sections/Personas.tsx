const bottomCards = [
  {
    title: "Quem monta os documentos",
    desc: "Licitações, compras, planejamento e áreas técnicas que elaboram DFD, ETP, TR, PCA e mapa de riscos.",
    img: "/imagens/seção2/imagem_seção2_2.jpg",
  },
  {
    title: "Quem revisa e sustenta o processo",
    desc: "Controle interno, jurídico e chefias que precisam reduzir documentos genéricos, falhas técnicas e riscos de responsabilização.",
    img: "/imagens/seção2/imagem_seção2_3.jpg",
  },
];

export function Personas() {
  return (
    <section id="publico" className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4">
        {/* Card superior full-width */}
        <div className="relative rounded-[26px] sm:rounded-[30px] overflow-hidden h-56 sm:h-72 flex items-center justify-center">
          <img
            src="/imagens/seção2/imagem_seção2_1.jpg"
            alt="Quem mais sente essa pressão no dia a dia"
            width={1200}
            height={576}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
              Quem mais sente essa pressão no dia a dia
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-6">
              Capacitação para quem elabora, revisa ou sustenta documentos da
              fase preparatória na Lei 14.133.
            </p>
            <a href="#inscricao" className="btn-cta px-7 py-3 text-sm sm:text-base">
              Garantir minha vaga
            </a>
          </div>
        </div>

        {/* Dois cards inferiores */}
        <div className="grid sm:grid-cols-2 gap-4">
          {bottomCards.map((c) => (
            <div
              key={c.title}
              className="relative rounded-[26px] sm:rounded-[30px] overflow-hidden h-52 sm:h-64 group"
            >
              <img
                src={c.img}
                alt={c.title}
                width={600}
                height={256}
                loading="lazy"
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
      </div>
    </section>
  );
}
