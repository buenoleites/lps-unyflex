import { ProblemGrid } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame } from "../preview-lib/Frame";

/** O bento da /comunicacao: 7 cards sobre `--bg-dark`, o primeiro ocupando
 *  duas colunas (card-síntese) e a numeração 01/02… em accent. */
export const SeteCards = () => (
  <Frame>
    <ProblemGrid content={C.problem} />
  </Frame>
);

/** O teto do contrato: 10 cards. A assimetria se mantém — o primeiro continua
 *  duplo e as linhas seguintes fecham de 3 em 3. Acima disso o grid vira uma
 *  parede e a seção perde a hierarquia. */
export const DezCards = () => (
  <Frame>
    <ProblemGrid
      content={{
        ...C.problem,
        items: [
          ...C.problem.items,
          {
            title: "Foto sem autorização de uso",
            desc: "A imagem do cidadão em campanha institucional exige base legal. Publicar sem ela é incidente de LGPD, não descuido.",
          },
          {
            title: "Campanha sem medição",
            desc: "Alcance, engajamento e custo por resultado não entram em relatório — e a comunicação vira a primeira rubrica cortada.",
          },
          {
            title: "Gabinete que publica por fora",
            desc: "Perfis paralelos de secretarias e assessores falam sem alinhamento e contradizem a nota oficial no mesmo dia.",
          },
        ],
      }}
    />
  </Frame>
);
