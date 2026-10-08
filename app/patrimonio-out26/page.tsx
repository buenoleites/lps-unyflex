"use client";
import { useEffect } from "react";
import { redirectPreserving } from "@/lib/lp/redirect";

/* LP desativada em 08/10/2026: a turma de 20/10 foi para 16/11. Aponta para
   /patrimonio-nov26 preservando query (UTMs, fbclid, ?c=) e hash. O content e
   o layout ficam no lugar, como nas outras rotas desativadas. */
export default function PatrimonioOut26Page() {
  useEffect(() => {
    redirectPreserving("/patrimonio-nov26");
  }, []);
  return null;
}
