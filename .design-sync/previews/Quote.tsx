import { Quote } from "lps-unyflex";
import { Frame } from "../preview-lib/Frame";
import heroJpg from "../assets/hero.jpg";
import ctaJpg from "../assets/cta-final.jpg";

/* A seção `quote` está desligada no content.tsx da /comunicacao (o briefing não
   aprovou citação). A copy abaixo foi escrita no tom da LP para exercitar os
   três estados do componente: com apoio, com autoria e seca. */

/** O uso canônico: manifesto editorial, sem atribuição. `bgSrc` é obrigatório —
 *  não há fallback de fundo aqui, ao contrário do Hero. */
export const ManifestoSemAutor = () => (
  <Frame>
    <Quote
      content={{
        text: "Comunicação pública não é opinião de gabinete. É serviço — e quando a informação certa não sai a tempo, o boato ocupa o lugar dela.",
        support:
          "É por isso que os quatro dias começam por protocolo, e não por ferramenta.",
        bgSrc: heroJpg,
      }}
    />
  </Frame>
);

/** Com `author`, a citação vira depoimento: a atribuição entra em small
 *  maiúsculo abaixo do texto, com `role` separado por ponto médio. */
export const ComAutor = () => (
  <Frame>
    <Quote
      content={{
        text: "Em ano eleitoral a pergunta não é se a sua equipe vai errar. É quanto tempo ela leva para corrigir — e se alguém escreveu o passo a passo antes da crise.",
        author: {
          name: "Equipe pedagógica Unyflex",
          role: "Comunicação Pública 360º",
        },
        bgSrc: heroJpg,
      }}
    />
  </Frame>
);

/** Sem `support` e sem `author`, sobre outra foto: a citação curta ocupa a
 *  viewport inteira e funciona como respiro entre duas seções densas. */
export const CitacaoCurta = () => (
  <Frame>
    <Quote
      content={{
        text: "O que não sair do ar no prazo tem nome, cargo e responsabilização.",
        bgSrc: ctaJpg,
      }}
    />
  </Frame>
);
