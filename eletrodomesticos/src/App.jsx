import { useState } from 'react'
import ResumoAparelhos from './components/ResumoAparelhos.jsx'
import BlocoAparelho from './components/BlocoAparelho.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
    <ResumoAparelhos />
    <div className="w-[20rem] h-[80rem] border-1 border-[#9A9A9A] rounded-[20px] md:w-[75rem] md:h-[40rem]">
      <BlocoAparelho />
    </div>
    </div>

  )
}

export default App
