import React, { useEffect, useState } from 'react'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Service from './Service'
import Testimonial from './Testimonial'
import Contact from './Contact'
import data from '../CardApi'
import Card from './Card'
import CardContainer from './CardContainer'


function Main() {

  const [title, setTitle] = useState('')

  return (
    <div className='w-[90%] lg:max-w-[1000px] mx-auto flex flex-col gap-3 overflow-hidden' >
      {/* <About showDetail={showDetail} title={title} />
      <Resume showDetail={showDetail} title={title} />
      <Portfolio showDetail={showDetail} title={title} />
      <Service showDetail={showDetail} title={title} />
      <Testimonial showDetail={showDetail} title={title} />
      <Contact showDetail={showDetail} title={title} /> */}

      {
        data.map((elm) => {
          return (
            <CardContainer elm={elm} />
          )
        })
      }

    </div>
  )
}

export default Main