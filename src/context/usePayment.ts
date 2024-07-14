import { useContext } from "react";
import { PaymentContext, PaymentContextProps } from "./payment-context";

export const usePayment = () => useContext<PaymentContextProps>(PaymentContext);
