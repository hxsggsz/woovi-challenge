import { PaymentData } from "@/context/payment-context";

export function decodePaymentData(encryptedPayment?: string) {
  if (!encryptedPayment) {
    const localPaymentEncrypted = localStorage.getItem("@p");

    if (!localPaymentEncrypted) {
      return {} as PaymentData;
    }

    const paymentDataDecoded = atob(localPaymentEncrypted);
    return JSON.parse(paymentDataDecoded) as PaymentData;
  }

  const paymentDataDecoded = atob(encryptedPayment);
  return JSON.parse(paymentDataDecoded) as PaymentData;
}
