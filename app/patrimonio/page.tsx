"use client";
import { useEffect } from "react";
import { redirectPreserving } from "@/lib/lp/redirect";

/* LP desativada em 22/09/2026 (turma de 29/09–02/10). Desde 08/10 aponta
   para a turma de 16/11, /patrimonio-nov26, preservando query e hash
   (antes apontava para /patrimonio-out26, que também foi desativada). */
export default function PatrimonioPage() {
  useEffect(() => {
    redirectPreserving("/patrimonio-nov26");
  }, []);
  return null;
}
