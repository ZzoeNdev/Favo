import './App.css'
import Header from '../components/Header'
import Forms from '../components/Forms'
import Footer from '../components/Footer'

function App() {

  return (
    <div className='flex flex-col justify-between w-screen h-screen bg-gradient-to-br from-[#FFA74F] to-[#F68412]'>
      <Header />
      <Forms />
      <Footer />
    </div>
  )
}

export default App
