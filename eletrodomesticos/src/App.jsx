import { useState } from 'react'
import ResumoAparelhos from './components/ResumoAparelhos.jsx'
import Aparelhos from './components/Aparelhos.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ResumoAparelhos />
      <Aparelhos />
    </div>

  )
}

export default App
