import { useState } from 'react'
import ResumoAparelhos from './components/ResumoAparelhos.jsx'
import BlocoAparelho from './components/BlocoAparelho.jsx'
import Filtros from './components/Filtros.jsx'

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
      <ResumoAparelhos />
      <p className="text-[3.5rem] font-extrabold mt-[2rem]">Meus Aparelhos</p>
      <div className="flex flex-row">
        <div className="flex flex-wrap w-[20rem] min-h-[80rem] border-1 border-[#9A9A9A] rounded-[20px] p-[2rem] md:w-[72rem] md:min-h-[40rem] md:mt-[2rem]">
          <BlocoAparelho />
        </div>
          <Filtros/>
      </div>
    </div>

  )
}

export default App
