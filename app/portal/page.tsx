"use client";
import { useEffect } from "react";
import { redirectPreserving } from "@/lib/lp/redirect";

/* LP desativada em 18/11/2026 (turma de 20–23/10, já passada). Aponta para a
   turma de 01–04/12, /portal-nov26, preservando query (utm_*, fbclid, c=) e
   hash — o lead passa a sair com produto "portal-nov26" em vez de "portal". */
export default function PortalPage() {
  useEffect(() => {
    redirectPreserving("/portal-nov26");
  }, []);
  return null;
}
