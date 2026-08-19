import GraficoRadial from "./GraficoRadial"

function Resumo() {
    return (
        <div className="flex flex-col md:flex-row items-center md:justify-between bg-[#1F232D] w-[90%] p-5 pb-15 md:pb-7 md:pr-18 rounded-2xl mt-10">
            <div className="flex flex-col md:flex-row items-center">
                <div>
                    <GraficoRadial />
                </div>
                <div className="flex flex-col items-center md:items-start mt-5">
                    <h1 className="text-white font-semibold text-xl">Resumo Geral</h1>
                    <p className="text-gray-400 text-sm text-center md:text-start md:w-120">Verifique seus gastos em kWh a partir da página de <span className="font-extrabold">Todos os Produtos</span> e tenha a clareza de saber para onde esta indo seu dinheiro.</p>
                </div>
            </div>

            <button className="bg-[#F68412] w-[60%] md:w-[20%] p-2 font-semibold text-sm text-white rounded-lg mt-10">Todos os Produtos</button>
        </div>
    )
}

export default Resumo