import { usePayment } from "@/context/usePayment";
import { formatCurrency } from "@/utils/formatCurrency";
import {
  Box,
  Typography,
  AccordionSummary,
  AccordionDetails,
  styled,
  Accordion,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PaymentStepper from "./payment-stepper";

function PaymentInfo() {
  const { t } = useTranslation();

  const { payment } = usePayment();

  const CustomAccordion = styled(Accordion)(({ theme }) => {
    return {
      background: "inherit",
      border: 0,
      marginBottom: "20px",
      boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
      borderBottom: "2px solid",
      borderColor: theme.palette.info.main,
      "&::before": {
        opacity: 0,
      },
    };
  });
  return (
    <Box py={1}>
      <PaymentStepper {...payment} />

      <Box
        sx={{
          py: "20px",
          width: 1,
          display: "flex",
          borderBottom: "2px solid",
          borderColor: "info.50",
          justifyContent: "space-between",
        }}
      >
        <Typography>CET: 0.5%</Typography>
        <Typography>
          Total: {formatCurrency(payment.value * payment.multiplier)}
        </Typography>
      </Box>

      <CustomAccordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("payment:accordion:summary")}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>{t("payment:accordion:content")}</Typography>
        </AccordionDetails>
      </CustomAccordion>
    </Box>
  );
}

export default PaymentInfo;
