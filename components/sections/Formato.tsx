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
    <section id="formato" className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Formato, duração
          <br />e entrega do curso.
        </h2>
        <p className="text-gray-600 text-base mb-10 max-w-2xl">
          Quatro dias de capacitação presencial, com foco prático no uso de IA
          em documentos da fase preparatória da Lei 14.133.
        </p>

        <div className="flex flex-col divide-y divide-gray-100 mb-12">
          {detalhes.map((d) => (
            <div key={d.label} className="py-5">
              <h3 className="text-gray-900 font-bold text-base mb-1">{d.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <a href="#inscricao" className="btn-cta px-8 py-4 text-base">
          Garantir minha vaga
        </a>
      </div>
    </section>
  );
}
