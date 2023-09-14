import React from 'react'
import Card from './Card'
import { CiReceipt } from 'react-icons/ci'
import { ImMobile } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'

function Contact({ showDetail, title }) {
    return (
        <div className='flex flex-col gap-4'  >

            {/* <Card name='Contact' icon={<CiReceipt />} showDetail={showDetail} /> */}


            <div className={`bg-[#494B50] px-5 md:px-10 py-10 rounded-xl scale-[0.99] transition-all duration-1000`} >


                {/* header  */}
                <div className='mb-16' >
                    <p className='font-extrabold text-lg text-[#E34623]'>Contact Me</p>
                    <h2 className='text-4xl font-extrabold  leading-[2.8rem]'>Contact me to get <br className='hidden md:block' /> your work done</h2>
                </div>

                {/* form div  */}
                <div className='flex flex-col min-[900px]:flex-row gap-y-10 justify-between' >
                    {/* left  */}
                    <div className='flex flex-col gap-5 w-[50%] ' >

                        <div className='flex gap-3 items-center' >
                            <div className='bg-[#FFB324] w-fit p-5 rounded-full text-3xl' >
                                <ImMobile />
                            </div>
                            <div className='min-w-full'  >
                                <a href="tel:+919953384516">
                                    <h3 className='text-lg font-bold' >Call Me</h3>
                                    <p className='opacity-60'>+91 9953384516</p>
                                </a>
                            </div>
                        </div>


                        <div className='flex gap-3 items-center' >
                            <div className='bg-[#FFB324] w-fit p-5 rounded-full text-3xl' >
                                <AiOutlineMail />
                            </div>
                            <div className='min-w-full' >
                                <a href="mailto:sinhakrrish22@gmail.com">
                                    <h3 className='text-lg font-bold' >Email Me</h3>
                                    <p className='opacity-60'>sinhakrrish22@gmail.com</p>
                                </a>
                            </div>
                        </div>


                        <div className='flex gap-3 items-center' >
                            <div className='bg-[#FFB324] w-fit p-5 rounded-full text-3xl' >
                                <CiLocationOn />
                            </div>
                            <div className='min-w-full' >
                                <h3 className='text-lg font-bold'>Address</h3>
                                <p className='opacity-60' >Delhi, India</p>
                            </div>
                        </div>
                    </div>

                    {/* right  */}
                    <div className='min-[900px]:w-[85%]'>
                        <form action='https://formspree.io/f/mqkvlaoo' method='POST'
                            className='flex flex-col gap-5'  >

                            <div className='flex flex-col sm:flex-row gap-5' >
                                <input
                                    className='flex-1 bg-transparent border px-6 py-3 rounded-xl border-gray-500 text-sm text-gray-300 outline-none font-semibold'
                                    type="text"
                                    name='name'
                                    required
                                    placeholder='Your Name' />

                                <input
                                    className='flex-1 bg-transparent border px-6 py-3 rounded-xl border-gray-500 text-sm text-gray-300 outline-none font-semibold'
                                    type="email"
                                    name='email'
                                    required
                                    placeholder='Your Email' />
                            </div>

                            <div className='flex flex-col sm:flex-row gap-5' >
                                <input
                                    className='flex-1 bg-transparent border px-6 py-3 rounded-xl border-gray-500 text-sm text-gray-300 outline-none font-semibold'
                                    type="text"
                                    name='phone'
                                    placeholder='Your Phone' />

                                <input
                                    className='flex-1 bg-transparent border px-6 py-3 rounded-xl border-gray-500 text-sm text-gray-300 outline-none font-semibold'
                                    type="text"
                                    placeholder='Subject' />
                            </div>

                            <textarea
                                className='flex-1 bg-transparent border px-6 py-5 rounded-xl border-gray-500 text-sm text-gray-300 outline-none font-semibold'
                                cols="30" rows="6"
                                name='message'
                                required
                                placeholder='Your message here' ></textarea>

                            <button className='w-fit bg-[#FF451B] px-8 rounded-lg transition-all duration-200 hover:bg-[#FFB324] py-2 font-bold text-white ' >Submit Now</button>
                        </form>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Contact