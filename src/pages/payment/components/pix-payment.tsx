import { Box, Button, styled } from "@mui/material";
import QRCode from "react-qr-code";
import { useAlert } from "@/context/useAlert";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useTranslation } from "react-i18next";
import Header from "./header";
import PaymentInfo from "./payment-info";
import PaymentDate from "./payment-date";

function PixPayment() {
  const { alert } = useAlert();

  const { t } = useTranslation();

  const qrcodeValue = "https://hxsggsz.vercel.app/";

  const copyQrcode = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(t("payment:qrcode:alert-success"), "success");

      // simulate an api call
      setTimeout(() => {
        window.open(
          `${import.meta.env.BASE_URL}/pix-payment`,
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

  return (
    <>
      <Header />
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

            <PaymentDate />
          </Box>

          <PaymentInfo />
        </Container>
      </Box>
    </>
  );
}

export default PixPayment;
