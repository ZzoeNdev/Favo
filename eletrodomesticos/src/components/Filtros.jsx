function Filtros() {
    return(
    <div className="flex flex-col w-[15rem] min-h-[80rem] bg-[#F5F5F5] rounded-[20px] p-[2rem] md:w-[13rem] md:min-h-[40rem] md:mt-[2rem]">
        <p className="text-[1.75rem] font-extrabold text-[#969696]">Filtros</p>
        <div className="flex flex-row gap-[0.5rem]">
            <div className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                    <input id="1" type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-[#969696] rounded-[5px] checked:bg-[#F68412] checked:border-[#F68412] cursor-pointer transition-colors duration-300"/>
                    <span className="absolute top-0 left-0 w-5 h-5 flex items-center justify-center text-white text-xs font-bold opacity-0 peer-checked:opacity-100 pointer-events-none">
                    ✓
                    </span>
                    <label htmlFor="1" className="text-[#969696] peer-checked:font-bold peer-checked:text-[#F68412] cursor-pointer transition-colors duration-300">Quarto</label>
                </div>
            </div>
        </div>
    </div>
    )}
export default Filtros;