import { Faq } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame } from "../preview-lib/Frame";

/** As 6 perguntas da /comunicacao. O acordeão monta com tudo fechado e abre uma
 *  por vez — não há prop para pré-abrir um item, então o card mostra o estado
 *  de repouso: perguntas em 600, filete entre elas e chevron à direita. */
export const SeisPerguntas = () => (
  <Frame>
    <Faq content={C.faq} />
  </Frame>
);

/** Um FAQ curto, de 3 perguntas — a lista fica com metade da altura e o bloco
 *  respira dentro dos 800px de largura máxima. A resposta é ReactNode: aceita
 *  <strong> e outros blocos, não só texto. */
export const TresPerguntas = () => (
  <Frame>
    <Faq
      content={{
        title: "Dúvidas sobre a contratação",
        items: [
          {
            q: "Posso pagar com nota de empenho?",
            a: (
              <>
                Sim. Trabalhamos com nota de empenho e prazo de{" "}
                <strong>até 7 dias após o curso</strong> para o pagamento.
              </>
            ),
          },
          {
            q: "Que documentos vocês emitem para o meu órgão?",
            a: "Fornecemos toda a documentação necessária para a contratação — proposta, certidões e nota fiscal.",
          },
          {
            q: "Posso ir como pessoa física?",
            a: "Sim — aceitamos cartão e PIX para pessoa física.",
          },
        ],
      }}
    />
  </Frame>
);
