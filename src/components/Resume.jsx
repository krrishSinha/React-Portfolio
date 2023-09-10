import React, { useState } from 'react'
import Card from './Card'
import { CiReceipt } from 'react-icons/ci'
import Button from './Button'
import single95 from '../assets/single95suffix.png'
import single90 from '../assets/single90suffix.png'
import single80 from '../assets/single80suffix.png'
import single75 from '../assets/single75suffix.png'

function Resume({ display, setDisplay, showDetail, title }) {



    return (
        <div className='flex flex-col gap-4 '>

            <Card name='Resume' icon={<CiReceipt />} showDetail={showDetail} />

            {
                title == "Resume" ?

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
                                            <h3 className='text-xl font-bold' >Cognitive Sciences</h3>
                                            <p className='text-lg font-medium opacity-70 ' >University of Maine</p>
                                        </div>
                                        <button className='border rounded-full text-[#E34623] text-lg px-6 py-2 ' >2018 - 2020</button>
                                    </div>
                                    <p className=' opacity-60  text-base' >The goal of cognitive science is to understand the principles of intelligence with the hope that this will lead to better comprehension.</p>
                                </div>


                                <div className='flex flex-col gap-5' >
                                    <div className='flex flex-col md:flex-row gap-y-4 md:items-center justify-between ' >
                                        <div>
                                            <h3 className='text-xl font-bold' >Civil Engineering</h3>
                                            <p className='text-lg font-medium opacity-70 ' >University of Texas</p>
                                        </div>
                                        <button className='border rounded-full text-[#E34623] text-lg px-6 py-2 ' >2016 - 2017</button>
                                    </div>
                                    <p className=' opacity-60  text-base' >Civil engineering is arguably the oldest engineering discipline. It deals with the built environment and can be dated to the first time someone placed a roof.</p>
                                </div>

                                <div className='flex flex-col gap-5' >
                                    <div className='flex flex-col md:flex-row gap-y-4 md:items-center justify-between ' >
                                        <div>
                                            <h3 className='text-xl font-bold' >Bachelor of Science</h3>
                                            <p className='text-lg font-medium opacity-70 ' >University of Dhaka</p>
                                        </div>
                                        <button className='border rounded-full text-[#E34623] text-lg px-6 py-2 ' >2012 - 2015</button>
                                    </div>
                                    <p className=' opacity-60  text-base' >This project is called a thesis and is usually presented in front of a group of people, including university professors who will evaluate it and let the student..</p>
                                </div>


                                <div>
                                    <div></div>
                                    <h2 className='text-[1.75rem] font-extrabold' >Experience</h2>
                                </div>

                                <div className='flex flex-col gap-5' >
                                    <div className='flex flex-col md:flex-row gap-y-4 md:items-center justify-between ' >
                                        <div>
                                            <h3 className='text-xl font-bold' >UI/UX Designer</h3>
                                            <p className='text-lg font-medium opacity-70 ' >Envato Market</p>
                                        </div>
                                        <button className='border rounded-full text-[#E34623] text-lg px-6 py-2 ' >2018 - running</button>
                                    </div>
                                    <p className=' opacity-60  text-base' >Web Developers are build a website’s core structure using coding languages, while designers are more visually creative and user-focused.</p>
                                </div>

                                <div className='flex flex-col gap-5' >
                                    <div className='flex flex-col md:flex-row gap-y-4 md:items-center justify-between ' >
                                        <div>
                                            <h3 className='text-xl font-bold' >Creative Designer</h3>
                                            <p className='text-lg font-medium opacity-70 ' >Bahanno Digital</p>
                                        </div>
                                        <button className='border rounded-full text-[#E34623] text-lg px-6 py-2 ' >2015 - 2017</button>
                                    </div>
                                    <p className=' opacity-60  text-base' >Web Developers are build a website’s core structure using coding languages, while designers are more visually creative and user-focused.</p>
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

                                            <div className='w-[60%] h-[5px] bg-[#E34623] rounded-xl relative mt-3' >
                                                <p className='absolute top-[-28px] right-1 ' >70%</p>
                                            </div>
                                            <div className='w-[90%] h-[8px] bg-[#777A7F] rounded-xl relative mt-1' ></div>
                                        </div>

                                        <div>
                                            <p className='text-xl font-bold' >Intigrity</p>

                                            <div className='w-[70%] h-[5px] bg-[#E34623] rounded-xl relative mt-3' >
                                                <p className='absolute top-[-28px] right-1 ' >80%</p>
                                            </div>
                                            <div className='w-[90%] h-[8px] bg-[#777A7F] rounded-xl relative mt-1' ></div>
                                        </div>
                                    </div>
                                </div>


                                <div>

                                    <div className='mb-10' >
                                        <div></div>
                                        <h2 className='text-[1.75rem] font-extrabold' >Software Skills</h2>
                                    </div>

                                    <div className='grid grid-cols-2 items-center gap-10 ' >

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

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    : <div></div>
            }



        </div>
    )
}

export default Resume