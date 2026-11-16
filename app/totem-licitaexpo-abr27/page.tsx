"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { formatWhatsapp, isValidCelular } from "@/components/lp3/Form";
import { submitTotemLead } from "@/lib/lp/totemLead";
import { totem as content } from "./content";

/* Quiosque do estande (o aluno usa sozinho). Regras do briefing de 16/11:
   - nada guardado no navegador (sem storage, sem cookies, autocomplete off,
     sem captureTracking) e sem Pixel/analytics;
   - só mostra sucesso com resposta 2xx; erro, timeout de 10 s ou falta de rede
     mostram "Não enviado. Chame o consultor." em tela cheia, SEM redirecionar
     e mantendo os dados até o consultor agir (o reset por inatividade fica
     pausado nesse estado);
   - sucesso: agradecimento por 5 s e limpa tudo; 90 s sem toque também limpa;
   - nenhum link que saia da página (a política abre num painel na tela). */

type Status = "form" | "sending" | "success" | "error";

type Values = {
  nome: string;
  orgaoMunicipio: string;
  cargo: string;
  email: string;
  telefone: string;
  consent: boolean;
};

type Field = Exclude<keyof Values, "cargo">;
type Errors = Partial<Record<Field, string>>;

const EMPTY: Values = { nome: "", orgaoMunicipio: "", cargo: "", email: "", telefone: "", consent: false };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ORDER: Field[] = ["nome", "orgaoMunicipio", "email", "telefone", "consent"];

/** 55 + DDD + 9 dígitos = 13. A tela mostra o +55 fixo; o aluno digita o resto. */
function fullPhone(local: string): string {
  return `55${local.replace(/\D/g, "")}`;
}

function validate(field: Field, v: Values): string {
  const f = content.fields;
  switch (field) {
    case "nome":
      return v.nome.trim().length >= 3 ? "" : f.nome.error;
    case "orgaoMunicipio":
      return v.orgaoMunicipio.trim().length >= 3 ? "" : f.orgaoMunicipio.error;
    case "email":
      return EMAIL_RE.test(v.email.trim()) ? "" : f.email.error;
    case "telefone": {
      const d = fullPhone(v.telefone);
      return d.length === 13 && isValidCelular(d.slice(2)) ? "" : f.telefone.error;
    }
    case "consent":
      return v.consent ? "" : content.consent.error;
  }
}

/* Atributos que impedem o navegador de lembrar/sugerir o que foi digitado. */
const NO_MEMORY = {
  autoComplete: "off",
  autoCorrect: "off",
  spellCheck: false,
} as const;

export default function TotemPage() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("form");
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const sendingRef = useRef(false);
  const statusRef = useRef<Status>("form");
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const successTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const retryRef = useRef<HTMLButtonElement>(null);
  const closePrivacyRef = useRef<HTMLButtonElement>(null);
  const privacyTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  const resetAll = useCallback(() => {
    if (successTimer.current) clearTimeout(successTimer.current);
    sendingRef.current = false;
    setValues(EMPTY);
    setErrors({});
    setPrivacyOpen(false);
    setStatus("form");
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    window.scrollTo(0, 0);
  }, []);

  /* Inatividade: 90 s sem toque/tecla limpa tudo — menos no estado de erro,
     em que os dados ficam até o consultor agir, e durante o envio. */
  const armIdle = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      const s = statusRef.current;
      if (s === "error" || s === "sending") return;
      resetAll();
    }, content.idleMs);
  }, [resetAll]);

  useEffect(() => {
    const events = ["pointerdown", "keydown", "input", "touchstart"] as const;
    events.forEach((e) => window.addEventListener(e, armIdle, { passive: true }));
    armIdle();
    // bfcache: se a página voltar do cache, nada do que foi digitado volta junto.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) resetAll();
    };
    window.addEventListener("pageshow", onPageShow);
    return () => {
      events.forEach((e) => window.removeEventListener(e, armIdle));
      window.removeEventListener("pageshow", onPageShow);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      if (successTimer.current) clearTimeout(successTimer.current);
    };
  }, [armIdle, resetAll]);

  // Ao sair do erro, o timer de inatividade recomeça do zero.
  useEffect(() => {
    if (status === "error") retryRef.current?.focus();
    if (status === "form") armIdle();
  }, [status, armIdle]);

  useEffect(() => {
    if (!privacyOpen) return;
    closePrivacyRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPrivacyOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [privacyOpen]);

  function closePrivacy() {
    setPrivacyOpen(false);
    privacyTriggerRef.current?.focus();
  }

  function update(field: keyof Values) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "consent"
          ? e.target.checked
          : field === "telefone"
            ? formatWhatsapp(e.target.value)
            : e.target.value;
      setValues((v) => ({ ...v, [field]: value }));
      if (field !== "cargo") setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    };
  }

  function blur(field: Field) {
    return () => {
      // Campo vazio ao sair não acusa erro: o aluno pode só estar navegando.
      if (field !== "consent" && !String(values[field]).trim()) return;
      const err = validate(field, values);
      setErrors((prev) => ({ ...prev, [field]: err || undefined }));
    };
  }

  async function send() {
    if (sendingRef.current) return;
    sendingRef.current = true;
    setStatus("sending");
    try {
      await submitTotemLead(
        {
          nome: values.nome.trim(),
          email: values.email.trim(),
          telefone: fullPhone(values.telefone),
          cargo: values.cargo.trim(),
          orgaoMunicipio: values.orgaoMunicipio.trim(),
        },
        content.submit,
      );
      setStatus("success");
      successTimer.current = setTimeout(resetAll, content.successMs);
    } catch (err) {
      console.error("Lead do totem não enviado:", err);
      sendingRef.current = false;
      setStatus("error");
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Errors = {};
    ORDER.forEach((f) => {
      const err = validate(f, values);
      if (err) next[f] = err;
    });
    setErrors(next);
    const first = ORDER.find((f) => next[f]);
    if (first) {
      document.getElementById(`t-${first}`)?.focus();
      return;
    }
    void send();
  }

  const f = content.fields;
  const blocked = status !== "form";

  return (
    <div
      className="lp3-root totem-root"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <main id="conteudo-principal" className="totem" aria-hidden={blocked || privacyOpen ? true : undefined} inert={blocked || privacyOpen}>
        <header className="totem__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="totem__logo" src={content.logoSrc} alt={content.logoAlt} />
          <span className="lp3-eyebrow totem__eyebrow">{content.eyebrow}</span>
          <h1 className="totem__title">{content.title}</h1>
          <p className="totem__subtitle">{content.subtitle}</p>
          <p className="totem__meta">{content.meta}</p>
        </header>

        <form className="totem__form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <TotemField id="nome" label={f.nome.label} required error={errors.nome}>
            <input
              id="t-nome"
              name="t-nome"
              type="text"
              autoCapitalize="words"
              value={values.nome}
              onChange={update("nome")}
              onBlur={blur("nome")}
              {...NO_MEMORY}
              {...aria("nome", errors.nome)}
            />
          </TotemField>

          <TotemField id="orgaoMunicipio" label={f.orgaoMunicipio.label} required error={errors.orgaoMunicipio}>
            <input
              id="t-orgaoMunicipio"
              name="t-orgao"
              type="text"
              autoCapitalize="words"
              placeholder={f.orgaoMunicipio.placeholder}
              value={values.orgaoMunicipio}
              onChange={update("orgaoMunicipio")}
              onBlur={blur("orgaoMunicipio")}
              {...NO_MEMORY}
              {...aria("orgaoMunicipio", errors.orgaoMunicipio)}
            />
          </TotemField>

          <TotemField id="cargo" label={f.cargo.label}>
            <input
              id="t-cargo"
              name="t-cargo"
              type="text"
              autoCapitalize="sentences"
              value={values.cargo}
              onChange={update("cargo")}
              {...NO_MEMORY}
            />
          </TotemField>

          <TotemField id="email" label={f.email.label} required error={errors.email}>
            <input
              id="t-email"
              name="t-email"
              type="email"
              inputMode="email"
              autoCapitalize="none"
              placeholder={f.email.placeholder}
              value={values.email}
              onChange={update("email")}
              onBlur={blur("email")}
              {...NO_MEMORY}
              {...aria("email", errors.email)}
            />
          </TotemField>

          <TotemField id="telefone" label={f.telefone.label} required error={errors.telefone} hint={f.telefone.hint}>
            <div className="totem__phone">
              <span className="totem__prefix" aria-hidden="true">
                {f.telefone.prefix}
              </span>
              <input
                id="t-telefone"
                name="t-telefone"
                type="tel"
                inputMode="numeric"
                maxLength={13}
                placeholder={f.telefone.placeholder}
                value={values.telefone}
                onChange={update("telefone")}
                onBlur={blur("telefone")}
                {...NO_MEMORY}
                {...aria("telefone", errors.telefone, true)}
              />
            </div>
          </TotemField>

          <div className={`totem__consent${errors.consent ? " is-error" : ""}`}>
            <input
              id="t-consent"
              name="t-consent"
              type="checkbox"
              checked={values.consent}
              onChange={update("consent")}
              {...NO_MEMORY}
              {...aria("consent", errors.consent)}
            />
            <label htmlFor="t-consent">
              {content.consent.before}
              <button
                type="button"
                ref={privacyTriggerRef}
                className="totem__link"
                onClick={(e) => {
                  e.preventDefault();
                  setPrivacyOpen(true);
                }}
              >
                {content.consent.linkLabel}
              </button>
              {content.consent.after}
            </label>
            {errors.consent ? (
              <span className="totem__err" id="err-consent" role="alert">
                {errors.consent}
              </span>
            ) : null}
          </div>

          <button
            type="submit"
            className="lp3-btn lp3-btn--primary lp3-btn--lg totem__submit"
            disabled={!values.consent || status === "sending"}
          >
            {status === "sending" ? content.sendingLabel : content.submitLabel}
          </button>
        </form>
      </main>

      {privacyOpen ? (
        <div className="totem__overlay" role="dialog" aria-modal="true" aria-labelledby="t-privacy-title">
          <div className="totem__panel">
            <h2 id="t-privacy-title" className="totem__panel-title">
              {content.privacy.title}
            </h2>
            <p>{content.privacy.text}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="totem__qr" src={content.privacy.qrSrc} alt={content.privacy.qrAlt} />
            <p className="totem__url">{content.privacy.url}</p>
            <button
              type="button"
              ref={closePrivacyRef}
              className="lp3-btn lp3-btn--primary lp3-btn--lg"
              onClick={closePrivacy}
            >
              {content.privacy.close}
            </button>
          </div>
        </div>
      ) : null}

      {status === "success" ? (
        <div className="totem__overlay totem__overlay--success" role="status" aria-live="polite">
          <div className="totem__screen">
            <h2 className="totem__screen-title">{content.success.title}</h2>
            <p>{content.success.text}</p>
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <div
          className="totem__overlay totem__overlay--error"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="t-error-title"
        >
          <div className="totem__screen">
            <h2 id="t-error-title" className="totem__screen-title">
              {content.error.title}
            </h2>
            <div className="totem__actions">
              <button
                type="button"
                ref={retryRef}
                className="lp3-btn lp3-btn--primary lp3-btn--lg"
                onClick={() => void send()}
              >
                {content.error.retry}
              </button>
              <button type="button" className="lp3-btn lp3-btn--ghost lp3-btn--lg" onClick={() => setStatus("form")}>
                {content.error.back}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function aria(id: string, error: string | undefined, hint = false) {
  const describedBy = [error ? `err-${id}` : null, hint && !error ? `hint-${id}` : null].filter(Boolean).join(" ");
  return {
    "aria-invalid": error ? ("true" as const) : undefined,
    "aria-describedby": describedBy || undefined,
  };
}

function TotemField({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`totem__field${error ? " is-error" : ""}`}>
      <label htmlFor={`t-${id}`}>
        {label}
        {required ? (
          <span className="totem__req" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {hint && !error ? (
        <span className="totem__hint" id={`hint-${id}`}>
          {hint}
        </span>
      ) : null}
      {error ? (
        <span className="totem__err" id={`err-${id}`} role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}
