import { usePayment } from "@/context/usePayment";
import Header from "@/components/header";
import { Box } from "@mui/material";
import Footer from "./components/footer";
import CardPayment from "./components/card-payment";
import PixPayment from "./components/pix-payment";

function Payment() {
  const { payment } = usePayment();

  return (
    <Box
      sx={{
        width: 1,
        pt: "72px",
        px: "24px",
        display: "flex",
        minHeight: "100dvh",
        placeItems: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      {payment.activePayment === 0 ? <PixPayment /> : <CardPayment />}
      <Footer />
    </Box>
  );
}

export default Payment;
