import wooviLogo from "/woovi.svg";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography } from "@mui/material";
import { useMemo } from "react";
import { NAMES } from "@/constants";
import Card from "./components/card";
import { formatCurrency } from "./utils/formatCurrency";

function App() {
  const { t } = useTranslation();

  const mainBill = {
    multiplier: "1x",
    value: 30_500,
    greenMessage: (
      <Typography sx={{ fontWeight: 600 }}>
        {t("main:card:win")}{" "}
        <Box component="span" style={{ fontWeight: 800 }}>
          3%
        </Box>{" "}
        {t("main:card:of-cashback")}
      </Typography>
    ),
    bannerMessage: (
      <Typography sx={{ fontWeight: 600 }}>
        &#129297;{" "}
        <Box component="span" sx={{ fontWeight: 800 }}>
          {formatCurrency(300)}
        </Box>{" "}
        {t("main:card:pix-cashback")}
      </Typography>
    ),
  };

  const randomName = useMemo(() => {
    const arrayNamesLength = NAMES.length;
    const randomNumber = Math.floor(Math.random() * arrayNamesLength);

    return NAMES[randomNumber];
  }, []);

  return (
    <Container
      sx={{
        py: "72px",
        display: "flex",
        height: "100dvh",
        placeItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <img src={wooviLogo} alt="woovi logo" />
        <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 800 }}>
          {randomName}, {t("main:title")}
        </Typography>
      </Box>

      <Card {...mainBill} />
    </Container>
  );
}

export default App;
