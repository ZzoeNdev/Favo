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
        <div className="flex flex-row gap-[1rem]">
        {aparelhosFiltrados.map(a => (
            <div key={a.id} className="w-[7rem] h-[10rem] border-1 rounded-[20px] md:w-[15rem] md:h-[18rem] p-[2rem]">
                <div className="flex flex-col">
                    <div className="justify-between">
                        <img />
                        <div className="relative inline-block w-11 h-5">
                            <input
                                id={`switch-${a.id}`}
                                type="checkbox"
                                checked={a.estado === 'ligado'}
                                onChange={() => alternar(a.id)}
                                className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full bg-[#DBDBDB] checked:bg-[#F68412] cursor-pointer transition-colors duration-300"
                            />
                            <label
                                htmlFor={`switch-${a.id}`}
                                className="absolute top-0 left-0 w-5 h-5 bg-[#979797] peer-checked:bg-[#B45A00] rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                            />
                        </div>
                    </div>
                    <div>
                        <p>{a.nomeComodo}</p>
                        <p>{a.nome}</p>
                        <p>{a.id}</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p>Consumo atual</p>
                        <p>67<span>kWh</span></p>
                    </div>
                    <div>
                        <p>Custo estimado</p>
                        <p><span>R$</span>7,42</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default BlocoAparelho;