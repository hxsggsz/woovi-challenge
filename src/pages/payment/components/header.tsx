import { formatCurrency } from "@/utils/formatCurrency";
import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import wooviLogo from "/woovi.svg";
import { usePayment } from "@/context/usePayment";

function Header() {
  const { payment } = usePayment();

  return (
    <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
      <img src={wooviLogo} alt="woovi logo" />

      <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 800 }}>
        {payment.name},{" "}
        {t(
          `payment:title:${payment.multiplier === 1 ? "full-payment-title" : "part-payment-title"}`,
          { value: formatCurrency(payment.value) },
        )}
      </Typography>
    </Box>
  );
}

export default Header;
