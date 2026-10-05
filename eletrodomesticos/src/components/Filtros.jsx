import { useState, useEffect } from 'react'

function Filtros({comodosFiltro, alternarFiltro}) {
        const [comodos, setComodos] = useState([])

        useEffect(() => {
            fetch('https://favo.alwaysdata.net/listarComodos.php', { credentials: 'include' })
                .then(resposta => resposta.json())
                .then(json => {
                    setComodos(json)
                    console.log(json)
                });
        }, [])

    return(
    <div className="flex flex-col w-[10vw] min-h-[20vh] xl:min-h-[80vh] p-[2rem] xl:w-[13rem] xl:min-h-[40rem] md:mt-[2rem]">
        <p className="text-[1.75rem] font-extrabold text-[#969696]">Filtros</p>
        <div className="flex flex-row xl:flex-col gap-[5vw] xl:gap-[1vh]">
            {comodos.map(comodo => (
            <div key={comodo.id} className="flex items-center cursor-pointer">
                <div className="flex items-center gap-2">
                    <input id={comodo.id} type="checkbox" checked={comodosFiltro.includes(comodo.nome)} onChange={() => alternarFiltro(comodo.nome)} className="peer appearance-none w-5 h-5 border-2 border-[#969696] rounded-[5px] checked:bg-[#F68412] checked:border-[#F68412] cursor-pointer transition-colors duration-300"/>
                    <span className="absolute top-0 left-0 w-5 h-5 flex items-center justify-center text-white text-xs font-bold opacity-0 peer-checked:opacity-100 pointer-events-none">
                    ✓
                    </span>
                    <label htmlFor={comodo.id} className="text-[#969696] peer-checked:font-bold peer-checked:text-[#F68412] cursor-pointer transition-colors duration-300">{comodo.nome}</label>
                </div>
            </div>
            ))}
        </div>
    </div>
    )}
export default Filtros;