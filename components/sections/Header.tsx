"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Público", href: "#publico" },
  { label: "Curso", href: "#curso" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Formato", href: "#formato" },
  { label: "Docentes", href: "#docentes" },
];

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetTop: number, duration: number) {
  const startTop = window.pageYOffset;
  const distance = targetTop - startTop;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startTop + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const offset = window.innerWidth <= 767 ? 76 : 70;
    const targetTop = target.getBoundingClientRect().top + window.pageYOffset - offset;
    smoothScrollTo(targetTop, 1200);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <nav
        ref={navRef}
        className="pointer-events-auto flex items-center justify-between px-8 h-16 w-full"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex-shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Unyflex — Excelência em Gestão Pública"
            width={120}
            height={39}
            className="h-8 w-auto"
            priority
          />
        </a>

        {/* Desktop: links pill */}
        <div
          className="hidden md:flex items-center gap-6 rounded-full px-6 py-2 border border-white/15 backdrop-blur-md"
          style={{ background: "rgba(40,40,36,0.55)" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-white/90 hover:text-white text-[13px] font-medium leading-none whitespace-nowrap transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop: CTA */}
        <a
          href="#inscricao"
          onClick={(e) => handleNavClick(e, "#inscricao")}
          className="hidden md:inline-flex btn-cta text-[13px] px-5 py-2"
        >
          Garantir minha vaga
        </a>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden relative z-10 w-8 h-8 flex flex-col items-center justify-center gap-[6px] bg-transparent border-none cursor-pointer"
          onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span
            className="block w-6 h-[2px] rounded-full bg-white/88 transition-transform duration-[250ms]"
            style={{ transform: open ? "translateY(8px) rotate(45deg)" : undefined }}
          />
          <span
            className="block w-6 h-[2px] rounded-full bg-white/88 transition-opacity duration-[250ms]"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[2px] rounded-full bg-white/88 transition-transform duration-[250ms]"
            style={{ transform: open ? "translateY(-8px) rotate(-45deg)" : undefined }}
          />
        </button>

        {/* Mobile: dropdown */}
        <div
          className="absolute top-[68px] right-4 w-[220px] p-4 flex flex-col gap-[14px] rounded-[22px] border border-white/12 backdrop-blur-xl md:hidden"
          style={{
            background: "rgba(35, 36, 32, 0.86)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10), 0 14px 32px rgba(0,0,0,0.22)",
            opacity: open ? 1 : 0,
            visibility: open ? "visible" : "hidden",
            transform: open ? "translateY(0)" : "translateY(-8px)",
            pointerEvents: open ? "auto" : "none",
            transition: "opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-white/90 hover:text-white text-[14px] font-medium py-1 px-0.5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inscricao"
            onClick={(e) => handleNavClick(e, "#inscricao")}
            className="btn-cta text-[13px] px-5 py-2.5 mt-1 w-full"
          >
            Garantir minha vaga
          </a>
        </div>
      </nav>
    </header>
  );
}
