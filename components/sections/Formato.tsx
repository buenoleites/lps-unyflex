const detalhes = [
  { label: "Formato presencial", desc: "Na sede da Unyflex, em Curitiba." },
  { label: "17 horas de capacitação", desc: "Conteúdo distribuído para aprofundamento técnico e aplicação prática." },
  { label: "4 dias de curso", desc: "De 28 a 31 de julho." },
  { label: "6 módulos", desc: "Conteúdo organizado por planejamento, ETP, TR, PCA, riscos e prática de IA." },
  { label: "Certificado", desc: "Com emissão ao participante." },
  { label: "Materiais didáticos", desc: "Com acesso ilimitado após a capacitação." },
];

export function Formato() {
  return (
    <section id="formato" className="bg-[#0f0f0f] py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
          Formato, duração
          <br />e entrega do curso.
        </h2>
        <p className="text-white/60 text-base mb-14 max-w-2xl">
          Quatro dias de capacitação presencial, com foco prático no uso de IA
          em documentos da fase preparatória da Lei 14.133.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {detalhes.map((d) => (
            <div
              key={d.label}
              className="bg-[#111] border border-white/5 rounded-lg p-4 sm:p-6"
            >
              <div className="w-6 h-1 bg-[#1565c0] mb-4 rounded" />
              <h3 className="text-white font-bold text-base mb-2">{d.label}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{d.desc}</p>
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
