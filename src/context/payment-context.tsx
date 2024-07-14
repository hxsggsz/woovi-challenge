import { CheckCardProps } from "@/components/card";
import { decodePaymentData } from "@/utils/decodePaymentData";
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
}

export const PaymentContext = createContext({} as PaymentContextProps);

export const PaymentProvider = ({ children }: React.PropsWithChildren) => {
  const [payment, setPayment] = useState<PaymentData>(() =>
    decodePaymentData(),
  );

  const navigate = useNavigate();

  const advanceActivePayment = () => {
    setPayment((prev) => ({
      ...prev,
      activePayment: ++prev.activePayment,
    }));

    const encryptedUpdatedPayment = btoa(JSON.stringify(payment));
    localStorage.setItem("@p", encryptedUpdatedPayment);
  };

  useEffect(() => {
    if (payment.multiplier <= payment.activePayment || !payment.name) {
      localStorage.removeItem("@p");
      navigate("/woovi-challenge");
    }
  }, [navigate, payment]);

  return (
    <PaymentContext.Provider value={{ payment, advanceActivePayment }}>
      {children}
    </PaymentContext.Provider>
  );
};
