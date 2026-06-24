const pilares = [
  {
    titulo: "DFD e planejamento",
    desc: "Mais clareza para descrever demandas, necessidades e justificativas.",
  },
  {
    titulo: "ETP e TR",
    desc: "Mais critério para estruturar estudo, objeto, requisitos e obrigações.",
  },
  {
    titulo: "Mapa de riscos",
    desc: "Mais segurança para identificar riscos, respostas e responsabilidades.",
  },
];

export function PropostaValor() {
  return (
    <section id="curso" className="bg-[#0a0a0a] py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          O que esse curso ajuda você a sustentar na prática
        </h2>
        <p className="text-white/60 text-base mb-14 max-w-2xl">
          Mais agilidade para estruturar DFD, ETP, TR e mapa de riscos sem abrir
          mão dos critérios técnicos.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {pilares.map((p) => (
            <div
              key={p.titulo}
              className="bg-[#111] border border-white/5 rounded-lg p-4 sm:p-6"
            >
              <div className="w-8 h-1 bg-[#1565c0] mb-4 rounded" />
              <h3 className="text-white font-bold text-base mb-2">{p.titulo}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
