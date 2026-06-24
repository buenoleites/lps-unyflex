const modulos = [
  {
    titulo: "Planejamento com IA",
    desc: "Organização de contexto, informações e caminhos da contratação.",
    img: "https://pages.greatpages.com.br/landingpages.unyflex.com.br-licitacao/1781125294/imagens/desktop/3584854_1_17792795126a0da6983ac05617412762.jpg",
  },
  {
    titulo: "ETP e TR com IA",
    desc: "Apoio para estruturar estudos, requisitos, obrigações e critérios.",
    img: "https://pages.greatpages.com.br/landingpages.unyflex.com.br-licitacao/1781125294/imagens/desktop/3584854_1_17792795126a0da6983ab3b735036186.jpg",
  },
  {
    titulo: "Mapa de riscos com IA",
    desc: "Identificação, análise e respostas para riscos da contratação.",
    img: "https://pages.greatpages.com.br/landingpages.unyflex.com.br-licitacao/1781125294/imagens/desktop/3584854_1_17792795126a0da6983aba9323366969.jpg",
  },
  {
    titulo: "Prática de prompts",
    desc: "Comandos melhores, revisão técnica e uso responsável da IA.",
    img: "https://pages.greatpages.com.br/landingpages.unyflex.com.br-licitacao/1781125294/imagens/desktop/3584854_1_17792795126a0da6983ab3b735036186.jpg",
  },
];

export function Modulos() {
  return (
    <section id="conteudo" className="bg-[#0f0f0f] py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modulos.map((m) => (
            <div
              key={m.titulo}
              className="relative rounded-lg overflow-hidden h-56 group"
            >
              <img
                src={m.img}
                alt={m.titulo}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-sm mb-1">{m.titulo}</h3>
                <p className="text-white/65 text-xs leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
