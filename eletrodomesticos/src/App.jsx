import { useState } from 'react'
import ResumoAparelhos from './components/ResumoAparelhos.jsx'
import Aparelhos from './components/Aparelhos.jsx'
import BlocoAparelho from './components/BlocoAparelho.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ResumoAparelhos />
      <Aparelhos />
      <BlocoAparelho />
    </div>

  )
}

export default App
