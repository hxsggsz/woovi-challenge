import { Box, Typography } from "@mui/material";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import wooviFooter from "/woovi-footer.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        p: "30px",
        gap: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GppGoodOutlinedIcon />
      <Typography color="info.800">{t("footer:message")}</Typography>
      <img src={wooviFooter} alt="woovi logo" />
    </Box>
  );
}

export default Footer;
