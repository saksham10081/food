import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Hyperpure catalog experience", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /fresh supplies for restaurants, cafes, and cloud kitchens/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByText(/Fresh Farms Collective/i)).toBeInTheDocument();
});
