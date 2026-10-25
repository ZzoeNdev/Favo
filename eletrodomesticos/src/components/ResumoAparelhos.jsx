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
                <div className="flex flex-col justify-center bg-gradient-to-r from-[#F68412] to-[#FB9C3C] md:bg-[url(../src/assets/backgroundWatts.png)] md:bg-cover p-5 md:p-[2vw] rounded-[20px] xl:h-[30vh] w-[84vw] xl:w-[55vw]">
                    <p className="md:text-[1.25rem] text-white font-md">Consumo <span className='font-bold'>Total</span> da sua <span className='font-bold'>Casa</span></p> 
                    <p className="text-4xl md:text-8xl text-white font-extrabold truncate">33.5 <span className='text-xl md:text-4xl opacity-80'>kWh</span></p>
                    <p className="text-white">Atualizado Agora</p>
                </div>
                <div className="flex flex-row justify-between gap-[5vw] xl:gap-[3vw]">
                    <div className="flex flex-col md:justify-between justify-center border-1 border-gray-400/40 p-[2vw] rounded-[20px] h-[40vw] xl:h-[30vh] w-[40vw] xl:w-[15vw]">
                        <p className="md:text-[1.25rem] font-bold">Cadastrados</p> 
                        <p className="text-[3rem] md:text-9xl font-bold truncate">{card.cadastrados}</p>
                        <p className="text-[#B5B5B5] text-sm md:text-lg">Aparelhos no sistema</p>
                    </div>
                    <div className="flex flex-col md:justify-between justify-center border-1 border-gray-400/40 p-[2vw] rounded-[20px] h-[40vw] xl:h-[30vh] w-[40vw] xl:w-[15vw]">
                        <p className="md:text-[1.25rem] font-bold">Ativos Agora</p>
                        <p className="text-[3rem] md:text-9xl font-bold truncate">{card.ativos}</p>
                        <p className="text-[#B5B5B5] text-sm md:text-lg">Em funcionamento</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumoAparelhos;