"use client";
import { useEffect, useState } from "react";
import Audience from "@/components/lp3/Audience";
import Footer from "@/components/lp3/Footer";
import Form from "@/components/lp3/Form";
import Hero from "@/components/lp3/Hero";
import Highlight from "@/components/lp3/Highlight";
import Modules from "@/components/lp3/Modules";
import Nav from "@/components/lp3/Nav";
import Plans from "@/components/lp3/Plans";
import Speakers from "@/components/lp3/Speakers";
import StickyCta from "@/components/lp3/StickyCta";
import { trackEvent } from "@/lib/lp/meta";
import { captureTracking } from "@/lib/lp/utm";
import { captureCampaign } from "@/lib/lp3/campaign";
import { licitaexpoContent as content } from "./content";

/* Ordem das seções (a da /comunicacao-nov26, sem "O que muda" e sem FAQ, que a
   LP anterior não tinha): topo (+ prova social) → para quem → programação →
   metodologia → palestrantes → planos → inscrição → rodapé. */
export default function LicitaexpoPage() {
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
        <Modules content={content.modules} />
        {content.highlight ? <Highlight content={content.highlight} /> : null}
        {content.speakers ? <Speakers content={content.speakers} /> : null}
        <Plans content={content.plans} onSelectPlan={setPlano} />
        <Form content={content.form} proof={content.proof} plano={plano} onPlanoChange={setPlano} />
      </main>
      <Footer content={content.footer} />
      <StickyCta content={content.stickyCta} />
    </div>
  );
}
