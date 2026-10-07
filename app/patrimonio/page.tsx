"use client";
import { useEffect } from "react";
import { redirectPreserving } from "@/lib/lp/redirect";

/* LP desativada em 22/09/2026 (turma de 29/09–02/10). Desde 07/10 aponta
   para a turma seguinte, /patrimonio-out26, preservando query e hash. */
export default function PatrimonioPage() {
  useEffect(() => {
    redirectPreserving("/patrimonio-out26");
  }, []);
  return null;
}
