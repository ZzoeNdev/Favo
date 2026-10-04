import { useState } from 'react'
import ResumoAparelhos from './components/ResumoAparelhos.jsx'
import BlocoAparelho from './components/BlocoAparelho.jsx'
import Filtros from './components/Filtros.jsx'
import Logo from '../src/assets/favoWLogo.png'
import iconPerfil from '../src/assets/icons/iconPerfil.png'

function App() {
  const [count, setCount] = useState(0)

  function verificacao() {
    fetch("https://favo.alwaysdata.net/verificarSessao.php", { credentials: "include" })
      .then(resposta => resposta.json())
      .then(json => {
        if (json.logado) {
          console.log("Usuário logado");
        } else {
          window.location.href = "https://favo-cadastro.vercel.app"
        }
      })
  }

  verificacao();

  return (
    <div className="font-manrope ml-[5vw] mr-[5vw]">
      <div className="flex justify-between pr-[3vw] pl-[3vw] items-center bg-gradient-to-r from-[#FF9E3C] to-[#F68412] rounded-[15px] mt-[3.5vh] mb-[5vh] w-full xl:h-[9vh]">
        <a href="https://favo-landing.vercel.app"><img className="w-[10vw] xl:w-[4.5vw] h-auto" src={Logo} alt="Logo" /></a>
        <button className="bg-white hover:cursor-pointer border border-[999999]/20 backdrop-blur-sm rounded-3xl shadow-md w-10 h-10 p-1" onClick={() => (window.location.href = "https://favo-perfil.vercel.app")}><img src={iconPerfil} alt="Perfil" /></button>
      </div>
      <ResumoAparelhos />
      <p className="text-[1.25rem] xl:text-[3.5rem] font-extrabold mt-[2vh] xl:mt-[5vh]">Meus Aparelhos</p>
      <div className="flex flex-col xl:flex-row bg-[#F5F5F5] rounded-[20px] xl:mt-[5vh] xl:mb-[5vh]">
        <div className="flex flex-col xl:flex-wrap min-h-[80vh] border-1 border-[#9A9A9A] bg-white rounded-[20px] p-[2vw] w-[90vw] xl:w-[80vw]">
          <BlocoAparelho />
        </div>
        <Filtros/>
      </div>
    </div>

  )
}

export default App
