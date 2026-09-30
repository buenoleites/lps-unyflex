"use client";
import { useEffect, useState } from "react";
import Audience from "@/components/lp3/Audience";
import Banner from "@/components/lp3/Banner";
import Faq from "@/components/lp3/Faq";
import Footer from "@/components/lp3/Footer";
import Form from "@/components/lp3/Form";
import Gallery from "@/components/lp3/Gallery";
import Hero from "@/components/lp3/Hero";
import Highlight from "@/components/lp3/Highlight";
import Modules from "@/components/lp3/Modules";
import Nav from "@/components/lp3/Nav";
import Outcomes from "@/components/lp3/Outcomes";
import Plans from "@/components/lp3/Plans";
import Reviews from "@/components/lp3/Reviews";
import Speakers from "@/components/lp3/Speakers";
import StickyCta from "@/components/lp3/StickyCta";
import { trackEvent } from "@/lib/lp/meta";
import { captureTracking } from "@/lib/lp/utm";
import { captureCampaign } from "@/lib/lp3/campaign";
import { portalContent as content } from "./content";

/* Ordem das seções (a da versão lp2): topo com números → para quem →
   desafios → programação → professores → galeria → depoimentos → planos →
   como seu órgão contrata → inscrição → perguntas frequentes → rodapé. */
export default function PortalPage() {
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
        {content.banner ? <Banner content={content.banner} /> : null}
        {content.audience ? <Audience content={content.audience} /> : null}
        {content.problem ? <Outcomes content={content.problem} /> : null}
        <Modules content={content.modules} />
        {content.highlight ? <Highlight content={content.highlight} /> : null}
        {content.speakers ? <Speakers content={content.speakers} /> : null}
        {content.gallery ? <Gallery content={content.gallery} /> : null}
        {content.reviews ? <Reviews content={content.reviews} /> : null}
        <Plans content={content.plans} onSelectPlan={setPlano} />
        {content.procurement ? <Outcomes content={content.procurement} /> : null}
        <Form content={content.form} proof={content.proof} plano={plano} onPlanoChange={setPlano} />
        {content.faq ? <Faq content={content.faq} /> : null}
      </main>
      <Footer content={content.footer} />
      <StickyCta content={content.stickyCta} />
    </div>
  );
}
