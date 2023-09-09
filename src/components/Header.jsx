import React from 'react'
import profile from '../assets/Profile.webp'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import youtube from '../assets/youtube.png'
import './Header.css'


function Header() {
    return (
        <section className='bg-[#3A3934] py-16 ' >

            <div className='w-[95%] lg:max-w-[1000px] mx-auto flex justify-between items-center '>

                {/* content div  */}
                <div className='w-[45%]' >
                    <p className='text-[#FF451B] font-bold text-3xl' >I'm</p>
                    <h1 className='text-6xl text-white font-bold leading-[1.1] tracking-[.15rem] '  >
                        KRRISH <br />
                        SINHA
                    </h1>
                    <p className='opacity-60 text-[1.4rem] font-medium text-white mt-3 mb-5 leading-[1.5]' >A passionate UI/UX Designer and Senior Web Developer based In NYC, USA</p>

                    {/* social links  */}
                    <div className='flex gap-3' >
                        <a href="">
                            <img src={facebook} alt="" className='w-[40px]' />
                        </a>

                        <a href="">
                            <img src={twitter} alt="" className='w-[40px]' />
                        </a>

                        <a href="">
                            <img src={linkedin} alt="" className='w-[40px]' />
                        </a>

                        <a href="">
                            <img src={youtube} alt="" className='w-[40px]' />
                        </a>

                    </div>
                </div>

                {/* profile div  */}
                <div className=' py-5 w-[50%] flex justify-end ' >
                    <div className='relative z-10 ' >
                        <div id='smallContainer'></div>
                        <img src={profile} alt="" className=' z-10 rounded-full h-[320px] w-[320px] bg-cover bg-center ' />
                        <div id='bigContainer'></div>
                        <div id='cube'></div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Header