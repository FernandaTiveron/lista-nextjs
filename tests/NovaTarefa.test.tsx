import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

describe("NovaTarefa", () => {
  it("deve renderizar input e botão", () => {
    const mockAdd = jest.fn();

    render(<NovaTarefa onAdicionar={mockAdd} />);

    expect(screen.getByPlaceholderText(/tarefa/i)).toBeInTheDocument();
    expect(screen.getByText(/adicionar/i)).toBeInTheDocument();
  });

  it("deve adicionar uma tarefa", () => {
    const mockAdd = jest.fn();

    render(<NovaTarefa onAdicionar={mockAdd} />);

    const input = screen.getByPlaceholderText(/tarefa/i);
    const button = screen.getByText(/adicionar/i);

    fireEvent.change(input, { target: { value: "Nova tarefa" } });
    fireEvent.click(button);

    expect(mockAdd).toHaveBeenCalledTimes(1);
    expect(mockAdd).toHaveBeenCalledWith("Nova tarefa");
  });

  it("não deve adicionar tarefa vazia", () => {
    const mockAdd = jest.fn();

    render(<NovaTarefa onAdicionar={mockAdd} />);

    const button = screen.getByText(/adicionar/i);

    fireEvent.click(button);

    expect(mockAdd).not.toHaveBeenCalled();
  });

  it("deve limpar o input após adicionar", () => {
    const mockAdd = jest.fn();

    render(<NovaTarefa onAdicionar={mockAdd} />);

    const input = screen.getByPlaceholderText(/tarefa/i);
    const button = screen.getByText(/adicionar/i);

    fireEvent.change(input, { target: { value: "Teste" } });
    fireEvent.click(button);

    expect(input).toHaveValue("");
  });
});