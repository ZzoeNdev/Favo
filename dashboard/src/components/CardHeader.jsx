function CardHeader() {
    const Cards = [
        { icone: "../src/assets/icons/relampagoIcon.png", secao: "Visão Geral", titulo: "CONSUMO ATUAL", valor: "99.4", tipo: "kWh", economia: "" },
        { icone: "../src/assets/icons/retornoIcon.png", secao: "Visão Geral", titulo: "VALOR SALVO", valor: "R$ 5,31", tipo: "", economia: "R$ 1,32 Economizados" },
        { icone: "../src/assets/icons/maisUsoEletrodomesticoIcon.png", secao: "Visão Geral", titulo: "ELETRODOMÉSTICO COM MAIS USO", valor: "Micro-ondas", tipo: "", economia: "" }
    ];

    return (
        <div className="md:absolute md:top-[40%] md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 flex flex-col md:flex-row items-center -mt-20 md:mt-0 md:justify-around md:w-[90%] gap-4">
            {Cards.map(card => {
                const Eletro = card.valor === "Micro-ondas"
                return (
                    <div className="bg-white shadow-md w-75 md:w-109 h-50 md:h-65 p-5 rounded-xl md:scale-[120%]">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center justify-center bg-gray-400/20 w-8 h-8 rounded-lg"><img className="h-fit w-4" src={card.icone} alt="" /></div>
                            <p className="text-xs text-black/20 font-bold">{card.secao}</p>
                        </div>

                        <div className="mt-10 md:mt-13">
                            <p className="text-xs text-black/40 font-medium">{card.titulo}</p>
                            <p className={Eletro ? "text-3xl md:text-5xl font-extrabold" : "text-3xl md:text-6xl font-extrabold"}>{card.valor}<span className="text-xl">{card.tipo}</span></p>
                            <p className="bg-green-200/70 text-green-900 font-bold text-sm rounded-md text-center w-fit md:mt-3">{card.economia}</p>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardHeader