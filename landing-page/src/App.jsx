import { useState } from 'react'

import './App.css'
import Nav from "./components/Nav.jsx"
import Home from "./components/Home.jsx"

function App() {

  return (
    <div>
      <Nav/>
      <Home/>
      <Qualidades/>
      <Funcionalidades/>
    </div>
  )
}

export default App
