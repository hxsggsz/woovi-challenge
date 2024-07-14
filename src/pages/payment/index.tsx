import { LANGUAGE } from "@/constants";
import wooviLogo from "/woovi.svg";
import usePaymentData from "@/hooks/usePaymentData";
import { formatCurrency } from "@/utils/formatCurrency";
import { Box, Button, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import QRCode from "react-qr-code";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PaymentStepper from "./components/payment-stepper";
import { useAlert } from "@/context/useAlert";

function Payment() {
  const { alert } = useAlert();

  const { payment } = usePaymentData();

  const { t } = useTranslation();

  const qrcodeValue = "https://hxsggsz.vercel.app/";

  const copyQrcode = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(t("payment:qrcode:alert-success"), "success");
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

        <PaymentStepper {...payment} />
      </Container>

      <Typography sx={{ color: "info.main" }}>{t("payment:id")}:</Typography>
      <Typography sx={{ fontWeight: 800 }}>{payment.id}</Typography>
    </Box>
  );
}

export default Payment;
