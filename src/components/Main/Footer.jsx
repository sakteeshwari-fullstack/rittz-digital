import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-5 pt-14 pb-10 px-3 lg:px-20 bg-emerald-500 text-white'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-10 w-full'>
          <div className='w-full sm:w-1/2 lg:w-[40%]'>
            <h1 className='text-2xl lg:text-[27px] lg:text-4xl font-bold text-center md:text-left'>Hello@NoCodeNest.IO</h1>
          </div>
          <div className='w-full sm:w-1/2 md:w-[60%] relative flex items-center text-sm md:text-base'>
            <input className='rounded-4xl bg-white px-5 md:py-5 py-3 text-black w-full' placeholder='Enter your email' type='email' />
            <button className='absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500 text-white rounded-4xl h-8 md:h-14 px-4 md:px-6'>Subscribe</button>
          </div>
        </div>
        <ul className='flex text-sm md:text-base m-auto sm:m-0 gap-10'>
          <li className='list-none cursor-pointer'>Features</li>
          <li className='list-none cursor-pointer'>Why US</li>
          <li className='list-none cursor-pointer'>Testimonials</li>
        </ul>
      </div>
      <div className='flex flex-col gap-7 items-center'>
        <div className='relative text-xl sm:text-[22px] flex gap-6 py-6'>
          <span className='cursor-pointer'>Instagram</span>
          <span className='cursor-pointer'>X</span>
          <span className='cursor-pointer'>Youtube</span>
          <svg className='absolute bottom-0 left-0 right-0 h-[1px] w-full' viewBox="0 0 187 1" fill="none">
<line y1="0.5" x2="187" y2="0.5" stroke="url(#paint0_linear_510_2021)"/>
<defs>
<linearGradient id="paint0_linear_510_2021" x1="0" y1="1.5" x2="187" y2="1.5" gradientUnits="userSpaceOnUse">
<stop offset="0.1" stopColor="white" stopOpacity="0"/>
<stop offset="0.15" stopColor="white"/>
<stop offset="0.85" stopColor="white"/>
<stop offset="0.9" stopColor="white" stopOpacity="0"/>
</linearGradient>
</defs>
</svg>
        </div>
        <h1 className='text-4xl sm:text-6xl font-extrabold'>No Code Nest</h1>
        <span className='text-xs sm:text-base'>Copyright: @2025 NoCodeNest. All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer
