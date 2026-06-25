import type { Metadata } from "next";
import "../lp.css";

export const metadata: Metadata = {
  title: "IA na Fase Preparatória de Licitações | Curso Presencial | Unyflex",
  description:
    "Curso presencial em Curitiba para servidores e profissionais de licitação. Aprenda a usar IA na elaboração de DFD, ETP, TR, PCA e mapa de riscos com segurança técnica e conformidade com a Lei 14.133.",
  keywords: [
    "licitação",
    "lei 14.133",
    "ETP",
    "TR",
    "PCA",
    "DFD",
    "mapa de riscos",
    "inteligência artificial",
    "compras públicas",
    "fase preparatória",
    "curso presencial",
    "Curitiba",
  ],
  openGraph: {
    title: "IA na Fase Preparatória de Licitações | Unyflex",
    description:
      "Domine DFD, ETP, TR, PCA e mapa de riscos com apoio de IA. Curso presencial em Curitiba, 28 a 31 de julho de 2025.",
    type: "website",
  },
};

export default function LicitacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
