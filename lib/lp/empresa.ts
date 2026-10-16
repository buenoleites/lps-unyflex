/* Dados da empresa para o rodapé das LPs. O endereço é o mesmo do FAQ
   "Onde é o curso?" e bate com o CNPJ (confirmado em 15/10/2026). O wa.me do
   comercial foi testado pelo Sistemas em 15/10/2026. O botão não mostra o
   número: quem clica abre a conversa direto. No rodapé, espaços que não
   quebram mantêm a rua e o bairro/cidade inteiros no celular. */

const RUA = "R. Voluntários da Pátria, 547";
const BAIRRO_CIDADE = "Centro, Curitiba-PR";

export const EMPRESA = {
  nome: "Unyflex",
  cnpj: "55.930.096/0001-89",
  endereco: `${RUA}, ${BAIRRO_CIDADE}`,
} as const;

export const WHATSAPP_COMERCIAL = {
  href: "https://wa.me/554197587226",
  label: "Falar no WhatsApp",
} as const;

const nb = (s: string) => s.replaceAll(" ", " ");

/** Bloco pronto para `footer.company` do lp3. */
export const FOOTER_COMPANY = {
  line: `${EMPRESA.nome} · CNPJ ${EMPRESA.cnpj} · ${nb(RUA)}, ${nb(BAIRRO_CIDADE)}`,
  whatsapp: WHATSAPP_COMERCIAL,
};
