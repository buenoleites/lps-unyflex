"use client";

import { useState } from "react";

type FormData = {
  nome: string;
  email: string;
  whatsapp: string;
  cargo: string;
  orgao: string;
  servidor: string;
};

export function CTA() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    cargo: "",
    orgao: "",
    servidor: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  const inputClass =
    "bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#00BFF3]/60 transition-colors w-full";
  const labelClass = "text-white/60 text-xs font-semibold uppercase tracking-wider";

  return (
    <section id="inscricao" className="relative overflow-hidden py-20">
      {/* Background image */}
      <img
        src="/imagens/imagem_secaoCTA.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/62" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-center leading-tight">
          Garanta sua vaga para aprender IA
          <br />aplicada às licitações.
        </h2>
        <p className="text-white/70 text-base mb-10 text-center">
          Preencha seus dados para demonstrar interesse na turma presencial de
          Licitações com Inteligência Artificial.
        </p>

        {submitted ? (
          <div role="status" className="bg-white/10 border border-white/15 rounded-2xl p-10 text-center">
            <div className="text-[#00BFF3] text-5xl mb-4" aria-hidden="true">✓</div>
            <p className="text-white font-bold text-xl">Recebemos seu interesse!</p>
            <p className="text-white/60 text-sm mt-3">
              Em breve nossa equipe entrará em contato pelo e-mail informado.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-8 flex flex-col gap-5 backdrop-blur-sm"
          >
            {/* Nome + E-mail */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="campo-nome" className={labelClass}>Nome</label>
                <input
                  id="campo-nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => update("nome", e.target.value)}
                  placeholder="Seu nome completo"
                  autoComplete="name"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="campo-email" className={labelClass}>E-mail</label>
                <input
                  id="campo-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="seu@email.com"
                  autoComplete="email"
                  className={inputClass}
                />
              </div>
            </div>

            {/* WhatsApp + Cargo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="campo-whatsapp" className={labelClass}>WhatsApp</label>
                <input
                  id="campo-whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => update("whatsapp", e.target.value)}
                  placeholder="(XX) XXXXX-XXXX"
                  autoComplete="tel"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="campo-cargo" className={labelClass}>Cargo / Setor</label>
                <input
                  id="campo-cargo"
                  type="text"
                  required
                  value={form.cargo}
                  onChange={(e) => update("cargo", e.target.value)}
                  placeholder="Seu cargo ou setor"
                  autoComplete="organization-title"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Órgão full-width */}
            <div className="flex flex-col gap-1">
              <label htmlFor="campo-orgao" className={labelClass}>Órgão / Município</label>
              <input
                id="campo-orgao"
                type="text"
                required
                value={form.orgao}
                onChange={(e) => update("orgao", e.target.value)}
                placeholder="Nome do órgão ou município"
                autoComplete="organization"
                className={inputClass}
              />
            </div>

            <fieldset className="flex flex-col gap-2 border-0 p-0 m-0">
              <legend className={labelClass}>
                Você trabalha em órgão público?
              </legend>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {["Sim", "Não"].map((op) => (
                  <label key={op} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="servidor"
                      value={op}
                      checked={form.servidor === op}
                      onChange={() => update("servidor", op)}
                      className="accent-[#00BFF3]"
                    />
                    <span className="text-white/80 text-sm">{op}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <button type="submit" className="btn-cta mt-2 w-full py-4 text-base">
              Garantir minha vaga
            </button>

            <p className="text-white/40 text-xs text-center">
              Ao enviar, você autoriza o contato da equipe da Unyflex sobre esta turma.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
