import { PaymentData } from "@/context/payment-context";

export function saveEncryptedPayment(payment: PaymentData) {
  const encryptedUpdatedPayment = btoa(JSON.stringify(payment));
  localStorage.setItem("@p", encryptedUpdatedPayment);
}
