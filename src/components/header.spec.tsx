import Header from "./header";
import { render, screen } from "@testing-library/react";

describe("header", () => {
  describe("when initialize", () => {
    it("shows in the screen the component", () => {
      render(<Header />);

      const btnThemeEl = screen.getByRole("button");
      const selectLangEl = screen.getByRole("combobox", {
        name: /header:select:label/i,
      });

      expect(btnThemeEl).toBeInTheDocument();
      expect(selectLangEl).toBeInTheDocument();
    });
  });
});
