"use client";

import { useState } from "react";

type Props = {
  onAdicionar: (tarefa: string) => void;
};

export default function NovaTarefa({ onAdicionar }: Props) {
  const [tarefa, setTarefa] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!tarefa.trim()) return;

    onAdicionar(tarefa);
    setTarefa("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}