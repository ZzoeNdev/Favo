import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

function Grafico() {
    const dados = [
    { x: 1, mesAtual: 2.5, mesAnterior: 4 }, { x: 2, mesAtual: 4, mesAnterior: 6 },
    { x: 3, mesAtual: 6, mesAnterior: 10 }, { x: 4, mesAtual: 9, mesAnterior: 22.5 },
    { x: 5, mesAtual: 11, mesAnterior: 29 }, { x: 6, mesAtual: 10, mesAnterior: 27.5 },
    { x: 7, mesAtual: 9, mesAnterior: 17.5 }, { x: 8, mesAtual: 10, mesAnterior: 11 },
    { x: 9, mesAtual: 14, mesAnterior: 9 }, { x: 10, mesAtual: 21, mesAnterior: 7.5 },
    { x: 11, mesAtual: 19, mesAnterior: 7 }, { x: 12, mesAtual: 16, mesAnterior: 9 },
    { x: 13, mesAtual: 15, mesAnterior: 14 }, { x: 14, mesAtual: 27.5, mesAnterior: 12.5 },
    { x: 15, mesAtual: 27.5, mesAnterior: 11 }, { x: 16, mesAtual: 30, mesAnterior: 10 },
    { x: 17, mesAtual: 40, mesAnterior: 11 }, { x: 18, mesAtual: 27.5, mesAnterior: 15 },
    { x: 19, mesAtual: 25, mesAnterior: 27.5 }, { x: 20, mesAtual: 12.5, mesAnterior: 39 },
    { x: 21, mesAtual: 11, mesAnterior: 35 }, { x: 22, mesAtual: 17.5, mesAnterior: 20 },
    { x: 23, mesAtual: 24, mesAnterior: 12.5 }, { x: 24, mesAtual: 21, mesAnterior: 10 },
    { x: 25, mesAtual: 10, mesAnterior: 17.5 }, { x: 26, mesAtual: 9, mesAnterior: 24 },
    { x: 27, mesAtual: 15, mesAnterior: 26 }, { x: 28, mesAtual: 14, mesAnterior: 24 },
    { x: 29, mesAtual: 7.5, mesAnterior: 20 }, { x: 30, mesAtual: 4, mesAnterior: 10 },
    { x: 31, mesAtual: 1.5, mesAnterior: 4 },
    ]
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dados} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>

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
                <YAxis domain={[0,60]} tick={false} tickLine={false} axisLine={false} width={0}/>
                <CartesianGrid stroke="#e4e4e4" horizontal={false} vertical={false} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default Grafico;