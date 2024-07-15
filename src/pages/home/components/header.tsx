import { Box, Typography } from "@mui/material";
import { t } from "i18next";
import wooviLogo from "/woovi.svg";

interface HeaderProps {
  name: string;
}

function Header(props: HeaderProps) {
  return (
    <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
      <img src={wooviLogo} alt="woovi logo" />

      <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 800 }}>
        {props.name}, {t("main:title")}
      </Typography>
    </Box>
  );
}

export default Header;
