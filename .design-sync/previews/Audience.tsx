import { Audience } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame } from "../preview-lib/Frame";

/** "Para quem" como a /comunicacao usa: 4 grupos em barra de abas (acima de
 *  800px), a primeira ativa com sublinhado accent, e a descrição do grupo em
 *  um painel branco elevado abaixo. Abaixo de 800px o MESMO markup vira
 *  acordeão. */
export const QuatroGrupos = () => (
  <Frame>
    <Audience content={C.audience} />
  </Frame>
);

/** Com `lead` e `closing`, os dois campos opcionais: o lead abaixo do título e
 *  a linha de fechamento depois do painel. Serve quando a seção precisa
 *  qualificar o público antes e depois da lista. */
export const ComLeadEFechamento = () => (
  <Frame>
    <Audience
      content={{
        ...C.audience,
        lead: "São quatro rotinas diferentes dentro do mesmo órgão — o curso trata cada uma pelo que ela responde na prática.",
        closing:
          "Se o seu nome aparece no rodapé da nota oficial, esta capacitação é para você.",
      }}
    />
  </Frame>
);

/** Menos grupos: a barra de abas é `repeat(var(--audience-tabs), auto)`
 *  alinhada à esquerda, então duas abas não esticam para preencher a largura —
 *  o painel abaixo continua ocupando o container inteiro. */
export const DoisGrupos = () => (
  <Frame>
    <Audience
      content={{
        ...C.audience,
        title: "Feito para quem escreve e para quem aprova.",
        groups: C.audience.groups.slice(0, 2),
      }}
    />
  </Frame>
);
