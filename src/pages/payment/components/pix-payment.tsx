import wooviLogo from "/woovi.svg";
import { LANGUAGE } from "@/constants";
import { formatCurrency } from "@/utils/formatCurrency";
import {
  Box,
  Accordion,
  Typography,
  Button,
  AccordionSummary,
  AccordionDetails,
  styled,
} from "@mui/material";
import QRCode from "react-qr-code";
import PaymentStepper from "./payment-stepper";
import { useAlert } from "@/context/useAlert";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useTranslation } from "react-i18next";
import { usePayment } from "@/context/usePayment";

function PixPayment() {
  const { alert } = useAlert();

  const { payment } = usePayment();

  const { t } = useTranslation();

  const qrcodeValue = "https://hxsggsz.vercel.app/";

  const copyQrcode = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(t("payment:qrcode:alert-success"), "success");

      // simulate an api call
      setTimeout(() => {
        window.open(
          "http://localhost:5173/woovi-challenge/pix-payment",
          "",
          "height=800,width=400,scrollbars=no",
        );
      }, 1000);
    } catch (error) {
      alert(t("error"), "error");
      console.error(error);
    }
  };

  const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    gap: "20px",
    [theme.breakpoints.up("lg")]: {
      alignItems: "start",
      flexDirection: "row",
    },
  }));

  const CustomAccordion = styled(Accordion)(({ theme }) => {
    return {
      background: "inherit",
      border: 0,
      boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
      borderBottom: "2px solid",
      borderColor: theme.palette.info.main,
      "&::before": {
        opacity: 0,
      },
    };
  });

  return (
    <Box
      sx={{
        width: 1,
        pt: "72px",
        px: "24px",
        display: "flex",
        minHeight: "100dvh",
        placeItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <img src={wooviLogo} alt="woovi logo" />

        <Typography variant="h1" sx={{ fontSize: 24, fontWeight: 800 }}>
          {payment.name},{" "}
          {t(
            `payment:title:${payment.multiplier === 1 ? "full-payment-title" : "part-payment-title"}`,
            { value: formatCurrency(payment.value) },
          )}
        </Typography>
      </Box>

      <Container>
        <Box
          sx={{
            display: "flex",
            placeItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              border: "2px solid",
              borderColor: "secondary.main",
              borderRadius: "10px",
              width: "332px",
              padding: "10px",
            }}
          >
            <QRCode
              size={332}
              value={qrcodeValue}
              viewBox={`0 0 332 332`}
              style={{ height: "auto", maxWidth: "100%" }}
            />
          </Box>

          <Button
            onClick={() => copyQrcode(qrcodeValue)}
            variant="contained"
            sx={{ mt: "20px", fontSize: "16px", gap: "10px" }}
          >
            {t("payment:qrcode:button")}
            <FileCopyIcon />
          </Button>

          <Typography sx={{ color: "info.main", pt: "30px" }}>
            {t("payment:date")}:
          </Typography>
          <Typography sx={{ fontWeight: 800 }}>
            {new Date(payment.date).toLocaleDateString(LANGUAGE)} -{" "}
            {new Date(payment.date).toLocaleTimeString(LANGUAGE)}
          </Typography>
        </Box>

        <Box>
          <PaymentStepper {...payment} />

          <Box
            sx={{
              pb: "20px",
              pt: "20px",
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
      </Container>

      <Typography sx={{ color: "info.main" }}>{t("payment:id")}:</Typography>
      <Typography sx={{ fontWeight: 800 }}>{payment.id}</Typography>
    </Box>
  );
}

export default PixPayment;
