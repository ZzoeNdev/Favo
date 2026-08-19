import Grafico from './Grafico'
import { useState } from "react";

function Painel() {

    const comodos = ["Quarto", "Sala", "Cozinha", "Garagem", "Banheiro", "Lavanderia"];
    const [selecionado, setSelecionado] = useState("Quarto");

    const maisUso = {
        Quarto: [
            { nome: "Ar Condicionado", watts: "8.7" },
            { nome: "Smart TV", watts: "12.7" },
            { nome: "Luz", watts: "32.7" }
        ],

        Sala: [
            { nome: "Luz", watts: "8.7" },
            { nome: "Smart TV", watts: "12.7" },
        ],

        Cozinha: [
            { nome: "Micro-Ondas", watts: "8.7" },
            { nome: "Geladeira", watts: "12.7" },
            { nome: "Luz", watts: "32.7" }
        ],

        Garagem: [
            { nome: "Luz", watts: "32.7" }
        ],

        Banheiro: [
            { nome: "Luz", watts: "8.7" },
            { nome: "Chuveiro", watts: "12.7" },
        ],

        Lavanderia: [
            { nome: "Máquina de Lavar", watts: "8.7" },
        ]

    }

    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-400/40 w-[90%] h-auto mt-10 rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] md:pr-8">
            <div className="flex flex-col justify-start p-10 bg-white w-[100%] md:w-[85%] h-auto shadow-lg rounded-lg">
                <div><p className="text-gray-400/40 font-medium">{selecionado}</p></div>

                <div className="flex flex-col md:flex-row gap-2 mt-5">
                    {maisUso[selecionado].map(obj => (
                        <div className="bg-gray-400/5 border border-gray-400/20 rounded-xl p-3">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-4 items-center">
                                    <div className="bg-orange-200/70 w-10 h-10 rounded-lg">
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        <h1 className="font-bold">{obj.nome}</h1>
                                        <p className="text-sm font-light">Atualizado</p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="font-extrabold text-lg">{obj.watts}W</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-2 text-xs"><div className="bg-orange-500 w-2 h-2 rounded-2xl"></div>Mês Atual</div>
                    <div className="flex items-center gap-2 text-xs"><div className="bg-orange-800 w-2 h-2 rounded-2xl"></div>Mês Anterior</div>
                </div>
                <Grafico comodo={selecionado} />

                <div className='flex flex-col mt-10'>
                    <p className='text-start font-medium text-sm text-gray-400'>Resumo</p>
                    <div className='bg-gray-200 w-full h-[1px] mt-1'></div>
                    <div className='flex items-center justify-between mt-2'>
                        <div className='w-[35%]'>
                            <p className='text-xs text-gray-400 font-medium'>Consumo de Hoje</p>
                            <h1 className='font-bold'>2.1 <span className='text-gray-400 font-medium text-sm'>kWh</span></h1> 
                        </div>

                        <div className='bg-[url(../src/assets/FrameBG.png)] bg-contain bg-no-repeat w-[65%] p-2'>
                            <p className='text-xs text-white'>Custo estimado</p>
                            <h1 className='font-bold text-white'>R$ 1,43</h1>
                        </div>

                        <button className='hidden md:flex whitespace-nowrap text-orange-400'>Ver Detalhes</button>
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center mb-2 mt-2 md:ml-8">
                <div className="flex md:flex-col gap-4 w-full max-w-sm overflow-auto scrollbar-none">
                    {comodos.map(comodo => (
                        <button className={selecionado === comodo ? "flex flex-shrink-0 items-center bg-white shadow-md w-55 h-15 p-4 gap-4 rounded-xl border border-orange-500 border-2 cursor-pointer" : "flex flex-shrink-0 items-center bg-white shadow-md w-55 h-15 p-4 gap-4 rounded-xl cursor-pointer"} onClick={() => setSelecionado(comodo)}>
                            <div className="bg-orange-200/70 w-10 h-10 rounded-lg">
                                <img src="" alt="" />
                            </div>

                            <div className="flex flex-col justify-center">
                                <h1 className="text-start font-bold">{comodo}</h1>
                                <p className={selecionado === comodo ? "text-xs text-start text-orange-500" : "text-xs text-start"}>1 aparelho</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Painel