function Botao({ texto, tipo, largura = "w-full w-[8rem] md:w-[12rem] min-w-[125px]" }) {
  const base = `transition-all duration-300 rounded-[9px] mt-[3%] cursor-pointer ${largura} h-10 md:h-[2.5vw] max-h-[48px] min-h-[18px]`

  const estilos = {
    cheio: "border-none bg-[#F68412] text-white hover:bg-[#cf6a05] hover:text-white md:hover:text-[0.8vw]",
    transparente: "border border-[#F68412] hover:border-[#cf6a05] bg-transparent text-[#F68412] hover:text-[#F68412] whitespace-nowrap hover:bg-transparent hover:text-[#F68412] md:hover:text-[0.8vw]",
    preto: "border-none bg-[#1F232D] text-white hover:bg-[#474A53] hover:text-white md:hover:text-[0.8vw]",
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