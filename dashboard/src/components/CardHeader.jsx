import {useState, useEffect} from 'react'

import relampagoIcon from "../assets/icons/relampagoIcon.png"
import retornoIcon from "../assets/icons/retornoIcon.png"
import maisUsoEletrodomesticoIcon from "../assets/icons/maisUsoEletrodomesticoIcon.png"

function CardHeader() {

    const [consumo, setConsumo] = useState(0)
    const [maisUsado, setMaisUsado] = useState("")
    const [valorSalvo, setValorSalvo] = useState({economiaReais: 0, economizou: null})

    console.log(maisUsado)
    
    useEffect(() => {
            function buscarValores() {
                fetch('https://favo.alwaysdata.net/resumo.php', { credentials: 'include' })
                    .then(resposta => resposta.json())
                    .then(json => setConsumo(json.consumoTotal))

                fetch('https://favo.alwaysdata.net/eletroMaisUso.php', { credentials: 'include' })
                    .then(resposta => resposta.json())
                    .then(json => setMaisUsado(json.nome)
                        )

                fetch('https://favo.alwaysdata.net/valorSalvo.php', { credentials: 'include' })
                    .then(resposta => resposta.json())
                    .then(json => setValorSalvo(json))
            }
            buscarValores()
            const intervalo = setInterval(buscarValores, 4000)
            return () => clearInterval(intervalo)
        }, []);
    

    const Cards = [
        { icone: relampagoIcon, secao: "Visão Geral", titulo: "CONSUMO ATUAL", valor: consumo.toFixed(1).replace('.',','), tipo: "kWh", economia: "" },
        { icone: retornoIcon, secao: "Visão Geral", titulo: "VALOR SALVO", valor: valorSalvo.economizou ? `R$ ${valorSalvo.economiaReais.toFixed(2).replace('.',',')}` : "0,00", tipo: "", economia: valorSalvo.economizou ? `R$ ${valorSalvo.economiaReais.toFixed(2).replace('.',',')}` : "" },
        { icone: maisUsoEletrodomesticoIcon, secao: "Visão Geral", titulo: "ELETRODOMÉSTICO COM MAIS USO", valor: maisUsado, tipo: "", economia: "" }
    ];

    return (
        <div className="md:absolute md:top-[40%] md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 flex flex-col md:flex-row items-center -mt-20 md:mt-0 md:justify-around md:w-[90%] gap-4">
            {Cards.map(card => {
                const Eletro = card.valor == maisUsado
                return (
                    <div className="bg-white shadow-md w-75 md:w-109 h-50 md:h-65 p-5 rounded-xl md:scale-[120%]">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center justify-center bg-gray-400/20 w-8 h-8 rounded-lg"><img className="h-fit w-4" src={card.icone} alt="" /></div>
                            <p className="text-xs text-black/20 font-bold">{card.secao}</p>
                        </div>

                        <div className="mt-10 md:mt-13">
                            <p className="text-xs text-black/40 font-medium">{card.titulo}</p>
                            <p className={Eletro ? "truncate text-3xl md:text-5xl font-extrabold" : "text-3xl md:text-6xl font-extrabold"}>{card.valor}<span className="text-xl">{card.tipo}</span></p>
                            <p className="bg-green-200/70 text-green-900 font-bold text-sm rounded-md text-center w-fit md:mt-3">{card.economia}</p>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardHeader