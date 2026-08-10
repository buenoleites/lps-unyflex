import { Plans } from "lps-unyflex";
import { comunicacaoContent as C } from "@/app/comunicacao/content";
import { Frame } from "../preview-lib/Frame";

/** Os 4 planos da /comunicacao: um `highlighted` (borda accent + pílula "Mais
 *  escolhido"), um com `badge`, e as features alinhadas linha a linha entre os
 *  cards — incluído (✓ em accent) vs não incluído (— em muted). */
export const QuatroPlanos = () => (
  <Frame>
    <Plans content={C.plans} />
  </Frame>
);

/** Duas opções é o mínimo do contrato. Sem plano destacado o grid fica neutro
 *  — use `highlighted` só quando houver de fato uma recomendação comercial. */
export const DoisPlanosSemDestaque = () => (
  <Frame>
    <Plans
      content={{
        ...C.plans,
        items: C.plans.items
          .slice(1, 3)
          .map((p) => ({ ...p, highlighted: false, highlightLabel: undefined })),
      }}
    />
  </Frame>
);
