import React from 'react'
import logo from '../assets/logo-removebg-preview.png'
import Button from './Button'

function Navbar() {
    return (
        <section className='bg-[#3A3934]' data-aos="fade-down" >

            <div className='w-[90%] lg:max-w-[1000px] mx-auto py-7 flex items-center justify-between '>

                <div>
                    {/* <img src={logo} alt="" className='w-[90px]' /> */}
                    {/* #FFB324
                    #FF451B */}

                    <h2 className='text-2xl logo opacity-100 text-[#fff] transition-all duration-200 cursor-pointer hover:text-[#FF451B] italic'>Krrish Sinha</h2>
                </div>

                <Button />
            </div>

        </section>
    )
}

export default Navbar