// import { useState } from 'react'

import './App.css'
import Nav from "./components/Nav.jsx"
import Botao from "./components/Botao.jsx"
import Textos from "./components/Textos.jsx"

function App() {

  return (
    <div>
      <Nav/>
      <Textos
        h1={<h1>Se reorganize bem com <span>Favo</span></h1>}
        p={<p>Não deixe a oportunidade de economizar na conta de energia</p>}
      />
      <Botao 
      texto="Usar Favo"
      tipo="cheio"/>
      <Botao 
      texto="Como funciona?"
      tipo="transparente"/>
      {/* <Qualidades/> */}
      <section id="Funcionalidades">
        <div>
        {/* <blocoFuncionalidades/> */}
        {/* <blocoFuncionalidades/> */}
        </div>
      </section>
      {/* <Produtividade/> */}
      {/* <Como_Acessar/> */}
    </div>
  )
}

export default App
