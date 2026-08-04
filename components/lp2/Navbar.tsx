"use client";
import { handleAnchorClick } from "@/lib/lp/scroll";
import type { EventLpContent } from "./types";

export default function Navbar({ content }: { content: EventLpContent["nav"] }) {
  return (
    <header className="lp2-nav">
      <nav
        className="lp2-container lp2-nav__inner"
        aria-label="Navegação da página"
      >
        <a
          className="lp2-nav__logo"
          href="#topo"
          onClick={handleAnchorClick}
          aria-label={`${content.logoAlt} — início`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={content.logoSrc} alt={content.logoAlt} />
        </a>

        <div className="lp2-nav__links">
          {content.links.map((link) => (
            <a
              key={link.href}
              className="lp2-nav__link"
              href={link.href}
              onClick={handleAnchorClick}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="btn btn--primary btn--sm lp2-nav__cta"
          href={content.cta.href}
          onClick={handleAnchorClick}
        >
          {content.cta.label}
        </a>
      </nav>
    </header>
  );
}
