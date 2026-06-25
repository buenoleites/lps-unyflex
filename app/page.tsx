import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Personas } from "@/components/sections/Personas";
import { PropostaValor } from "@/components/sections/PropostaValor";
import { Diferencial } from "@/components/sections/Diferencial";
import { Formato } from "@/components/sections/Formato";
import { ProvasSocial } from "@/components/sections/ProvasSocial";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { StickyCtaMobile } from "@/components/ui/StickyCtaMobile";

export default function Home() {
  return (
    <main id="conteudo-principal">
      <div className="relative">
        <Header />
        <FadeIn><Hero /></FadeIn>
      </div>
      <FadeIn><Personas /></FadeIn>
      <FadeIn><PropostaValor /></FadeIn>
      <FadeIn><Diferencial /></FadeIn>
      <FadeIn><Formato /></FadeIn>
      <FadeIn><ProvasSocial /></FadeIn>
      <FadeIn><CTA /></FadeIn>
      <FadeIn><Footer /></FadeIn>
      <StickyCtaMobile />
    </main>
  );
}
