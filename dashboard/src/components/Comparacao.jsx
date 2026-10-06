import { useState, useEffect } from 'react'

function Comparacao() {

    const [custo, setCusto] = useState(0)
    const [maisUsado, setMaisUsado] = useState("")
    const [consumo, setConsumo] = useState(0)
    const [ciclos, setCiclos] = useState([]);

    useEffect(() => {
        function buscarValores() {
            fetch('https://favo.alwaysdata.net/resumo.php', { credentials: 'include' })
                .then(resposta => resposta.json())
                .then(json => setCusto(Number(json.custoReais)))

            fetch('https://favo.alwaysdata.net/eletroMaisUso.php', { credentials: 'include' })
                .then(resposta => resposta.json())
                .then(json => setMaisUsado(json.nome))

            fetch('https://favo.alwaysdata.net/resumo.php', { credentials: 'include' })
                .then(resposta => resposta.json())
                .then(json => setConsumo(json.consumoTotal))
        }
        buscarValores()
        const intervalo = setInterval(buscarValores, 4000)
        return () => clearInterval(intervalo)
    }, []);

    useEffect(() => {
        fetch('https://favo.alwaysdata.net/ciclos.php', { credentials: 'include' })
            .then(resposta => resposta.json())
            .then(json => {
                setCiclos(json.ciclo_anterior);
            });
    }, []);

    console.log('Ciclos:', ciclos);

    return (
        <div className="flex flex-col md:flex-row md:justify-between gap-5 w-full m-10 md:m-0 md:mt-10">
            <div className="flex flex-col justify-center bg-[#1F232D] shadow-md w-full h-100 md:h-120 rounded-xl p-7">
                <p className="text-gray-400 font-medium">Ciclo Passado</p>
                <h1 className="text-6xl text-white font-bold mt-6">{ciclos.total_kwh}<span className="text-2xl text-gray-300/70">kWh</span></h1>
                <div className="bg-white w-full rounded-lg p-3 mt-6">
                    <p className="text-xs text-gray-400">Gastos</p>
                    <h2 className="text-2xl font-bold">R$ {ciclos.custo}</h2>
                </div>
                <div className="bg-white w-full rounded-lg p-3 mt-4">
                    <p className="text-xs text-gray-400">Eletrodoméstico com maior gasto</p>
                    <h2 className="text-2xl font-bold">{ciclos.mais_uso}</h2>
                </div>
            </div>

            <div className="flex flex-col justify-center bg-white shadow-md w-full h-100 md:h-120 rounded-xl p-7">
                <p className="text-gray-400 font-medium">Ciclo Atual</p>
                <h1 className="text-6xl font-bold mt-6">{consumo.toFixed(2)} <span className="text-2xl text-gray-300/70">kWh</span></h1>
                <div className="bg-gray-200/40 w-full rounded-lg p-3 mt-6">
                    <p className="text-xs text-gray-400">Gastos</p>
                    <h2 className="text-2xl font-bold">R$ {custo.toFixed(2).replace('.', ',')}</h2>
                </div>
                <div className="bg-gray-200/40 w-full rounded-lg p-3 mt-4">
                    <p className="text-xs text-gray-400">Eletrodoméstico com maior gasto</p>
                    <h2 className="text-2xl font-bold">{maisUsado}</h2>
                </div>
            </div>

        </div>
    )
}

export default Comparacao