import { useState } from 'react'
import './App.css'
import Infos from './components/Infos'
import ConfigConta from './components/configConta'

function App() {

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
    <div className="">

      <Infos />
      <ConfigConta />

    </div>
  )
}

export default App
