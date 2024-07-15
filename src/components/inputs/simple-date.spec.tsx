import { render, RenderResult, screen, waitFor } from "@testing-library/react";
import SimpleDateInput, { CustomProps } from "./simple-date";
import userEvent from "@testing-library/user-event";

const makeSut = ({
  onChange = vi.fn(),
  name = "date input",
  ...props
}: Partial<CustomProps>): RenderResult =>
  render(<SimpleDateInput onChange={onChange} name={name} {...props} />);

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

    it("lengths doesnt pass 5", async () => {
      makeSut({});
      const inputEl = screen.getByRole("textbox") as HTMLInputElement;

      userEvent.type(inputEl, "123456");

      await waitFor(() => expect(inputEl.value.length).toBe(5));
    });

    it("formats the input value correctly", async () => {
      makeSut({});
      const inputEl = screen.getByRole("textbox") as HTMLInputElement;

      userEvent.type(inputEl, "1234");
      await waitFor(() => {
        expect(inputEl.value).toContain("/");
        expect(inputEl.value).toBe("12/34");
      });
    });
  });
});
