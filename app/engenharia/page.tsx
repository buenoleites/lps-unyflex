"use client";
import { useEffect } from "react";
import { redirectPreserving } from "@/lib/lp/redirect";

/* LP desativada em 22/09/2026. Redireciona para a turma seguinte preservando
   query e hash (desde 07/10). */
export default function EngenhariaPage() {
  useEffect(() => {
    redirectPreserving("/engenharia-nov26");
  }, []);
  return null;
}
