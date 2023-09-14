import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

function Card({ name, icon }) {

  // console.log(CiReceipt);

  return (
    <>
      <div className=' hidden md:flex justify-between gap-2 items-center group cursor-pointer' >

        <div className='bg-[#FF451B] rounded-xl text-5xl p-8 min-h-[50px] transition-all duration-200 group-hover:bg-[#FFB324] '> {icon} </div>

        <h2
          className='bg-[#494B50] text-white flex-1 flex items-center text-3xl min-h-[50px] py-10 font-bold px-8 rounded-xl select-none 
         transition-all duration-200 group-hover:bg-[#FF451B] ' > {name} </h2>

        <div
          className=' bg-[#FFB324] rounded-xl text-5xl min-h-[50px] p-8 flex items-center transition-all duration-200 group-hover:bg-[#494B50] ' >
          <AiOutlineDown className='' />
        </div>

      </div>


      <div className='md:hidden flex justify-between items-center group cursor-pointer rounded-xl bg-[#494B50] transition-all duration-200 hover:bg-[#FF451B]' onClick={() => {
        showDetail(name)
      }} >

        <div className='bg-[#FF451B] rounded-xl text-5xl p-3 transition-all duration-200 group-hover:bg-[#FFB324] '> {icon} </div>
        <h2 className=' text-white flex-1 text-2xl  font-bold px-4  select-none  ' > {name} </h2>

      </div>


    </>


  )
}

export default Card