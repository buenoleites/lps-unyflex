"use client";
import { useEffect } from "react";

export default function ReformaPage() {
  useEffect(() => {
    window.location.replace("/reforma-tributaria");
  }, []);
  return null;
}
