"use client";

import { useEffect, useState } from "react";

export function StickyCtaMobile() {
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
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#071016]/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 transition-transform duration-300 ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      aria-hidden={hidden}
    >
      <a
        href="#inscricao"
        className="block w-full bg-[#1565c0] hover:bg-[#0e5aaf] text-white font-bold py-3.5 rounded text-sm text-center transition-colors"
      >
        Garantir minha vaga
      </a>
    </div>
  );
}
