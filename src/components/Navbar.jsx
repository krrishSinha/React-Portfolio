import React from 'react'
import logo from '../assets/logo.webp'
import Button from './Button'

function Navbar() {
    return (
        <section className='bg-[#3A3934] ' >

            <div className='w-[90%] lg:max-w-[1000px] mx-auto py-7 flex items-center justify-between '>

                <div>
                    <img src={logo} alt="" className='w-[90px] ' />
                </div>

                <Button />
            </div>

        </section>
    )
}

export default Navbar