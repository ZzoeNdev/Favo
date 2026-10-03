import { useState } from 'react'
import './App.css'
import Infos from './components/Infos'
import ConfigConta from './components/ConfigConta'
import PopSenha from './components/popSenha'
import Header from './components/Header'
import Pessoal from './components/pessoal'

function App() {

  const [abrirSenha, setAbrirSenha] = useState(false);

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
    <div className="flex flex-col items-center">

      <div className="md:bg-[url('/src/assets/perfilFundo.png')] bg-contain bg-no-repeat bg-gradient-to-br from-orange-500 to-orange-300 rounded-xl w-[97%] h-100 md:m-6 mt-2"></div>

      <div className="flex flex-col items-center -mt-50 md:-mt-100 w-[93%]">
      <Header />
      <Infos />
      <div className="flex flex-col md:flex-row w-full justify-center ">
        <ConfigConta abrirPopSenha={() => setAbrirSenha(true)} />
        <Pessoal />
      </div>
      

      {abrirSenha && <PopSenha fecharPopSenha={() => setAbrirSenha(false)} />}
      </div>
      

    </div>
  )
}

export default App
