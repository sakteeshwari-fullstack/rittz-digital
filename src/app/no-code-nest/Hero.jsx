// 'use client'

import CtaButton from '@/components/ui/CtaButton'
import React from 'react'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'

const Hero = () => { 
  // const containerRef = useRef(null)
  // const headlineRef = useRef(null)
  // const subheadlineRef = useRef(null)
  // const taglineRef = useRef(null)
  // const descRef = useRef(null)
  // const ctaRef = useRef(null)

  // useGSAP(() => {
  //   const tl = gsap.timeline()
  //   tl.from(containerRef.current, { opacity: 0, y: 24, duration: .7, ease: 'power1.out' })
  //     .from(headlineRef.current, { opacity: 0, y: 18, duration: 0.6, ease: 'power1.out' }, '-=0.6')
  //     .from(subheadlineRef.current, { opacity: 0, y: 14, duration: 0.5, ease: 'power1.out' }, '-=0.5')
  //     .from(taglineRef.current, { opacity: 0, y: 12, duration: 0.4, ease: 'power1.out' }, '-=0.5')
  //     .from(descRef.current, { opacity: 0, y: 10, duration: 0.4, ease: 'power1.out' }, '-=0.4')
  //     .from(ctaRef.current, { opacity: 0, scale: 0.98, duration: 0.4, ease: 'power1.out' }, '-=0.3')
  // }, [])

  return (
    <div className='escape hero min-h-screen  bg-gray-50 px-2 flex justify-center items-center'>
      <div
        // ref={containerRef}
        className='flex flex-col gap-4 md:gap-6 justify-center items-center text-center translate-y-[6%]'
      >
        <div
          className='flex text-[33px] md:text-[40px] xl:text-5xl font-extrabold flex-col leading-[1.5] text-balance px-2 text-[#1F2937] '
        >
          <h1 
          // ref={headlineRef}
          >Launch Your Website or Online Store</h1>
          <span 
          // ref={subheadlineRef} 
          className='text-[#10B981]'>In One Minute</span>
          <div 
          // ref={taglineRef}
           className='flex justify-center items-center  gap-2'>
            <h1>
              <span className='relative z-50 bg-contain bg-no-repeat bg-center bg-[url(/assets/LandingPage/Hero/paint-stroke.png)]'>No Code,</span> Infinite Power
            </h1>
          </div>
        </div>
        <p
          // ref={descRef}
          className='text-base md:text-lg max-w-[85%] md:max-w-1/2 text-[#6B7280]'
        >
          Build custom tools effortlessly for any industry - fast, flexbile, scalable, and beautifully simple.
        </p>
        <div 
        // ref={ctaRef}
        >
          <CtaButton text={"Start free trial"} icon={true}/>
        </div>
      </div>
    </div>
  )
}

export default Hero