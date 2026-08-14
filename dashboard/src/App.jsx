import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import CardHeader from './components/CardHeader'
import Painel from './components/Painel'
import Resumo from './components/Resumo'

function App() {

  return (
    <div className='flex flex-col items-center pb-20'>
      <Header />
      <CardHeader />

      <div className='flex flex-col items-center md:items-start md:w-[90%] mt-10 md:mt-70'>
        <p className='text-orange-500 font-bold text-xs md:text-lg'>CÔMODOS</p>
        <h1 className='font-extrabold text-3xl md:text-5xl'>Verifique seus Cômodos</h1>
      </div>

      <Painel />
      <Resumo />

      <div className='flex flex-col items-center md:items-start md:w-[90%] mt-10 md:mt-70'>
        <p className='text-orange-500 font-bold text-xs md:text-lg'>METAS</p>
        <h1 className='font-extrabold text-3xl md:text-5xl'>Sua Meta Mensal</h1>
      </div>
    </div>
  )
}

export default App
