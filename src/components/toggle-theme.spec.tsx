import { render, screen, waitFor } from "@testing-library/react";
import ToggleTheme from "./toggle-theme";
import userEvent from "@testing-library/user-event";
import { ThemeContext } from "@/context/theme-context";

const renderComponent = () => {
  const mockToggleTheme = vi.fn();
  render(
    <ThemeContext.Provider value={{ mode: true, toggleTheme: mockToggleTheme }}>
      <ToggleTheme />
    </ThemeContext.Provider>,
  );

  return { mockToggleTheme };
};

describe("toggle theme", () => {
  describe("when initialize", () => {
    it("renders the button in the screen", () => {
      render(<ToggleTheme />);
      const btnEl = screen.getByRole("button");
      expect(btnEl).toBeInTheDocument();
    });
  });

  describe("when click in the button", () => {
    it("toggles the theme", async () => {
      const { mockToggleTheme } = renderComponent();

      const btnEl = screen.getByRole("button");
      userEvent.click(btnEl);

      await waitFor(() => expect(mockToggleTheme).toHaveBeenCalled());
    });
  });
});
