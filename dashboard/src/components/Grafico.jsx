import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

function Grafico({comodo}) {
    const dados = {
  Quarto: [
    { x: 1, mesAtual: 5, mesAnterior: 8 }, { x: 2, mesAtual: 8, mesAnterior: 12 },
    { x: 3, mesAtual: 12, mesAnterior: 20 }, { x: 4, mesAtual: 18, mesAnterior: 45 },
    { x: 5, mesAtual: 22, mesAnterior: 58 }, { x: 6, mesAtual: 20, mesAnterior: 55 },
    { x: 7, mesAtual: 18, mesAnterior: 35 }, { x: 8, mesAtual: 20, mesAnterior: 22 },
    { x: 9, mesAtual: 28, mesAnterior: 18 }, { x: 10, mesAtual: 42, mesAnterior: 15 },
    { x: 11, mesAtual: 38, mesAnterior: 14 }, { x: 12, mesAtual: 32, mesAnterior: 18 },
    { x: 13, mesAtual: 30, mesAnterior: 28 }, { x: 14, mesAtual: 55, mesAnterior: 25 },
    { x: 15, mesAtual: 105, mesAnterior: 22 }, { x: 16, mesAtual: 110, mesAnterior: 20 },
    { x: 17, mesAtual: 80, mesAnterior: 22 }, { x: 18, mesAtual: 55, mesAnterior: 30 },
    { x: 19, mesAtual: 50, mesAnterior: 55 }, { x: 20, mesAtual: 25, mesAnterior: 78 },
    { x: 21, mesAtual: 22, mesAnterior: 70 }, { x: 22, mesAtual: 35, mesAnterior: 40 },
    { x: 23, mesAtual: 48, mesAnterior: 25 }, { x: 24, mesAtual: 42, mesAnterior: 20 },
    { x: 25, mesAtual: 20, mesAnterior: 35 }, { x: 26, mesAtual: 18, mesAnterior: 48 },
    { x: 27, mesAtual: 30, mesAnterior: 52 }, { x: 28, mesAtual: 28, mesAnterior: 48 },
    { x: 29, mesAtual: 15, mesAnterior: 40 }, { x: 30, mesAtual: 8, mesAnterior: 20 },
    { x: 31, mesAtual: 3, mesAnterior: 8 },
  ],
  Sala: [
    { x: 1, mesAtual: 10, mesAnterior: 6 }, { x: 2, mesAtual: 14, mesAnterior: 9 },
    { x: 3, mesAtual: 20, mesAnterior: 15 }, { x: 4, mesAtual: 35, mesAnterior: 18 },
    { x: 5, mesAtual: 48, mesAnterior: 22 }, { x: 6, mesAtual: 52, mesAnterior: 30 },
    { x: 7, mesAtual: 40, mesAnterior: 35 }, { x: 8, mesAtual: 30, mesAnterior: 28 },
    { x: 9, mesAtual: 25, mesAnterior: 20 }, { x: 10, mesAtual: 22, mesAnterior: 18 },
    { x: 11, mesAtual: 28, mesAnterior: 22 }, { x: 12, mesAtual: 38, mesAnterior: 30 },
    { x: 13, mesAtual: 55, mesAnterior: 42 }, { x: 14, mesAtual: 70, mesAnterior: 50 },
    { x: 15, mesAtual: 65, mesAnterior: 45 }, { x: 16, mesAtual: 50, mesAnterior: 38 },
    { x: 17, mesAtual: 40, mesAnterior: 30 }, { x: 18, mesAtual: 32, mesAnterior: 25 },
    { x: 19, mesAtual: 28, mesAnterior: 40 }, { x: 20, mesAtual: 20, mesAnterior: 55 },
    { x: 21, mesAtual: 18, mesAnterior: 48 }, { x: 22, mesAtual: 25, mesAnterior: 30 },
    { x: 23, mesAtual: 35, mesAnterior: 22 }, { x: 24, mesAtual: 30, mesAnterior: 18 },
    { x: 25, mesAtual: 22, mesAnterior: 20 }, { x: 26, mesAtual: 18, mesAnterior: 28 },
    { x: 27, mesAtual: 24, mesAnterior: 32 }, { x: 28, mesAtual: 20, mesAnterior: 25 },
    { x: 29, mesAtual: 12, mesAnterior: 18 }, { x: 30, mesAtual: 8, mesAnterior: 10 },
    { x: 31, mesAtual: 5, mesAnterior: 6 },
  ],
  Cozinha: [
    { x: 1, mesAtual: 15, mesAnterior: 20 }, { x: 2, mesAtual: 25, mesAnterior: 28 },
    { x: 3, mesAtual: 40, mesAnterior: 35 }, { x: 4, mesAtual: 60, mesAnterior: 42 },
    { x: 5, mesAtual: 75, mesAnterior: 55 }, { x: 6, mesAtual: 68, mesAnterior: 60 },
    { x: 7, mesAtual: 55, mesAnterior: 48 }, { x: 8, mesAtual: 45, mesAnterior: 38 },
    { x: 9, mesAtual: 50, mesAnterior: 30 }, { x: 10, mesAtual: 62, mesAnterior: 28 },
    { x: 11, mesAtual: 70, mesAnterior: 32 }, { x: 12, mesAtual: 58, mesAnterior: 40 },
    { x: 13, mesAtual: 48, mesAnterior: 50 }, { x: 14, mesAtual: 65, mesAnterior: 62 },
    { x: 15, mesAtual: 90, mesAnterior: 70 }, { x: 16, mesAtual: 95, mesAnterior: 65 },
    { x: 17, mesAtual: 80, mesAnterior: 55 }, { x: 18, mesAtual: 60, mesAnterior: 45 },
    { x: 19, mesAtual: 50, mesAnterior: 40 }, { x: 20, mesAtual: 40, mesAnterior: 60 },
    { x: 21, mesAtual: 35, mesAnterior: 68 }, { x: 22, mesAtual: 45, mesAnterior: 50 },
    { x: 23, mesAtual: 55, mesAnterior: 38 }, { x: 24, mesAtual: 48, mesAnterior: 30 },
    { x: 25, mesAtual: 35, mesAnterior: 28 }, { x: 26, mesAtual: 30, mesAnterior: 35 },
    { x: 27, mesAtual: 40, mesAnterior: 42 }, { x: 28, mesAtual: 38, mesAnterior: 38 },
    { x: 29, mesAtual: 25, mesAnterior: 30 }, { x: 30, mesAtual: 18, mesAnterior: 20 },
    { x: 31, mesAtual: 10, mesAnterior: 12 },
  ],
  Garagem: [
    { x: 1, mesAtual: 2, mesAnterior: 3 }, { x: 2, mesAtual: 3, mesAnterior: 4 },
    { x: 3, mesAtual: 4, mesAnterior: 5 }, { x: 4, mesAtual: 6, mesAnterior: 8 },
    { x: 5, mesAtual: 8, mesAnterior: 10 }, { x: 6, mesAtual: 7, mesAnterior: 9 },
    { x: 7, mesAtual: 5, mesAnterior: 6 }, { x: 8, mesAtual: 4, mesAnterior: 5 },
    { x: 9, mesAtual: 5, mesAnterior: 4 }, { x: 10, mesAtual: 7, mesAnterior: 3 },
    { x: 11, mesAtual: 6, mesAnterior: 4 }, { x: 12, mesAtual: 5, mesAnterior: 5 },
    { x: 13, mesAtual: 4, mesAnterior: 6 }, { x: 14, mesAtual: 6, mesAnterior: 8 },
    { x: 15, mesAtual: 9, mesAnterior: 7 }, { x: 16, mesAtual: 10, mesAnterior: 6 },
    { x: 17, mesAtual: 8, mesAnterior: 5 }, { x: 18, mesAtual: 6, mesAnterior: 4 },
    { x: 19, mesAtual: 5, mesAnterior: 6 }, { x: 20, mesAtual: 4, mesAnterior: 8 },
    { x: 21, mesAtual: 3, mesAnterior: 7 }, { x: 22, mesAtual: 4, mesAnterior: 5 },
    { x: 23, mesAtual: 5, mesAnterior: 4 }, { x: 24, mesAtual: 4, mesAnterior: 3 },
    { x: 25, mesAtual: 3, mesAnterior: 4 }, { x: 26, mesAtual: 2, mesAnterior: 5 },
    { x: 27, mesAtual: 4, mesAnterior: 6 }, { x: 28, mesAtual: 3, mesAnterior: 5 },
    { x: 29, mesAtual: 2, mesAnterior: 3 }, { x: 30, mesAtual: 1, mesAnterior: 2 },
    { x: 31, mesAtual: 1, mesAnterior: 1 },
  ],
  Banheiro: [
    { x: 1, mesAtual: 3, mesAnterior: 4 }, { x: 2, mesAtual: 5, mesAnterior: 6 },
    { x: 3, mesAtual: 8, mesAnterior: 9 }, { x: 4, mesAtual: 12, mesAnterior: 14 },
    { x: 5, mesAtual: 15, mesAnterior: 18 }, { x: 6, mesAtual: 14, mesAnterior: 16 },
    { x: 7, mesAtual: 10, mesAnterior: 12 }, { x: 8, mesAtual: 8, mesAnterior: 10 },
    { x: 9, mesAtual: 9, mesAnterior: 8 }, { x: 10, mesAtual: 11, mesAnterior: 7 },
    { x: 11, mesAtual: 10, mesAnterior: 8 }, { x: 12, mesAtual: 9, mesAnterior: 9 },
    { x: 13, mesAtual: 8, mesAnterior: 11 }, { x: 14, mesAtual: 12, mesAnterior: 14 },
    { x: 15, mesAtual: 16, mesAnterior: 13 }, { x: 16, mesAtual: 18, mesAnterior: 12 },
    { x: 17, mesAtual: 14, mesAnterior: 10 }, { x: 18, mesAtual: 11, mesAnterior: 8 },
    { x: 19, mesAtual: 9, mesAnterior: 11 }, { x: 20, mesAtual: 8, mesAnterior: 15 },
    { x: 21, mesAtual: 6, mesAnterior: 13 }, { x: 22, mesAtual: 8, mesAnterior: 9 },
    { x: 23, mesAtual: 10, mesAnterior: 7 }, { x: 24, mesAtual: 9, mesAnterior: 6 },
    { x: 25, mesAtual: 7, mesAnterior: 7 }, { x: 26, mesAtual: 5, mesAnterior: 9 },
    { x: 27, mesAtual: 8, mesAnterior: 10 }, { x: 28, mesAtual: 7, mesAnterior: 9 },
    { x: 29, mesAtual: 4, mesAnterior: 6 }, { x: 30, mesAtual: 3, mesAnterior: 4 },
    { x: 31, mesAtual: 2, mesAnterior: 2 },
  ],
  Lavanderia: [
    { x: 1, mesAtual: 1, mesAnterior: 2 }, { x: 2, mesAtual: 2, mesAnterior: 2 },
    { x: 3, mesAtual: 2, mesAnterior: 3 }, { x: 4, mesAtual: 15, mesAnterior: 3 },
    { x: 5, mesAtual: 18, mesAnterior: 4 }, { x: 6, mesAtual: 3, mesAnterior: 16 },
    { x: 7, mesAtual: 2, mesAnterior: 18 }, { x: 8, mesAtual: 2, mesAnterior: 4 },
    { x: 9, mesAtual: 1, mesAnterior: 3 }, { x: 10, mesAtual: 16, mesAnterior: 2 },
    { x: 11, mesAtual: 14, mesAnterior: 2 }, { x: 12, mesAtual: 2, mesAnterior: 15 },
    { x: 13, mesAtual: 1, mesAnterior: 12 }, { x: 14, mesAtual: 2, mesAnterior: 3 },
    { x: 15, mesAtual: 15, mesAnterior: 2 }, { x: 16, mesAtual: 17, mesAnterior: 2 },
    { x: 17, mesAtual: 3, mesAnterior: 3 }, { x: 18, mesAtual: 2, mesAnterior: 14 },
    { x: 19, mesAtual: 1, mesAnterior: 16 }, { x: 20, mesAtual: 2, mesAnterior: 2 },
    { x: 21, mesAtual: 14, mesAnterior: 1 }, { x: 22, mesAtual: 13, mesAnterior: 2 },
    { x: 23, mesAtual: 2, mesAnterior: 13 }, { x: 24, mesAtual: 1, mesAnterior: 10 },
    { x: 25, mesAtual: 2, mesAnterior: 2 }, { x: 26, mesAtual: 12, mesAnterior: 1 },
    { x: 27, mesAtual: 13, mesAnterior: 2 }, { x: 28, mesAtual: 2, mesAnterior: 11 },
    { x: 29, mesAtual: 1, mesAnterior: 9 }, { x: 30, mesAtual: 1, mesAnterior: 1 },
    { x: 31, mesAtual: 8, mesAnterior: 1 },
  ]
}
    return (
        <ResponsiveContainer width="100%" height="300">
            <AreaChart data={dados[comodo]} className="mt-8">

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
                <XAxis dataKey="x" tick={{ fill: '#B2B2B2', fontSize: 12, fontWeight: 'light' }} tickLine={false} axisLine={false} />
                <YAxis domain={[0,120]} tick={{ fill: '#B2B2B2', fontSize: 12, fontWeight: 'light' }} tickLine={false} axisLine={false} tickCount={8} width={20}/>
                <CartesianGrid stroke="#e4e4e4" horizontal={true} vertical={false} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default Grafico;