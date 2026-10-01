import { useState } from 'react'

function BlocoAparelho() {
   const [ativo, setAtivo] = useState(false)
    return (
<div className="w-[7rem] h-[10rem] border-1 rounded-[20px] md:w-[15rem] md:h-[18rem] p-[2rem]">
    <div className="flex flex-col">
        <div className="justify-between">
            <img/>
        <div className="relative inline-block w-11 h-5">
            <input
                id="switch-component-1"
                type="checkbox"
                checked={ativo}
                onChange={() => setAtivo(!ativo)}
                className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full bg-[#DBDBDB] checked:bg-[#F68412] cursor-pointer transition-colors duration-300"
            />
            <label
                htmlFor="switch-component-1"
                className="absolute top-0 left-0 w-5 h-5 bg-[#979797] peer-checked:bg-[#B45A00] rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
            />
        </div>
        </div>
        <div>
            <p>Quarto</p>
            <p>Televisão Smart</p>
            <p>Televisão</p>
        </div>
    </div>
    <div className="flex justify-between">
        <div>
            <p>Consumo atual</p>
            <p>67<span>kWh</span></p>
        </div>
        <div>
            <p>Custo estimado</p>
            <p><span>R$</span>7,42</p>
        </div>
    </div>
</div>
    )
}

export default BlocoAparelho;