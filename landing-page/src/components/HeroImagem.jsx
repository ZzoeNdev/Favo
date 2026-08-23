import Imagem from "../assets/laptopHero.png"
import Fundo from "../assets/fundoHero.png"

const qualidades = [
  { texto: "Qualidade",  classe: "top-[-1vw] right-[19.5vw] z-20"  },
  { texto: "Organizado", classe: "top-[12vw] right-[17vw] z-20"    },
  { texto: "Confiança",  classe: "top-[13vw] left-[17vw] z-20"     },
  { texto: "Agilidade",  classe: "top-[3vw] left-[19vw] z-20"      },
]

function BadgeQualidade({ texto, classe }) {
  return (
    <div className={`absolute flex items-center justify-around w-[5.5vw] h-[1.66vw] bg-white rounded-[10px] text-[0.725vw] shadow-md ${classe}`}>
      <div className="bg-[#F68412] h-[0.625vw] w-[0.625vw] rounded-full" />
      {texto}
    </div>
  )
}

function HeroImagem() {
  return (
    <div className="relative flex items-center justify-center w-full">

      {/* 1º — laptop (ocupa o espaço do container) */}
      <img
        src={Imagem}
        alt="Laptop Favo"
        className="relative max-w-[58vw] mb-[3.1vw] z-10"
      />

      {/* 2º — fundo (se posiciona atrás do laptop) */}
      <img
        src={Fundo}
        alt=""
        className="absolute w-full h-full object-cover z-0 top-[-3.1vw] left-0"
      />

      {/* 3º — badges */}
      {qualidades.map(({ texto, classe }) => (
        <BadgeQualidade key={texto} texto={texto} classe={classe} />
      ))}

    </div>
  )
}

export default HeroImagem