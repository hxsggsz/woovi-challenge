import wooviLogo from "/woovi.svg";
import { useTranslation } from "react-i18next";
import { useThemes } from "@/context/theme-context";
import { Box, Button, Container, Typography } from "@mui/material";
import { useMemo } from "react";
import { NAMES } from "@/constants";

function App() {
  const { toggleTheme } = useThemes();

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

      <Button onClick={toggleTheme} variant="contained">
        togle theme
      </Button>
      <p className="read-the-docs">{t("title:main")}</p>
    </Container>
  );
}

export default App;
