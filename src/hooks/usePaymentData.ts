import { CheckCardProps } from "@/components/card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface PaymentData extends CheckCardProps {
  name: string;
  date: Date;
  activePayment: number;
}

function decodePaymentData() {
  const localPaymentEncrypted = localStorage.getItem("@p");

  if (!localPaymentEncrypted) {
    return {} as PaymentData;
  }

  const paymentDataDecoded = atob(localPaymentEncrypted);
  return JSON.parse(paymentDataDecoded) as PaymentData;
}

function usePaymentData() {
  const navigate = useNavigate();
  const [payment, setPayment] = useState<PaymentData>(() =>
    decodePaymentData(),
  );

  const advanceActivePayment = () => {
    setPayment((prev) => ({
      ...prev,
      activePayment: ++prev.activePayment,
    }));

    const encryptedUpdatedPayment = btoa(JSON.stringify(payment));
    localStorage.setItem("@p", encryptedUpdatedPayment);
  };

  useEffect(() => {
    !payment.name && navigate("/woovi-challenge");
  }, [navigate, payment]);

  return { payment, advanceActivePayment };
}

export default usePaymentData;
