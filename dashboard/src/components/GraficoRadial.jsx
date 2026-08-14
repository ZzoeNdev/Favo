import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts"

function GraficoRadial() {

    const dados = [
        {nome: 'consumo', valor: 75}
    ]


    return(
        <div className="relative flex justify-center w-full h-[270px] pointer-events-none">
            <RadialBarChart width={270} height={270} data={dados} innerRadius={"10%"} startAngle={90} endAngle={-270}>
                <PolarAngleAxis type="number" domain={[0,100]} tick={false}/>
                <RadialBar dataKey="valor" fill="#F68412" background={{fill:"#BFBFBF"}}/>
            </RadialBarChart>
            <div className="absolute flex flex-col justify-center items-center text-center w-[170px] h-[170px] rounded-[100%] bg-[#1F232D] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <h1 className="text-4xl font-extrabold text-white">1.23k</h1>
                <p className="text-sm font-medium text-gray-400">Total de kWh</p>
            </div>
        </div>
    )
}

export default GraficoRadial