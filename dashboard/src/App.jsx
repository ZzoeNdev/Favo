import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Header'
import CardHeader from './components/CardHeader'
import Painel from './components/Painel'
import Resumo from './components/Resumo'
import CardMeta from './components/CardMeta'
import Produto from './components/Produto'
import Comparacao from './components/Comparacao'
import Footer from './components/Footer'
import Carregando from './assets/carregando.gif'

function App() {

  const [mudarEstado, setMudarEstado] = useState(false);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('/api/verificarSessao.php', {credentials: 'include'})
      .then(response => response.json())
      .then(json => {
        if (json.logado == false) {
          window.location.href = 'https://www.favo.center/cadastro';
        } else {
          setCarregando(false);
        }
    })
  }, []);

  if (carregando) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <img className='w-20' src={Carregando} alt="Logo Favo" />
      </div>
    )
  }

  return (
    <div className="w-[100vw] overflow-x-hidden">
    <div className='flex flex-col items-center'>

      <Header abrirForm={() => setMudarEstado(true)} />

      {mudarEstado && <Produto fecharForm={() => setMudarEstado(false)} />}
      <CardHeader />

      <div className='flex flex-col items-center md:items-start md:w-[90vw] mt-10 md:mt-70'>
        <p className='text-orange-500 font-bold text-xs md:text-lg'>CÔMODOS</p>
        <h1 className='font-extrabold text-2xl md:text-5xl'>Verifique seus Cômodos</h1>
      </div>

    <Painel/>
    <Resumo />

      <div className='flex flex-col items-center md:items-start md:w-[90vw] mt-10 md:mt-19'>
        <p className='text-orange-500 font-bold text-xs md:text-lg'>METAS</p>
        <h1 className='font-extrabold text-2xl md:text-5xl'>Sua Meta Mensal</h1>
      </div>

      <CardMeta/>

      <div className='flex flex-col items-center md:items-start md:w-[90vw] mt-10 md:mt-19'>
        <p className='text-orange-500 font-bold text-xs md:text-lg'>COMPARAÇÃO</p>
        <h1 className='font-extrabold text-2xl md:text-5xl'>Comparação entre Meses</h1>

      <Comparacao />

      
      
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default App
