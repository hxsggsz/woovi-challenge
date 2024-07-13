import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";
import { CircleOutlined } from "@mui/icons-material";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each`,
  },
  {
    label: "Create an ad group",
    description: "An ad group contains ",
  },
  {
    label: "Create an ad",
    description: `Try out `,
  },
];

function PaymentStepper() {
  const [activeStep] = React.useState(0);

  const renderSteps = () =>
    steps.map((step, index) => (
      <Step
        sx={{
          width: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        key={step.label}
      >
        <StepLabel
          sx={{ p: 0 }}
          icon={
            <CircleOutlined
              color={activeStep === index ? "secondary" : "info"}
            />
          }
        >
          {step.label}
        </StepLabel>
        <Typography sx={{ fontWeight: 800 }}>{step.description}</Typography>
      </Step>
    ));

  return (
    <Stepper sx={{ width: 1 }} activeStep={activeStep} orientation="vertical">
      {renderSteps()}
    </Stepper>
  );
}

export default PaymentStepper;
