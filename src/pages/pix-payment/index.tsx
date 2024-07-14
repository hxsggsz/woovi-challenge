import { usePayment } from "@/context/usePayment";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function PixPayment() {
  const { t } = useTranslation();
  const { advanceActivePayment } = usePayment();

  useEffect(() => {
    advanceActivePayment();

    // simulate an api call
    setTimeout(() => {
      window.close();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ py: "72px" }}>
      <Typography>{t("pix-payment:title")}</Typography>
    </Box>
  );
}

export default PixPayment;
