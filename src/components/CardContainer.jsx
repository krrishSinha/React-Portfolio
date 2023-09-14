import React, { useState } from 'react'
import Card from './Card'

function CardContainer({ elm }) {

    const [display, setDisplay] = useState(false)

    return (
        <div className='flex flex-col gap-5'>

            <div
                onClick={() => setDisplay(!display)}
            >
                <Card name={elm.name} icon={elm.icon} />
            </div>

            {
                display ?
                    <>
                        {elm.component}
                    </>
                    :
                    <div></div>
            }

        </div>
    )
}

export default CardContainer