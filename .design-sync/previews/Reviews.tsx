import { Reviews } from "lps-unyflex";
import { Frame } from "../preview-lib/Frame";

/* A seção `reviews` da /comunicacao está desligada até a seleção das avaliações
   reais do Google. Os depoimentos abaixo são de preview — servem para mostrar a
   faixa de nota (display + estrelas + volume + fonte) ao lado dos 3 cards. */

/** O uso canônico: nota alta com a última estrela parcialmente preenchida
 *  (`ratingValue` recorta a fileira em accent sobre a fileira muted). */
export const NotaDoGoogle = () => (
  <Frame>
    <Reviews
      content={{
        rating: "4,9",
        ratingValue: 4.9,
        volume: "465+ avaliações",
        sourceLabel: "Google",
        items: [
          {
            text: "Curso muito bem organizado e aplicável ao dia a dia do município. Voltei com material pronto para usar na semana seguinte.",
            author: "Ana Cláudia M.",
            role: "Assessora de comunicação · Prefeitura",
          },
          {
            text: "A parte de período eleitoral já valeria a inscrição. Saímos sabendo exatamente o que tirar do ar e em que prazo.",
            author: "Diego F.",
            role: "Chefe de gabinete · Câmara Municipal",
          },
          {
            text: "Atendimento atencioso do primeiro contato ao certificado. A documentação para o empenho chegou sem precisarmos cobrar.",
            author: "Roberta S.",
            role: "Controle interno · Autarquia",
          },
        ],
      }}
    />
  </Frame>
);

/** `ratingValue` menor mostra o recorte das estrelas funcionando de verdade —
 *  e `role` é opcional, então a assinatura pode ficar só no nome. */
export const NotaParcialSemCargo = () => (
  <Frame>
    <Reviews
      content={{
        rating: "4,3",
        ratingValue: 4.3,
        volume: "112 respostas",
        sourceLabel: "Formulário de avaliação da turma",
        items: [
          {
            text: "Conteúdo denso e bem encadeado. Faltou tempo para as dinâmicas do último dia.",
            author: "Participante da turma de 2025",
          },
          {
            text: "Os checklists são o que a equipe pequena mais precisava. Já estão colados na parede.",
            author: "Participante da turma de 2025",
          },
          {
            text: "A oficina de nota oficial sob pressão foi o melhor momento dos quatro dias.",
            author: "Participante da turma de 2026",
          },
        ],
      }}
    />
  </Frame>
);
