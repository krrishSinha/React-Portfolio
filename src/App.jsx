import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className='bg-[#3A3934] overflow-hidden ' >

      <div className='bg-[#3A3934] flex flex-col overflow-hidden' >
        <Navbar />
        <Header />
      </div>

      <div className={`w-full mb-12 relative z-[1] text-white md:before:content-[''] md:before:absolute md:before:top-[-70px] md:before:w-[200%] md:before:h-[200%]  md:before:bg-[#1D1B1B] md:before:rotate-[-15deg]  md:before:z-[-1]  `} >
        <Main />
      </div>

      <div className=' relative z-10' >
        <Footer />
      </div>

    </div>
  )
}

export default App
