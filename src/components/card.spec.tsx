import { render, RenderResult, screen } from "@testing-library/react";
import Card, { CardProps } from "./card";

const makeSut = ({
  label = "label",
  value = 30,
  multiplier = "1x",
  greyMessage = <div>grey</div>,
  greenMessage = <div>green</div>,
  bannerMessage = <div>banner</div>,
  ...props
}: Partial<CardProps>): RenderResult =>
  render(
    <Card
      label={label}
      value={value}
      multiplier={multiplier}
      greyMessage={greyMessage}
      greenMessage={greenMessage}
      bannerMessage={bannerMessage}
      {...props}
    />,
  );

describe("card", () => {
  describe("when it initialize", () => {
    it("renders the component correctly", () => {
      makeSut({});

      expect(screen.getByText(/label/i)).toBeInTheDocument();
      expect(screen.getByText(/30/i)).toBeInTheDocument();
      expect(screen.getByText(/1x/i)).toBeInTheDocument();
      expect(screen.getByText(/grey/i)).toBeInTheDocument();
      expect(screen.getByText(/green/i)).toBeInTheDocument();
      expect(screen.getByText(/banner/i)).toBeInTheDocument();
    });

    describe("doesnt have the grey prop", () => {
      it("doenst render the the grey text prop", () => {
        makeSut({ greyMessage: <></> });
        expect(screen.queryByText(/grey/i)).not.toBeInTheDocument();
      });
    });

    describe("doesnt have the green prop", () => {
      it("doenst render the the green text prop", () => {
        makeSut({ greenMessage: <></> });
        expect(screen.queryByText(/green/i)).not.toBeInTheDocument();
      });
    });

    describe("doesnt have the green prop", () => {
      it("doenst render the the green text prop", () => {
        makeSut({ bannerMessage: <></> });
        expect(screen.queryByText(/banner/i)).not.toBeInTheDocument();
      });
    });
  });
});
