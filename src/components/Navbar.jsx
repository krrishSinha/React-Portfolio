import React from 'react'
import logo from '../assets/logo2.jpeg'
import Button from './Button'

function Navbar() {
    return (
        <section className='bg-[#3A3934]' data-aos="fade-down" >

            <div className='w-[90%] lg:max-w-[1000px] mx-auto py-7 flex items-center justify-between '>

                <div>
                    <img src={logo} alt="" className='w-[90px] ' />
                    {/* #FFB324
                    #FF451B */}
                </div>

                <Button />
            </div>

        </section>
    )
}

export default Navbar