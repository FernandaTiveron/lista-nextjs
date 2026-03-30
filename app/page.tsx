import NovaTarefa from "@/components/NovaTarefa";
import { useState } from "react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

export default function Home() {
  const [tarefas, setTarefas] = useState([
    "Estudar Next.js",
    "Aprender testes",
  ]);

  const adicionarTarefa = (nova: string) => {
    setTarefas([...tarefas, nova]);
  };

  const total = useContadorDeTarefas(tarefas);

  return (
    <main>
      <h1>Lista de tarefas</h1>

      <NovaTarefa onAdicionar={adicionarTarefa} />

      <p>Total de tarefas: {total}</p>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </main>
  );
}