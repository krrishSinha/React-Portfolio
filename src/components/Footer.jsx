import React from 'react'
import Button from './Button'

function Footer() {
    return (
        <div data-aos="fade-up" className='bg-[#1D1B1B] pt-10 md:pt-24 pb-8' >

            <footer className='w-[90%] lg:max-w-[1000px] mx-auto text-white flex flex-col md:flex-row items-center gap-y-5 justify-between '>

                <h3 className='text-lg text-gray-400 font-medium' >Designed with love ©
                    <span className='font-semibold ml-1 cursor-pointer transition-all duration-200 hover:text-[#FF451B]'>Krrish Sinha</span>
                </h3>

                <Button text={'Call Now'} tel={'tel:+919953384516'} />

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