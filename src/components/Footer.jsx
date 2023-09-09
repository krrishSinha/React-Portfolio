import React from 'react'

function Footer() {
    return (
        <div className='bg-[#1D1B1B] pt-24 pb-8'>

            <footer className='w-[95%] lg:max-w-[1000px] mx-auto text-white flex justify-between '>

                <h3 className='text-lg text-gray-400 font-medium' >Designed with love ©  
                <span className='font-semibold ml-1 cursor-pointer transition-all duration-200 hover:text-[#FF451B]'>Krrish Sinha</span></h3>

                <div className='flex gap-10 items-center' >
                    <p className='text-lg text-gray-400 font-medium cursor-pointer transition-all duration-200 hover:text-[#FF451B]'>Terms & Condition</p>
                    <p className='text-lg text-gray-400 font-medium cursor-pointer transition-all duration-200 hover:text-[#FF451B]'>Privacy Policy</p>
                    <p className='text-lg text-gray-400 font-medium cursor-pointer transition-all duration-200 hover:text-[#FF451B]'>Login</p>
                </div>

            </footer>

        </div>
    )
}

export default Footer