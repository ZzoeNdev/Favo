function BlocoFuncionalidade({titulo, logo, texto, tipo}) {
      const estilo = ""
  const estilos = {
    normal: "bg-gradient-to-r from-[#EEEEEE]/50 to-[#F9F9F9]/50 rounded-[10px] gap-5 p-3 w-[30%] md:w-[30%]",
    grafico: "",
  }


  return (
    <div className={estilos[tipo]}>
        <div className="flex flex-row gap-2 items-center p-2">
            <img src={logo} className="max-w-[35px] max-h-[35px]" />
            <h3>{titulo}</h3>
        </div>
      <p className="bg-white rounded-[10px] p-2 h-20">{texto}</p>
    </div>
  )
}

export default BlocoFuncionalidade