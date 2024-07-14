import { PaymentData } from "@/context/payment-context";

export function decodePaymentData() {
  const localPaymentEncrypted = localStorage.getItem("@p");

  if (!localPaymentEncrypted) {
    return {} as PaymentData;
  }

  const paymentDataDecoded = atob(localPaymentEncrypted);
  return JSON.parse(paymentDataDecoded) as PaymentData;
}
