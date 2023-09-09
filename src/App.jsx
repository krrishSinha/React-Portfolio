import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className='bg-[#3A3934] overflow-hidden ' >

      <div className='max-h-[100vh] bg-[#3A3934] flex flex-col overflow-hidden' >
        <Navbar />
        <Header />
      </div>

      <div className={`relative z-[1] text-white before:content-[''] before:absolute before:top-[-70px] before:w-[200%] before:h-[200%]  before:bg-[#1D1B1B] before:rotate-[-15deg]  before:z-[-1]  `} >
        <Main />
      </div>

      <div className=' relative z-10' >
        <Footer />
      </div>

    </div>
  )
}

export default App
