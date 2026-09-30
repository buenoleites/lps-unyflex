"use client";
import { useEffect, useState } from "react";
import About from "@/components/lp3/About";
import Audience from "@/components/lp3/Audience";
import Facts from "@/components/lp3/Facts";
import Footer from "@/components/lp3/Footer";
import Form from "@/components/lp3/Form";
import Hero from "@/components/lp3/Hero";
import Highlight from "@/components/lp3/Highlight";
import Modules from "@/components/lp3/Modules";
import Nav from "@/components/lp3/Nav";
import Plans from "@/components/lp3/Plans";
import StickyCta from "@/components/lp3/StickyCta";
import { trackEvent } from "@/lib/lp/meta";
import { captureTracking } from "@/lib/lp/utm";
import { captureCampaign } from "@/lib/lp3/campaign";
import { tesourariaNov26Content as content } from "./content";

/* Ordem das seções = esqueleto do visual novo (plano de 30/09):
   hero → ficha → visão geral → programação → IA na prática → público-alvo →
   planos → formulário → rodapé. Professores: sem seção até a confirmação. */
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
        <Hero content={content.hero} />
        <Facts content={content.facts} />
        <About content={content.about} />
        <Modules content={content.modules} />
        <Highlight content={content.highlight} />
        {content.audience ? <Audience content={content.audience} /> : null}
        <Plans content={content.plans} onSelectPlan={setPlano} />
        <Form content={content.form} plano={plano} onPlanoChange={setPlano} />
      </main>
      <Footer content={content.footer} />
      <StickyCta content={content.stickyCta} />
    </div>
  );
}
