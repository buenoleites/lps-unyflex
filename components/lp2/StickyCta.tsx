"use client";
import { useEffect, useState } from "react";
import { handleAnchorClick } from "@/lib/lp/scroll";
import type { EventLpContent } from "./types";

/**
 * Barra fixa no rodapé da viewport, mobile-only (CSS esconde em >=800px).
 * Aparece quando o hero sai da viewport e some enquanto a seção do formulário
 * está visível. Observa os ids fixos do template (#topo e #inscricao).
 */
export default function StickyCta({
  content,
}: {
  content: EventLpContent["stickyCta"];
}) {
  const [heroVisible, setHeroVisible] = useState(true);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const hero = document.getElementById("topo");
    const form = document.getElementById("inscricao");
    if (!hero || !form) return;

    // Sempre a última entry: crossings coalescidos num mesmo callback chegariam
    // fora de ordem se lêssemos só a primeira.
    const heroObserver = new IntersectionObserver(
      (entries) => setHeroVisible(entries[entries.length - 1].isIntersecting),
      { threshold: 0 }
    );
    const formObserver = new IntersectionObserver(
      (entries) => setFormVisible(entries[entries.length - 1].isIntersecting),
      { threshold: 0.15 }
    );
    heroObserver.observe(hero);
    formObserver.observe(form);

    return () => {
      heroObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  const visible = !heroVisible && !formVisible;

  return (
    <div
      className={`lp2-sticky${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
    >
      <span className="lp2-sticky__price">{content.priceAnchor}</span>
      <a
        className="btn btn--primary btn--sm"
        href={content.href}
        onClick={handleAnchorClick}
        tabIndex={visible ? 0 : -1}
      >
        {content.label}
      </a>
    </div>
  );
}
