"use client";
import { useState } from "react";
import { useReveal } from "@/lib/lp/useReveal";
import { submitLead, redirectToThankYou, type LeadForm } from "@/lib/lp/lead";
import type { LpContent } from "./types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formatWhatsapp(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return d;
  if (d.length <= 7) return `${d.slice(0, 2)} ${d.slice(2)}`;
  return `${d.slice(0, 2)} ${d.slice(2, 7)}-${d.slice(7)}`;
}

function validateField(field: string, value: string): string {
  switch (field) {
    case "nome":
      return value.trim() ? "" : "Informe seu nome.";
    case "email":
      return EMAIL_RE.test(value.trim()) ? "" : "Informe um e-mail válido.";
    case "whatsapp":
      return value.replace(/\D/g, "").length === 11
        ? ""
        : "Informe um celular válido com DDD.";
    case "orgao":
      return value.trim() ? "" : "Informe o órgão ou município.";
    case "servidorPublico":
      return value ? "" : "Selecione uma opção.";
    default:
      return "";
  }
}

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  full?: boolean;
  autoComplete?: string;
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
}

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  required,
  full,
  autoComplete,
  placeholder,
  inputMode,
  maxLength,
}: FieldProps) {
  return (
    <div
      className={`lp-form__field${full ? " lp-form__field--full" : ""}${
        error ? " is-error" : ""
      }`}
    >
      <label htmlFor={`f-${id}`}>
        {label}
        {required ? (
          <span className="req" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      <input
        id={`f-${id}`}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `err-${id}` : undefined}
      />
      {error ? (
        <span className="lp-form__err" id={`err-${id}`}>
          {error}
        </span>
      ) : null}
    </div>
  );
}

export default function CtaFinal({ content }: { content: LpContent["ctaFinal"] }) {
  const { bgSrc, title, text, microcopy, formId, submitLabel } = content;
  const [ref, visible] = useReveal();
  const [form, setForm] = useState<LeadForm>({
    nome: "",
    email: "",
    whatsapp: "",
    cargo: "",
    orgao: "",
    servidorPublico: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  function update(field: keyof LeadForm) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const value = field === "whatsapp" ? formatWhatsapp(raw) : raw;
      setForm((f) => ({ ...f, [field]: value }));
      setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    };
  }

  function handleBlur(field: keyof LeadForm) {
    return () => {
      const err = validateField(field, form[field]);
      setErrors((prev) => ({ ...prev, [field]: err || undefined }));
    };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Partial<Record<keyof LeadForm, string>> = {};
    (["nome", "email", "whatsapp", "orgao", "servidorPublico"] as Array<keyof LeadForm>).forEach(
      (f) => {
        const err = validateField(f, form[f]);
        if (err) next[f] = err;
      }
    );
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      await submitLead(form, formId);
    } catch (err) {
      console.error("Falha ao enviar lead:", err);
    } finally {
      redirectToThankYou(form);
    }
  }

  return (
    <section
      id="inscricao"
      ref={ref as React.RefObject<HTMLElement>}
      className={`cta-final${visible ? " is-visible" : ""}`}
    >
      <div
        className="cta-final__media"
        style={{ "--media-bg": `url(${bgSrc})` } as React.CSSProperties}
        aria-hidden="true"
      />
      <div className="cta-final__overlay" aria-hidden="true" />

      <div className="container cta-final__inner">
        <h2 className="cta-final__title" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
          {title}
        </h2>

        <p className="cta-final__text" data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties}>
          {text}
        </p>

        <div className="cta-final__card" data-reveal style={{ "--reveal-i": 2 } as React.CSSProperties}>
          <form className="lp-form" onSubmit={handleSubmit} noValidate>
            <div className="lp-form__grid">
              <Field
                id="nome"
                label="Nome"
                required
                value={form.nome}
                onChange={update("nome")}
                onBlur={handleBlur("nome")}
                error={errors.nome}
                autoComplete="name"
              />
              <Field
                id="email"
                label="E-mail"
                type="email"
                inputMode="email"
                required
                value={form.email}
                onChange={update("email")}
                onBlur={handleBlur("email")}
                error={errors.email}
                autoComplete="email"
                placeholder="nome@orgao.gov.br"
              />
              <Field
                id="whatsapp"
                label="WhatsApp"
                type="tel"
                inputMode="numeric"
                maxLength={15}
                required
                value={form.whatsapp}
                onChange={update("whatsapp")}
                onBlur={handleBlur("whatsapp")}
                error={errors.whatsapp}
                autoComplete="tel"
                placeholder="00 00000-0000"
              />
              <Field
                id="cargo"
                label="Cargo / Setor"
                value={form.cargo}
                onChange={update("cargo")}
                autoComplete="organization-title"
              />
              <Field
                id="orgao"
                label="Órgão / Município"
                required
                full
                value={form.orgao}
                onChange={update("orgao")}
                onBlur={handleBlur("orgao")}
                error={errors.orgao}
              />

              <div
                className={`lp-form__field lp-form__field--full${
                  errors.servidorPublico ? " is-error" : ""
                }`}
              >
                <span className="lp-form__toggle-label">
                  É servidor público?{" "}
                  <span className="req" aria-hidden="true">
                    *
                  </span>
                </span>
                <div
                  className="lp-form__toggle-group"
                  role="group"
                  aria-label="É servidor público?"
                >
                  {["Sim", "Não"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`lp-form__toggle-btn${
                        form.servidorPublico === opt ? " is-active" : ""
                      }`}
                      onClick={() => {
                        setForm((f) => ({ ...f, servidorPublico: opt }));
                        setErrors((prev) => ({ ...prev, servidorPublico: undefined }));
                      }}
                      aria-pressed={form.servidorPublico === opt}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {errors.servidorPublico ? (
                  <span className="lp-form__err">{errors.servidorPublico}</span>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--lg lp-form__submit"
              disabled={submitting}
            >
              {submitting ? "Enviando..." : submitLabel}
            </button>
          </form>
        </div>

        <p
          className="cta-final__microcopy"
          data-reveal
          style={{ "--reveal-i": 3 } as React.CSSProperties}
        >
          {microcopy}
        </p>
      </div>
    </section>
  );
}
