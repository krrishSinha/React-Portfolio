import React, { useState } from 'react'
import Card from './Card'
import { CiReceipt } from 'react-icons/ci'
import profile2 from '../assets/profileImg.png'
import Button from './Button'
import cv from  '../assets/Resume.pdf'


function About({ showDetail, title }) {

    return (
        <div className='flex flex-col gap-3'>

            {/* <Card name='About Me' icon={<CiReceipt />} showDetail={showDetail} /> */}


            <div id='detail' className={`bg-[#494B50]  min-h-[500px] px-5 md:px-10 pb-10 flex items-center rounded-xl scale-[0.99] transition-all duration-1000`}>

                <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-8 transition-all duration-500 ' >

                    {/* left div  */}
                    <div className='w-[100%] md:w-[50%] flex relative items-start  ' >

                        <img src={profile2} alt="" className='w-[60%] rounded-xl hidden md:block ' />

                        <div className='bg-[#E34623] px-5 py-5 min-w-[100%] md:min-w-[30%] text-sm flex flex-col gap-5 md:gap-3 rounded-xl md:absolute right-[10px] top-[20%] z-10  ' >

                            <div className='border-b-[1px] border-dotted' >
                                <p>Name</p>
                                <h3>Krrish Sinha</h3>
                            </div>

                            <div className='border-b-[1px] border-dotted' >
                                <p>Birthday</p>
                                <h3>January 22, 2005</h3>
                            </div>

                            <div className='border-b-[1px] border-dotted' >
                                <p>Mail</p>
                                <h3>sinhakrrish22@gmail.com</h3>
                            </div>

                            {/* <div className='border-b-[1px] border-dotted' >
                <p>Phone</p>
                <h3>+123 456 7890</h3>
            </div> */}

                            <div className='border-b-[1px] border-dotted' >
                                <p>Address</p>
                                <h3>Delhi, India</h3>
                            </div>

                            <div>
                                <p>Nationality</p>
                                <h3>Indian</h3>
                            </div>

                        </div>

                    </div>

                    {/* right div  */}
                    <div className='w-[100%] md:w-[50%] pt-5 md:pt-0 ' >
                        <p className='text-lg font-bold text-[#E34623]' >About Me</p>
                        <h2 className='text-4xl font-bold mt-1 ' >World leading Web Developer </h2>
                        <p className='text-lg opacity-70 font-semibold my-5' >A passionate Senior FullStack Web Developer based In Delhi, India</p>
                        <p className='text-sm opacity-60 leading-[1.6] ' >Hi! My name is Krrish Sinha. I am Senior FullStack Web Developer and I'm very passionate and dedicated to my work. With 2 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                        <div className='mt-8' >
                            <Button text={'DOWNLOAD CV'} cv={cv} />
                        </div>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default About