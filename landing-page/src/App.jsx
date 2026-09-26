// import { useState } from 'react'

import './App.css'
import Nav from "./components/Nav.jsx"
import Botao from "./components/Botao.jsx"
import Textos from "./components/Textos.jsx"
import HeroImagem from "./components/HeroImagem.jsx"
import BlocoFuncionalidade from "./components/BlocoFuncionalidade.jsx"
import BlocoGrafico from "./components/BlocoGrafico.jsx"
import BlocoImagem from "./components/BlocoImagem.jsx"
import BlocoProdutividade from "./components/BlocoProdutividade.jsx"

function App() {

  return (
    <div className="font-manrope">
      <Nav/>
      <section className="ml-10 mr-10 md:ml-30 md:mr-30 pt-[80px] shadow-inner" id="Home">
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
      <section className="md:mt-[5rem]" id="Funcionalidades">
        <Textos
          h1={<><h1>Nunca é <span>tarde</span> demais para <span>começar</span>.</h1></>}
          p="Tenha acesso ao melhor organizador de energia para facilidade da sua vida."
        />
        <div className="flex flex-col ml-[4.2rem] w-[100%] gap-[15px] md:flex-row md:gap-[100px] mt-[3rem]">
          <div className="flex flex-col w-[50%] md:w-[30%] gap-2 md:gap-5 align-center justify-center">
            <BlocoGrafico
            titulo="Tenha acesso a Gráficos para sua comodidade"
            logo={"./src/assets/graficosLogo.png"}/>
            <BlocoImagem/>
          </div>
          <div className="hidden md:flex md:justify-center">
            <img className="h-[720px]" src="../src/assets/favoSmartphone.png"/>
          </div>
          <div className="flex flex-col w-[50%] md:w-[30%] gap-2 md:gap-5 align-center justify-center">
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
      <section className="md:mt-[5rem]" id="Produtividade">
        <Textos
        h1={<><h1>De <span>poucos</span> para <span>muitos</span></h1></>}
        p="Tenha o melhor organizador de energia para facilidade da sua vida."
        />
        <div className="flex flex-col justify-center items-center md:pt-[12rem] md:flex-row">
        <BlocoProdutividade
        tag="A todos"
        txt1={<>Acesso ao sistema <span>Favo</span> a</>}
        grande="Todas"
        txt2="as pessoas, sem limitações"/>
        <div className="hidden bg-gradient-to-b from-[#F9AE63] to-[#F68412] rounded-br-[200px] md:flex md:justify-center md:items-end h-[450px]">
          <img className="h-[600px]" src="../src/assets/mulher.png"/>
        </div>
        <BlocoProdutividade
        tag="Sem limites"
        txt1="Aproveite as funcionalidades presentes no"
        grande="Favo"
        txt2={<>sem limites e <span className="font-bold">24h</span> a seu favor"</>}/>
        </div>
      </section>
      <section className="md:mt-[5rem]"id="Como_Acessar">
        <Textos
        h1={<><h1>Passos <span>simples</span> para não se <span>perder</span></h1></>}
        p="Tenha acesso ao melhor organizador de energia para facilidade da sua vida."
        />
        <div className="flex flex-col justify-center items-center mt-[1rem] md:mt-[3rem]">
          <div className="flex flex-col md:flex-row gap-[2rem] justify-center mr-[2rem] ml-[2rem] md:gap-[10rem]">
            <div className="flex flex-col gap-[1rem] md:gap-[2rem]">
              <img className="md:w-[35rem] md:h-auto" src="../src/assets/passo1.png" alt="Faça o seu Cadastro ou Login no Sistema" />
              <img className="md:w-[35rem] md:h-auto" src="../src/assets/passo2.png" alt="Adicione seu primeiro eletrodoméstico" />
              <img className="md:w-[35rem] md:h-auto" src="../src/assets/passo3.png" alt="Verifique os dados de seus gastos"/>
            </div>
            <div className="flex flex-col gap-[1rem] md:gap-[2rem]">
              <img className="md:w-[35rem] md:h-auto" src="../src/assets/passo4.png" alt="Aproveite"/>
            </div>
          </div>
          <Botao texto="Começar agora" tipo="transparente" largura="w-full md:w-[40rem] min-w-[125px]"/>
        </div>
      </section>
      <section className="md:mt-[5rem]"id="Sobre_Nos">
        <Textos
        h1={<><h1>Uso <span>testado</span> e <span>aprovado</span>.</h1></>}
        p="Tenha acesso ao melhor organizador de energia para facilidade da sua vida."
        />
        <div className="flex flex-col md:flex-row justify-center align-center items-center gap-[2rem] md:gap-[5rem] mt-[3rem]">
          <img className="md:h-[15rem] md:w-auto" src="../src/assets/100testado.png"/>
          <img className="md:h-[15rem] md:w-auto" src="../src/assets/telatestado.png"/>
        </div>
      </section>
      <section className="relative flex items-center justify-center md:mt-[5rem]" id="Comecar">
        <p className="absolute text-[#C8C9CD]/50 text-[6.5rem] md:text-[25rem] top-[1rem] md:top-[0rem] font-bold z-0">ENERGIA</p>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <img className="absolute mx-auto top-[7rem] md:top-[10rem] justify-center items-center w-[60rem] h-auto z-10" src="../src/assets/energiaBackground.png" alt="Energia"/>
          <div className="relative top-[8rem] md:top-[15rem] z-20 flex flex-col items-center justify-center p-10 text-center">
            <p className="font-bold text-white text-[1rem] md:text-[2rem]">Pronto pra ver sua conta de luz cair?</p>
            <p className="text-white text-[0.5rem] md:text-[0.8rem] md:text-[1.2rem] md:max-w-[32rem] max-w-[12rem]">Junte-se a milhares de famílias que economizam em média R$ 50,00 por mês usando a Favo.</p>
            <div className="flex flex-row gap-[1rem] mt-[2rem]">
              <Botao 
                texto="Começar agora" 
                tipo="preto" 
              />
              <p className="text-white">Uso 100% grátis e eficiente</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
