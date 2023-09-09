import React from 'react'
import Card from './Card'
import { CiReceipt } from 'react-icons/ci'
import { ImMobile } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'

function Contact({ showDetail, title }) {
    return (
        <div className='flex flex-col gap-4'>

            <Card name='Contact' icon={<CiReceipt />} showDetail={showDetail} />

            {
                title == 'Contact' ?

                    <div className={`bg-[#494B50] px-10 py-10 rounded-xl scale-[0.99] transition-all duration-1000`} >


                        {/* header  */}
                        <div className='mb-16' >
                            <p className='font-extrabold text-lg text-[#E34623]'>Contact Me</p>
                            <h2 className='text-4xl font-extrabold  leading-[2.8rem]'>Contact me to get <br /> your work done</h2>
                        </div>

                        {/* form div  */}
                        <div className='flex justify-between' >
                            {/* left  */}
                            <div className='flex flex-col gap-5 w-[50%] ' >

                                <div className='flex gap-3 items-center' >
                                    <div className='bg-[#FFB324] w-fit p-5 rounded-full text-3xl' >
                                        <ImMobile />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold' >Call Me</h3>
                                        <p className='opacity-60' >+123 456 7890</p>
                                    </div>
                                </div>


                                <div className='flex gap-3 items-center' >
                                    <div className='bg-[#FFB324] w-fit p-5 rounded-full text-3xl' >
                                        <AiOutlineMail />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold' >Email Us</h3>
                                        <p className='opacity-60'>hello@iknow.com</p>
                                    </div>
                                </div>


                                <div className='flex gap-3 items-center' >
                                    <div className='bg-[#FFB324] w-fit p-5 rounded-full text-3xl' >
                                        <CiLocationOn />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold'>Address</h3>
                                        <p className='opacity-60' >20, Bardeshi, Amin Bazar</p>
                                    </div>
                                </div>
                            </div>

                            {/* right  */}
                            <div className='w-[85%]' >
                                <form className=' flex flex-col gap-5' >
                                    <div className='flex gap-5' >
                                        <input className='flex-1 bg-transparent border px-6 py-3 rounded-xl border-gray-500 text-sm text-gray-300 outline-none font-semibold' type="text" placeholder='Your Name' />

                                        <input className='flex-1 bg-transparent border px-6 py-3 rounded-xl border-gray-500 text-sm text-gray-300 outline-none font-semibold' type="text" placeholder='Your Email' />
                                    </div>

                                    <div className='flex gap-5' >
                                        <input className='flex-1 bg-transparent border px-6 py-3 rounded-xl border-gray-500 text-sm text-gray-300 outline-none font-semibold' type="text" placeholder='Your Phone' />

                                        <input className='flex-1 bg-transparent border px-6 py-3 rounded-xl border-gray-500 text-sm text-gray-300 outline-none font-semibold' type="text" placeholder='Subject' />
                                    </div>

                                    <textarea className='flex-1 bg-transparent border px-6 py-5 rounded-xl border-gray-500 text-sm text-gray-300 outline-none font-semibold' cols="30" rows="6" placeholder='Your message here' ></textarea>

                                    <button className='w-fit bg-[#FF451B] px-8 rounded-lg transition-all duration-200 hover:bg-[#FFB324] py-2 font-bold text-white ' >Submit Now</button>
                                </form>
                            </div>
                        </div>

                    </div>

                    :
                    <div></div>
            }


        </div>
    )
}

export default Contact