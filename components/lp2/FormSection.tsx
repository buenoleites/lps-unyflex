"use client";
import LeadForm from "@/components/lp/LeadForm";
import Section from "./Section";
import MediaBackdrop from "./MediaBackdrop";
import type { EventLpContent } from "./types";

/**
 * Formulário sobre foto em sangria. Os campos são fixos no LeadForm (alimentam
 * o CRM) — aqui só entram headline, meta, foto e os parâmetros de envio.
 */
export default function FormSection({
  content,
}: {
  content: EventLpContent["form"];
}) {
  return (
    <Section
      id="inscricao"
      tone="photo"
      className="lp2-form-section"
      labelledBy="inscricao-title"
      media={<MediaBackdrop src={content.bgSrc} textSide="center" />}
    >
      <div
        className="lp2-sec-head"
        data-reveal
        style={{ "--reveal-i": 0 } as React.CSSProperties}
      >
        <h2 id="inscricao-title" className="lp2-h2">
          {content.title}
        </h2>
        {content.meta ? (
          <p className="lp2-form-section__meta">{content.meta}</p>
        ) : null}
      </div>

      <div
        className="lp2-form-card"
        data-reveal
        style={{ "--reveal-i": 1 } as React.CSSProperties}
      >
        <LeadForm
          formId={content.formId}
          submitLabel={content.submitLabel}
          thankYou={content.thankYou}
          modalidade={content.modalidade}
          vinculo={content.vinculo}
          produto={content.produto}
          paginaOrigem={content.paginaOrigem}
        />
      </div>
    </Section>
  );
}
