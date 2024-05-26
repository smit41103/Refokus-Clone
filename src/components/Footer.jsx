import React from 'react'

function Footer() {
  return (
    <div className='w-full text-white pb-10'>
      <div className='max-w-screen-xl mx-auto flex gap-32'>
        <div className='basis-1/2 flex flex-col gap-10'>
            <h1 className='text-[11rem] leading-none tracking-tight select-none'>refokus.</h1>
            <div className='flex gap-6 text-sm text-zinc-500'>
                <a href="">Privacy Policy</a>
                <a href="">Cookie Policy</a>
                <a href="">ImPressum</a>
                <a href="">Terms</a>
            </div>
        </div>
        <div className='basis-1/2 pl-20 flex gap-10'>
            <div className='socials flex flex-col gap-10 text-zinc-500'>
                <div>
                    <h1>Socials</h1>
                </div>
                <div className='flex flex-col'>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                    <a href="">LinkedIn</a>
                </div>
            </div>
            <div className='Sitemap flex flex-col gap-10'>
                <div className='text-zinc-500'>
                    <h1>Sitemap</h1>
                </div>
                <div className='flex flex-col text-sm gap-1'>
                    <a href="">Home</a>
                    <a href="">Work</a>
                    <a href="">Careers</a>
                    <a href="">Contact</a>
                </div>
            </div>
            <div className='text-sm font-semibold flex flex-col gap-8 '>
                <div className='mt-8 text-right'>
                    <p >
                        Refokus is a pioneering digital <br />agency driven by design and <br /> empowered by technology
                    </p>
                </div>
                <div>
                    <button className='text-nowrap bg-blue-600 pr-3 py-2 rounded-sm ml-6'>
                        <span className='mx-4 font-bold'>W</span>
                        Enterprise Partner
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
