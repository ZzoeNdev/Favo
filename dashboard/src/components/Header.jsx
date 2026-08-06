function Header() {
    return (
        <div className="flex flex-col item-center w-screen bg-gradient-to-br from-orange-500 to-orange-300 bg- md:bg-[url('/src/assets/dashFundo.png')] md:bg-contain bg-no-repeat rounded-b-4xl h-80 md:h-180">

            <header className="relative w-screen flex flex-col justify-start items-center mt-7">
                <a href="../../index.html"><img className="w-8 md:w-11" src="./src/assets/favoWLogo.png" alt="Logo Favo" /></a>
                <div className="flex mt-4 justify-center items-center gap-5">
                    <input className="bg-gray-400/12 border border-white/20 backdrop-blur-sm rounded-xl shadow-md w-70 md:w-150 h-9" type="text" name="" id="" />
                    <button className="bg-gray-400/12 border border-white/20 backdrop-blur-sm rounded-xl shadow-md w-10 md:w-50 h-9"> <img src="" alt="" /></button>
                    <button className="absolute bg-gray-400/12 border border-white/20 backdrop-blur-sm rounded-3xl ml-4 shadow-md w-9 h-9 ml-100"><img src="" alt="" />Perfil</button>
                </div>
            </header>

            <div className="flex flex-col mt-5 ml-4">
                <div className="flex items-center gap-2">
                    <div className="text-white text-xs">CUSTO DE ENERGIA</div>
                    <div className="flex gap-2">
                        <div className="flex items-center gap-3 pl-2 bg-white/12 border border-white/20 backdrop-blur-sm rounded-3xl shadow-md w-30 md:w-150 h-6">
                            <div className="bg-green-400 h-3 w-3 rounded-4xl"></div>
                            <p className="text-white text-xs">Bandeira Verde</p>
                        </div>
                        <div className="flex items-center justify-center bg-white/12 border border-white/20 backdrop-blur-sm rounded-4xl text-white shadow-md w-6 md:w-150 h-6 text-xs">?</div>
                    </div>
                </div>
                <h1 className="text-5xl text-white font-bold">R$ 84,07</h1>
                <div className="text-white text-xs mt-1">Estimativa baseada no seu consumo atual</div>
            </div>
        </div>
    )
}

export default Header