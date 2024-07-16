import { Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const paymentId = useMemo(() => nanoid(), []);

  return (
    <>
      <Typography sx={{ color: "info.main" }}>{t("payment:id")}:</Typography>
      <Typography sx={{ fontWeight: 800 }}>{paymentId}</Typography>
    </>
  );
}

export default Footer;
