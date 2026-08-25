// import { useState } from 'react'

import './App.css'
import Nav from "./components/Nav.jsx"
import Botao from "./components/Botao.jsx"
import Textos from "./components/Textos.jsx"
import HeroImagem from "./components/HeroImagem.jsx"
import BlocoFuncionalidade from "./components/BlocoFuncionalidade.jsx"

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
        <div className="flex w-[100%]">
          <div className="flex flex-col gap-5 justify-center">
            <BlocoFuncionalidade
              titulo="Gráficos"
              logo={"./src/assets/graficosLogo.png"}
              texto="Tenha total acesso para o cadastro de organização de seus eletrodomésticos"
              tipo="normal"
            />
          </div>
          <div className="flex flex-col gap-5 justify-center">
          <BlocoFuncionalidade
            titulo="Eletrodomésticos"
            logo={"./src/assets/eletrodomesticosLogo.png"}
            texto="Tenha total acesso para o cadastro de organização de seus eletrodomésticos"
            tipo="normal"
          />
          <BlocoFuncionalidade
            titulo="Informações"
            logo={"./src/assets/informacoesLogo.png"}
            texto="Dashboard 100% organizado e facilitado para o seu uso sem confusões"
            tipo="normal"
          />
          <BlocoFuncionalidade
            titulo="Valores"
            logo={"./src/assets/valoresLogo.png"}
            texto="Seus gastos juntos em um só lugar, atualizados para você dia em dia"
            tipo="normal"
          />
          <BlocoFuncionalidade
            titulo="Grátis ou Premium?"
            logo={"./src/assets/gratisLogo.png"}
            texto="Uso 100% gratuito para sua comodidade e organização de sua própria casa"
            tipo="normal"
          />
          </div>
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
