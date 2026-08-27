function BlocoFuncionalidade({titulo, logo, texto, tipo}) {
  const estilos = {
    normal: "bg-gradient-to-r from-[#EEEEEE]/50 to-[#F9F9F9]/50 rounded-[10px] border border-[#DFDFDF] max-w-15 p-3 md:max-w-25 md:gap-5 md:p-3",
    grafico: "bg-gradient-to-r from-[#EEEEEE]/50 to-[#F9F9F9]/50 rounded-[10px] border border-[#DFDFDF] max-w-15 p-3 md:max-w-25 md:gap-5 md:p-3 md:h-[325px]",
  }

  return (
    <div className={estilos[tipo]}>
      <div className="flex flex-row md:gap-2 items-center md:p-2">
        <img src={logo} className="max-w-[25px] max-h-[25px] md:max-w-[45px] md:max-h-[45px]" />
        <h3 className="text-[#7E7E7E]">{titulo}</h3>
      </div>
        <p className="bg-white rounded-[10px] md:p-2 md:h-20">{texto}</p>
    </div>
  )
}

export default BlocoFuncionalidade