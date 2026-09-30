"use client";
import { handleAnchorClick } from "@/lib/lp/scroll";
import type { Lp3Content } from "./types";

export default function Nav({ content }: { content: Lp3Content["nav"] }) {
  return (
    <header className="lp3-nav">
      <nav className="lp3-container lp3-nav__inner" aria-label="Navegação da página">
        <a
          className="lp3-nav__logo"
          href="#topo"
          onClick={handleAnchorClick}
          aria-label={`${content.logoAlt} — início`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={content.logoSrc} alt={content.logoAlt} />
        </a>
        <a
          className="lp3-btn lp3-btn--primary lp3-btn--sm"
          href={content.cta.href}
          onClick={handleAnchorClick}
        >
          {content.cta.label}
        </a>
      </nav>
    </header>
  );
}
