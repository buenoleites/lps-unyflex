"use client";
import { useEffect } from "react";
import { redirectPreserving } from "@/lib/lp/redirect";

/* LP desativada em 22/09/2026. Desde 07/10 aponta para a turma seguinte,
   /tesouraria-nov26, preservando query e hash. */
export default function TesourariaPage() {
  useEffect(() => {
    redirectPreserving("/tesouraria-nov26");
  }, []);
  return null;
}
