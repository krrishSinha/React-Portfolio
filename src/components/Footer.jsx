import React from 'react'
import Button from './Button'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'

function Footer() {
    return (
        <div className='bg-[#1D1B1B] pt-8 sm:pt-10 pb-8' >

            <footer className='w-[90%] lg:max-w-[1000px] mx-auto text-white flex flex-col md:flex-row items-center gap-y-5 justify-between '>

                {/* <h3 className='text-lg text-gray-400 font-medium' >Designed with love ©
                <a href="/">
                    <span className='font-semibold ml-1 cursor-pointer transition-all duration-200 hover:text-[#FF451B]'>Krrish Sinha</span>
                    </a>
                </h3> */}

                <h3 className='text-md sm:text-lg text-gray-400 font-medium text-center'>© 2023
                    <a href="/">
                        <span className='font-semibold ml-1 cursor-pointer transition-all duration-200 hover:text-[#FF451B]'>Krrish Sinha, </span>
                    </a>
                    Inc. All rights reserved
                </h3>

                <div className='flex gap-5' >

                    <a href="https://www.facebook.com/krrish.sinha.39" target='_blank' className='transition-all duration-200 hover:scale-[1.08]' >
                        <img src={facebook} alt="" className='w-[35px]' />
                    </a>

                    <a href="https://www.linkedin.com/in/krrish-sinha/" target='_blank' className='overflow-hidden transition-all duration-200 hover:scale-[1.08]' >
                        <img src={linkedin} alt="" className='w-[35px] bg-white overflow-hidden rounded-full' />
                    </a>

                    <a href="https://www.instagram.com/krrish.sinha_" target='_blank' className='transition-all duration-200 hover:scale-[1.08]' >
                        <img src={instagram} alt="" className='w-[35px]' />
                    </a>

                </div>

                {/* <Button text={'Call Now'} tel={'tel:+919953384516'} /> */}

                {/* <div className='flex gap-3 justify-center items-center' >
                    <p className='text-base text-gray-400 font-medium cursor-pointer transition-all duration-200 hover:text-[#FF451B]'>Terms & Condition</p>
                    <p className='text-base text-gray-400 font-medium cursor-pointer transition-all duration-200 hover:text-[#FF451B]'>Privacy Policy</p>
                    <p className='text-base text-gray-400 font-medium cursor-pointer transition-all duration-200 hover:text-[#FF451B]'>Login</p>
                </div> */}

            </footer>

        </div>
    )
}

export default Footer