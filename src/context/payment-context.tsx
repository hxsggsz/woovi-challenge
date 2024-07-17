import { CheckCardProps } from "@/components/card";
import { decodePaymentData } from "@/utils/decodePaymentData";
import { isObjectEmpty } from "@/utils/isObjectEmpty";
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
  advanceActivePayment: (activePayment?: number) => void;
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

  const advanceActivePayment = (activePayment?: number) => {
    setPayment((prev) => ({
      ...prev,
      activePayment: (prev.activePayment += activePayment ?? 1),
    }));

    saveEncryptedPayment(payment);
  };

  // sync the state with the pix payment page
  const onStorageUpdate = (e: StorageEvent) => {
    const { key, newValue } = e;
    if (key === "@p") {
      const decodedPayment = decodePaymentData(newValue!);
      setPayment(decodedPayment);
    }
  };

  useEffect(() => {
    console.log(decodePaymentData());
    setPayment(decodePaymentData());
    window.addEventListener("storage", onStorageUpdate);

    return () => {
      window.removeEventListener("storage", onStorageUpdate);
    };
  }, []);

  useEffect(() => {
    console.log(payment);
    if (
      payment.multiplier < payment.activePayment + 1 ||
      isObjectEmpty(payment)
    ) {
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
