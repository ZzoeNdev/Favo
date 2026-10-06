import { useState, useEffect } from 'react';
import SlotCounter from 'react-slot-counter';

import favoWLogo from "../assets/favoWLogo.png"
import iconPerfil from "../assets/icons/iconPerfil.png"
import addIcon from "../assets/icons/addIcon.png"

import BandeiraExplicacao from './BandeiraExplicacao.jsx'

function Header({ abrirForm }) {

    const [custo, setCusto] = useState(0)

    useEffect(() => {
        function buscarValores() {
            fetch('https://favo.alwaysdata.net/resumo.php', { credentials: 'include' })
                .then(resposta => resposta.json())
                .then(json => setCusto(Number(json.custoReais)))
        }
        buscarValores()
        const intervalo = setInterval(buscarValores, 4000)
        return () => clearInterval(intervalo)
    }, []);


    return (
        <div className="flex flex-col item-center w-screen bg-gradient-to-br from-orange-500 to-orange-300 bg- md:bg-[url('/src/assets/dashFundo.png')] md:bg-contain bg-no-repeat rounded-b-4xl h-80 md:h-[673px]">

            <header className="relative w-screen flex flex-col justify-center items-center mt-7">
                <a href="https://favo-landing.vercel.app"><img className="w-8 md:w-11" src={favoWLogo} alt="Logo Favo" /></a>
                <div className="flex mt-4 w-[87vw] justify-end items-center gap-2 md:gap-5">
                    <button className="hidden md:flex justify-center items-center gap-3 bg-gray-400/12 border border-white/20 backdrop-blur-sm rounded-xl shadow-md w-10 md:w-55 h-10 text-white/80 whitespace-nowrap" onClick={abrirForm}> Adicionar Produto <img src={addIcon} alt="Adicionar Produto" /></button>
                    <button className="flex justify-center items-center md:hidden bg-gray-400/12 border border-white/20 backdrop-blur-sm rounded-xl shadow-md w-10 md:w-50 h-9 text-white/80" onClick={abrirForm}><img src={addIcon} alt="Adicionar Produto"/></button>
                    <button className="bg-gray-400/12 border border-white/20 backdrop-blur-sm rounded-3xl shadow-md w-10 h-10 p-1" onClick={() => (window.location.href = "https://favo-perfil.vercel.app")}><img src={iconPerfil} alt="Perfil" /></button>
                </div>
            </header>

            <div className="flex flex-col mt-5 ml-4 md:mt-[8%] md:ml-[6%]">
                <div className="flex items-center gap-2">
                    <div className="text-white text-xs md:text-md">CUSTO DE ENERGIA</div>
                    <div className="flex gap-2">
                        <div className="flex items-center gap-2 pl-2 pr-2 bg-white/12 border border-white/20 backdrop-blur-sm rounded-3xl shadow-md w-30 md:w-65 h-6">
                            <div className="bg-green-400 h-3 w-3 rounded-4xl"></div>
                            <p className="text-white text-xs whitespace-nowrap">Bandeira Verde</p>
                        </div>
                        <BandeiraExplicacao/>
                    </div>
                </div>
                <h1 className="text-5xl md:text-8xl text-white font-extrabold">R$ <SlotCounter value={custo.toFixed(2).replace(".", ",")}/></h1>
                <div className="text-white text-md mt-1">Estimativa baseada no seu consumo atual</div>
            </div>
        </div>
    )
}

export default Header