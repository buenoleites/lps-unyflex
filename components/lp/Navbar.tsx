"use client";
import { useEffect, useRef, useState } from "react";
import { handleAnchorClick } from "@/lib/lp/scroll";
import type { LpContent } from "./types";

export default function Navbar({ content }: { content: LpContent["navbar"] }) {
  const { logoSrc, logoAlt, links, ctaLabel } = content;
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function onLinkClick(e: React.MouseEvent<HTMLAnchorElement>) {
    handleAnchorClick(e);
    setOpen(false);
  }

  return (
    <header className={`navbar${open ? " is-open" : ""}`} ref={headerRef}>
      <div className="navbar__inner container">
        <a
          className="logo"
          href="#topo"
          onClick={onLinkClick}
          aria-label={`${logoAlt} — início`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo__img" src={logoSrc} alt={logoAlt} />
        </a>

        <nav className="navbar__pill" aria-label="Navegação principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={onLinkClick}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--primary btn--sm navbar__cta"
          href="#inscricao"
          onClick={onLinkClick}
        >
          {ctaLabel}
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`navbar__drop${open ? " is-open" : ""}`}
          aria-label="Navegação"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={onLinkClick}>
              {l.label}
            </a>
          ))}
          <a className="navbar__drop-cta" href="#inscricao" onClick={onLinkClick}>
            {ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}
