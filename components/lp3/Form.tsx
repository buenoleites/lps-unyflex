"use client";
import { useEffect, useRef, useState } from "react";
import { submitLead, redirectToThankYou } from "@/lib/lp/lead";
import { getCampaign } from "@/lib/lp3/campaign";
import Arrow from "./Arrow";
import LiveText from "./LiveText";
import Proof from "./Proof";
import Section from "./Section";
import Steps from "./Steps";
import type { Lp3Content } from "./types";

/* Formulário do lp3. Mesmo caminho de envio das outras LPs (lib/lp/lead.ts →
   webhook n8n), com três diferenças pedidas para a /tesouraria-nov26:
   - Órgão e Município são campos SEPARADOS e obrigatórios. O n8n atual lê
     Orgao_Municipio, então ele vai concatenado ("órgão – município") E o
     município vai também sozinho, em `Municipio` (chave nova).
   - Plano de interesse (`plano_interesse`), preenchido pelo botão do plano e
     editável no select.
   - Telefone validado de verdade: 11 dígitos, DDD 11–99, nono dígito 9 e sem
     sequência repetida (em setembro, 18% dos leads tinham telefone inválido
     com a regra "11 dígitos").
   - Consentimento obrigatório com link para a política (`consentimento`).
   - `c` = ?c= da URL, com fallback no slug (lib/lp3/campaign.ts); também
     alimenta utm_campaign/titulo quando a sessão não tem UTM.
   - `vinculo` (opt-in por LP, desde 07/10 para a /licitacao-out26): select
     "Seu vínculo" no lugar do toggle "É servidor público?"; o payload manda
     `vinculo` em vez de Orgao_Publico, como no lp2. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function formatWhatsapp(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return d;
  if (d.length <= 7) return `${d.slice(0, 2)} ${d.slice(2)}`;
  return `${d.slice(0, 2)} ${d.slice(2, 7)}-${d.slice(7)}`;
}

/** Celular brasileiro válido: DD (11–99) + 9 + 8 dígitos; rejeita o mesmo
 *  dígito repetido no número e o DDD com zero. */
export function isValidCelular(value: string): boolean {
  const d = value.replace(/\D/g, "");
  if (!/^[1-9][1-9]9\d{8}$/.test(d)) return false;
  const numero = d.slice(2);
  if (/^(\d)\1{8}$/.test(numero)) return false;
  return true;
}

type Values = {
  nome: string;
  whatsapp: string;
  email: string;
  orgao: string;
  municipio: string;
  cargo: string;
  servidorPublico: string;
  vinculo: string;
  modalidade: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(field: keyof Values, value: string | boolean): string {
  switch (field) {
    case "nome":
      return String(value).trim().length >= 3 ? "" : "Informe seu nome completo.";
    case "whatsapp":
      return isValidCelular(String(value)) ? "" : "Informe um celular válido com DDD, ex. 41 99999-9999.";
    case "email":
      return EMAIL_RE.test(String(value).trim()) ? "" : "Informe um e-mail válido.";
    case "orgao":
      return String(value).trim() ? "" : "Informe o órgão.";
    case "municipio":
      return String(value).trim() ? "" : "Informe o município.";
    case "servidorPublico":
    case "vinculo":
    case "modalidade":
      return value ? "" : "Selecione uma opção.";
    case "consent":
      return value ? "" : "É preciso autorizar o contato para enviar.";
    default:
      return "";
  }
}

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  required,
  full,
  hint,
  ...rest
}: {
  id: keyof Values;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  full?: boolean;
  hint?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "value" | "onChange" | "onBlur">) {
  const describedBy = [error ? `err-${id}` : null, hint ? `hint-${id}` : null].filter(Boolean).join(" ");
  return (
    <div className={`lp3-form__field${full ? " lp3-form__field--full" : ""}${error ? " is-error" : ""}`}>
      <label htmlFor={`f-${id}`}>
        {label}
        {required ? (
          <span className="lp3-form__req" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      <input
        id={`f-${id}`}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy || undefined}
        {...rest}
      />
      {hint && !error ? (
        <span className="lp3-form__hint" id={`hint-${id}`}>
          {hint}
        </span>
      ) : null}
      {error ? (
        <span className="lp3-form__err" id={`err-${id}`} role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}

export default function Form({
  content,
  proof,
  plano,
  onPlanoChange,
}: {
  content: Lp3Content["form"];
  proof?: Lp3Content["proof"];
  /** Plano de interesse — estado vive na página, porque os botões da seção
   *  de planos o preenchem. */
  plano: string;
  onPlanoChange: (plan: string) => void;
}) {
  const [form, setForm] = useState<Values>({
    nome: "",
    whatsapp: "",
    email: "",
    orgao: "",
    municipio: "",
    cargo: "",
    servidorPublico: "",
    vinculo: "",
    modalidade: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const submittingRef = useRef(false);
  const planoRef = useRef<HTMLSelectElement>(null);

  // Quando um botão de plano preenche o select, o foco vai para o primeiro
  // campo — a pessoa acabou de rolar até aqui para preencher.
  const lastPlano = useRef(plano);
  useEffect(() => {
    if (plano && plano !== lastPlano.current) {
      document.getElementById("f-nome")?.focus({ preventScroll: true });
    }
    lastPlano.current = plano;
  }, [plano]);

  function update(field: keyof Values) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const value = field === "whatsapp" ? formatWhatsapp(raw) : raw;
      setForm((f) => ({ ...f, [field]: value }));
      setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    };
  }

  function blur(field: keyof Values) {
    return () => {
      const err = validate(field, form[field]);
      setErrors((prev) => ({ ...prev, [field]: err || undefined }));
    };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submittingRef.current) return;

    const next: Errors = {};
    (
      [
        "nome",
        "whatsapp",
        "email",
        "orgao",
        "municipio",
        content.vinculo ? "vinculo" : "servidorPublico",
        ...(content.modalidade ? (["modalidade"] as const) : []),
        "consent",
      ] as const
    ).forEach((f) => {
      const err = validate(f, form[f]);
      if (err) next[f] = err;
    });
    setErrors(next);
    const firstError = Object.keys(next)[0];
    if (firstError) {
      document.getElementById(`f-${firstError}`)?.focus();
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);

    const c = getCampaign(content.campaignFallback);
    const lead = {
      nome: form.nome.trim(),
      email: form.email.trim(),
      whatsapp: form.whatsapp,
      cargo: form.cargo.trim(),
      // n8n atual lê Orgao_Municipio: vai concatenado; Municipio separado abaixo.
      orgao: `${form.orgao.trim()} – ${form.municipio.trim()}`,
      // Com `vinculo` configurado o payload manda `vinculo` e omite
      // Orgao_Publico; sem ele, o toggle de sempre (lib/lp/lead.ts).
      ...(content.vinculo
        ? { vinculo: form.vinculo }
        : { servidorPublico: form.servidorPublico }),
      // A presença da chave decide se Modalidade_Preferida entra no payload.
      ...(content.modalidade ? { modalidade: form.modalidade } : {}),
    };

    try {
      await submitLead(lead, content.formId, {
        produto: content.produto,
        paginaOrigem: content.paginaOrigem,
        tituloProduto: content.tituloProduto,
        campaignFallback: c,
        extra: {
          Orgao: form.orgao.trim(),
          Municipio: form.municipio.trim(),
          // Sem clique em plano, vai o texto do padrão do select (n8n/CRM lê
          // "" como campo ausente).
          plano_interesse: plano || "Ainda não decidi",
          c,
          consentimento: content.consent.value,
        },
      });
    } catch (err) {
      console.error("Falha ao enviar lead:", err);
    } finally {
      redirectToThankYou(lead, content.thankYou);
    }
  }

  return (
    <Section id="inscricao" tone="elevated" labelledBy="inscricao-title" className="lp3-form-section">
      <div className="lp3-form-layout">
        <div className="lp3-sec-head" data-reveal style={{ "--reveal-i": 0 } as React.CSSProperties}>
          <span className="lp3-eyebrow">{content.eyebrow}</span>
          <h2 id="inscricao-title" className="lp3-h2">
            {content.title}
          </h2>
          {content.meta ? <p className="lp3-lead"><LiveText text={content.meta} /></p> : null}
          {content.steps ? <Steps content={content.steps} /> : null}
          {proof ? <Proof content={proof} className="lp3-form__proof" /> : null}
        </div>

        <form
          className="lp3-form-card"
          onSubmit={handleSubmit}
          noValidate
          data-reveal
          style={{ "--reveal-i": 1 } as React.CSSProperties}
        >
          <div className="lp3-form__grid">
            <Field
              id="nome"
              label="Nome completo"
              required
              full
              value={form.nome}
              onChange={update("nome")}
              onBlur={blur("nome")}
              error={errors.nome}
              autoComplete="name"
            />
            <Field
              id="whatsapp"
              label="WhatsApp"
              type="tel"
              inputMode="numeric"
              maxLength={13}
              required
              value={form.whatsapp}
              onChange={update("whatsapp")}
              onBlur={blur("whatsapp")}
              error={errors.whatsapp}
              autoComplete="tel-national"
              placeholder="41 99999-9999"
              hint="Celular com DDD. O consultor liga por aqui."
            />
            <Field
              id="email"
              label="E-mail"
              type="email"
              inputMode="email"
              required
              value={form.email}
              onChange={update("email")}
              onBlur={blur("email")}
              error={errors.email}
              autoComplete="email"
              placeholder="nome@orgao.gov.br"
            />
            <Field
              id="orgao"
              label="Órgão"
              required
              value={form.orgao}
              onChange={update("orgao")}
              onBlur={blur("orgao")}
              error={errors.orgao}
              autoComplete="organization"
              placeholder="Prefeitura, Câmara, autarquia…"
            />
            <Field
              id="municipio"
              label="Município"
              required
              value={form.municipio}
              onChange={update("municipio")}
              onBlur={blur("municipio")}
              error={errors.municipio}
              autoComplete="address-level2"
              placeholder="Cidade – UF"
            />
            <Field
              id="cargo"
              label="Cargo"
              value={form.cargo}
              onChange={update("cargo")}
              autoComplete="organization-title"
            />

            <div className="lp3-form__field">
              <label htmlFor="f-plano">Plano de interesse</label>
              <div className="lp3-form__select">
                <select
                  id="f-plano"
                  name="plano"
                  ref={planoRef}
                  value={plano}
                  onChange={(e) => onPlanoChange(e.target.value)}
                  className={plano === "" ? "is-placeholder" : undefined}
                >
                  <option value="">Ainda não decidi</option>
                  {content.planOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {content.vinculo ? (
              <div className={`lp3-form__field${errors.vinculo ? " is-error" : ""}`}>
                <label htmlFor="f-vinculo">
                  {content.vinculo.label}
                  <span className="lp3-form__req" aria-hidden="true">
                    {" "}
                    *
                  </span>
                </label>
                <div className="lp3-form__select">
                  <select
                    id="f-vinculo"
                    name="vinculo"
                    value={form.vinculo}
                    required
                    aria-invalid={errors.vinculo ? "true" : undefined}
                    aria-describedby={errors.vinculo ? "err-vinculo" : undefined}
                    className={form.vinculo === "" ? "is-placeholder" : undefined}
                    onChange={(e) => {
                      const value = e.target.value;
                      setForm((f) => ({ ...f, vinculo: value }));
                      setErrors((prev) => ({ ...prev, vinculo: undefined }));
                    }}
                  >
                    <option value="">Selecione</option>
                    {content.vinculo.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.vinculo ? (
                  <span className="lp3-form__err" id="err-vinculo" role="alert">
                    {errors.vinculo}
                  </span>
                ) : null}
              </div>
            ) : (
            <div className={`lp3-form__field lp3-form__field--full${errors.servidorPublico ? " is-error" : ""}`}>
              <span className="lp3-form__toggle-label" id="lbl-servidor">
                É servidor público?{" "}
                <span className="lp3-form__req" aria-hidden="true">
                  *
                </span>
              </span>
              <div className="lp3-form__toggle-group" role="group" aria-labelledby="lbl-servidor">
                {["Sim", "Não"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    id={opt === "Sim" ? "f-servidorPublico" : undefined}
                    className={`lp3-form__toggle-btn${form.servidorPublico === opt ? " is-active" : ""}`}
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
                <span className="lp3-form__err" role="alert">
                  {errors.servidorPublico}
                </span>
              ) : null}
            </div>
            )}

            {content.modalidade ? (
              <div className={`lp3-form__field lp3-form__field--full${errors.modalidade ? " is-error" : ""}`}>
                <span className="lp3-form__toggle-label" id="lbl-modalidade">
                  {content.modalidade.label}{" "}
                  <span className="lp3-form__req" aria-hidden="true">
                    *
                  </span>
                </span>
                <div className="lp3-form__toggle-group" role="group" aria-labelledby="lbl-modalidade">
                  {content.modalidade.options.map((opt, i) => (
                    <button
                      key={opt}
                      type="button"
                      id={i === 0 ? "f-modalidade" : undefined}
                      className={`lp3-form__toggle-btn${form.modalidade === opt ? " is-active" : ""}`}
                      onClick={() => {
                        setForm((f) => ({ ...f, modalidade: opt }));
                        setErrors((prev) => ({ ...prev, modalidade: undefined }));
                      }}
                      aria-pressed={form.modalidade === opt}
                    >
                      {content.modalidade?.labels?.[i] ?? opt}
                    </button>
                  ))}
                </div>
                {errors.modalidade ? (
                  <span className="lp3-form__err" role="alert">
                    {errors.modalidade}
                  </span>
                ) : null}
              </div>
            ) : null}

            <div className={`lp3-form__field lp3-form__field--full${errors.consent ? " is-error" : ""}`}>
              <div className="lp3-form__consent">
                <input
                  id="f-consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setForm((f) => ({ ...f, consent: checked }));
                    setErrors((prev) => ({ ...prev, consent: undefined }));
                  }}
                  aria-invalid={errors.consent ? "true" : undefined}
                  aria-describedby={errors.consent ? "err-consent" : undefined}
                  required
                />
                <label htmlFor="f-consent">{content.consent.label}</label>
              </div>
              {errors.consent ? (
                <span className="lp3-form__err" id="err-consent" role="alert">
                  {errors.consent}
                </span>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            className="lp3-btn lp3-btn--primary lp3-btn--lg lp3-btn--block lp3-form__submit"
            disabled={submitting}
          >
            {submitting ? "Enviando…" : content.submitLabel}
            {submitting ? null : <Arrow />}
          </button>
        </form>
      </div>
    </Section>
  );
}
