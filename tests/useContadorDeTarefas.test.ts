import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

describe("useContadorDeTarefas", () => {
  it("retorna quantidade correta de tarefas", () => {
    const tarefas = ["Tarefa 1", "Tarefa 2"];

    const { result } = renderHook(() =>
      useContadorDeTarefas(tarefas)
    );

    expect(result.current).toBe(2);
  });

  it("retorna 0 quando não há tarefas", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas([])
    );

    expect(result.current).toBe(0);
  });

  it("atualiza a contagem quando a lista muda", () => {
    let tarefas = ["Tarefa 1"];

    const { result, rerender } = renderHook(
      ({ tarefas }) => useContadorDeTarefas(tarefas),
      {
        initialProps: { tarefas },
      }
    );

    expect(result.current).toBe(1);

    tarefas = ["Tarefa 1", "Tarefa 2"];

    rerender({ tarefas });

    expect(result.current).toBe(2);
  });
});