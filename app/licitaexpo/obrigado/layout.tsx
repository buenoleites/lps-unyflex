import type { Metadata } from "next";
import Script from "next/script";
import "../../lp.css";

export const metadata: Metadata = {
  title: "Você está na lista | LicitaExpo",
  robots: { index: false, follow: false },
};

export default function LicitaexpoObrigadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* O pixel já é inicializado pelo layout de /licitaexpo, que envolve esta rota.
          O id precisa ser diferente de "meta-pixel": o next/script deduplica por id e
          descartaria este script, engolindo o evento Lead. */}
      <Script id="meta-pixel-lead" strategy="afterInteractive">{`
        fbq('track', 'Lead');
      `}</Script>
      {children}
    </>
  );
}
