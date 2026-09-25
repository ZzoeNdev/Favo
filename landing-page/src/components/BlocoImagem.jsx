import Imagem from "../assets/acessoSimultaneo.png"

function BlocoImagem() {
  return (
    <div className="bg-gradient-to-r from-[#EEEEEE]/50 to-[#F9F9F9]/50 rounded-[20px] border border-[#DFDFDF] min-w-[16rem] max-w-15 p-3 md:max-w-25 md:gap-5 md:p-3">
      <div className="flex justify-center p-2">
        <img src={Imagem} alt=""/>
      </div>
    </div>
  )
}

export default BlocoImagem