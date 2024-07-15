import { render, RenderResult, screen, waitFor } from "@testing-library/react";
import CpfInput, { CustomProps } from "./cpf";
import userEvent from "@testing-library/user-event";

const makeSut = ({
  onChange = vi.fn(),
  name = "date input",
  ...props
}: Partial<CustomProps>): RenderResult =>
  render(<CpfInput onChange={onChange} name={name} {...props} />);

describe("simple-date-input", () => {
  describe("when initialize", () => {
    it("renders the component correctly", () => {
      makeSut({});
      const inputEl = screen.getByRole("textbox");
      expect(inputEl).toBeInTheDocument();
    });
  });

  describe("when type in the input", () => {
    it("accepts only numbers", async () => {
      makeSut({});
      const inputEl = screen.getByRole("textbox") as HTMLInputElement;

      userEvent.type(inputEl, "invalid input value");

      await waitFor(() => {
        expect(inputEl.value).toBe("");
        expect(inputEl.value).not.toBe("invalid input value");
      });
    });

    it("lengths doesnt pass 14", async () => {
      makeSut({});
      const inputEl = screen.getByRole("textbox") as HTMLInputElement;

      userEvent.type(inputEl, "13213212321321321123");

      await waitFor(() => expect(inputEl.value.length).toBe(14));
    });

    it("formats the input value correctly", async () => {
      makeSut({});
      const inputEl = screen.getByRole("textbox") as HTMLInputElement;

      userEvent.type(inputEl, "12321321321123");
      await waitFor(() => {
        expect(inputEl.value).toBe("123.213.213-21");
      });
    });
  });
});
