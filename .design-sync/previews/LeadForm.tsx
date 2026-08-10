import { LeadForm } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame } from "../preview-lib/Frame";

/* O LeadForm é a exceção da convenção: não recebe `content`, e sim os
   parâmetros de envio (formId, rótulo do botão, destino de obrigado). Os campos
   são fixos porque alimentam o CRM. Ele só faz rede no submit. */

/** Como a FormSection o usa: dentro do `.lp2-form-card` (superfície elevada,
 *  borda 1px, 720px de largura máxima). Grid de 2 colunas, órgão e o toggle
 *  "É servidor público?" ocupando a linha inteira, submit em largura total. */
export const NoCartao = () => (
  <Frame style={{ padding: 8 }}>
    <div className="lp2-form-card">
      <LeadForm
        formId={C.form.formId}
        submitLabel={C.form.submitLabel}
        thankYou={C.form.thankYou}
      />
    </div>
  </Frame>
);

/** Sem cartão o formulário não traz superfície própria: herda o fundo escuro da
 *  seção e encosta na largura disponível. Use assim só quando a página já tiver
 *  um contêiner — do contrário, envolva no `.lp2-form-card`. */
export const SemCartao = () => (
  <Frame style={{ padding: 8 }}>
    <LeadForm
      formId="lp-comunicacao"
      submitLabel="Quero minha vaga"
      thankYou={{ url: "/obrigado", withPii: false }}
    />
  </Frame>
);
