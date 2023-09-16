import React, { useState } from 'react'
import Card from './Card'
import { CiReceipt } from 'react-icons/ci'
import Button from './Button'

import html from '../assets/stack/HTML.png'
import css from '../assets/stack/CSS.png'
import javascript from '../assets/stack/Javascript.svg'
import react from '../assets/stack/React.png'
import node from '../assets/stack/NodeJs.svg'
import next from '../assets/stack/NextJsCircle.png'
import redux from '../assets/stack/Redux.svg'
import tailwind from '../assets/stack/Tailwind.png'
import express from '../assets/stack/Express.png'
import mongodb from '../assets/stack/MongoDB.svg'
import git from '../assets/stack/Git.svg'
import github from '../assets/stack/Github.svg'



function Resume({ display, setDisplay, showDetail, title }) {



    return (
        <div className='flex flex-col gap-4' >

            {/* <Card name='Resume' icon={<CiReceipt />} showDetail={showDetail} /> */}

            <div className='bg-[#494B50] px-5 md:px-12 py-10 rounded-xl scale-[0.99] transition-all duration-1000' >

                {/* header  */}
                <div className='mb-10' >
                    <p className='font-extrabold text-lg text-[#E34623]' >Resume</p>
                    <h2 className='text-4xl font-extrabold' >Combination of Skill <br className='md:block hidden' /> & Experience</h2>
                </div>

                <div className='flex flex-col lg:flex-row gap-20 ' >
                    {/* left  */}
                    <div className='flex flex-col gap-8 lg:w-[50%] ' >

                        <div>
                            <div></div>
                            <h2 className='text-[1.75rem] font-extrabold' >Education</h2>
                        </div>

                        <div className='flex flex-col gap-5' >
                            <div className='flex flex-col md:flex-row gap-y-4 md:items-center justify-between' >
                                <div>
                                    <h3 className='text-xl font-bold' >Higher Secondary</h3>
                                    <p className='text-lg font-medium opacity-70'></p>
                                </div>
                                <button className='border rounded-full text-[#fff] text-lg px-6 py-2 transition-all duration-200
                                hover:bg-[#E34623]' >2021 - 2022</button>
                            </div>
                            {/* <p className=' opacity-60  text-base' >The goal of commerce education is to understand the principles of accounting, business, ethics, entrepreneurial skills, and ethical decision-making.</p> */}
                        </div>


                        <div className='flex flex-col gap-5' >
                            <div className='flex flex-col md:flex-row gap-y-4 md:items-center justify-between ' >
                                <div>
                                    <h3 className='text-xl font-bold' >Bachelor of Commerce </h3>
                                    <p className='text-lg font-medium opacity-70 ' >University of Delhi</p>
                                </div>
                                <button className='border rounded-full text-[#fff] text-lg px-6 py-2 transition-all duration-200
                                hover:bg-[#E34623] ' >2022 - 2025</button>
                            </div>
                            <p className=' opacity-60  text-base'></p>
                        </div>
                        {/* 
        <div className='flex flex-col gap-5' >
            <div className='flex flex-col md:flex-row gap-y-4 md:items-center justify-between ' >
                <div>
                    <h3 className='text-xl font-bold' >Bachelor of Science</h3>
                    <p className='text-lg font-medium opacity-70 ' >University of Dhaka</p>
                </div>
                <button className='border rounded-full text-[#E34623] text-lg px-6 py-2 ' >2012 - 2015</button>
            </div>
            <p className=' opacity-60  text-base' >This project is called a thesis and is usually presented in front of a group of people, including university professors who will evaluate it and let the student..</p>
        </div> */}


                        <div>
                            <div></div>
                            <h2 className='text-[1.75rem] font-extrabold' >Experience</h2>
                        </div>

                        <div className='flex flex-col gap-3' >
                            <div className='flex flex-col md:flex-row gap-y-4 md:items-center justify-between ' >
                                <div>
                                    <h3 className='text-xl font-bold' >Frontend Development</h3>
                                    {/* <p className='text-lg font-medium opacity-70 '>Freelancing</p> */}
                                </div>
                                {/* <button className='border rounded-full text-[#fff] text-lg px-6 py-2 transition-all duration-200 hover:bg-[#E34623]' >2021 - running</button> */}
                            </div>
                            <p className=' opacity-60 text-base'>I've had the privilege to work with a diverse range of clients and projects, each offering a unique set of challenges. From responsive web design to optimizing performance and accessibility</p>
                        </div>

                        <div className='flex flex-col gap-3' >
                            <div className='flex flex-col md:flex-row gap-y-4 md:items-center justify-between ' >
                                <div>
                                    <h3 className='text-xl font-bold' >React Developer</h3>
                                    {/* <p className='text-lg font-medium opacity-70'>Nabloo</p> */}
                                </div>
                                {/* <button className='border rounded-full text-[#fff] text-lg px-6 py-2 transition-all duration-20 hover:bg-[#E34623]' >2022 - running</button> */}
                            </div>
                            <p className=' opacity-60  text-base'>I have experience as a React.js developer, specializing in creating responsive user interfaces, state management with Redux, API integration, and collaborating within agile teams to deliver high-quality web applications.</p>
                        </div>






                    </div>

                    {/* right  */}
                    <div className='lg:w-[50%] flex flex-col gap-10 ' >

                        <div>
                            <div className='mb-5' >
                                <div></div>
                                <h2 className='text-[1.75rem] font-extrabold' >Personal Skills</h2>
                            </div>

                            {/* progress bars  */}
                            <div className='flex flex-col gap-5' >
                                <div>
                                    <p className='text-xl font-bold' >Time Management</p>

                                    <div className='w-[80%] h-[5px] bg-[#E34623] rounded-xl relative mt-3' >
                                        <p className='absolute top-[-28px] right-1 ' >90%</p>
                                    </div>
                                    <div className='w-[90%] h-[8px] bg-[#777A7F] rounded-xl relative mt-1' ></div>
                                </div>

                                <div>
                                    <p className='text-xl font-bold' >Effeciency</p>

                                    <div className='w-[85%] h-[5px] bg-[#E34623] rounded-xl relative mt-3' >
                                        <p className='absolute top-[-28px] right-1 ' >95%</p>
                                    </div>
                                    <div className='w-[90%] h-[8px] bg-[#777A7F] rounded-xl relative mt-1' ></div>
                                </div>

                                <div>
                                    <p className='text-xl font-bold' >Honesty</p>

                                    <div className='w-[90%] h-[5px] bg-[#E34623] rounded-xl relative mt-3' >
                                        <p className='absolute top-[-28px] right-1 ' >100%</p>
                                    </div>
                                    <div className='w-[90%] h-[8px] bg-[#777A7F] rounded-xl relative mt-1' ></div>
                                </div>
                            </div>
                        </div>


                        <div>

                            <div className='mb-10' >
                                <div></div>
                                <h2 className='text-[1.75rem] font-extrabold' >Tech Stack</h2>
                            </div>

                            {/* <div className='grid grid-cols-2 items-center gap-10 ' >

                                <div className=' mx-auto' >
                                    <img src={single95} alt="" />
                                    <h2 className='text-center mt-3 opacity-90 font-bold' >HTML</h2>
                                </div>

                                <div className='mx-auto'>
                                    <img src={single90} alt="" />
                                    <h2 className='text-center mt-3 opacity-90 font-bold' >CSS</h2>
                                </div>

                                <div className='mx-auto' >
                                    <img src={single80} alt="" />
                                    <h2 className='text-center mt-3 opacity-90 font-bold' >javascript</h2>
                                </div>

                                <div className='mx-auto' >
                                    <img src={single75} alt="" />
                                    <h2 className='text-center mt-3 opacity-90 font-bold' >React Js</h2>
                                </div>

                            </div> */}

                            <div className='grid grid-cols-4 justify-items-center gap-x-3 gap-y-7 '  >
                                <img src={html} alt="" className='w-[50px] sm:w-[60px] cursor-pointer transition-all duration-200 hover:scale-[1.1] ' />
                                <img src={css} alt="" className='w-[50px] sm:w-[60px] cursor-pointer transition-all duration-200 hover:scale-[1.1] ' />
                                <img src={javascript} alt="" className='w-[50px] sm:w-[60px] cursor-pointer transition-all duration-200 hover:scale-[1.1] ' />
                                <img src={react} alt="" className='w-[50px] sm:w-[60px] cursor-pointer transition-all duration-200 hover:scale-[1.1] ' />
                                <img src={node} alt="" className='w-[50px] sm:w-[60px] cursor-pointer transition-all duration-200 hover:scale-[1.1] ' />
                                <img src={next} alt="" className='w-[50px] sm:w-[60px] cursor-pointer transition-all duration-200 hover:scale-[1.1] ' />
                                <img src={redux} alt="" className='w-[50px] sm:w-[60px] cursor-pointer transition-all duration-200 hover:scale-[1.1] ' />
                                <img src={tailwind} alt="" className='w-[50px] sm:w-[60px] cursor-pointer transition-all duration-200 hover:scale-[1.1] ' />
                                <img src={express} alt="" className='w-[50px] sm:w-[60px] cursor-pointer transition-all duration-200 hover:scale-[1.1] ' />
                                <img src={git} alt="" className='w-[50px] sm:w-[60px] cursor-pointer transition-all duration-200 hover:scale-[1.1] ' />
                                <img src={github} alt="" className='w-[50px] sm:w-[60px] cursor-pointer transition-all duration-200 hover:scale-[1.1] ' />
                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Resume