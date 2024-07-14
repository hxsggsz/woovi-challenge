import PixPayment from "./components/pix-payment";
import CardPayment from "./components/card-payment";
import { usePayment } from "@/context/usePayment";

function Payment() {
  const { payment } = usePayment();

  // return payment.activePayment === 0 ? <PixPayment /> : <CardPayment />;
  return <PixPayment />;
}

export default Payment;
