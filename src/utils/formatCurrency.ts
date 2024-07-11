import { LANGUAGE } from "@/constants";

export function formatCurrency(input: number, digits = 2): string {
  const formatter = new Intl.NumberFormat(LANGUAGE, {
    style: "currency",
    currency: LANGUAGE === "pt-BR" ? "BRL" : "USD",
    minimumFractionDigits: digits,
  });

  return formatter.format(input);
}
