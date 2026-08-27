import Grafico from "./Grafico.jsx"
import Logo from "../assets/graficosLogo.png"

function BlocoGrafico(logo, titulo) {
  return (
    <div className="bg-gradient-to-r from-[#EEEEEE]/50 to-[#F9F9F9]/50 rounded-[10px] border border-[#DFDFDF] max-w-15 p-3 md:max-w-25 md:gap-5 md:p-3">
      
      <div className="flex flex-row md:gap-2 items-center md:p-2">
        <img src={Logo} className="max-w-[25px] max-h-[25px] md:max-w-[45px] md:max-h-[45px]" />
        <h3 className="text-[#7E7E7E]">Tenha acesso a Gráficos para sua comodidade</h3>
      </div>

      <div className="bg-white rounded-[10px] p-2">
      <Grafico comodo="Quarto"/>
      </div>
    </div>
  )
}

export default BlocoGrafico