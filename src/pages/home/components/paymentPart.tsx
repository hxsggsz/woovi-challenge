import Card, { CardProps, CheckCardProps } from "@/components/card";
import { formatCurrency } from "@/utils/formatCurrency";
import { Typography, Box } from "@mui/material";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

interface PaymentPartProps {
  handleCheckCard: (value: CheckCardProps) => void;
}

function PaymentPart(props: PaymentPartProps) {
  const { t } = useTranslation();

  const paymentPart: CardProps[] = [
    {
      id: nanoid(),
      checkCard: props.handleCheckCard,
      label: t("main:card:pix-part"),
      value: 15_300,
      multiplier: 2,
      greyMessage: (
        <Typography sx={{ fontWeight: 600 }}>
          Total: {formatCurrency(30_600)}
        </Typography>
      ),
    },
    {
      checkCard: props.handleCheckCard,
      id: nanoid(),
      value: 10_196.66,
      multiplier: 3,
      greyMessage: (
        <Typography sx={{ fontWeight: 600 }}>
          Total: {formatCurrency(30_620)}
        </Typography>
      ),
    },
    {
      checkCard: props.handleCheckCard,
      id: nanoid(),
      value: 7_725,
      multiplier: 4,
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
      id: nanoid(),
      checkCard: props.handleCheckCard,
      value: 6_300,
      multiplier: 5,
      greyMessage: (
        <Typography sx={{ fontWeight: 600 }}>
          Total: {formatCurrency(31_500)}
        </Typography>
      ),
    },
    {
      id: nanoid(),
      checkCard: props.handleCheckCard,
      value: 5_283.33,
      multiplier: 6,
      greyMessage: (
        <Typography sx={{ fontWeight: 600 }}>
          Total: {formatCurrency(31_699.98)}
        </Typography>
      ),
    },

    {
      id: nanoid(),
      checkCard: props.handleCheckCard,
      value: 4_542.85,
      multiplier: 7,
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
          key={part.id}
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
