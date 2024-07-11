import Card, { CardProps } from "@/components/card";
import { formatCurrency } from "@/utils/formatCurrency";
import { Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

function PaymentPart() {
  const { t } = useTranslation();

  const paymentPart: CardProps[] = [
    {
      checkCard: (ev: React.ChangeEvent<HTMLInputElement>) => console.log(ev),
      label: t("main:card:pix-part"),
      value: 15_300,
      multiplier: "2x",
      greyMessage: (
        <Typography sx={{ fontWeight: 600 }}>
          Total: {formatCurrency(30_600)}
        </Typography>
      ),
    },
    {
      checkCard: (ev: React.ChangeEvent<HTMLInputElement>) => console.log(ev),
      value: 10_196.66,
      multiplier: "3x",
      greyMessage: (
        <Typography sx={{ fontWeight: 600 }}>
          Total: {formatCurrency(30_620)}
        </Typography>
      ),
    },
    {
      checkCard: (ev: React.ChangeEvent<HTMLInputElement>) => console.log(ev),
      value: 7_725,
      multiplier: "4x",
      greyMessage: (
        <Typography sx={{ fontWeight: 600 }}>
          Total: {formatCurrency(30_900)}
        </Typography>
      ),
      bannerMessage: (
        <Typography sx={{ fontWeight: 600 }}>
          <Box component="span" sx={{ fontWeight: 800 }}>
            -3% {t("main:card:interest")}:
          </Box>{" "}
          {t("main:card:banner-message")}
        </Typography>
      ),
    },
    {
      checkCard: (ev: React.ChangeEvent<HTMLInputElement>) => console.log(ev),
      value: 6_300,
      multiplier: "5x",
      greyMessage: (
        <Typography sx={{ fontWeight: 600 }}>
          Total: {formatCurrency(31_500)}
        </Typography>
      ),
    },
    {
      checkCard: (ev: React.ChangeEvent<HTMLInputElement>) => console.log(ev),
      value: 5_283.33,
      multiplier: "6x",
      greyMessage: (
        <Typography sx={{ fontWeight: 600 }}>
          Total: {formatCurrency(31_699_98)}
        </Typography>
      ),
    },

    {
      checkCard: (ev: React.ChangeEvent<HTMLInputElement>) => console.log(ev),
      value: 4_542.85,
      multiplier: "7x",
      greyMessage: (
        <Typography sx={{ fontWeight: 600 }}>
          Total: {formatCurrency(31_800)}
        </Typography>
      ),
    },
  ];

  const renderCards = () =>
    paymentPart.map((part, index) => {
      const firstCard = index === 0;
      const lastCard = index === paymentPart.length - 1;
      return (
        <Card
          {...part}
          key={part.value}
          roundedborder={firstCard ? "top" : lastCard ? "bottom" : "none"}
        />
      );
    });

  return (
    <Box
      sx={{
        mt: "34px",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      {renderCards()}
    </Box>
  );
}

export default PaymentPart;
