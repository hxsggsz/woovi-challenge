export function formatCurrency(
  input: number,
  lng = "pt-BR",
  digits = 2,
): string {
  const formatter = new Intl.NumberFormat(lng, {
    style: "currency",
    currency: lng === "pt-BR" ? "BRL" : "USD",
    minimumFractionDigits: digits,
  });

  return formatter.format(input);
}
