// O `tsconfig.dts.json` roda fora do ambiente do Next, que normalmente declara
// isso em `node_modules/next/types/global.d.ts`. Sem esta declaração o
// `ds-entry.ts` não compila (TS2307 nos imports de CSS).
declare module "*.css";
