import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renderiza lista inicial", () => {
    render(<Home />);

    expect(screen.getByText("Estudar Next.js")).toBeInTheDocument();
    expect(screen.getByText("Aprender testes")).toBeInTheDocument();
  });
});