import { Speakers } from "lps-unyflex";
import { Frame } from "../preview-lib/Frame";
import heroJpg from "../assets/hero.jpg";
import ctaJpg from "../assets/cta-final.jpg";

/* A bancada da /comunicacao ainda não foi confirmada (a chave `speakers` está
   comentada no content.tsx, de propósito). Os professores abaixo existem só
   para o preview — servem para mostrar a hierarquia do card: a INSTITUIÇÃO em
   accent vem antes do nome, e o quadro de foto é 4:5.

   São 6 porque o contrato pede "4 a 8" e a grade é de 3 colunas acima de
   1000px: 6 mostra as duas fileiras alinhadas, que é o caso real. O
   `min-height` da linha de instituição existe justamente para os cards não
   desalinharem quando um nome de órgão ocupa duas linhas e outro não. */
const BANCADA = [
  {
    name: "Marina Alcântara",
    institution: "Prefeitura de Curitiba",
    bio: "Sala de crise da comunicação municipal em período eleitoral.",
  },
  {
    name: "Rafael Munhoz",
    institution: "Tribunal de Contas do Paraná",
    bio: "Media training de porta-vozes e resposta a pauta negativa.",
  },
  {
    name: "Juliana Peres",
    institution: "Câmara Municipal de Londrina",
    bio: "Redes institucionais, monitoramento e fluxo com a Ouvidoria.",
  },
  {
    name: "Eduardo Kaminski",
    institution: "Procuradoria-Geral do Município",
    bio: "Publicidade institucional, Art. 37 e vedações do período eleitoral.",
  },
  {
    name: "Patrícia Nogueira",
    institution: "Secretaria de Estado da Comunicação Social",
    bio: "Campanhas públicas, briefing com agência e medição de resultado.",
  },
  {
    name: "Vinícius Baptista",
    institution: "Controladoria-Geral da União",
    bio: "LGPD aplicada à comunicação e tratamento de dados do cidadão.",
  },
];

/** O estado real de uma bancada em confirmação: os dois primeiros já têm
 *  retrato, o resto ainda não. É o caso que justifica o desenho do componente —
 *  `photoSrc` preenche o quadro 4:5 com `object-fit: cover` e foco no alto
 *  (`object-position: 50% 20%`), e quem não tem foto recebe o gradiente de
 *  fallback **na mesma proporção**, então a grade não desalinha. */
export const BancadaParcial = () => (
  <Frame>
    <Speakers
      content={{
        title: "Quem vai ministrar.",
        items: BANCADA.map((s, i) => ({
          ...s,
          photoSrc: i === 0 ? heroJpg : i === 1 ? ctaJpg : null,
        })),
      }}
    />
  </Frame>
);

/** `photoSrc: null` é o estado legítimo enquanto o retrato não chega: o quadro
 *  mantém a proporção 4:5 e recebe o gradiente de fallback do lp2.css, então a
 *  grade não desalinha entre um professor com foto e outro sem. */
export const SemFoto = () => (
  <Frame>
    <Speakers
      content={{
        title: "Quem vai ministrar.",
        items: BANCADA.map((s) => ({ ...s, photoSrc: null })),
      }}
    />
  </Frame>
);
