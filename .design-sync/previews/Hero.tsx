import { Hero } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame } from "../preview-lib/Frame";
import heroJpg from "../assets/hero.jpg";

/** O hero como a /comunicacao usa: foto de fundo com scrim, eyebrow, display
 *  com uma <Kw>, subtítulo, linha de públicos, CTA e linha de meta. */
export const ComFoto = () => (
  <Frame>
    <Hero content={{ ...C.hero, bgSrc: heroJpg }} />
  </Frame>
);

/** Sem `bgSrc` o `.lp2-hero` cai no fundo `--bg-dark` chapado. É o fallback
 *  desenhado no lp2.css — a seção continua correta sem foto. */
export const SemFoto = () => (
  <Frame>
    <Hero content={{ ...C.hero, bgSrc: undefined }} />
  </Frame>
);
