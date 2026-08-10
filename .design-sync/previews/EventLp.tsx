import { EventLp } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame } from "../preview-lib/Frame";
import heroJpg from "../assets/hero.jpg";
import ctaJpg from "../assets/cta-final.jpg";
import logoPng from "../assets/logo.png";
import parceiroPng from "../assets/parceiro-unypublica.png";

/* O EventLp monta a LP inteira (13 seções + navbar, sticky e rodapé) e já traz
   o próprio Lp2Root por dentro. Os caminhos de imagem do content.tsx são
   absolutos da rota (/comunicacao/hero.jpg) e não resolvem fora do app, então
   entram aqui os assets do sync. */
const CONTEUDO = {
  ...C,
  nav: { ...C.nav, logoSrc: logoPng },
  hero: { ...C.hero, bgSrc: heroJpg },
  form: { ...C.form, bgSrc: ctaJpg },
  footer: {
    ...C.footer,
    logoSrc: logoPng,
    partners: C.footer.partners.map((p) => ({ ...p, src: parceiroPng })),
  },
};

/** A LP de comunicação pública montada inteira a partir de um único objeto
 *  `EventLpContent`. A ordem das seções é fixa no template e as opcionais
 *  (quote, speakers, gallery, reviews) ficam de fora só por não existirem na
 *  config desta LP.
 *
 *  Sem altura fixa no wrapper: o card já é `single` com viewport de 2000px (o
 *  teto do harness, package-capture.mjs:145), e é ele que decide o quanto da
 *  página cabe — navbar, hero, o ticker de prova e a entrada de "para quem".
 *  Um `height` aqui só brigaria com esse recorte. */
export const LpDeComunicacao = () => (
  <Frame>
    <EventLp content={CONTEUDO} />
  </Frame>
);
