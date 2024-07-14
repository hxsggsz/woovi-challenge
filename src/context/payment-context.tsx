import { CheckCardProps } from "@/components/card";
import { decodePaymentData } from "@/utils/decodePaymentData";
import { saveEncryptedPayment } from "@/utils/saveEncryptedPayment";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export interface PaymentData extends CheckCardProps {
  name: string;
  date: Date;
  activePayment: number;
}

export interface PaymentContextProps {
  payment: PaymentData;
  advanceActivePayment: () => void;
  updatePayment: (payment: PaymentData) => void;
}

export const PaymentContext = createContext({} as PaymentContextProps);

export const PaymentProvider = ({ children }: React.PropsWithChildren) => {
  const [payment, setPayment] = useState<PaymentData>(() =>
    decodePaymentData(),
  );

  const navigate = useNavigate();

  const updatePayment = (newPayment: PaymentData) => {
    setPayment(newPayment);
    saveEncryptedPayment(newPayment);
  };

  const advanceActivePayment = () => {
    setPayment((prev) => ({
      ...prev,
      activePayment: ++prev.activePayment,
    }));

    saveEncryptedPayment(payment);
  };

  useEffect(() => {
    if (payment.multiplier <= payment.activePayment || !payment.name) {
      navigate("/woovi-challenge");
    }
  }, [navigate, payment]);

  return (
    <PaymentContext.Provider
      value={{ payment, updatePayment, advanceActivePayment }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
