import { LANGUAGE } from "@/constants";
import { usePayment } from "@/context/usePayment";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function PaymentDate() {
  const { t } = useTranslation();

  const { payment } = usePayment();

  return (
    <>
      <Typography sx={{ color: "info.main" }}>{t("payment:date")}:</Typography>
      <Typography sx={{ fontWeight: 800 }}>
        {new Date(payment.date).toLocaleDateString(LANGUAGE)} -{" "}
        {new Date(payment.date).toLocaleTimeString(LANGUAGE)}
      </Typography>
    </>
  );
}

export default PaymentDate;
