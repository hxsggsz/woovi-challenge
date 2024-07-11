import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleLang from "./toggle-lang";

describe("toggle-lang", () => {
  describe("when initialize", () => {
    it("shows the component in the screen", () => {
      render(<ToggleLang />);

      const labelEl = screen.getByRole("combobox", {
        name: /header:select:label/i,
      });
      const selectEl = screen.getByRole("textbox", {
        hidden: true,
      });

      expect(labelEl).toBeInTheDocument();
      expect(selectEl).toBeInTheDocument();
    });
  });

  describe("when click in the select", () => {
    it("opens correctly", async () => {
      render(<ToggleLang />);

      const selectEl = screen.getByLabelText("header:select:label");

      await act(async () => userEvent.click(selectEl));

      const selectContentEl = await screen.findByRole("option", {
        name: "en-US",
      });

      expect(selectContentEl).toBeInTheDocument();
    });
  });

  describe("when click in the option", () => {
    it("calls the localstorage function", async () => {
      render(<ToggleLang />);

      vi.mock("react-i18next", () => ({
        useTranslation: () => {
          return {
            t: (str: string) => str,
            i18n: {
              changeLanguage: () => new Promise(() => { }),
            },
          };
        },
      }));

      const spyLocalStorage = vi.spyOn(Storage.prototype, "setItem");
      const selectEl = screen.getByLabelText("header:select:label");

      await act(async () => userEvent.click(selectEl));

      const selectContentEl = screen.getByDisplayValue("en-US");

      expect(selectContentEl).toBeInTheDocument();

      fireEvent.change(selectContentEl, { target: { value: "pt-BR" } });
      await waitFor(() => expect(spyLocalStorage).toHaveBeenCalled());
    });
  });
});
