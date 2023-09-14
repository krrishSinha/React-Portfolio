import React from 'react'
import logo from '../assets/logo2.jpeg'
import Button from './Button'

function Navbar() {
    return (
        // shadow-[0_1px_15px_-3px_rgba(0,0,0,0.55)]
        <section className='bg-[#3A3934]' data-aos="fade-down" >

            <div className='w-[90%] lg:max-w-[1000px] mx-auto py-6 flex items-center justify-between '>

                <div>
                    <a href="/">
                        <img src={logo} alt="" className='w-[90px] ' />
                    </a>
                    {/* #FFB324
                    #FF451B */}
                </div>

                <Button text={'Call Now'} tel={'tel:+919953384516'} />
            </div>

        </section>
    )
}

export default Navbar