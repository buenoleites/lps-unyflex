/**
 * Entry do design system lp2 para o claude.ai/design (skill `design-sync`).
 *
 * Existe por dois motivos mecânicos do conversor:
 *
 * 1. Os componentes de `components/lp2/` são todos `export default`, e o
 *    conversor sintetizaria a entry como `export * from "<arquivo>"` — que não
 *    reexporta defaults. Sem este barrel o bundle sairia com zero exports.
 * 2. `package.json.types` aponta para o `.d.ts` gerado a partir deste arquivo;
 *    o `dirname` dele é a raiz do glob de declarações que o conversor lê para
 *    extrair as props de cada componente.
 *
 * Os imports de CSS entram no grafo de módulos para o esbuild emitir o
 * `_ds_bundle.css` (na ordem: template → tema da rota → tokens do sync).
 *
 * Este arquivo não é importado pelo app Next — mexer nele não afeta o build
 * das LPs. Ao adicionar um componente em `components/lp2/`, adicione-o aqui.
 */
import "./app/lp2.css";
import "./app/comunicacao/theme.css";
import "./.design-sync/ds-tokens.css";

// Raiz e primitivos de layout
export { default as Lp2Root } from "./components/lp2/Lp2Root";
export { default as Section } from "./components/lp2/Section";
export { default as MediaBackdrop } from "./components/lp2/MediaBackdrop";
export { default as Kw } from "./components/lp2/Kw";

// Cromo da página
export { default as Navbar } from "./components/lp2/Navbar";
export { default as Footer } from "./components/lp2/Footer";
export { default as StickyCta } from "./components/lp2/StickyCta";

// Seções
export { default as Hero } from "./components/lp2/Hero";
export { default as ProofTicker } from "./components/lp2/ProofTicker";
export { default as Audience } from "./components/lp2/Audience";
export { default as ProblemGrid } from "./components/lp2/ProblemGrid";
export { default as Schedule } from "./components/lp2/Schedule";
export { default as Modules } from "./components/lp2/Modules";
export { default as Quote } from "./components/lp2/Quote";
export { default as Speakers } from "./components/lp2/Speakers";
export { default as Gallery } from "./components/lp2/Gallery";
export { default as Plans } from "./components/lp2/Plans";
export { default as Reviews } from "./components/lp2/Reviews";
export { default as Compare } from "./components/lp2/Compare";
export { default as Faq } from "./components/lp2/Faq";
export { default as FormSection } from "./components/lp2/FormSection";

// Formulário (mora em components/lp/, compartilhado com o template antigo,
// mas é reestilizado pelo lp2.css e usado pelo FormSection)
export { default as LeadForm } from "./components/lp/LeadForm";

// Orquestrador da página inteira
export { default as EventLp } from "./components/lp2/EventLp";

export type { EventLpContent } from "./components/lp2/types";
