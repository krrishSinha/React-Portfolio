import React from 'react'
import Card from './Card'
import { CiReceipt } from 'react-icons/ci'
import { FaQuoteLeft } from 'react-icons/fa'

import Slider from "react-slick";

function Testimonial({ showDetail, title }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (

        <div className='flex flex-col gap-4'  >

            {/* <Card name='Testimonial' icon={<CiReceipt />} showDetail={showDetail} /> */}

            <div className={`bg-[#494B50] py-10 md:px-10 rounded-xl scale-[0.99] transition-all duration-1000`}>

                {/* header  */}
                <div className='mb-16 px-5 md:px-0' >
                    <p className='font-extrabold text-lg text-[#E34623]'>Testimonials</p>
                    <h2 className='text-4xl font-extrabold  leading-[2.8rem]'>What people say <br className='hidden md:block' /> about me</h2>
                </div>

                <div className='px-5 md:px-0' >

                    <Slider {...settings} >

                        <div className='bg-[#5B5C64] px-5 md:px-16 py-10 rounded-xl lg:min-h-[380px]' >
                            <p className=' text-lg md:text-xl text-gray-300  opacity-80 font-semibold italic mb-7'>
                                I have been using the services for quite a while now. They have given extremely good results for every project assigned to them. They are responsive, thorough and have never missed a deadline. Overall, I am really satisfied.
                            </p>

                            <div className='flex gap-5' >
                                <img className='w-[50px] h-[50px] rounded-full' src="https://nablooo.com/wp-content/uploads/2023/08/Piyush_Matta-1.jpg" alt="" />
                                <div>
                                    <h3 className='text-xl font-bold' >piyush Matta</h3>
                                    {/* <p className='opacity-50 font-semibold' >Designer</p> */}
                                </div>
                                <div className='' >
                                    <FaQuoteLeft className='text-yellow-400 text-3xl ' />
                                </div>
                            </div>
                        </div>


                        <div className='bg-[#5B5C64] px-5 md:px-16 py-10 rounded-xl lg:min-h-[380px]' >
                            <p className='text-lg md:text-xl text-gray-300  opacity-80 font-semibold italic mb-7'>
                            When comes to shopping site, I would say this is the positive place known for building advanced ecommerce sites that are interactive having considerable functionality and flexibility in it while stunning design that drive more customers.
                            </p>

                            <div className='flex gap-5' >
                                <img className='w-[50px] h-[50px] rounded-full' src="https://nablooo.com/wp-content/uploads/2023/08/teacher-home-life-coach-and-career-strategist-piyush-somani-can-help-you-achieve-any-personal-goal-the-area-career-relationships-stress.jpg" alt="" />
                                <div>
                                    <h3 className='text-xl font-bold' >Punnet Singh </h3>
                                    {/* <p className='opacity-50 font-semibold' >Designer</p> */}
                                </div>
                                <div className='' >
                                    <FaQuoteLeft className='text-yellow-400 text-3xl ' />
                                </div>
                            </div>
                        </div>


                        <div className='bg-[#5B5C64] px-5 md:px-16 py-10 rounded-xl lg:min-h-[380px] ' >
                            <p className='text-lg md:text-xl text-gray-300  opacity-80 font-semibold italic mb-7'>
                                I can trust them with closed eyes as these guys will deliver me the best from the market. Who’ll go to someone else if you have these guys by your side to manage your website and web portfolios? Believe me these guys will never let you down.
                            </p>

                            <div className='flex gap-5' >
                                <img className='w-[50px] h-[50px] rounded-full' src="https://nablooo.com/wp-content/uploads/2023/08/jagmeet-150x150.webp" alt="" />
                                <div>
                                    <h3 className='text-xl font-bold' >Jagmeet Kaur</h3>
                                    {/* <p className='opacity-50 font-semibold' >Designer</p> */}
                                </div>
                                <div className='' >
                                    <FaQuoteLeft className='text-yellow-400 text-3xl ' />
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>

            </div>


        </div>

    )
}

export default Testimonial