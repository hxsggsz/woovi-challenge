import { render, RenderResult, screen } from "@testing-library/react";
import PaymentStepper, { PaymentStepperProps } from "./payment-stepper";

const makeSut = ({
  value = 30_500,
  multiplier = 1,
  activePayment = 0,
  ...props
}: Partial<PaymentStepperProps>): RenderResult =>
  render(
    <PaymentStepper
      value={value}
      multiplier={multiplier}
      activePayment={activePayment}
      {...props}
    />,
  );

describe("payment-stepper", () => {
  describe("when initialize", () => {
    it("renders the component correctly", () => {
      makeSut({});
      expect(screen.getByText(/1/i)).toBeInTheDocument();
    });

    describe("when multiplier is equals to one", () => {
      it("shows on screen only the full payment i18n text", () => {
        makeSut({});
        const multiplierEl = screen.getByText(/payment:full/i);
        expect(multiplierEl).toBeInTheDocument();
      });

      it("repeats the value only one time", () => {
        makeSut({});
        const valueEl = screen.getAllByText(/\$30,500\.00/i);
        expect(valueEl.length).toBe(1);
      });
    });

    describe("when multiplier is bigger than one", () => {
      it("shows on screen the stallment payment pix i18n text", () => {
        makeSut({ multiplier: 2 });
        const multiplierEl = screen.getByText(/installment-pix/i);
        expect(multiplierEl).toBeInTheDocument();
      });

      it("shows on screen the card stallment i18n text", () => {
        makeSut({ multiplier: 2 });
        const cardTextEl = screen.getByText(/credit-card/i);
        expect(cardTextEl).toBeInTheDocument();
      });

      it("repeats the value two time", () => {
        makeSut({ multiplier: 2 });
        const valueEl = screen.getAllByText(/\$30,500\.00/i);
        expect(valueEl.length).toBe(2);
      });
    });
  });
});
