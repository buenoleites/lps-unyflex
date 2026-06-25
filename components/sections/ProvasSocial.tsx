const clientes = [
  { slug: "curitiba",    nome: "Câmara de Curitiba" },
  { slug: "maringa",     nome: "Prefeitura de Maringá" },
  { slug: "araucaria",   nome: "Prefeitura de Araucária/PR" },
  { slug: "campo-largo", nome: "Prefeitura de Campo Largo" },
  { slug: "pinhais",     nome: "Pref. Municipal de Pinhais/PR" },
  { slug: "umuarama",    nome: "Prefeitura de Umuarama" },
];

export function ProvasSocial() {
  return (
    <section className="bg-[#F4EEE2] py-20 border-t border-[#E8DFD0]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Presença construída
          <br />na gestão pública.
        </h2>
        <p className="text-gray-600 text-base max-w-2xl">
          A Unyflex atua com capacitações voltadas à rotina de órgãos, equipes e
          profissionais que precisam licitar, revisar e decidir com mais
          segurança.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {clientes.map(({ slug, nome }) => (
            <div key={slug} className="relative rounded-[26px] sm:rounded-[30px] overflow-hidden h-40 sm:h-52 group">
              <img
                src={`/imagens/muni/${slug}-bg.jpg`}
                alt={nome}
                width={400}
                height={208}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative z-10 h-full flex items-center justify-center px-4">
                <img
                  src={`/imagens/muni/${slug}-logo.png`}
                  alt={`Logo ${nome}`}
                  width={112}
                  height={56}
                  loading="lazy"
                  className="w-20 sm:w-28 object-contain brightness-0 invert"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
