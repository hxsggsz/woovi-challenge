import Card, { CardProps, CheckCardProps } from "@/components/card";
import { NAMES } from "@/constants";
import { formatCurrency } from "@/utils/formatCurrency";
import { Box, Container, Typography } from "@mui/material";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import PaymentPart from "./components/paymentPart";
import { useNavigate } from "react-router";
import { usePayment } from "@/context/usePayment";
import Header from "./components/header";

function Home() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { updatePayment } = usePayment();

  const randomName = useMemo(() => {
    const arrayNamesLength = NAMES.length;
    const randomNumber = Math.floor(Math.random() * arrayNamesLength);

    return NAMES[randomNumber];
  }, []);

  const handleCheckCard = (value: CheckCardProps) => {
    const today = new Date();
    const date = new Date(today.setMonth(today.getMonth() + 1));

    const paymentData = {
      ...value,
      date,
      activePayment: 0,
      name: randomName,
    };

    updatePayment(paymentData);

    // simulate an api call
    setTimeout(() => navigate("/woovi-challenge/payment"), 1000);
  };

  const mainBill: CardProps = {
    checkCard: handleCheckCard,
    label: "Pix",
    value: 30_500,
    multiplier: 1,
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

  return (
    <Container
      sx={{
        py: "72px",
        display: "flex",
        minHeight: "100dvh",
        placeItems: "center",
        flexDirection: "column",
      }}
    >
      <Header name={randomName} />

      <Card roundedborder="full" {...mainBill} />

      <PaymentPart handleCheckCard={handleCheckCard} />
    </Container>
  );
}

export default Home;
