import type { Metadata, Viewport } from "next";
import "../lp3.css";
import "../licitaexpo/theme.css";
import "./totem.css";
import { SLUG } from "./content";

/* Totem do estande do LicitaExpo (pré-matrícula abr/2027). Vale para as duas
   rotas (quiosque e /consultor):
   - SEM Pixel do Meta e SEM analytics (briefing de 16/11). Não adicionar
     <Script id="meta-pixel…"> aqui.
   - noindex: nenhuma das duas é página de campanha.
   - Ciano de Licitações via .lplx-theme (app/licitaexpo/theme.css). */

export const metadata: Metadata = {
  metadataBase: new URL("https://mkt.unyflex.com.br"),
  title: "LicitaExpo 2027 · Pré-matrícula | Unyflex",
  alternates: { canonical: `/${SLUG}` },
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

// Quiosque: sem zoom por pinça (o layout já usa fonte grande e alvos ≥ 48 px).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0a0e14",
};

export default function TotemLayout({ children }: { children: React.ReactNode }) {
  return <div className="lplx-theme">{children}</div>;
}
