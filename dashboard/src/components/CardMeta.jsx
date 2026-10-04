import { useState, useEffect } from "react";
import SlotCounter from 'react-slot-counter';
import iconEdit from "../assets/icons/edit.png"

function CardMeta() {

    const [meta, setMeta] = useState(0);
    const [novaMeta, setNovaMeta] = useState('');
    const [mudarMeta, setMudarMeta] = useState(false);

    function definirNovaMeta(e) {
        e.preventDefault();
        console.log('Nova meta a ser definida:', novaMeta);
        fetch("https://favo.alwaysdata.net/trocarMeta.php?meta=" + novaMeta, {
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        })
            .then(resposta => resposta.json())
            .then(json => {
                console.log('meta no backend:', json);
                setMeta(json.meta);
                setMudarMeta(false);
            });
    }

    useEffect(() => {
        fetch("https://favo.alwaysdata.net/buscarDados.php", { credentials: "include" })
            .then(resposta => resposta.json())
            .then(json => {
                setMeta(json.meta);
            });
    }, []);

    const [custo, setCusto] = useState(0)

    useEffect(() => {
        function buscarValores() {
            fetch('https://favo.alwaysdata.net/resumo.php', { credentials: 'include' })
                .then(resposta => resposta.json())
                .then(json => setCusto(Number(json.custoReais)))
        }
        buscarValores()
        const intervalo = setInterval(buscarValores, 4000)
        return () => clearInterval(intervalo)
    }, []);

    const larguraBarra = (custo / meta) * 100;
    console.log('Largura da barra:', larguraBarra); 

    return (
        <div className="flex flex-col items-center shadow-[0_0_5px_0_rgba(0,0,0,0.2)] w-[90%] h-auto rounded-2xl p-7 md:p-9 mt-10">
            <div className="flex justify-between w-[100%]">
                <h3 className="font-semibold md:text-2xl">Defina sua meta</h3>
                <div className="flex items-center gap-2 cursor-pointer">
                    {mudarMeta && (
                        <form className="flex flex-col items-center">
                            <input type="text" maxLength="5" onChange={(e) => setNovaMeta(e.target.value)} placeholder="Digite a nova meta" className="border border-gray-300 text-gray-900 rounded-md p-2 placeholder:text-gray-500" />
                            <button className="bg-orange-400 hover:bg-orange-500 text-white text-xs w-full font-bold py-1 px-2 rounded-md mt-2" onClick={definirNovaMeta}>Definir Nova Meta</button>
                        </form>
                    )}
                    <img className="w-5 h-5 md:w-7 md:h-7" src={iconEdit} onClick={() => setMudarMeta(!mudarMeta)} alt="" />
                </div>
            </div>
            <div className="flex flex-col items-start w-[100%] mt-6 md:mt-11">
                <h1 className="text-5xl md:text-8xl font-extrabold md:font-bold">R$ <SlotCounter value={Number(meta).toFixed(2).replace('.', ',')} /></h1>
                <p className="text-gray-400 text-xs md:text-xl font-medium">Orçamento definido para Março</p>
            </div>
            <div className="relative w-[100%] h-2 bg-gray-300 rounded-full mt-6 md:mt-11">
                <div className={"absolute h-2 bg-orange-300 rounded-full"} style={{ width: `${larguraBarra > 100 ? 100 : larguraBarra}%` }}></div>
            </div>
        </div>
    )
}

export default CardMeta