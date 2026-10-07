"use client";
import { useEffect } from "react";
import { redirectPreserving } from "@/lib/lp/redirect";

/* Raiz do site: encaminha para a LP principal preservando query e hash
   (antes descartava as UTMs e o fbclid de quem caía em /). */
export default function Root() {
  useEffect(() => {
    redirectPreserving("/licitacao-out26");
  }, []);
  return null;
}
