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
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          O que esse curso ajuda você a sustentar na prática
        </h2>
        <p className="text-white/60 text-base mb-14 max-w-2xl">
          Mais agilidade para estruturar DFD, ETP, TR e mapa de riscos sem abrir
          mão dos critérios técnicos.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {pilares.map((p) => (
            <div
              key={p.titulo}
              className="bg-[#111] border border-white/5 rounded-lg p-6"
            >
              <div className="w-8 h-1 bg-[#1565c0] mb-4 rounded" />
              <h3 className="text-white font-bold text-base mb-2">{p.titulo}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Second block */}
        <div className="bg-[#111] border border-white/5 rounded-lg p-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            O curso mostra como usar IA sem deixar o processo frágil.
          </h3>
          <p className="text-white/60 text-base mb-8 max-w-xl">
            Planejamento, ETP, TR, PCA e mapa de riscos trabalhados com foco em
            prática, revisão humana e segurança técnica.
          </p>
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
