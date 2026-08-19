

function CardMeta() {
    return (
        <div className="flex flex-col items-center shadow-[0_0_5px_0_rgba(0,0,0,0.2)] w-[90%] h-auto rounded-2xl p-7 md:p-9 mt-10">
            <div className="flex justify-between w-[100%]">
                <h3 className="font-semibold md:text-2xl">Defina sua meta</h3>
                <img className="w-5 h-5 md:w-7 md:h-7" src="../src/assets/icons/edit.png" alt="" />
            </div>
            <div className="flex flex-col items-start w-[100%] mt-6 md:mt-11">
                <h1 className="text-5xl md:text-8xl font-extrabold md:font-bold">R$ 167,00</h1>
                <p className="text-gray-400 text-xs md:text-xl font-medium">Orçamento definido para Março</p>
            </div>
            <div className="relative w-[100%] h-2 bg-gray-300 rounded-full mt-6 md:mt-11">
                <div className="absolute w-[50%] h-2 bg-orange-300 rounded-full"></div>
            </div>
        </div>
    )
}

export default CardMeta