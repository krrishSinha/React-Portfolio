import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css';


function App() {

  AOS.init();

  return (
    <div id='main' className='bg-[#3A3934] overflow-hidden ' >

      <div className='bg-[#3A3934] flex flex-col overflow-hidden' >
        <Navbar />
        <Header />
      </div>

      <div className={`w-full mb-12 relative z-[1] text-white md:before:content-[''] md:before:absolute md:before:left-[-50px] md:before:top-[-70px] md:before:min-w-[250%] lg:before:min-w-[200%] md:before:min-h-[200%]  md:before:bg-[#1D1B1B] md:before:rotate-[-10deg]  before:z-[-1] md:before:z-[-1]  `} >
        <Main />
      </div>

      <div className=' relative z-[1] ' >
        <Footer />
      </div>

    </div>
  )
}

export default App
