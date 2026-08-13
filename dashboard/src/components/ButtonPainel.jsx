import { useState } from "react";

function ButtonPainel() {
    const comodos = ["Quarto", "Sala", "Cozinha", "Garagem", "Banheiro", "Lavanderia"];
    const [selecionado, setSelecionado] = useState("Quarto");

    return (
        <div className="flex justify-center gap-4 w-full max-w-sm overflow-auto">
            {comodos.map(comodo => (
                <button className={selecionado === comodo ? "flex items-center bg-white shadow-md w-55 h-15 p-4 gap-4 rounded-xl border border-orange-500 border-2" : "flex items-center bg-white shadow-md w-55 h-15 p-4 gap-4 rounded-xl"} onClick={() => setSelecionado(comodo)}> 
                    <div className="bg-orange-200/70 w-10 h-10 rounded-lg">
                        <img src="" alt="" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h1 className="text-start font-bold">{comodo}</h1>
                        <p className={selecionado === comodo ? "text-xs text-start text-orange-500" : "text-xs text-start"}>1 aparelho</p>
                    </div>
                </button>
            ))}
        </div>
    )
}

export default ButtonPainel