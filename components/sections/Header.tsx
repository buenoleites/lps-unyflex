"use client";

import { useState } from "react";

const navLinks = [
  { label: "Público", href: "#publico" },
  { label: "Curso", href: "#curso" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Formato", href: "#formato" },
  { label: "Docentes", href: "#docentes" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#071016]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-white font-bold text-lg tracking-tight">
          uni<span className="text-[#1565c0]">flex</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#inscricao"
          className="hidden sm:inline-flex items-center bg-[#1565c0] hover:bg-[#0e5aaf] text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
        >
          Garantir minha vaga
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#071016]/98 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/80 text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inscricao"
            className="mt-2 bg-[#1565c0] text-white text-sm font-semibold px-5 py-3 rounded text-center"
            onClick={() => setMenuOpen(false)}
          >
            Garantir minha vaga
          </a>
        </div>
      )}
    </header>
  );
}
