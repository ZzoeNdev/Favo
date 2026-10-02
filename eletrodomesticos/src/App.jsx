import { useState } from 'react'
import ResumoAparelhos from './components/ResumoAparelhos.jsx'
import BlocoAparelho from './components/BlocoAparelho.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-manrope">
    <ResumoAparelhos />
    <div className="flex flex-wrap max-w-[20rem] min-h-[80rem] border-1 border-[#9A9A9A] rounded-[20px] p-[2rem] md:max-w-[75rem] md:min-h-[40rem]">
      <BlocoAparelho />
    </div>
    </div>

  )
}

export default App
