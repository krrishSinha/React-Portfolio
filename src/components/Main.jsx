import React, { useEffect, useState } from 'react'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Service from './Service'
import Testimonial from './Testimonial'
import Contact from './Contact'


function Main() {

  // const[display, setDisplay] = useState(false)
  const [title, setTitle] = useState('')

  const showDetail = (name) => {

    setTitle(name)

    if(title == name){
      console.log('yes same');
      setTitle('')
    }

  }

  return (
    <div className='w-[90%] lg:max-w-[1000px] mx-auto flex flex-col gap-3 overflow-hidden  ' >
      <About showDetail={showDetail} title={title} />
      <Resume showDetail={showDetail} title={title} />
      <Portfolio showDetail={showDetail} title={title} />
      <Service showDetail={showDetail} title={title} />
      <Testimonial showDetail={showDetail} title={title} />
      <Contact showDetail={showDetail} title={title} />
    </div>
  )
}

export default Main