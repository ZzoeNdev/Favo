import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

function Grafico({comodo}) {

const[dados, setDados] = useState([]);

useEffect(() => {
    fetch(`http://localhost/api/graficoComodo.php?comodo=${comodo}`, {credentials: 'include'})
        .then(resposta => resposta.json())
        .then(json => setDados(json));
}, [comodo]);

    return (
        <ResponsiveContainer width="100%" height={300}>
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
                <XAxis dataKey="x" tick={{ fill: '#B2B2B2', fontSize: 12, fontWeight: 'light' }} tickLine={false} axisLine={false} />
                <YAxis domain={[0,5]} tick={{ fill: '#B2B2B2', fontSize: 12, fontWeight: 'light' }} tickLine={false} axisLine={false} width={20}/>
                <CartesianGrid stroke="#e4e4e4" horizontal={true} vertical={false} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default Grafico;