import { useState, useEffect } from 'react';

function ResumoAparelhos({atualizando}) {
    const [card, setCard] = useState({ cadastrados: 0, ativos: 0 })

    useEffect(() => {
        fetch('https://favo.alwaysdata.net/resumoAparelhos.php', { credentials: 'include' })
            .then(resposta => resposta.json())
            .then(json => {
                setCard(json)
                console.log(json)
            });
    }, [atualizando])

    return (
        <div>
            <div className="flex flex-col xl:flex-row justify-around gap-[3vw] items-center">
                <div className="flex flex-col bg-gradient-to-r from-[#F68412] to-[#FB9C3C] p-[2vw] rounded-[20px] xl:h-[30vh] w-[82vw] xl:w-[55vw]">
                    <p className="text-[1.25rem] text-white font-bold">Consumo Total da sua Casa</p> 
                    <p className="text-[3rem] text-white font-extrabold truncate">33.5 kWh</p>
                    <p className="text-white">Atualizado Agora</p>
                </div>
                <div className="flex flex-row justify-between gap-[5vw] xl:gap-[3vw]">
                    <div className="flex flex-col border-1 p-[2vw] rounded-[20px] h-[38vw] xl:h-[30vh] w-[38vw] xl:w-[15vw]">
                        <p className="text-[1.25rem] font-bold">Cadastrados</p> 
                        <p className="text-[3rem] font-extrabold truncate">{card.cadastrados}</p>
                        <p className="text-[#B5B5B5]">Aparelhos no sistema</p>
                    </div>
                    <div className="flex flex-col border-1 p-[2vw] rounded-[20px] h-[38vw] xl:h-[30vh] w-[38vw] xl:w-[15vw]">
                        <p className="text-[1.25rem] font-bold">Ativos Agora</p>
                        <p className="text-[3rem] font-extrabold truncate">{card.ativos}</p>
                        <p className="text-[#B5B5B5]">Em funcionamento</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumoAparelhos;