import React, { useState } from 'react'
import Card from './Card'
import { CiReceipt } from 'react-icons/ci'


function Portfolio({ showDetail, title }) {

    return (
        <div className='flex flex-col gap-4'>

            <Card name='Portfolio' icon={<CiReceipt />} showDetail={showDetail} />

            {
                title == 'Portfolio' ?

                    <div className={`bg-[#494B50] px-5 md:px-10 py-10 rounded-xl scale-[0.99] transition-all duration-1000`}>

                        {/* header  */}
                        <div className='mb-16' >
                            <p className='font-extrabold text-lg text-[#E34623]'>Resume</p>
                            <h2 className='text-4xl font-extrabold' >My works that I did <br className='hidden sm:block' /> for clients</h2>
                        </div>

                        {/* portfolio div  */}
                        <div>

                            <div className='flex flex-wrap justify-center my-10 gap-8 text-lg font-bold' >

                                <p className='text-red-500 cursor-pointer'>All</p>
                                <p className='cursor-pointer'>Soundcloud</p>
                                <p className='cursor-pointer'>	Vimeo</p>
                                <p className='cursor-pointer'>Youtube</p>
                            </div>

                            <div className='grid md:grid-cols-3 gap-10 items-center z-10 ' >

                                <div className={`h-full group relative before:content-[''] before:absolute before:w-full before:h-full before:rounded-xl before:z-[-10] before:scale-0   before:bg-red-500 before:bg-opacity-80 hover:before:z-[1] hover:before:scale-100 hover:before:scale-100 before:transition-all before:duration-200 cursor-pointer`}>

                                    <img className='h-full rounded-xl bg-cover ' src="https://shtheme.com/demosd/iknow/wp-content/uploads/2022/02/1-3.jpg" alt="" />

                                    <div className='text-xl font-bold z-10 scale-0 group-hover:scale-100 absolute bottom-5 text-center left-[50%] translate-x-[-50%] transition-all duration-200 '>
                                        <p>vimio</p>
                                        <h3>Aumeo Vimio</h3>
                                    </div>
                                </div>


                                <div className={`h-full group relative before:content-[''] before:absolute before:w-full before:h-full before:rounded-xl before:z-[-10] before:scale-0   before:bg-red-500 before:bg-opacity-80 hover:before:z-[1] hover:before:scale-100 hover:before:scale-100 before:transition-all before:duration-200 cursor-pointer`}>

                                    <img className='h-full rounded-xl bg-cover ' src="https://shtheme.com/demosd/iknow/wp-content/uploads/2022/02/1-3.jpg" alt="" />

                                    <div className='text-xl font-bold z-10 scale-0 group-hover:scale-100 absolute bottom-5 text-center left-[50%] translate-x-[-50%] transition-all duration-200 '>
                                        <p>vimio</p>
                                        <h3>Aumeo Vimio</h3>
                                    </div>
                                </div>


                                <div className={`h-full group relative before:content-[''] before:absolute before:w-full before:h-full before:rounded-xl before:z-[-10] before:scale-0   before:bg-red-500 before:bg-opacity-80 hover:before:z-[1] hover:before:scale-100 hover:before:scale-100 before:transition-all before:duration-200 cursor-pointer`}>

                                    <img className='h-full rounded-xl bg-cover ' src="https://shtheme.com/demosd/iknow/wp-content/uploads/2022/02/1-3.jpg" alt="" />

                                    <div className='text-xl font-bold z-10 scale-0 group-hover:scale-100 absolute bottom-5 text-center left-[50%] translate-x-[-50%] transition-all duration-200 '>
                                        <p>vimio</p>
                                        <h3>Aumeo Vimio</h3>
                                    </div>
                                </div>

                                <div className={`h-full group relative before:content-[''] before:absolute before:w-full before:h-full before:rounded-xl before:z-[-10] before:scale-0   before:bg-red-500 before:bg-opacity-80 hover:before:z-[1] hover:before:scale-100 hover:before:scale-100 before:transition-all before:duration-200 cursor-pointer`}>

                                    <img className='h-full rounded-xl bg-cover ' src="https://shtheme.com/demosd/iknow/wp-content/uploads/2022/02/1-3.jpg" alt="" />

                                    <div className='text-xl font-bold z-10 scale-0 group-hover:scale-100 absolute bottom-5 text-center left-[50%] translate-x-[-50%] transition-all duration-200 '>
                                        <p>vimio</p>
                                        <h3>Aumeo Vimio</h3>
                                    </div>
                                </div>


                                <div className={`h-full group relative before:content-[''] before:absolute before:w-full before:h-full before:rounded-xl before:z-[-10] before:scale-0   before:bg-red-500 before:bg-opacity-80 hover:before:z-[1] hover:before:scale-100 hover:before:scale-100 before:transition-all before:duration-200 cursor-pointer`}>

                                    <img className='h-full rounded-xl bg-cover ' src="https://shtheme.com/demosd/iknow/wp-content/uploads/2022/02/1-3.jpg" alt="" />

                                    <div className='text-xl font-bold z-10 scale-0 group-hover:scale-100 absolute bottom-5 text-center left-[50%] translate-x-[-50%] transition-all duration-200 '>
                                        <p>vimio</p>
                                        <h3>Aumeo Vimio</h3>
                                    </div>
                                </div>


                                <div className={`h-full group relative before:content-[''] before:absolute before:w-full before:h-full before:rounded-xl before:z-[-10] before:scale-0   before:bg-red-500 before:bg-opacity-80 hover:before:z-[1] hover:before:scale-100 hover:before:scale-100 before:transition-all before:duration-200 cursor-pointer`}>

                                    <img className='h-full rounded-xl bg-cover ' src="https://shtheme.com/demosd/iknow/wp-content/uploads/2022/02/1-3.jpg" alt="" />

                                    <div className='text-xl font-bold z-10 scale-0 group-hover:scale-100 absolute bottom-5 text-center left-[50%] translate-x-[-50%] transition-all duration-200 '>
                                        <p>vimio</p>
                                        <h3>Aumeo Vimio</h3>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    :
                    <div></div>
            }

        </div>
    )
}

export default Portfolio