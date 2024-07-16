import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function CardPayment() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: "72px" }}>
      <Typography>{t("adjawikj")}</Typography>
    </Box>
    <>
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <img src={wooviLogo} alt="woovi logo" />

        <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 800 }}>
          {payment.name},{" "}
          {t("card-payment:title", { value: getValues("installments") })}
        </Typography>
      </Box>
    </>
  );
}

export default CardPayment;
