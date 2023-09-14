import React from 'react'
// import profile from '../assets/Profile.webp'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import { BsInstagram } from 'react-icons/bs'
import './Header.css'


function Header() {

    return (
        <section className='bg-[#3A3934] pb-16 md:py-16' >

            <div className='w-[90%] lg:max-w-[1000px] mx-auto flex flex-col-reverse gap-5 md:gap-0 md:flex-row justify-between items-center '>

                {/* content div  */}
                <div data-aos="fade-up" className='w-[100%] md:w-[45%]' >
                    <p className='text-[#FF451B] font-bold text-2xl lg:text-3xl' >I'm</p>
                    <h1 className=' text-4xl md:text-6xl text-white font-bold  mt-3 tracking-[.1rem] md:tracking-[.2rem]'>
                        KRRISH <br className='hidden md:block' />
                        SINHA
                    </h1>
                    <p className='opacity-60 text-lg md:text-[1.4rem] font-medium text-white mt-3 mb-6 leading-[1.5]' >
                        Experienced web developer skilled in creating modern, responsive & user-friendly websites.
                    </p>

                    {/* social links  */}
                    <div className='flex gap-3' >

                        <a href="https://www.instagram.com/krrish.sinha_" target='_blank' className='transition-all duration-200 hover:scale-[1.08]' >
                            <img src={instagram} alt="" className='w-[40px]' />
                        </a>

                        <a href="https://www.linkedin.com/in/krrish-sinha/" target='_blank' className='overflow-hidden transition-all duration-200 hover:scale-[1.08]' >
                            <img src={linkedin} alt="" className='w-[40px] bg-white overflow-hidden rounded-full' />
                        </a>

                        <a href="https://www.facebook.com/krrish.sinha.39" target='_blank' className='transition-all duration-200 hover:scale-[1.08]' >
                            <img src={facebook} alt="" className='w-[40px]' />
                        </a>

                        {/* <a href="">
                            <img src={youtube} alt="" className='w-[40px]' />
                        </a> */}

                    </div>
                </div>

                {/* profile div  */}
                <div data-aos="fade-down" className=' py-5 w-[100%] md:w-[40%] relative z-10 '>

                    <div className='relative z-10 w-full' >
                        <div id='smallContainer' className=' hidden md:block'></div>
                        {/* responsive div image   */}
                        <div className="bg-[url('https://nablooo.com/wp-content/uploads/2023/08/Untitled-418-x-494-px-5.png')]
                         w-[100%] h-[300px] bg-cover bg-center rounded-xl block md:hidden" >
                        </div>

                        <img src={`https://nablooo.com/wp-content/uploads/2023/08/Untitled-418-x-494-px-5.png`} alt=""
                         className=' mx-auto md:rounded-full hidden md:block h-[300px] 
                        w-[300px] lg:h-[320px] lg:w-[320px]' />
                        <div id='bigContainer' className=' hidden md:block'></div>
                        <div id='cube' className=' hidden md:block'></div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Header