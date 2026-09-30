"use client";
import { useEffect, useState } from "react";
import { handleAnchorClick } from "@/lib/lp/scroll";
import type { Lp3Content } from "./types";

/** Barra fixa mobile-only (CSS esconde em >=800px): aparece quando o hero sai
 *  da viewport e some enquanto o formulário está visível. */
export default function StickyCta({ content }: { content: Lp3Content["stickyCta"] }) {
  const [heroVisible, setHeroVisible] = useState(true);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const hero = document.getElementById("topo");
    const form = document.getElementById("inscricao");
    if (!hero || !form) return;
    const a = new IntersectionObserver(
      (entries) => setHeroVisible(entries[entries.length - 1].isIntersecting),
      { threshold: 0 }
    );
    const b = new IntersectionObserver(
      (entries) => setFormVisible(entries[entries.length - 1].isIntersecting),
      { threshold: 0.15 }
    );
    a.observe(hero);
    b.observe(form);
    return () => {
      a.disconnect();
      b.disconnect();
    };
  }, []);

  const visible = !heroVisible && !formVisible;
  return (
    <div className={`lp3-sticky${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <span className="lp3-sticky__price">{content.priceAnchor}</span>
      <a
        className="lp3-btn lp3-btn--primary lp3-btn--sm"
        href={content.href}
        onClick={handleAnchorClick}
        tabIndex={visible ? 0 : -1}
      >
        {content.label}
      </a>
    </div>
  );
}
