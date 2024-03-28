import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function Tarefas({ handleRemove }) {

    const listFromLocalStorage = JSON.parse(localStorage.getItem("tarefasList"))

    return (
        <div className="h-auto bg-white mt-8 p-2 flex flex-col">
            <div className="flex justify-between items-center w-full min-h-16 border-b-2 p-2 px-8">
                <p className="w-4/6 font-bold text-lg">Nome da Tarefa</p>
                <p className="text-lg font-bold">Quantidade de horas</p>
                <p className=" text-lg font-bold">Botões</p>
            </div>
            {listFromLocalStorage && listFromLocalStorage.map((item, index) => (
                <div key={index} className="flex justify-between items-center w-full min-h-16 border-b-2 p-2 px-12">
                    <p className="w-4/6">{item.nomeTarefa}</p>
                    <p>{item.quantidadeHoras}</p>
                    <div className="buttons">
                        <FontAwesomeIcon icon={faTrash} className="w-[20px] h-[20px] cursor-pointer" onClick={() => (handleRemove(item.itemId))} />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Tarefas