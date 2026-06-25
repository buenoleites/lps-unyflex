"use client";

import { useState } from "react";

const WEBHOOK_URL = "https://n8n.unyflex.com.br/webhook/lp-leads-unyflex";
const OBRIGADO_URL = "https://landingpages.unyflex.com.br/obrigado";
const FORM_ID = "lp-licitacao-ia";

type FormData = {
  nome: string;
  email: string;
  whatsapp: string;
  cargo: string;
  orgao: string;
  servidor: string;
};

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (!d.length) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function getUtmParams() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  return {
    UTM_Source: p.get("utm_source") ?? "",
    UTM_Medium: p.get("utm_medium") ?? "",
    UTM_Campaign: p.get("utm_campaign") ?? "",
    UTM_Id: p.get("utm_id") ?? "",
    UTM_Term: p.get("utm_term") ?? "",
    UTM_Content: p.get("utm_content") ?? "",
  };
}

function getDispositivo() {
  if (typeof window === "undefined") return "Desktop";
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
}

function formatDate(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export function CTA() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    cargo: "",
    orgao: "",
    servidor: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.nome.trim()) e.nome = "Nome obrigatório";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido";
    const digits = form.whatsapp.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 11) e.whatsapp = "WhatsApp inválido";
    if (!form.cargo.trim()) e.cargo = "Campo obrigatório";
    if (!form.orgao.trim()) e.orgao = "Campo obrigatório";
    if (!form.servidor) e.servidor = "Selecione uma opção";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(false);

    let ip = "", country = "", region = "", city = "";
    try {
      const geo = await fetch("https://ipwho.is/").then((r) => r.json());
      ip = geo.ip ?? "";
      country = geo.country_code ?? "";
      region = geo.region ?? "";
      city = geo.city ?? "";
    } catch {
      // geo é opcional — prossegue sem ela
    }

    const payload = {
      Nome: form.nome,
      E_mail: form.email,
      WhatsApp: form.whatsapp,
      Cargo_Setor: form.cargo,
      Orgao_Municipio: form.orgao,
      Orgao_Publico: form.servidor,
      Referral_Source: typeof document !== "undefined" ? document.referrer : "",
      Dispositivo: getDispositivo(),
      URL: typeof window !== "undefined" ? window.location.href : "",
      IP_do_usuario: ip,
      Data_da_conversao: formatDate(new Date()),
      Id_do_formulario: FORM_ID,
      Pais_do_usuario: country,
      Regiao_do_usuario: region,
      Cidade_do_usuario: city,
      ...getUtmParams(),
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("webhook error");
    } catch {
      setSubmitError(true);
      setSubmitting(false);
      return;
    }

    const params = new URLSearchParams({
      Nome: form.nome,
      E_mail: form.email,
      WhatsApp: form.whatsapp,
      Cargo_Setor: form.cargo,
      Orgao_Municipio: form.orgao,
    });
    window.location.href = `${OBRIGADO_URL}?${params.toString()}`;
  }

  const inputClass =
    "bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#00BFF3]/60 transition-colors w-full";
  const inputErrorClass =
    "bg-white/10 border border-red-400/60 rounded-full px-4 py-3 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-red-400/80 transition-colors w-full";
  const labelClass = "text-white/60 text-xs font-semibold uppercase tracking-wider";

  function fieldClass(field: keyof FormData) {
    return errors[field] ? inputErrorClass : inputClass;
  }

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

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white/10 border border-white/15 rounded-[26px] sm:rounded-[30px] p-5 sm:p-8 flex flex-col gap-5 backdrop-blur-sm"
        >
          {/* Nome + E-mail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="campo-nome" className={labelClass}>Nome</label>
              <input
                id="campo-nome"
                name="nome"
                type="text"
                value={form.nome}
                onChange={(e) => update("nome", e.target.value)}
                placeholder="Seu nome completo"
                autoComplete="name"
                className={fieldClass("nome")}
              />
              {errors.nome && <span className="text-red-400 text-xs mt-0.5">{errors.nome}</span>}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="campo-email" className={labelClass}>E-mail</label>
              <input
                id="campo-email"
                name="email"
                type="email"
                spellCheck={false}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="seu@email.com"
                autoComplete="email"
                className={fieldClass("email")}
              />
              {errors.email && <span className="text-red-400 text-xs mt-0.5">{errors.email}</span>}
            </div>
          </div>

          {/* WhatsApp + Cargo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="campo-whatsapp" className={labelClass}>WhatsApp</label>
              <input
                id="campo-whatsapp"
                name="whatsapp"
                type="tel"
                spellCheck={false}
                value={form.whatsapp}
                onChange={(e) => update("whatsapp", maskPhone(e.target.value))}
                placeholder="(XX) XXXXX-XXXX"
                autoComplete="tel"
                className={fieldClass("whatsapp")}
              />
              {errors.whatsapp && <span className="text-red-400 text-xs mt-0.5">{errors.whatsapp}</span>}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="campo-cargo" className={labelClass}>Cargo / Setor</label>
              <input
                id="campo-cargo"
                name="cargo"
                type="text"
                value={form.cargo}
                onChange={(e) => update("cargo", e.target.value)}
                placeholder="Seu cargo ou setor"
                autoComplete="organization-title"
                className={fieldClass("cargo")}
              />
              {errors.cargo && <span className="text-red-400 text-xs mt-0.5">{errors.cargo}</span>}
            </div>
          </div>

          {/* Órgão full-width */}
          <div className="flex flex-col gap-1">
            <label htmlFor="campo-orgao" className={labelClass}>Órgão / Município</label>
            <input
              id="campo-orgao"
              name="orgao"
              type="text"
              value={form.orgao}
              onChange={(e) => update("orgao", e.target.value)}
              placeholder="Nome do órgão ou município"
              autoComplete="organization"
              className={fieldClass("orgao")}
            />
            {errors.orgao && <span className="text-red-400 text-xs mt-0.5">{errors.orgao}</span>}
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
            {errors.servidor && <span className="text-red-400 text-xs">{errors.servidor}</span>}
          </fieldset>

          {submitError && (
            <p role="alert" className="text-red-400 text-sm text-center">
              Erro ao enviar. Tente novamente ou entre em contato conosco.
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-cta mt-2 w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Enviando…" : "Garantir minha vaga"}
          </button>

          <p className="text-white/40 text-xs text-center">
            Ao enviar, você autoriza o contato da equipe da Unyflex sobre esta turma.
          </p>
        </form>
      </div>
    </section>
  );
}
