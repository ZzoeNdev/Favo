function Botao({ texto, tipo }) {

  var estilo = ""

  if (tipo === "cheio") {
    estilo = '"transition-all duration-300 bg-[#F68412] border-none text-white rounded-[10px] px-[15px] py-[10px] hover:bg-transparent hover:border hover:border-[#F68412] hover:border-[0.5px] hover:text-[#F68412] cursor-pointer"'
  }
  else if (tipo === "transparente") {
    estilo = '"border border-[#F68412] whitespace-nowrap bg-transparent text-[#F68412] hover:text-[#F68412] hover:bg-transparent hover:text-[0.8vw]"'
  }
  return (
        <button className={estilo}>{texto}</button>
  )
}

export default Botao