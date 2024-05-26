import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto text-white flex py-5 justify-between border-b-[1px] border-zinc-600'>
        <div className='flex'>
        <img className='p-3' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className="links flex gap-12 ml-14 text-sm">
            {["Home","Work","Careers","","News"].map((elem,index)=>{
                return(
                    elem.length === 0 ? <span key={index} className='w-[2px] h-7 bg-zinc-600 mt-2'></span>: <a key={index} href="" className="p-3 flex items-center gap-1 font-regular">
                    {index===1 
                    &&(<span key={index} style={{boxShadow: "0 0 0.75em #00FF19"}} className='inline-block w-1 h-1 bg-green-300 rounded-full'></span>)} 
                    {elem}
                </a>
                
                )
            })}

        </div>
        </div>
        <div>
            <Button value={"Start a Project"}/>
        </div>
    </div>
  )
}

export default Navbar
