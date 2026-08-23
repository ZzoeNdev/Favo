function Botao({ texto, tipo }) {
  const base = "transition-all duration-300 rounded-[9px] mt-[3%] cursor-pointer w-full md:w-[12.76vw] max-w-[245px] min-w-[125px] h-10 md:h-[2.5vw] max-h-[48px] min-h-[18px]"

  const estilos = {
    cheio: "border-none bg-[#F68412] text-white hover:bg-[#cf6a05] hover:text-white md:hover:text-[0.8vw]",
    transparente: "border border-[#F68412] bg-transparent text-[#F68412] whitespace-nowrap hover:bg-transparent hover:text-[#F68412] md:hover:text-[0.8vw]",
  }

  return (
    <a href="#">
      <button className={`${base} ${estilos[tipo]}`}>
        {texto}
      </button>
    </a>
  )
}

export default Botao