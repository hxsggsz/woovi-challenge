import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function CardPayment() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: "72px" }}>
      <Typography>{t("adjawikj")}</Typography>
    </Box>
  );
}

export default CardPayment;
