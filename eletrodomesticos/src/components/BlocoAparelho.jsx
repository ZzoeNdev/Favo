import { useState, useEffect } from 'react'
import MenuSuspenso from "./MenuSuspenso"
import IconArCondicionadoLigado from "../assets/icons/IconArCondicionadoLigado.svg"
import IconArCondicionadoDesligado from "../assets/icons/IconArCondicionadoDesligado.svg"

function BlocoAparelho({comodosFiltro, atualizando}) {

    const [aparelhos, setAparelhos] = useState([])
    const [atualizar, setAtualizar] = useState(0)

    useEffect(() => {
        fetch('/api/listarAparelhos.php', { credentials: 'include' })
            .then(resposta => resposta.json())
            .then(json => {
                setAparelhos(json)
                console.log(json)
            });
    }, [atualizar])

    function alternar(idEletro) {
        fetch("/api/alternarEstado.php", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id_eletro: idEletro })
        })
            .then(resposta => resposta.json())
            .then(() => setAtualizar(v => v + 1), console.log(atualizar))
            .then(() => atualizando())
    }

    const aparelhosFiltrados = comodosFiltro.length === 0 ? aparelhos : aparelhos.filter(a => comodosFiltro.includes(a.nomeComodo));
    console.log("Aparelhos filt" + aparelhosFiltrados);



    return (
        <div className="flex flex-wrap gap-[1.5vh] xl:gap-[1vw]">
        {aparelhosFiltrados.map(a => (
            <div className="relative">
               <div key={a.id} className={`flex flex-col w-[85vw] h-[12vh] border-1 ${a.estado === "ligado" ? "border-[#F68412] shadow-sm shadow-[#F68412]" : "border-[#A2A2A2]"} duration-300 rounded-[20px] xl:w-[17.5vw] xl:h-[45vh] px-[2.5vw] py-[1.5vh] xl:py-[2.5vh]`}>
                    <div className="flex flex-row xl:flex-col justify-between h-full">
                        <div className="flex flex-col h-full max-w-[50vw]">
                            <div className="absolute left-auto top-[0.2vh] xl:top-[1.2vh] right-5 xl:right-8">
                                <MenuSuspenso
                                    onEditar={() => console.log('editar', a.id)}
                                    onApagar={() => console.log('apagar', a.id)}
                                />    
                            </div>
                            <div className="hidden xl:flex justify-between items-center mt-[3.5vh] mb-[3vh]">
                                <img src={a.estado === "ligado" ? IconArCondicionadoLigado : IconArCondicionadoDesligado} alt={a.estado ? "Ar Condicionado Ligado" : "Ar Condicionado Desligado"}/>
                                <div className="xl:relative xl:inline-block w-22 h-10 ml-[8vw]">
                                    <input
                                        id={`switch-${a.id}`}
                                        type="checkbox"
                                        checked={a.estado === 'ligado'}
                                        onChange={() => alternar(a.id)}
                                        className="peer appearance-none w-16.5 h-7.5 bg-slate-100 rounded-full bg-[#E9E9E9] checked:bg-[#FFE4C9] cursor-pointer transition-colors duration-300"
                                    />
                                    <label
                                        htmlFor={`switch-${a.id}`}
                                        className="absolute top-0 left-0 w-7.5 h-7.5 bg-[#C1C1C1] peer-checked:bg-[#F68412] rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-8.5 peer-checked:border-slate-800 cursor-pointer"
                                    />
                                </div>
                            </div>
                            <div className="md-auto">
                                <p className={`${a.estado === "ligado" ? "text-[#969696]" : "text-[#C0C0C0]"} duration-300 text-[0.75rem] xl:text-[1rem] font-extrabold`}>{a.nomeComodo}</p>
                                <p className={`${a.estado === "ligado" ? "text-black" : "text-[#666666]"} duration-300 line-clamp-1 xl:line-clamp-2 break-words text-[1.125rem] xl:text-[1.5rem] font-bold`}>{a.nome}</p>
                            </div>
                            <div className="flex gap-[2vw] xl:justify-between xl:mb-[2.5vh] mt-auto">
                                <div className="w-[35vw]">
                                    <p className={`${a.estado === "ligado" ? "text-[#969696]" : "text-[#C0C0C0]"} duration-300 text-[0.625rem] xl:text-[0.75rem] font-semibold`}>Consumo atual</p>
                                    <p className={`${a.estado === "ligado" ? "text-black" : "text-[#666666]"} duration-300 font-extrabold text-[0.75rem] xl:text-[1.25rem] whitespace-nowrap`}>{a.consumo}<span className={`${a.estado === "ligado" ? "text-[#969696]" : "text-[#C0C0C0]"} duration-300 font-semibold text-[0.5rem] xl:text-[1rem]`}>kWh</span></p>
                                </div>
                                <div className="w-[35vw]">
                                    <p className={`${a.estado === "ligado" ? "text-[#969696]" : "text-[#C0C0C0]"} duration-300 text-[0.625rem] xl:text-[0.75rem] font-semibold`}>Custo estimado</p>
                                    <p className={`${a.estado === "ligado" ? "text-black" : "text-[#666666]"} duration-300 font-extrabold text-[0.75rem] xl:text-[1.25rem] whitespace-nowrap`}>R$ {a.custo}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center xl:hidden xl:justify-start">
                            <div className="relative inline-block w-11 h-5">
                                <input
                                    id={`switch-${a.id}`}
                                    type="checkbox"
                                    checked={a.estado === 'ligado'}
                                    onChange={() => alternar(a.id)}
                                    className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full bg-[#E9E9E9] checked:bg-[#FFE4C9] cursor-pointer transition-colors duration-300"
                                />
                                <label
                                    htmlFor={`switch-${a.id}`}
                                    className="absolute top-0 left-0 w-5 h-5 bg-[#C1C1C1] peer-checked:bg-[#F68412] rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default BlocoAparelho;