import { Footer } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame } from "../preview-lib/Frame";
import logo from "../assets/logo.png";
import parceiro from "../assets/parceiro-unypublica.png";

/* Os `src` do content.tsx são caminhos do site e não resolvem fora do Next —
   no card logo e parceiro entram como data-URI. */
const footer = {
  ...C.footer,
  logoSrc: logo,
  partners: C.footer.partners.map((p) => ({ ...p, src: parceiro })),
};

/** O rodapé da /comunicacao: logo, o logo da parceira em marca branca
 *  (`invert`), a linha de sociais — com o Google levando o rótulo "465+
 *  avaliações" ao lado do ícone — e o copyright. */
export const Padrao = () => (
  <Frame>
    <Footer content={footer} />
  </Frame>
);

/** Com os dois campos que a /comunicacao não usa: `partnersLabel` acima dos
 *  logos e a fileira de links legais. É a configuração de uma LP que precisa
 *  expor política de privacidade e termos. */
export const ComLegalELabel = () => (
  <Frame>
    <Footer
      content={{
        ...footer,
        partnersLabel: "Uma iniciativa Unyflex, com a Faculdade Unypública.",
        legal: [
          { href: "/privacidade", label: "Política de privacidade" },
          { href: "/termos", label: "Termos de uso" },
        ],
      }}
    />
  </Frame>
);

/** O mínimo: sem parceiros, sem links legais e com uma única rede sem rótulo —
 *  só o ícone. Cada bloco liga pela presença do dado, então o rodapé encolhe
 *  para logo + rede + copyright. */
export const Enxuto = () => (
  <Frame>
    <Footer
      content={{
        ...footer,
        partners: [],
        legal: [],
        social: [
          { kind: "instagram", href: "https://instagram.com/unyflex" },
        ],
      }}
    />
  </Frame>
);
