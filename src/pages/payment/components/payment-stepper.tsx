import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";
import { CircleOutlined } from "@mui/icons-material";
import { nanoid } from "nanoid";
import { formatCurrency } from "@/utils/formatCurrency";
import { useTranslation } from "react-i18next";

export interface PaymentStepperProps {
  value: number;
  multiplier: number;
  activePayment: number;
}

function PaymentStepper(props: PaymentStepperProps) {
  const { t } = useTranslation();

  const renderLabel = (index: number) => {
    if (props.multiplier === 1) {
      return t("payment:full");
    }

    if (index === 1) {
      return t("payment:installment-pix");
    }

    return t("payment:credit-card");
  };

  const renderSteps = () =>
    Array.from(Array(props.multiplier)).map((_, index) => (
      <Step
        sx={{
          width: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        key={nanoid()}
      >
        <StepLabel
          sx={{ p: 0 }}
          icon={
            <CircleOutlined
              color={props.activePayment >= index ? "secondary" : "info"}
            />
          }
        >
          {++index}
          {renderLabel(index)}
        </StepLabel>
        <Typography sx={{ fontWeight: 800 }}>
          {formatCurrency(props.value)}
        </Typography>
      </Step>
    ));

  return (
    <Stepper sx={{ width: 1 }} activeStep={1} orientation="vertical">
      {renderSteps()}
    </Stepper>
  );
}

export default PaymentStepper;
