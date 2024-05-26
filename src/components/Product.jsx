import React from 'react'
import { PiArrowBendDownRightFill } from "react-icons/pi";
import Button from './Button';

function Product({item,mover,index}) {
  return (
  <div className='w-full py-16 h-[15rem]'>
    <div onMouseEnter={()=>mover(index)} className=' max-w-screen-xl mx-auto text-white flex justify-between items-center'>
      <div className=''>
        <h1 className='capitalize font-semibold text-6xl'>{item.productname}</h1>
      </div>
      <div className='relative w-1/3'>
        <p className='mb-4'>
          {item.description}
        </p>
        <div className='flex items-center gap-6'>
          {item.live && <Button value={"Live Website"}/>}
          {item.case && <Button value={"Case Study"}/>}
        </div>

      </div>
    </div>
  </div>
  
  )
}

export default Product
