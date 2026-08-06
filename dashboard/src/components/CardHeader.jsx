function CardHeader() {
    const Cards = [
        { icone: "../src/assets/icons/relampagoIcon.png", secao: "Visão Geral", titulo: "CONSUMO ATUAL", valor: "99.4", tipo: "kWh", economia: "" },
        { icone: "../src/assets/icons/retornoIcon.png", secao: "Visão Geral", titulo: "VALOR SALVO", valor: "R$ 5,31", tipo: "", economia: "R$ 1,32 Economizados" },
        { icone: "../src/assets/icons/maisUsoEletrodomesticoIcon.png", secao: "Visão Geral", titulo: "ELETRODOMÉSTICO COM MAIS USO", valor: "Micro-ondas", tipo: "", economia: "" }
    ];

    return (
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 -mt-20 md:-mt-40">
            {Cards.map(card => (
                <div className="bg-white shadow-md w-75 h-50 p-5 rounded-xl">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center justify-center bg-gray-400/20 w-8 h-8 rounded-lg"><img className="h-fit w-4" src={card.icone} alt="" /></div>
                        <p className="text-xs text-black/20 font-bold">{card.secao}</p>
                    </div>

                    <div className="mt-10">
                        <p className="text-xs text-black/40 font-medium">{card.titulo}</p>
                        <p className="text-3xl font-bold">{card.valor} <span className="text-xl">{card.tipo}</span></p>
                        <p className="bg-green-200/70 text-green-900 font-medium text-sm rounded-md text-center w-fit">{card.economia}</p>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardHeader