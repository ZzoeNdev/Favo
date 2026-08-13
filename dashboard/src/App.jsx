import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import CardHeader from './components/CardHeader'
import Painel from './components/Painel'

function App() {

  return (
    <div className='flex flex-col items-center pb-20'>
      <Header/>
      <CardHeader />

      <div className='flex flex-col items-center md:items-start md:w-screen mt-10'>
        <p className='text-orange-500 font-medium text-xs'>CÔMODOS</p>
        <h1 className='font-bold text-3xl'>Verifique seus Cômodos</h1>
      </div>

      <Painel />
    </div>
  )
}

export default App
