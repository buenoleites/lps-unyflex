import { Section, MediaBackdrop, Kw } from "lps-unyflex";
import { Frame } from "../preview-lib/Frame";
import ctaJpg from "../assets/cta-final.jpg";

/* O shell genérico das seções: aplica o tom, o container de 960px e o reveal
   por scroll. Não recebe `content` — o conteúdo é `children`. O ritmo do
   template é alternar os tons seção a seção; o accent nunca vira fundo. */

/** `tone="dark"` — fundo `--bg-dark`. É o tom das seções de tensão (o problema,
 *  a prova) e o único em que o accent aparece em cheio no texto. */
export const Escuro = () => (
  <Frame>
    <Section id="pv-escuro" tone="dark" labelledBy="pv-escuro-title">
      <div className="lp2-sec-head">
        <h2 id="pv-escuro-title" className="lp2-h2">
          Os incêndios que a comunicação apaga todo dia — <Kw>um a um</Kw>.
        </h2>
        <p className="lp2-sec-head__lead">
          Crise, fake news e período eleitoral chegam juntos e sem protocolo.
        </p>
      </div>
    </Section>
  </Frame>
);

/** `tone="light"` — fundo `--bg-light`, o cinza quente do miolo da página. O
 *  accent contextual vira `--accent-deep` para manter contraste sobre claro. */
export const Claro = () => (
  <Frame>
    <Section id="pv-claro" tone="light" labelledBy="pv-claro-title">
      <div className="lp2-sec-head">
        <h2 id="pv-claro-title" className="lp2-h2">
          Feito para quem responde pela comunicação do órgão.
        </h2>
        <p className="lp2-sec-head__lead">
          Assessoria de imprensa, social media, coordenação e chefia de
          gabinete.
        </p>
      </div>
    </Section>
  </Frame>
);

/** `tone="white"` — fundo `--bg-white`. Usado onde a leitura é longa (FAQ,
 *  planos) para separar do bloco claro anterior sem trocar a cor do texto. */
export const Branco = () => (
  <Frame>
    <Section id="pv-branco" tone="white" labelledBy="pv-branco-title">
      <div className="lp2-sec-head">
        <h2 id="pv-branco-title" className="lp2-h2">
          Perguntas frequentes
        </h2>
        <p className="lp2-sec-head__lead">
          Contratação, empenho, certificado e período eleitoral.
        </p>
      </div>
    </Section>
  </Frame>
);

/** `tone="photo"` + `media` — o mesmo shell escuro com foto em sangria atrás do
 *  container (via `MediaBackdrop`, que já traz o scrim de legibilidade). Sem a
 *  foto a seção continua correta, só escura. */
export const ComFoto = () => (
  <Frame>
    <Section id="pv-foto" tone="photo" labelledBy="pv-foto-title" media={<MediaBackdrop src={ctaJpg} textSide="left" />}>
      <div className="lp2-sec-head">
        <h2 id="pv-foto-title" className="lp2-h2">
          Garanta sua vaga no Comunicação Pública 360º
        </h2>
        <p className="lp2-sec-head__lead">
          4 dias · 17 horas · Curitiba-PR · 01 a 04 de setembro de 2026
        </p>
      </div>
    </Section>
  </Frame>
);
