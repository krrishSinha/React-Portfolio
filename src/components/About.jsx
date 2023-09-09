import React, { useState } from 'react'
import Card from './Card'
import { CiReceipt } from 'react-icons/ci'
import profile2 from '../assets/profile2.webp'
import Button from './Button'


function About({showDetail, title}) {

    return (
        <div className='flex flex-col gap-4' >

            <Card name='About Me' icon={<CiReceipt />} showDetail={showDetail} />

            {
                title == "About Me" ?

                    <div id='detail' className={`bg-[#494B50]  min-h-[500px] px-10 pb-10 flex items-center rounded-xl scale-[0.99] transition-all duration-1000`}>

                        <div className='flex justify-center items-center gap-8 transition-all duration-500 ' >

                            {/* left div  */}
                            <div className='w-[50%] flex relative items-start  ' >

                                <img src={profile2} alt="" className=' w-[60%] rounded-xl  ' />

                                <div className='bg-[#E34623] px-5 py-5 min-w-[30%] text-sm flex flex-col gap-3 rounded-xl absolute right-[10px] top-[10%] z-10  ' >

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

                                    <div className='border-b-[1px] border-dotted' >
                                        <p>Phone</p>
                                        <h3>+123 456 7890</h3>
                                    </div>

                                    <div className='border-b-[1px] border-dotted' >
                                        <p>Address</p>
                                        <h3>20, Bardeshi, Dhaka</h3>
                                    </div>

                                    <div>
                                        <p>Nationality</p>
                                        <h3>Bangladeshi</h3>
                                    </div>

                                </div>

                            </div>

                            {/* right div  */}
                            <div className='w-[50%]  ' >
                                <p className='text-lg font-bold text-[#E34623]' >About Me</p>
                                <h2 className='text-4xl font-bold mt-1 ' >World leading UI/UX designer </h2>
                                <p className='text-lg opacity-70 font-semibold my-5' >A passionate UI/UX Designer and Web Developer based In NYC, USA</p>
                                <p className='text-sm opacity-60 ' >Hi! My name is Tom Anderson. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                                <div className='mt-8' >
                                    <Button />
                                </div>
                            </div>

                        </div>

                    </div>

                    : <div></div>
            }



        </div>
    )
}

export default About