import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Personas } from "@/components/sections/Personas";
import { PropostaValor } from "@/components/sections/PropostaValor";
import { Diferencial } from "@/components/sections/Diferencial";
import { Modulos } from "@/components/sections/Modulos";
import { Formato } from "@/components/sections/Formato";
import { ProvasSocial } from "@/components/sections/ProvasSocial";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Personas />
      <PropostaValor />
      <Diferencial />
      <Modulos />
      <Formato />
      <ProvasSocial />
      <CTA />
      <Footer />
    </main>
  );
}
