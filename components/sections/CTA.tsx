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

  return (
    <section id="inscricao" className="bg-[#0f0f0f] py-20 border-t border-white/5">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Garanta sua vaga para aprender IA aplicada às licitações.
        </h2>
        <p className="text-white/60 text-base mb-10">
          Preencha seus dados para demonstrar interesse na turma presencial de
          Licitações com Inteligência Artificial.
        </p>

        {submitted ? (
          <div className="bg-[#111] border border-[#1565c0]/30 rounded-lg p-10 text-center">
            <div className="text-[#1565c0] text-5xl mb-4">✓</div>
            <p className="text-white font-bold text-xl">Recebemos seu interesse!</p>
            <p className="text-white/55 text-sm mt-3">
              Em breve nossa equipe entrará em contato pelo e-mail informado.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#111] border border-white/5 rounded-lg p-5 sm:p-8 flex flex-col gap-5">
            {/* Nome */}
            <div className="flex flex-col gap-1">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">Nome</label>
              <input
                type="text"
                required
                value={form.nome}
                onChange={(e) => update("nome", e.target.value)}
                placeholder="Seu nome completo"
                className="bg-[#0a0a0a] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#1565c0]/60 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">E-mail</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="seu@email.com"
                className="bg-[#0a0a0a] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#1565c0]/60 transition-colors"
              />
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col gap-1">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">WhatsApp</label>
              <input
                type="tel"
                required
                value={form.whatsapp}
                onChange={(e) => update("whatsapp", e.target.value)}
                placeholder="(XX) XXXXX-XXXX"
                className="bg-[#0a0a0a] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#1565c0]/60 transition-colors"
              />
            </div>

            {/* Cargo */}
            <div className="flex flex-col gap-1">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">Cargo / Setor</label>
              <input
                type="text"
                required
                value={form.cargo}
                onChange={(e) => update("cargo", e.target.value)}
                placeholder="Seu cargo ou setor"
                className="bg-[#0a0a0a] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#1565c0]/60 transition-colors"
              />
            </div>

            {/* Órgão */}
            <div className="flex flex-col gap-1">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">Órgão / Município</label>
              <input
                type="text"
                required
                value={form.orgao}
                onChange={(e) => update("orgao", e.target.value)}
                placeholder="Nome do órgão ou município"
                className="bg-[#0a0a0a] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#1565c0]/60 transition-colors"
              />
            </div>

            {/* Servidor */}
            <div className="flex flex-col gap-2">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">
                Você trabalha em órgão público?
              </label>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {["Sim", "Não"].map((op) => (
                  <label key={op} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="servidor"
                      value={op}
                      checked={form.servidor === op}
                      onChange={() => update("servidor", op)}
                      className="accent-[#1565c0]"
                    />
                    <span className="text-white/70 text-sm">{op}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 bg-[#1565c0] hover:bg-[#0e5aaf] text-white font-bold py-4 rounded text-base transition-colors"
            >
              Garantir minha vaga
            </button>

            <p className="text-white/30 text-xs text-center">
              Ao enviar, você autoriza o contato da equipe da Unyflex sobre esta turma.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
