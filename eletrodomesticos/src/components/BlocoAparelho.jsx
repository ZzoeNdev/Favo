import { useState, useEffect } from 'react'

function BlocoAparelho() {

    const [aparelhos, setAparelhos] = useState([])
    const [comodosFiltro, setComodosFiltro] = useState([])
    const [atualizar, setAtualizar] = useState(0)

    useEffect(() => {
        fetch('https://favo.alwaysdata.net/listarAparelhos.php', { credentials: 'include' })
            .then(resposta => resposta.json())
            .then(json => {
                setAparelhos(json)
                console.log(json)
            });
    }, [atualizar])

    function alternar(idEletro) {
        fetch("https://favo.alwaysdata.net/alternarEstado.php", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id_eletro: idEletro })
        })
            .then(resposta => resposta.json())
            .then(() => setAtualizar(v => v + 1))
    }

    const aparelhosFiltrados = comodosFiltro.length === 0 ? aparelhos : aparelhos.filter(a => comodosFiltro.includes(a.nomeComodo));
    console.log(aparelhosFiltrados);



    return (
        <div className="flex flex-wrap gap-[1rem]">
        {aparelhosFiltrados.map(a => (
            <div key={a.id} className="flex flex-col w-[7rem] h-[10rem] border-1 rounded-[20px] md:w-[16rem] md:h-[20rem] p-[2rem]">
                    <div className="justify-between md-auto">
                        <img />
                        <div className="relative inline-block w-11 h-5">
                            <input
                                id={`switch-${a.id}`}
                                type="checkbox"
                                checked={a.estado === 'ligado'}
                                onChange={() => alternar(a.id)}
                                className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full bg-[#E9E9E9] checked:bg-[#F68412] cursor-pointer transition-colors duration-300"
                            />
                            <label
                                htmlFor={`switch-${a.id}`}
                                className="absolute top-0 left-0 w-5 h-5 bg-[#C1C1C1] peer-checked:bg-[#B45A00] rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="md-auto">
                        <p className="text-[#969696] text-[0.75rem] font-extrabold">{a.nomeComodo}</p>
                        <p className="line-clamp-2 break-words text-[1.5rem] font-bold ">{a.nome}</p>
                    </div>
                <div className="flex justify-between mt-auto">
                    <div>
                        <p className="text-[#969696] text-[0.75rem] font-semibold">Consumo atual</p>
                        <p className="font-extrabold text-[1.5rem]">67<span className="font-semibold text-[#969696] text-[1rem]">kWh</span></p>
                    </div>
                    <div>
                        <p className="text-[#969696] text-[0.75rem] font-semibold">Custo estimado</p>
                        <p className="font-extrabold text-[1.5rem]">R$7,42</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default BlocoAparelho;