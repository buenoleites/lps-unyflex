"use client";
import { useEffect } from "react";
import { redirectPreserving } from "@/lib/lp/redirect";

/* LP desativada em 22/09/2026 (turma de 04–07/08 já passada). Redireciona para
   a /reforma-tributaria preservando query e hash (desde 07/10). */
export default function ReformaPage() {
  useEffect(() => {
    redirectPreserving("/reforma-tributaria");
  }, []);
  return null;
}
