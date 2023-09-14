import React from 'react'
import Card from './Card'
import { CiReceipt } from 'react-icons/ci'
import { AiOutlineBook, AiOutlineLayout, AiOutlineMobile, AiOutlineApi,AiOutlineBug, AiOutlineCode } from 'react-icons/ai'


function Service({ showDetail, title }) {

    return (
        <div className='flex flex-col gap-4'  >

            {/* <Card name='Service' icon={<CiReceipt />} showDetail={showDetail} /> */}
            <div className={`bg-[#494B50] px-5 md:px-10 py-10 rounded-xl scale-[0.99] transition-all duration-1000`} >

                {/* header  */}
                <div className='mb-16' >
                    <p className='font-extrabold text-lg text-[#E34623]'>Service</p>
                    <h2 className='text-4xl font-extrabold  leading-[2.8rem]'>Never compromise <br /> with quality</h2>
                </div>

                {/* service div  */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5' >

                    <div className='bg-[#5C5D64] px-5 md:px-8 py-12 rounded-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer group'>
                        <div className='bg-[#FFB324] w-fit p-6 rounded-full text-5xl group-hover:bg-[#E34623] transition-all duration-500' >
                            <AiOutlineBook />
                        </div>
                        <h2 className='text-[1.7rem]  font-bold leading-8 my-5' >Custom Website Design</h2>
                        <p className='text-base opacity-60 font-semibold leading-[25px] '>Creating unique and visually appealing website designs tailored to your clients' brand and goals.</p>
                    </div>

                    <div className='bg-[#5C5D64] px-5 md:px-8 py-10 rounded-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer group' >
                        <div className='bg-[#FFB324] w-fit p-6 rounded-full text-5xl group-hover:bg-[#E34623] transition-all duration-500' >
                            <AiOutlineLayout />
                        </div>
                        <h2 className='text-[1.7rem]  font-bold leading-8 my-5' >Modern layout</h2>
                        <p className='text-base opacity-60 font-semibold leading-[25px]'>A modern web layout means making websites that look good on all devices, use simple designs, and are easy to use.</p>
                    </div>

                    <div className='bg-[#5C5D64] px-5 md:px-8 py-10 rounded-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer group' >
                        <div className='bg-[#FFB324] w-fit p-6 rounded-full text-5xl group-hover:bg-[#E34623] transition-all duration-500' >
                            <AiOutlineMobile />
                        </div>
                        <h2 className='text-[1.7rem]  font-bold leading-8 my-5' >Responsive Design</h2>
                        <p className='text-base opacity-60 font-semibold leading-[25px] ' >Ensuring websites are accessible and functional across various devices and screen sizes (desktop, mobile, tablet).</p>
                    </div>

                    <div className='bg-[#5C5D64] px-5 md:px-8 py-10 rounded-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer group' >
                        <div className='bg-[#FFB324] w-fit p-6 rounded-full text-5xl group-hover:bg-[#E34623] transition-all duration-500' >
                            <AiOutlineApi />
                        </div>
                        <h2 className='text-[1.7rem]  font-bold leading-8 my-5' >API Integration</h2>
                        <p className='text-base opacity-60 font-semibold leading-[25px] '>Integrating third-party APIs or creating custom APIs for data exchange and functionality enhancement.</p>
                    </div>

                    <div className='bg-[#5C5D64] px-5 md:px-8 py-10 rounded-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer group' >
                        <div className='bg-[#FFB324] w-fit p-6 rounded-full text-5xl group-hover:bg-[#E34623] transition-all duration-500' >
                            <AiOutlineBug />
                        </div>
                        <h2 className='text-[1.7rem]  font-bold leading-8 my-5' >Bug Fixes</h2>
                        <p className='text-base opacity-60 font-semibold leading-[25px] '>Identifying and repairing issues to ensure smooth and error-free website performance.</p>
                    </div>

                    <div className='bg-[#5C5D64] px-5 md:px-8 py-10 rounded-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer group' >
                        <div className='bg-[#FFB324] w-fit p-6 rounded-full text-5xl group-hover:bg-[#E34623] transition-all duration-500 ' >
                            <AiOutlineCode />
                        </div>
                        <h2 className='text-[1.7rem]  font-bold leading-8 my-5' >Custom Coding</h2>
                        <p className='text-base opacity-60 font-semibold leading-[25px] '>Writing custom code in languages like HTML, CSS, JavaScript, React Js, or Node.js to create unique and feature-rich websites.</p>
                    </div>
                    

                    {/* <div className='bg-[#5C5D64] px-5 md:px-8 py-12 rounded-xl ' >
        <div className='bg-[#FFB324] w-fit p-6 rounded-full text-5xl' >
            <AiOutlineBook />
        </div>
        <h2 className='text-[1.7rem]  font-bold leading-8 my-5' >Experience Design</h2>
        <p className='text-base opacity-60 font-semibold leading-[25px] ' >Just because we can’t get out and about like we normally would, doesn’t mean...</p>
    </div>

    <div className='bg-[#5C5D64] px-5 md:px-8 py-12 rounded-xl ' >
        <div className='bg-[#FFB324] w-fit p-6 rounded-full text-5xl' >
            <AiOutlineBook />
        </div>
        <h2 className='text-[1.7rem]  font-bold leading-8 my-5' >Experience Design</h2>
        <p className='text-base opacity-60 font-semibold leading-[25px] ' >Just because we can’t get out and about like we normally would, doesn’t mean...</p>
    </div>

    <div className='bg-[#5C5D64] px-5 md:px-8 py-12 rounded-xl ' >
        <div className='bg-[#FFB324] w-fit p-6 rounded-full text-5xl' >
            <AiOutlineBook />
        </div>
        <h2 className='text-[1.7rem]  font-bold leading-8 my-5' >Experience Design</h2>
        <p className='text-base opacity-60 font-semibold leading-[25px] ' >Just because we can’t get out and about like we normally would, doesn’t mean...</p>
    </div> */}

                </div>

            </div>

        </div>
    )
}

export default Service