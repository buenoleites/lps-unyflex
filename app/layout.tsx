import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Licitações com Inteligência Artificial | Curso presencial em Curitiba",
  description:
    "Curso presencial da Unyflex em Curitiba para servidores que precisam usar IA em DFD, ETP, TR e mapa de riscos com mais critério, segurança técnica e aplicação prática na Lei 14.133.",
  keywords: [
    "licitações com inteligência artificial",
    "IA nas licitações",
    "inteligência artificial na Lei 14.133",
    "DFD com IA",
    "ETP com IA",
    "TR com IA",
    "mapa de riscos com IA",
  ],
  openGraph: {
    title: "Licitações com Inteligência Artificial | Curso presencial em Curitiba",
    description:
      "Capacitação presencial para servidores que precisam usar IA em DFD, ETP, TR e mapa de riscos sem gerar documentos genéricos ou perder segurança técnica.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
