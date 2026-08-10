import { Schedule } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame } from "../preview-lib/Frame";

/* A timeline tem dois desenhos: horizontal acima de 800px (grade de 4 colunas
   com a conectora atravessando os nós) e vertical abaixo disso. O desenho
   vertical não cabe na altura de captura deste componente — está anotado em
   .design-sync/learnings/onda1.md. */

/** A programação da /comunicacao: 4 dias como jornada horizontal, nó numerado
 *  com anel accent, data em h3 e os painéis do dia em muted — com <em> para o
 *  que é prática/oficina. Quatro é o número que a grade assume. */
export const QuatroDias = () => (
  <Frame>
    <Schedule content={C.schedule} />
  </Frame>
);

/** A mesma jornada com `hours` no uso literal do campo (faixa de horário) e um
 *  módulo por dia. Sem os parênteses de prática a coluna vira uma linha só e a
 *  timeline fica compacta — é o formato de um evento de agenda fechada. */
export const JornadaEnxuta = () => (
  <Frame>
    <Schedule
      content={{
        title: "Programação",
        days: [
          {
            label: "Dia 1",
            hours: "09h às 18h",
            panels: "Monitoramento, Crises e Desinformação",
          },
          {
            label: "Dia 2",
            hours: "09h às 18h",
            panels: "Jornalismo e Rotina Governamental",
          },
          {
            label: "Dia 3",
            hours: "09h às 18h",
            panels: "Mídias Sociais e Marketing Digital",
          },
          {
            label: "Dia 4",
            hours: "09h às 13h",
            panels: "Contratação, Impulsionamento e Período Eleitoral",
          },
        ],
      }}
    />
  </Frame>
);
