"use client";
import { useEffect } from "react";
import { trackEvent } from "@/lib/lp/meta";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ParaQuem from "./ParaQuem";
import OCurso from "./OCurso";
import Abordagem from "./Abordagem";
import Modulos from "./Modulos";
import Presencial from "./Presencial";
import Resultados from "./Resultados";
import Faq from "./Faq";
import CtaFinal from "./CtaFinal";
import Footer from "./Footer";
import StickyCtaMobile from "./StickyCtaMobile";
import type { LpContent } from "./types";

export default function LpPage({
  content,
  track = false,
}: {
  content: LpContent;
  track?: boolean;
}) {
  useEffect(() => {
    if (track) trackEvent("PageView");
  }, [track]);

  return (
    <div className="lp-root">
      <Navbar content={content.navbar} />
      <main id="conteudo-principal">
        <Hero content={content.hero} />
        <ParaQuem content={content.paraQuem} />
        <OCurso content={content.oCurso} />
        <Abordagem content={content.abordagem} />
        <Modulos content={content.modulos} />
        <Presencial content={content.presencial} />
        <Resultados content={content.resultados} />
        <Faq content={content.faq} />
        <CtaFinal content={content.ctaFinal} />
      </main>
      <Footer content={content.footer} />
      <StickyCtaMobile content={content.stickyCta} />
    </div>
  );
}
