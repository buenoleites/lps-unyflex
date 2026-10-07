"use client";
import { useEffect } from "react";
import { redirectPreserving } from "@/lib/lp/redirect";

/* Rota de teste da LicitaExpo no lp2 (04/08–06/10/2026), aposentada em
   07/10/2026: a /licitaexpo oficial já está no lp3. Redireciona preservando
   query e hash; content/layout/opengraph ficam como estão (padrão de 22/09). */
export default function LicitaexpoV2Page() {
  useEffect(() => {
    redirectPreserving("/licitaexpo");
  }, []);
  return null;
}
