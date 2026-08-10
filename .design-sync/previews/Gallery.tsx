import { Gallery } from "lps-unyflex";
import { Frame } from "../preview-lib/Frame";
import heroJpg from "../assets/hero.jpg";
import ctaJpg from "../assets/cta-final.jpg";

/* A galeria da /comunicacao está desligada (sem fotos próprias do evento). Aqui
   reusamos os dois assets do sync; o fragmento `#` deixa cada `src` único —
   o componente usa `photo.src` como key do React.

   O `columns: 3` do lp2.css equilibra a altura das colunas: com 4 fotos ele
   monta 2+2+0 e deixa a terceira coluna vazia. Use múltiplos de 3. */

/** A colagem como a seção pede: fotos reais do evento, com legenda curta em
 *  small/600 nas que precisam de contexto — `caption` é por foto, não da
 *  seção. */
export const ColagemComLegendas = () => (
  <Frame>
    <Gallery
      content={{
        title: "A experiência presencial.",
        photos: [
          {
            src: heroJpg,
            alt: "Palestrante diante da plateia no auditório em Curitiba",
            caption: "Auditório em Curitiba — 4 dias de imersão",
          },
          {
            src: ctaJpg,
            alt: "Participantes acompanham uma oficina prática",
            caption: "Oficinas práticas em grupo",
          },
          {
            src: `${heroJpg}#mesa`,
            alt: "Mesa de debate com o público",
          },
          {
            src: `${ctaJpg}#coffee`,
            alt: "Participantes conversam durante o coffee break",
            caption: "Coffee break: networking entre órgãos",
          },
          {
            src: `${heroJpg}#plenaria`,
            alt: "Plenária cheia durante a abertura",
          },
          {
            src: `${ctaJpg}#credenciamento`,
            alt: "Credenciamento dos participantes",
            caption: "Turmas de todo o Paraná",
          },
        ],
      }}
    />
  </Frame>
);

/** Sem nenhuma `caption` a colagem fica só imagem — funciona quando as fotos
 *  já falam sozinhas, e é o formato mais enxuto que a seção aceita. */
export const SemLegendas = () => (
  <Frame>
    <Gallery
      content={{
        title: "A experiência presencial.",
        photos: [
          { src: heroJpg, alt: "Palestrante diante da plateia no auditório" },
          { src: ctaJpg, alt: "Participantes em oficina prática" },
          { src: `${heroJpg}#plenaria`, alt: "Plenária cheia durante a abertura" },
        ],
      }}
    />
  </Frame>
);
