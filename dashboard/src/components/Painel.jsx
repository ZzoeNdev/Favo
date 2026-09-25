import Grafico from './Grafico'
import { useState, useEffect } from "react";

function Painel() {

    const [comodos, setComodos] = useState([]);
    const [selecionado, setSelecionado] = useState("Quarto");

    useEffect(() => {
        fetch('http://localhost/api/listarComodos.php', {credentials: 'include'})
            .then(resposta => resposta.json())
            .then(json => {
                console.log('Comodos recebidos:', json);
                setComodos(json);
                if (json.length > 0) {
                    setSelecionado(json[0]);
                }
            });
    }, []);

    console.log('Comodos atualizados:', comodos);
    console.log('Comodo selecionado:', selecionado);
    
    const [aparelhos, setAparelhos] = useState([]);

    useEffect(() => {
        if (selecionado) {
            fetch(`http://localhost/api/aparelhosNoComodo.php?comodo=${selecionado.id}`, {credentials: 'include'})
                .then(resposta => resposta.json())
                .then(json => setAparelhos(json))
        }
    }, [selecionado]);

    console.log('Aparelhos atualizados:', aparelhos);

    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-400/40 w-[90%] h-auto mt-10 rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)] md:pr-8">
            <div className="flex flex-col justify-start p-10 bg-white w-[100%] md:w-[85%] h-auto shadow-lg rounded-lg">
                <div><p className="text-gray-400/40 font-medium">{selecionado.nome}</p></div>

                <div className="flex flex-col md:flex-row gap-2 mt-5">
                    {aparelhos.length > 0 ? aparelhos.map(obj => (
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
                    )) : (
                        <div className="flex justify-center items-center w-full h-full">
                            <p className="text-gray-400 font-bold w-[75%] text-center">Nenhum cômodo criado.(adicione seu primeiro cômodo)</p>
                        </div>
                    )}

                </div>
                <div className={aparelhos.length > 0 ? "flex gap-4 mt-4" : "hidden"}>
                    <div className="flex items-center gap-2 text-xs"><div className="bg-orange-500 w-2 h-2 rounded-2xl"></div>Mês Atual</div>
                    <div className="flex items-center gap-2 text-xs"><div className="bg-orange-800 w-2 h-2 rounded-2xl"></div>Mês Anterior</div>
                </div>

                <Grafico comodo={selecionado.id} />

                <div className={aparelhos.length > 0 ? "flex flex-col mt-10" : "hidden"}>
                    <p className='text-start font-medium text-sm text-gray-400'>Resumo</p>
                    <div className='bg-gray-200 w-full h-[1px] mt-1'></div>
                    <div className='flex items-center justify-between mt-2'>
                        <div className='w-[35%]'>
                            <p className='text-xs text-gray-400 font-medium'>Consumo de Hoje</p>
                            <h1 className='font-bold'>{(aparelhos.reduce((total, obj) => total + obj.watts, 0)*24/1000).toFixed(1)} <span className='text-gray-400 font-medium text-sm'>kWh</span></h1> 
                        </div>

                        <div className='bg-[url(../src/assets/FrameBG.png)] bg-contain bg-no-repeat w-[65%] p-2'>
                            <p className='text-xs text-white'>Custo estimado</p>
                            <h1 className='font-bold text-white'>R$ {(aparelhos.reduce((total, obj) => total + obj.watts, 0)*24/1000).toFixed(2)}</h1>
                        </div>

                        <button className='hidden md:flex whitespace-nowrap text-orange-400'>Ver Detalhes</button>
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center mb-2 mt-2 md:ml-8">
                <div className="flex md:flex-col gap-4 w-full max-w-sm overflow-auto scrollbar-none">
                    {comodos.length>0 ? comodos.map(comodo => (
                        <button className={selecionado === comodo.nome ? "flex flex-shrink-0 items-center bg-white shadow-md w-55 h-15 p-4 gap-4 rounded-xl border border-orange-500 border-2 cursor-pointer" : "flex flex-shrink-0 items-center bg-white shadow-md w-55 h-15 p-4 gap-4 rounded-xl cursor-pointer"} onClick={() => setSelecionado(comodo)}>
                            <div className="bg-orange-200/70 w-10 h-10 rounded-lg">
                                <img src="" alt="" />
                            </div>

                            <div className="flex flex-col justify-center">
                                <h1 className="text-start font-bold">{comodo.nome}</h1>
                                <p className={selecionado === comodo.nome ? "text-xs text-start text-orange-500" : "text-xs text-start"}>{comodo.qtd_aparelhos} aparelhos</p>
                            </div>
                        </button>
                    )) : (
                        <div className="flex justify-center w-full h-full">
                            <p className="text-gray-400 font-bold w-[75%] text-center">Nenhum cômodo criado.(adicione seu primeiro cômodo)</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Painel