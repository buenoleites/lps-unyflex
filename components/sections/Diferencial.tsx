"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 4200;

const cards = [
  {
    title: "Planejamento com IA",
    desc: "Organização de contexto, informações e caminhos da contratação.",
  },
  {
    title: "ETP e TR com IA",
    desc: "Apoio para estruturar estudos, requisitos, obrigações e critérios.",
  },
  {
    title: "Mapa de riscos com IA",
    desc: "Identificação, análise e respostas para riscos da contratação.",
  },
  {
    title: "Prática de prompts",
    desc: "Comandos melhores, revisão técnica e uso responsável da IA.",
  },
];

const CARD_W_DESKTOP = 470;
const CARD_W_MOBILE = "calc(100vw - 48px)";
const CARD_H_DESKTOP = 428;
const CARD_H_MOBILE = 326;
const GAP_DESKTOP = 20;
const GAP_MOBILE = 16;

function isMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 520px)").matches;
}

export function Diferencial() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [hovering, setHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const perView = mobile ? 1 : 2;
  const maxIndex = Math.max(0, cards.length - perView);
  const cardW = mobile ? 0 : CARD_W_DESKTOP; // 0 used as sentinel; offset calc below
  const gap = mobile ? GAP_MOBILE : GAP_DESKTOP;
  const cardH = mobile ? CARD_H_MOBILE : CARD_H_DESKTOP;

  const getOffset = useCallback((idx: number) => {
    if (typeof window === "undefined") return 0;
    const mob = isMobile();
    const cw = mob
      ? window.innerWidth - 48
      : CARD_W_DESKTOP;
    const g = mob ? GAP_MOBILE : GAP_DESKTOP;
    return idx * (cw + g);
  }, []);

  const moveTo = useCallback(
    (index: number) => {
      const mob = isMobile();
      const perV = mob ? 1 : 2;
      const max = Math.max(0, cards.length - perV);
      let next = index;
      if (next > max) next = 0;
      if (next < 0) next = max;
      setCurrent(next);
    },
    []
  );

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      setCurrent((prev) => {
        const mob = isMobile();
        const perV = mob ? 1 : 2;
        const max = Math.max(0, cards.length - perV);
        return prev >= max ? 0 : prev + 1;
      });
    }, AUTOPLAY_MS);
  }, []);

  // restart autoplay whenever current changes
  useEffect(() => {
    startAutoplay();
    return () => { if (autoplayRef.current) clearTimeout(autoplayRef.current); };
  }, [current, startAutoplay]);

  // detect mobile
  useEffect(() => {
    function update() { setMobile(isMobile()); }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // clamp current on resize
  useEffect(() => {
    const max = Math.max(0, cards.length - perView);
    if (current > max) setCurrent(max);
  }, [mobile, current, perView]);

  // intersection observer for entrance animation
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleArrow(dir: number) {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    moveTo(current + dir);
    startAutoplay();
  }

  const offset = getOffset(current);

  const arrowBase: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    zIndex: 99,
    width: 32,
    height: 54,
    border: "none",
    outline: "none",
    background: "transparent",
    boxShadow: "none",
    color: "rgba(15,15,15,0.36)",
    fontFamily: "Arial, sans-serif",
    fontSize: 42,
    lineHeight: 1,
    fontWeight: 200,
    cursor: "pointer",
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 180ms ease, color 180ms ease",
    opacity: hovering || mobile ? 1 : 0,
    pointerEvents: hovering || mobile ? "auto" : "none",
  };

  return (
    <section id="conteudo" className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4">
        {/* Card superior full-width com imagem de fundo */}
        <div className="relative rounded-[26px] sm:rounded-[30px] overflow-hidden h-64 sm:h-80 flex items-center justify-center">
          <img
            src="/imagens/seção4/imagem_seção4.jpg"
            alt="Curso presencial Unyflex"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
              O curso mostra como usar IA sem deixar o processo frágil.
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-6">
              Planejamento, ETP, TR, PCA e mapa de riscos trabalhados com foco
              em prática, revisão humana e segurança técnica.
            </p>
            <a href="#inscricao" className="btn-cta px-7 py-3 text-sm sm:text-base">
              Garantir minha vaga
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          style={{
            width: "100%",
            height: cardH,
            background: "#ffffff",
            overflow: "hidden",
            position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(34px)",
            transition: "opacity 700ms ease, transform 700ms ease",
          }}
        >
          {/* Seta anterior */}
          <button
            type="button"
            aria-label="Card anterior"
            onClick={() => handleArrow(-1)}
            style={{ ...arrowBase, left: mobile ? 4 : 8, transform: "translateY(-50%)" }}
          >
            ‹
          </button>

          {/* Viewport */}
          <div
            style={{
              width: "100%",
              height: cardH,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Track */}
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                gap: gap,
                height: cardH,
                width: "max-content",
                transform: `translate3d(-${offset}px, 0, 0)`,
                transition: "transform 820ms cubic-bezier(0.16, 1, 0.3, 1)",
                willChange: "transform",
              }}
            >
              {cards.map((c) => (
                <article
                  key={c.title}
                  style={{
                    width: mobile ? `calc(100vw - 48px)` : CARD_W_DESKTOP,
                    minWidth: mobile ? `calc(100vw - 48px)` : CARD_W_DESKTOP,
                    maxWidth: mobile ? `calc(100vw - 48px)` : CARD_W_DESKTOP,
                    height: cardH,
                    minHeight: cardH,
                    maxHeight: cardH,
                    background: "#F4EEE2",
                    borderRadius: mobile ? 26 : 30,
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                    padding: mobile ? "32px 28px" : "54px 48px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    boxSizing: "border-box",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "#0f0f0f",
                      fontSize: mobile ? 30 : 42,
                      lineHeight: mobile ? 1.05 : 1.04,
                      letterSpacing: mobile ? "-1.1px" : "-1.7px",
                      fontWeight: 700,
                      maxWidth: 365,
                      textAlign: "left",
                    }}
                  >
                    {c.title}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      padding: 0,
                      marginTop: mobile ? 16 : 24,
                      color: "rgba(15,15,15,0.68)",
                      fontSize: mobile ? 18 : 24,
                      lineHeight: 1.32,
                      letterSpacing: mobile ? undefined : "-0.45px",
                      fontWeight: 400,
                      maxWidth: 370,
                      textAlign: "left",
                    }}
                  >
                    {c.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Seta próximo */}
          <button
            type="button"
            aria-label="Próximo card"
            onClick={() => handleArrow(1)}
            style={{ ...arrowBase, right: mobile ? 4 : 8, transform: "translateY(-50%)" }}
          >
            ›
          </button>
        </div>

        {/* Dots de paginação */}
        <div className="flex items-center justify-center gap-2 pt-1">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para card ${i + 1}`}
              onClick={() => { if (autoplayRef.current) clearTimeout(autoplayRef.current); moveTo(i); startAutoplay(); }}
              style={{
                width: current === i ? 20 : 8,
                height: 8,
                borderRadius: 999,
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: current === i ? "#00BFF3" : "rgba(15,15,15,0.20)",
                transition: "width 280ms ease, background 280ms ease",
              }}
            />
          ))}
        </div>

        {/* Posicionamento */}
        <div className="max-w-3xl pt-10 border-t border-gray-100 mt-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Não basta pedir um documento para a IA.{" "}
            <span className="text-[#00BFF3]">
              Você precisa sustentar o que ela entrega.
            </span>
          </h2>
          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            O curso mostra como usar IA como apoio na fase preparatória, sem
            terceirizar a decisão do servidor.
          </p>
        </div>
      </div>
    </section>
  );
}
