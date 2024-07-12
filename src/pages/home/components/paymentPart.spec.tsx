import { render, screen, waitFor } from "@testing-library/react";
import PaymentPart from "./paymentPart";
import userEvent from "@testing-library/user-event";

describe("paymentPart", () => {
  describe("when initialize", () => {
    it("renders the component correctly", () => {
      render(<PaymentPart handleCheckCard={vi.fn()} />);

      expect(screen.getByText(/main:card:pix-part/i)).toBeInTheDocument();
      expect(screen.getByText(/main:card:interest/i)).toBeInTheDocument();
      expect(screen.getByText(/main:card:banner-message/i)).toBeInTheDocument();
    });
  });

  describe("when click in the title of the card", () => {
    it("calls the handleCheckCard function", async () => {
      const mockHandleCheckCard = vi.fn();
      render(<PaymentPart handleCheckCard={mockHandleCheckCard} />);

      const titleEl = screen.getByText(/main:card:pix-part/i);

      userEvent.click(titleEl);

      await waitFor(() => expect(mockHandleCheckCard).toHaveBeenCalled());
    });
  });
});
