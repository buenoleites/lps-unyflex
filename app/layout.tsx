import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://mkt.unyflex.com.br/licitacao";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  alternates: {
    canonical: "/licitacao",
  },
  openGraph: {
    title: "Licitações com Inteligência Artificial | Curso presencial em Curitiba",
    description:
      "Capacitação presencial para servidores que precisam usar IA em DFD, ETP, TR e mapa de riscos sem gerar documentos genéricos ou perder segurança técnica.",
    url: "/",
    siteName: "Unyflex",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Licitações com Inteligência Artificial — Curso presencial Unyflex em Curitiba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Licitações com Inteligência Artificial | Curso presencial em Curitiba",
    description:
      "Capacitação presencial para servidores que precisam usar IA em DFD, ETP, TR e mapa de riscos sem gerar documentos genéricos ou perder segurança técnica.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-full">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#1565c0] focus:text-white focus:font-bold focus:px-4 focus:py-2 focus:rounded focus:outline-none"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
