import PainelItem from "./PainelItem";

function Painel({ totalTarefas, totalHoras, mediaHoras }) {
  return (
    <div className="flex flex-row justify-between">
      <PainelItem text="Total de tarefas" value={totalTarefas} />
      <PainelItem text="Total de Horas" value={totalHoras} />
      <PainelItem text="Média de Horas por tarefas" value={mediaHoras ? Number(mediaHoras).toFixed(2) : 0} />
    </div>
  );
}
export default Painel;
