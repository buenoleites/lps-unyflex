import type { Metadata } from "next";

// noindex vem do layout pai. Nenhum link do quiosque aponta para cá.
export const metadata: Metadata = {
  title: "LicitaExpo 2027 · Consultor | Unyflex",
  alternates: { canonical: "/totem-licitaexpo-abr27/consultor" },
};

export default function ConsultorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
