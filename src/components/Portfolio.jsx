import React, { useState } from 'react'
import Card from './Card'
import { CiReceipt } from 'react-icons/ci'
import portfolioData from '../PortfolioApi'
import PortfolioModal from './PortfolioModal'

function Portfolio({ showDetail, title }) {

    const [show, setShow] = useState(false)
    const [data, setData] = useState([])

    const openPopup = (portfolio) => {
        setShow(!show)
        setData([portfolio])
    }

    console.log(data);

    return (
        <>
            <div className={`flex flex-col gap-4`}>

                <div className={`bg-[#494B50] px-5 md:px-10 py-10 rounded-xl scale-[0.99] transition-all duration-1000`}>

                    {/* header  */}
                    <div className='mb-16' >
                        <p className='font-extrabold text-lg text-[#E34623]'>Resume</p>
                        <h2 className='text-4xl font-extrabold' >My works that I did <br className='hidden sm:block' /> for clients</h2>
                    </div>

                    {/* portfolio div  */}
                    <div>
{/* 
                        <div className='flex flex-wrap justify-center my-10 gap-8 text-lg font-bold' >
                            <p className='text-red-500 cursor-pointer'>All</p>
                            <p className='cursor-pointer'>Soundcloud</p>
                            <p className='cursor-pointer'>	Vimeo</p>
                            <p className='cursor-pointer'>Youtube</p>
                        </div> */}

                        <div className='grid md:grid-cols-3 gap-10 items-center z-10 ' >
                            {
                                portfolioData.map((portfolio) => {
                                    return (
                                        <div
                                            onClick={() => openPopup(portfolio)}
                                            className={`max-h-[300px] rounded-xl group relative cursor-pointer overflow-y-hidden transition-all duration-200 hover:scale-[1.015]  `}>

                                            <img src={portfolio.img} alt="" loading='lazy'
                                                className='h-auto w-full transition-all duration-[20000ms] hover:-translate-y-[calc(100%-300px)] ' />

                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>

                {
                    show && data.map((portfolio) => <PortfolioModal portfolio={portfolio} setShow={setShow} show={show}  /> )
                }
            </div>

        </>
    )
}

{/* <div className='h-[300px] w-[300px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'></div> */ }


export default Portfolio