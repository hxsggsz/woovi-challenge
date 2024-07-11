import wooviLogo from "/woovi.svg";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography } from "@mui/material";
import { useMemo } from "react";
import { NAMES } from "@/constants";
import Card from "./components/card";

function App() {
  const { t } = useTranslation();

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
        <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 900 }}>
          {randomName}, {t("main:title")}
        </Typography>
      </Box>

      <Card />
    </Container>
  );
}

export default App;
