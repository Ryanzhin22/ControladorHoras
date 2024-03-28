function PainelItem({text, value}) {
  return (
    <div className="w-80 h-40 flex flex-col justify-center items-center mt-[-30px] bg-white rounded-lg gap-2">
      <p className="text-lg">{text}</p>
      <h1 className="text-3xl font-bold">{value}</h1>
    </div>
  );
}

export default PainelItem;
