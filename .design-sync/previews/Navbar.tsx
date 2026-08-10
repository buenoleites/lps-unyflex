import { Navbar } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame } from "../preview-lib/Frame";
import logo from "../assets/logo.png";

/* O `logoSrc` do content.tsx é um caminho do site (/logo.png) e não resolve
   fora do Next — no card o asset entra como data-URI. */

/** A navbar da /comunicacao: barra sticky escura com blur, logo à esquerda, as
 *  5 âncoras internas no centro e o CTA em pílula accent à direita. Abaixo de
 *  800px os links somem e sobram logo + CTA. */
export const CincoLinks = () => (
  <Frame>
    <Navbar content={{ ...C.nav, logoSrc: logo }} />
  </Frame>
);

/** Uma LP curta com só duas seções ancoráveis. Os links são centrados no eixo,
 *  então menos itens deixam a barra mais aberta sem desalinhar logo e CTA. */
export const DoisLinks = () => (
  <Frame>
    <Navbar
      content={{
        ...C.nav,
        logoSrc: logo,
        links: [
          { href: "#planos", label: "Planos" },
          { href: "#faq", label: "FAQ" },
        ],
        cta: { href: "#inscricao", label: "Quero me inscrever" },
      }}
    />
  </Frame>
);
