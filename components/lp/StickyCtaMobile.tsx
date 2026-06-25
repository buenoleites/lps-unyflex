"use client";
import { useEffect, useState } from "react";
import { handleAnchorClick } from "@/lib/lp/scroll";
import type { LpContent } from "./types";

export default function StickyCtaMobile({
  content,
}: {
  content: LpContent["stickyCta"];
}) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("inscricao");
    if (!target) return;

    const obs = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`sticky-cta${hidden ? " is-hidden" : ""}`} aria-hidden={hidden}>
      <a
        href="#inscricao"
        className="btn btn--primary"
        onClick={handleAnchorClick}
      >
        {content.label}
      </a>
    </div>
  );
}
