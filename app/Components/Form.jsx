import { useState } from "react";

function Form({ handleAdd }) {

  const [nomeTarefa, setNomeTarefa] = useState("")
  const [quantidadeHoras, setQuantidadeHoras] = useState(0)
  const itemId = Math.floor(Math.random() * 100000)

  return (
    <div className="w-full h-[100px] m-auto bg-white items-center justify-around flex mt-8 rounded-lg">
      <div className="inputWrapper flex flex-col justify-center">
        <label className="">Nome da tarefa</label>
        <input
          type="text"
          className="border-2 border-gray-300 p-1 rounded-md"
          value={nomeTarefa}
          onChange={(e) => setNomeTarefa(e.target.value)}
        />
      </div>
      <div className="inputWrapper flex flex-col justify-center">
        <label>Quantidade de Horas</label>
        <input
          type="number"
          className="border-2 border-gray-300 p-1 rounded-md"
          value={quantidadeHoras}
          onChange={(e) => setQuantidadeHoras(e.target.value)}
        />
      </div>
      <button className="w-[100px] h-[70px] bg-orange-400 rounded-lg text-white font-semibold tracking-wide" onClick={() => handleAdd(itemId, nomeTarefa, quantidadeHoras)}>
        Enviar
      </button>
    </div>
  );
}

export default Form;
