import { useState } from 'react'
import Vermelha from '../assets/icons/IconVermelha.png'
import Amarela from '../assets/icons/IconAmarela.png'
import Verde from '../assets/icons/IconVerde.png'

function BandeiraExplicacao() {
    const [aberto, setAberto] = useState(false)
    return (
    <div className="relative inline-block">
        <button onClick={() => setAberto(!aberto)} className="flex items-center justify-center bg-white/12 border border-white/20 backdrop-blur-sm rounded-4xl text-white shadow-md w-6 md:w-6 h-6 text-xs">?</button>
        {aberto && (
            <div className="absolute z-10 left-[-67vw] lg:left-full lg:top-1/2 lg:-translate-y-1/2">
                <div className="flex flex-col bg-white w-[85vw] lg:w-[45vw] border-1 border-[#878787] rounded-[20px] p-[2vw] gap-[1vh]">
                    <p className="font-extrabold text-[1.8rem]">Entenda as Bandeiras Tarifárias</p>
                    <p className="text-[0.8rem] text-[#878787]">As bandeiras tarifárias indicam mensalmente o custo real da produção de energia, aplicando acréscimos à fatura sempre que as condições de geração tornam-se desfavoráveis.</p>
                    <div className="flex flex-row bg-[#57B834]/20 p-[1vw] rounded-[20px] border-1 border-[#0FB70F]/15">
                        <img className="h-[6vh] w-auto" src={Verde} alt="Bandeira Verde" />
                        <div className="flex flex-col">
                            <p className="text-[0.66rem] text-[#41742E] font-semibold">Bandeira Verde</p>
                            <p className="text-[0.6rem] text-[#41742E]">Tarifa padrão (sem acréscimo)</p>
                        </div>
                    </div>
                    <div className="flex flex-row bg-[#EADD52]/15 p-[1vw] rounded-[20px] border-1 border-[#F6FF00]/20">
                        <img className="h-[6vh] w-auto" src={Amarela} alt="Bandeira Amarela" />
                        <div className="flex flex-col">
                            <p className="text-[0.66rem] text-[#B28800] font-semibold">Bandeira Amarela</p>
                            <p className="text-[0.6rem] text-[#B28800]">Custo em elevação.</p>
                        </div>
                    </div>
                    <div className="flex flex-row bg-[#EA5252]/15 p-[1vw] rounded-[20px] border-1 border-[#FF0000]/20">
                        <img className="h-[6vh] w-auto" src={Vermelha} alt="Bandeira Vermelha" />
                        <div className="flex flex-col">
                            <p className="text-[0.66rem] text-[#C90000] font-semibold">Bandeira Vermelha</p>
                            <p className="text-[0.6rem] text-[#C90000]">Custo alto (Geração cara)</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
    )}

export default BandeiraExplicacao