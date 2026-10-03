import { useState, useEffect } from 'react';

function ResumoAparelhos() {
    const [card, setCard] = useState({ cadastrados: 0, ativos: 0 })
    const [atualizar, setAtualizar] = useState(0)

    useEffect(() => {
        fetch('https://favo.alwaysdata.net/resumoAparelhos.php', { credentials: 'include' })
            .then(resposta => resposta.json())
            .then(json => {
                setCard(json)
                console.log(json)
            });
    }, [atualizar])

    return (
        <div>
            <div className="flex flex-row justify-around items-center">
                <div className="flex flex-col bg-gradient-to-r from-[#F68412] to-[#FB9C3C] p-[2rem] rounded-[20px] md:w-[50rem]">
                    <p className="text-[1.25rem] text-white font-bold">Consumo Total da sua Casa</p> 
                    <p className="text-[3rem] text-white font-extrabold truncate">33.5 kWh</p>
                    <p className="text-white">Atualizado Agora</p>
                </div>
                <div className="flex flex-col border-1 p-[2rem] rounded-[20px]">
                    <p className="text-[1.25rem] font-bold">Cadastrados</p> 
                    <p className="text-[3rem] font-extrabold truncate">{card.cadastrados}</p>
                    <p className="text-[#B5B5B5]">Aparelhos no sistema</p>
                </div>
                <div className="flex flex-col border-1 p-[2rem] rounded-[20px]">
                    <p className="text-[1.25rem] font-bold">Ativos Agora</p>
                    <p className="text-[3rem] font-extrabold truncate">{card.ativos}</p>
                    <p className="text-[#B5B5B5]">Em funcionamento</p>
                </div>
            </div>
        </div>
    )
}

export default ResumoAparelhos;