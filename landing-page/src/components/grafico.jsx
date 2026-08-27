import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

function Grafico() {
    const dados = [
    { x: 1, mesAtual: 5, mesAnterior: 8 }, { x: 2, mesAtual: 8, mesAnterior: 12 },
    { x: 3, mesAtual: 12, mesAnterior: 20 }, { x: 4, mesAtual: 18, mesAnterior: 45 },
    { x: 5, mesAtual: 22, mesAnterior: 58 }, { x: 6, mesAtual: 20, mesAnterior: 55 },
    { x: 7, mesAtual: 18, mesAnterior: 35 }, { x: 8, mesAtual: 20, mesAnterior: 22 },
    { x: 9, mesAtual: 28, mesAnterior: 18 }, { x: 10, mesAtual: 42, mesAnterior: 15 },
    { x: 11, mesAtual: 38, mesAnterior: 14 }, { x: 12, mesAtual: 32, mesAnterior: 18 },
    { x: 13, mesAtual: 30, mesAnterior: 28 }, { x: 14, mesAtual: 55, mesAnterior: 25 },
    { x: 15, mesAtual: 55, mesAnterior: 22 }, { x: 16, mesAtual: 60, mesAnterior: 20 },
    { x: 17, mesAtual: 80, mesAnterior: 22 }, { x: 18, mesAtual: 55, mesAnterior: 30 },
    { x: 19, mesAtual: 50, mesAnterior: 55 }, { x: 20, mesAtual: 25, mesAnterior: 78 },
    { x: 21, mesAtual: 22, mesAnterior: 70 }, { x: 22, mesAtual: 35, mesAnterior: 40 },
    { x: 23, mesAtual: 48, mesAnterior: 25 }, { x: 24, mesAtual: 42, mesAnterior: 20 },
    { x: 25, mesAtual: 20, mesAnterior: 35 }, { x: 26, mesAtual: 18, mesAnterior: 48 },
    { x: 27, mesAtual: 30, mesAnterior: 52 }, { x: 28, mesAtual: 28, mesAnterior: 48 },
    { x: 29, mesAtual: 15, mesAnterior: 40 }, { x: 30, mesAtual: 8, mesAnterior: 20 },
    { x: 31, mesAtual: 3, mesAnterior: 8 },
    ]
    return (
        <ResponsiveContainer width="100%" height="300">
            <AreaChart data={dados} className="mt-8">

                <defs>
                    <linearGradient id="colorMesAnterior" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#CC6600" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#CC6600" stopOpacity={1}/>
                    </linearGradient>
                    <linearGradient id="colorMesAtual" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFB56B" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#F68412" stopOpacity={1}/>
                    </linearGradient>
                </defs>

                <Area type="natural" stroke="transparent" fill="url(#colorMesAnterior)" fillOpacity={1} dataKey="mesAnterior" />
                <Area type="natural" stroke="transparent" fill="url(#colorMesAtual)" fillOpacity={1} dataKey="mesAtual" />
                <XAxis dataKey="x" tick={false} tickLine={false} axisLine={false} />
                <YAxis domain={[0,120]} tick={false} tickLine={false} axisLine={false} width={0}/>
                <CartesianGrid stroke="#e4e4e4" horizontal={false} vertical={false} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default Grafico;