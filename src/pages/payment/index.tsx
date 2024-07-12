import { LANGUAGE } from "@/constants";
import wooviLogo from "/woovi.svg";
import usePaymentData from "@/hooks/usePaymentData";
import { formatCurrency } from "@/utils/formatCurrency";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Payment() {
  const { payment } = usePaymentData();

  const { t } = useTranslation();

  return (
    <Container
      sx={{
        py: "72px",
        display: "flex",
        minHeight: "100dvh",
        placeItems: "center",
        flexDirection: "column",
      }}
    >
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

      <Typography sx={{ color: "info.main" }}>{t("payment:date")}:</Typography>
      <Typography sx={{ fontWeight: 800 }}>
        {new Date(payment.date).toLocaleDateString(LANGUAGE)} -{" "}
        {new Date(payment.date).toLocaleTimeString(LANGUAGE)}
      </Typography>

      <Typography sx={{ color: "info.main" }}>{t("payment:id")}:</Typography>
      <Typography sx={{ fontWeight: 800 }}>{payment.id}</Typography>
    </Container>
  );
}

export default Payment;
