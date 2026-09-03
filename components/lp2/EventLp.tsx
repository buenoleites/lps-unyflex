"use client";
import { useEffect } from "react";
import { trackEvent } from "@/lib/lp/meta";
import { captureTracking } from "@/lib/lp/utm";
import type { EventLpContent } from "./types";
import Lp2Root from "./Lp2Root";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ProofTicker from "./ProofTicker";
import Banner from "./Banner";
import Audience from "./Audience";
import ProblemGrid from "./ProblemGrid";
import Schedule from "./Schedule";
import Modules from "./Modules";
import Quote from "./Quote";
import Speakers from "./Speakers";
import Gallery from "./Gallery";
import Plans from "./Plans";
import PricingCombo from "./PricingCombo";
import Procurement from "./Procurement";
import Reviews from "./Reviews";
import Compare from "./Compare";
import Faq from "./Faq";
import FormSection from "./FormSection";
import StickyCta from "./StickyCta";
import Footer from "./Footer";

/**
 * Orquestrador do template. A ordem das seções é fixa (segue a hierarquia de
 * importância do briefing); as opcionais (banner, schedule, modules, quote,
 * speakers, gallery, procurement, reviews, compare) renderizam apenas se a
 * chave existir na config.
 */
export default function EventLp({ content }: { content: EventLpContent }) {
  useEffect(() => {
    // Persiste UTMs/fbclid/gclid da query na sessão antes de qualquer
    // navegação — o submit lê daqui quando a query já se perdeu.
    captureTracking();
    trackEvent("PageView");
  }, []);

  return (
    <Lp2Root accent={content.theme?.accent}>
      <Navbar content={content.nav} />

      {/* id fixo: alvo do skip-link do root layout */}
      <main id="conteudo-principal">
        <Hero content={content.hero} />
        <ProofTicker content={content.ticker} />
        {content.banner ? <Banner content={content.banner} /> : null}
        <Audience content={content.audience} />
        <ProblemGrid content={content.problem} />
        {content.schedule ? <Schedule content={content.schedule} /> : null}
        {content.modules ? <Modules content={content.modules} /> : null}
        {content.quote ? <Quote content={content.quote} /> : null}
        {content.speakers ? <Speakers content={content.speakers} /> : null}
        {content.gallery ? <Gallery content={content.gallery} /> : null}
        {/* reviews vem ANTES do bloco de preço (briefing da /engenharia: prova
            social entre Professores e Investimento). Nenhuma rota anterior
            renderizava reviews, então a mudança de posição não afetou ninguém. */}
        {content.reviews ? <Reviews content={content.reviews} /> : null}
        {content.plans ? <Plans content={content.plans} /> : null}
        {content.pricingCombo ? (
          <PricingCombo content={content.pricingCombo} />
        ) : null}
        {content.compare ? <Compare content={content.compare} /> : null}
        {content.procurement ? (
          <Procurement content={content.procurement} />
        ) : null}
        <Faq content={content.faq} />
        <FormSection content={content.form} />
      </main>

      <StickyCta content={content.stickyCta} />
      <Footer content={content.footer} />
    </Lp2Root>
  );
}
