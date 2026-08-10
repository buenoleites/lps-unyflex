import { FormSection } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame } from "../preview-lib/Frame";
import ctaJpg from "../assets/cta-final.jpg";
import heroJpg from "../assets/hero.jpg";

/** A seção de inscrição como a /comunicacao usa: foto em sangria com scrim
 *  central, headline e linha de meta centralizadas, e o LeadForm dentro do
 *  cartão elevado. Os campos são fixos — só headline, meta, foto e parâmetros
 *  de envio entram por `content`. */
export const SobreFoto = () => (
  <Frame>
    <FormSection content={{ ...C.form, bgSrc: ctaJpg }} />
  </Frame>
);

/** `meta` é opcional: sem a linha de data/cidade o cabeçalho fica só na
 *  headline. Outra foto de fundo, para mostrar que o scrim central sustenta a
 *  legibilidade independente da imagem. */
export const SemMeta = () => (
  <Frame>
    <FormSection
      content={{
        ...C.form,
        title: "Reserve sua vaga na turma de setembro",
        meta: undefined,
        submitLabel: "Quero minha vaga",
        bgSrc: heroJpg,
      }}
    />
  </Frame>
);
