import { Compare } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame } from "../preview-lib/Frame";

/** O comparativo da /comunicacao: 7 linhas entre presencial e online ao vivo.
 *  Acima de 800px é uma tabela de verdade — rótulo à esquerda em 600, ✓ em
 *  accent e — em muted centralizados. */
export const PresencialOuOnline = () => (
  <Frame>
    <Compare content={C.compare!} />
  </Frame>
);

/** Poucas linhas e outro par de colunas. A seção também serve para separar dois
 *  planos quando a diferença entre eles é curta demais para um card próprio. */
export const TresLinhas = () => (
  <Frame>
    <Compare
      content={{
        title: "BasicClass ou MasterClass?",
        columns: ["BasicClass", "MasterClass"],
        rows: [
          { label: "Capacitação prática em 3 dias", a: true, b: false },
          { label: "Capacitação prática em 4 dias", a: false, b: true },
          { label: "Certificado e coffee breaks gourmet", a: true, b: true },
          { label: "Desconto na pós-graduação", a: false, b: true },
        ],
      }}
    />
  </Frame>
);
