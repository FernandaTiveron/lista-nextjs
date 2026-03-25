import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

describe("useContadorDeTarefas", () => {
  it("retorna quantidade correta", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas(["a", "b", "c"])
    );

    expect(result.current).toBe(3);
  });
});