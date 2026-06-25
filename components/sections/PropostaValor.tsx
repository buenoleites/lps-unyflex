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
    <section id="curso" className="bg-[#F4EEE2] py-20 border-t border-[#E8DFD0]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10 lg:mb-12">
          O que esse curso ajuda você a sustentar na prática
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-gray-900 font-bold text-base mb-8 leading-relaxed">
              Mais agilidade para estruturar DFD, ETP, TR e mapa de riscos sem
              abrir mão dos critérios técnicos.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {pilares.map((p) => (
                <div key={p.titulo}>
                  <h3 className="text-gray-900 font-bold text-base mb-1">{p.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <a href="#inscricao" className="btn-cta px-7 py-3 text-sm sm:text-base">
              Garantir minha vaga
            </a>
          </div>

          <div className="relative rounded-[26px] sm:rounded-[30px] overflow-hidden h-72 lg:h-full min-h-[320px]">
            <img
              src="/imagens/seção3/imagem_seção3.jpg"
              alt="Profissionais em capacitação"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
