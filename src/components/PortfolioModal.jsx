import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useLockBodyScroll } from "@uidotdev/usehooks";



function PortfolioModal({portfolio, setShow, show}) {
    useLockBodyScroll();
    return (
        <>
            <div className='fixed w-[100%] h-[100%]  bg-black bg-opacity-80 top-0 bottom-0 left-0 z-10 flex items-center justify-center' >
                <div className='w-[90%] max-h-[80%] overflow-y-scroll border-gray-400 ' >
                    <img src={portfolio.img} alt="" className='w-full' loading='lazy' />
                </div>

                <div
                    onClick={() => setShow(!show)}
                    className='fixed top-5 right-5 cursor-pointer' >
                    <AiOutlineCloseCircle className='text-4xl' />
                </div>
            </div>
        </>
    )
}

export default PortfolioModal