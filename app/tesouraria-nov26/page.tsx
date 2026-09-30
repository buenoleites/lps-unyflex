"use client";
import { useEffect, useState } from "react";
import Audience from "@/components/lp3/Audience";
import Faq from "@/components/lp3/Faq";
import Footer from "@/components/lp3/Footer";
import Form from "@/components/lp3/Form";
import Hero from "@/components/lp3/Hero";
import Highlight from "@/components/lp3/Highlight";
import Modules from "@/components/lp3/Modules";
import Nav from "@/components/lp3/Nav";
import Outcomes from "@/components/lp3/Outcomes";
import Plans from "@/components/lp3/Plans";
import StickyCta from "@/components/lp3/StickyCta";
import { trackEvent } from "@/lib/lp/meta";
import { captureTracking } from "@/lib/lp/utm";
import { captureCampaign } from "@/lib/lp3/campaign";
import { tesourariaNov26Content as content } from "./content";

/* Ordem das seções (rodada 2, 30/09): topo (promessa + prova social) →
   para quem → o que muda → programação → IA na prática → planos → inscrição
   (com "Como funciona") → perguntas frequentes → rodapé.
   Professores: sem seção até a confirmação. */
export default function TesourariaNov26Page() {
  // Plano de interesse: preenchido pelos botões da seção de planos, editável
  // no formulário, enviado como `plano_interesse`.
  const [plano, setPlano] = useState("");

  useEffect(() => {
    captureTracking();
    captureCampaign();
    trackEvent("PageView");
  }, []);

  return (
    <div className="lp3-root">
      <Nav content={content.nav} />
      <main id="conteudo-principal">
        <Hero content={content.hero} proof={content.proof} />
        {content.audience ? <Audience content={content.audience} /> : null}
        {content.outcomes ? <Outcomes content={content.outcomes} /> : null}
        <Modules content={content.modules} />
        {content.highlight ? <Highlight content={content.highlight} /> : null}
        <Plans content={content.plans} onSelectPlan={setPlano} />
        <Form content={content.form} proof={content.proof} plano={plano} onPlanoChange={setPlano} />
        {content.faq ? <Faq content={content.faq} /> : null}
      </main>
      <Footer content={content.footer} />
      <StickyCta content={content.stickyCta} />
    </div>
  );
}
