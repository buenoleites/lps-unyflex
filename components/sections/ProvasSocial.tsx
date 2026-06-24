const clientes = [
  { sigla: "PMM", nome: "Pref. de Maringá" },
  { sigla: "PMC", nome: "Pref. de Curitiba" },
  { sigla: "PML", nome: "Pref. de Londrina" },
  { sigla: "PMF", nome: "Pref. de Florianópolis" },
  { sigla: "PMA", nome: "Pref. de Apucarana" },
  { sigla: "PMG", nome: "Pref. de Guarapuava" },
  { sigla: "SAAE", nome: "SAAE Maringá" },
  { sigla: "CMTC", nome: "Câmara Municipal" },
];

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

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {clientes.map(({ sigla, nome }) => (
            <div
              key={sigla}
              className="flex flex-col items-center justify-center gap-2 border border-white/8 rounded-lg px-4 py-6 opacity-50 hover:opacity-80 transition-opacity duration-200 select-none"
            >
              <span className="text-white font-bold text-xl tracking-tight leading-none">
                {sigla}
              </span>
              <span className="text-white/50 text-xs text-center leading-snug">
                {nome}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-white/30 text-xs">
          +40 municípios e órgãos capacitados em todo o Brasil.
        </p>
      </div>
    </section>
  );
}
