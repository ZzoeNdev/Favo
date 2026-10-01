import { useState } from 'react'
import ResumoAparelhos from './components/ResumoAparelhos.jsx'
import BlocoAparelho from './components/BlocoAparelho.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ResumoAparelhos />
      <div className="flex flex-row gap-[3rem]">
        <BlocoAparelho />
      </div>
    </div>

  )
}

export default App
