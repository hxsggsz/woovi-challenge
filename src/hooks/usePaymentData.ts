import { CheckCardProps } from "@/components/card";
import { useNavigate } from "react-router";

interface PaymentData extends CheckCardProps {
  name: string;
  date: Date;
}

function usePaymentData() {
  const navigate = useNavigate();
  const localPaymentEncrypted = localStorage.getItem("@p");

  if (!localPaymentEncrypted) {
    navigate("/");
    return { payment: {} as PaymentData };
  }

  const paymentDataDecoded = atob(localPaymentEncrypted);
  const payment = JSON.parse(paymentDataDecoded) as PaymentData;

  return { payment };
}

export default usePaymentData;
