import { useState } from 'react'
import ResumoAparelhos from './components/ResumoAparelhos.jsx'
import BlocoAparelho from './components/BlocoAparelho.jsx'
import Filtros from './components/Filtros.jsx'
import iconPerfil from "./assets/icons/iconPerfil.png"

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
    <div className="font-manrope ml-[3rem] mr-[3rem]">
      <div className="flex justify-between pr-[2rem] pl-[2rem] items-center bg-gradient-to-r from-[#FF9E3C] to-[#F68412] rounded-[15px] mt-[1.5rem] mb-[3.5rem] w-full h-[3rem] md:h-[4rem]">
        <a href="https://favo-landing.vercel.app"><img className="md:w-[4rem] h-auto" src="../src/assets/FavoWLogo.png" alt="Logo" /></a>
        <button className="bg-white hover:cursor-pointer border border-[999999]/20 backdrop-blur-sm rounded-3xl shadow-md w-10 h-10 p-1" onClick={() => (window.location.href = "https://favo-perfil.vercel.app")}><img src={iconPerfil} alt="Perfil" /></button>
      </div>
      <ResumoAparelhos />
      <p className="text-[3.5rem] font-extrabold mt-[2rem]">Meus Aparelhos</p>
      <div className="flex flex-row bg-[#F5F5F5] rounded-[20px] md:mt-[2rem]">
        <div className="flex flex-wrap w-[20rem] min-h-[80rem] border-1 border-[#9A9A9A] bg-white rounded-[20px] p-[2rem] md:w-[72rem] md:min-h-[40rem]">
          <BlocoAparelho />
        </div>
        <Filtros/>
      </div>
    </div>

  )
}

export default App
