"use client";

import Container from "./Components/Container";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Painel from "./Components/Painel";

import { useState, useEffect } from "react";
import Tarefas from "./Components/Tarefas";

export default function Home() {
  const [tarefasList, setTarefasList] = useState([]);

  const [totalTarefas, setTotalTarefas] = useState();
  const [totalHoras, setTotalHoras] = useState();
  const [mediaHoras, setMediaHoras] = useState();

  useEffect(() => {
    const dataTarefas = JSON.parse(localStorage.getItem("tarefasList"))
    if(dataTarefas){
      let totalHoras = 0
      dataTarefas.map((el)=>{
        totalHoras = totalHoras + Number(el.quantidadeHoras)
      })
      setTotalHoras(totalHoras)
      setTotalTarefas(dataTarefas.length)
      setMediaHoras(totalHoras / dataTarefas.length)
    }
  }, [tarefasList]);

  const handleAdd = (itemId, nomeTarefa, quantidadeHoras) => {
    const novoItem = { itemId, nomeTarefa, quantidadeHoras };
    const dataTarefas = localStorage.getItem("tarefasList");
    if (dataTarefas) {
      const tarefasListFromLocalStorage = JSON.parse(dataTarefas);
      setTarefasList(tarefasListFromLocalStorage.concat(novoItem));
      localStorage.setItem("tarefasList", JSON.stringify(tarefasListFromLocalStorage.concat(novoItem)));
    } else if (!dataTarefas) {
      setTarefasList([novoItem]);
      localStorage.setItem("tarefasList", JSON.stringify([novoItem]));
    }
  };

  const handleRemove = (id) => {
    const dataTarefas = JSON.parse(localStorage.getItem("tarefasList"))
    
    const newDataTarefas = dataTarefas.filter((elm) => elm.itemId !== id )
    
    console.log(newDataTarefas)

    setTarefasList([newDataTarefas])
    localStorage.setItem("tarefasList", JSON.stringify(newDataTarefas))
  }

  return (
    <main className="bg-gray-100 h-screen text-black">
      <Header />
      <Container>
        <Painel
          totalTarefas={totalTarefas}
          totalHoras={totalHoras}
          mediaHoras={mediaHoras}
        />
        <Form handleAdd={handleAdd} />
        <Tarefas handleRemove={handleRemove}/>
      </Container>
    </main>
  );
}
