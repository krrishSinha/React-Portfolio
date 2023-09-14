import React from 'react'

function Button({ text, tel, cv }) {
    return (
        <a href={ tel ? tel : cv } download target='_blank' >
            <button className='px-7 cv py-3 transition-all duration-200 hover:bg-[#FFB324] bg-[#FF451B] text-white font-extrabold text-opacity-90 text-sm rounded-lg' >
                {text}
            </button>
        </a>
    )
}

export default Button