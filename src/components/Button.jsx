import React from 'react'

const Button = (props) => {
  return (
    <button className='after:h-full after:absolute relative after:top-0 after:bottom-0 after:duration-300 after:bg-white after:z-[-1] z-[1] after:left-0 after:right-[100%] hover:after:right-0 overflow-hidden hover:text-[#AB68FF] py-4 px-5 rounded-full cursor-pointer font-semibold text-white font-Inter bg-[#AB68FF] shadow-[0px_0px_6px_0px_#AB68FF99] mt-4'>
    {props.text}
    </button>
  )
}

export default Button
