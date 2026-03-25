import { render, screen } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

describe("NovaTarefa", () => {
  it("renderiza input e botão", () => {
    render(<NovaTarefa onAdd={() => {}} />);

    expect(screen.getByPlaceholderText("Digite uma tarefa")).toBeInTheDocument();
    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  });
});