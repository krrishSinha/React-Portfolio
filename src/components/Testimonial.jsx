import React from 'react'
import Card from './Card'
import { CiReceipt } from 'react-icons/ci'
import {FaQuoteLeft} from 'react-icons/fa'

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
      };

    return (

        <div className='flex flex-col gap-4'>

            <Card name='Testimonial' icon={<CiReceipt />} showDetail={showDetail} />

            {
                title == 'Testimonial' ?
                

                    <div className={`bg-[#494B50] px-10 py-10 rounded-xl scale-[0.99] transition-all duration-1000`}>

                        {/* header  */}
                        <div className='mb-16' >
                            <p className='font-extrabold text-lg text-[#E34623]'>Testimonials</p>
                            <h2 className='text-4xl font-extrabold  leading-[2.8rem]'>What people say <br /> about me</h2>
                        </div>

                        <div>
                            
                            <Slider {...settings} >

                                <div className='bg-[#5B5C64] px-16 py-10 rounded-xl  ' >
                                    <p className='text-xl text-gray-300  opacity-80 font-semibold italic mb-7' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum a omnis est. Tempore, perferendis repudiandae modi, quidem corrupti.!</p>    

                                    <div className='flex gap-5' >
                                        <img className='w-[50px] h-[50px] rounded-full' src="https://shtheme.com/demosd/iknow/wp-content/uploads/2022/04/1-3.jpg" alt="" />
                                        <div>
                                            <h3 className='text-xl font-bold' >John Cena</h3>
                                            <p className='opacity-50 font-semibold' >Designer</p>
                                        </div>
                                        <div className='' >
                                            <FaQuoteLeft className='text-yellow-400 text-3xl ' />
                                        </div>
                                    </div>
                                </div>

                               
                                <div className='bg-[#5B5C64] px-16 py-10 rounded-xl  ' >
                                    <p className='text-xl text-gray-300  opacity-80 font-semibold italic mb-7' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum a omnis est. Tempore, perferendis repudiandae modi, quidem corrupti.!</p>    

                                    <div className='flex gap-5' >
                                        <img className='w-[50px] h-[50px] rounded-full' src="https://shtheme.com/demosd/iknow/wp-content/uploads/2022/04/1-3.jpg" alt="" />
                                        <div>
                                            <h3 className='text-xl font-bold' >John </h3>
                                            <p className='opacity-50 font-semibold' >Designer</p>
                                        </div>
                                        <div className='' >
                                            <FaQuoteLeft className='text-yellow-400 text-3xl ' />
                                        </div>
                                    </div>
                                </div>

                               
                                <div className='bg-[#5B5C64] px-16 py-10 rounded-xl  ' >
                                    <p className='text-xl text-gray-300  opacity-80 font-semibold italic mb-7' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum a omnis est. Tempore, perferendis repudiandae modi, quidem corrupti.!</p>    

                                    <div className='flex gap-5' >
                                        <img className='w-[50px] h-[50px] rounded-full' src="https://shtheme.com/demosd/iknow/wp-content/uploads/2022/04/1-3.jpg" alt="" />
                                        <div>
                                            <h3 className='text-xl font-bold' >Karan Aujla</h3>
                                            <p className='opacity-50 font-semibold' >Designer</p>
                                        </div>
                                        <div className='' >
                                            <FaQuoteLeft className='text-yellow-400 text-3xl ' />
                                        </div>
                                    </div>
                                </div>

                                
                                <div className='bg-[#5B5C64] px-16 py-10 rounded-xl  ' >
                                    <p className='text-xl text-gray-300  opacity-80 font-semibold italic mb-7' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum a omnis est. Tempore, perferendis repudiandae modi, quidem corrupti.!</p>    

                                    <div className='flex gap-5' >
                                        <img className='w-[50px] h-[50px] rounded-full' src="https://shtheme.com/demosd/iknow/wp-content/uploads/2022/04/1-3.jpg" alt="" />
                                        <div>
                                            <h3 className='text-xl font-bold' >Sidhu</h3>
                                            <p className='opacity-50 font-semibold' >Designer</p>
                                        </div>
                                        <div className='' >
                                            <FaQuoteLeft className='text-yellow-400 text-3xl ' />
                                        </div>
                                    </div>
                                </div>

                            </Slider>

                        </div>

                    </div>

                    :
                    <div></div>
            }


        </div>

    )
}

export default Testimonial