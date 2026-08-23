// import { useState } from 'react'

import './App.css'
import Nav from "./components/Nav.jsx"
import Botao from "./components/Botao.jsx"
import Textos from "./components/Textos.jsx"
import HeroImagem from "./components/HeroImagem.jsx"

function App() {

  return (
    <div className="font-manrope">
      <Nav/>
      <section className="md:ml-30 md:mr-30 pt-[80px] shadow-inner" id="Home">
      <Textos
        h1={<>Se reorganize bem com <span className="inline-block font-['Zolo'] font-normal bg-gradient-to-r from-[#EBA864] to-[#F68412] bg-clip-text text-transparent">Favo</span></>}
        p="Não deixe a oportunidade de economizar na conta de energia"
      />
      <div className="flex flex-col  items-center gap-[1rem] mb-20 md:flex-row md:justify-center md:items-center">
        <Botao 
          texto="Usar Favo"
          tipo="cheio"
        />
        <Botao 
          texto="Como funciona?"
          tipo="transparente"
        />
      </div>
      <HeroImagem/>
      </section>
      <section id="Funcionalidades">
        <Textos
        h1={<><h1>Nunca é <span>tarde</span> demais para <span>começar</span>.</h1></>}
        p="Tenha acesso ao melhor organizador de energia para facilidade da sua vida."
        />
        <div>
        {/* <blocoFuncionalidades/> */}
        {/* <blocoFuncionalidades/> */}
        </div>
      </section>
      <section id="Produtividade">
        <Textos
        h1={<><h1>De <span>poucos</span> para <span>muitos</span></h1></>}
        p="Tenha o melhor organizador de energia para facilidade da sua vida."
        />
      </section>
      <section id="Como_Acessar">
        <Textos
        h1={<><h1>Passos <span>simples</span> para não se <span>perder</span></h1></>}
        p="Tenha acesso ao melhor organizador de energia para facilidade da sua vida."
        />
      </section>
      <section id="Sobre_Nos">
        <Textos
        h1={<><h1>Uso <span>testado</span> e <span>aprovado</span>.</h1></>}
        p="Tenha acesso ao melhor organizador de energia para facilidade da sua vida."
        />
      </section>
    </div>
  )
}

export default App
