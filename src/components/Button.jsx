import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

function Button({value}) {
  return (
    <div className='flex'>
      <button className='min-w-40 bg-[#faf5ff] text-black px-4 py-2 rounded-full text-xm font-semibold flex items-center gap-7'>{value}{<BsArrowReturnRight className='w-3 h-3 mt-1' />}</button>
      
    </div>
  )
}

export default Button
