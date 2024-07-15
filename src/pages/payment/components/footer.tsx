import { Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <Typography sx={{ color: "info.main" }}>{t("payment:id")}:</Typography>
      <Typography sx={{ fontWeight: 800 }}>{nanoid()}</Typography>
    </>
  );
}

export default Footer;
