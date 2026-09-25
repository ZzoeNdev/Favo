import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Header'
import CardHeader from './components/CardHeader'
import Painel from './components/Painel'
import Resumo from './components/Resumo'
import CardMeta from './components/CardMeta'
import Produto from './components/Produto'

function App() {

  const [mudarEstado, setMudarEstado] = useState(false);

  const [carregando, setCarregando] = useState(true);
  useEffect(() => {
    fetch('http://localhost/api/verificarSessao.php', {
      credentials: 'include'})
      .then(response => response.json())
      .then(json => {
        if (json.logado == false) {
          window.location.href = ' http://localhost:5173';
        } else {
          setCarregando(false);
        }
    })
  }, []);

  useEffect(() => {
    fetch('http://localhost/api/fecharConsumoDiario.php', {
      credentials: 'include'})
  }, []);

  if (carregando) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <p className='text-gray-300 font-md text-xs md:text-lg'>Carregando...</p>
        <p className='text-orange-500 font-bold text-xs md:text-lg'>Favo está arrumando tudo pra você</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center pb-20'>

      <Header abrirForm={() => setMudarEstado(true)} />

      {mudarEstado && <Produto fecharForm={() => setMudarEstado(false)} />}
      <CardHeader />

      <div className='flex flex-col items-center md:items-start md:w-[90%] mt-10 md:mt-70'>
        <p className='text-orange-500 font-bold text-xs md:text-lg'>CÔMODOS</p>
        <h1 className='font-extrabold text-3xl md:text-5xl'>Verifique seus Cômodos</h1>
      </div>

      <Painel />
      <Resumo />

      <div className='flex flex-col items-center md:items-start md:w-[90%] mt-10 md:mt-19'>
        <p className='text-orange-500 font-bold text-xs md:text-lg'>METAS</p>
        <h1 className='font-extrabold text-3xl md:text-5xl'>Sua Meta Mensal</h1>
      </div>

      <CardMeta/>
    </div>
  )
}

export default App
