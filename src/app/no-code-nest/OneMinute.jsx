'use client'

import PhotoLoop from '@/components/ui/PhotoLoop'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { oneMinuteItems } from '@/utils/constants'

gsap.registerPlugin(ScrollTrigger)

const OneMinute = () => {
    const boxRef = useRef(null)

    useGSAP(() => {
gsap.set(boxRef.current,{
autoAlpha:0,
        y: 60,
})

      gsap.to(boxRef.current, {
        autoAlpha:1,
        yPercent:-20,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 70%',
          end:"top 20%",
          // markers:true,
          toggleActions: 'play none none reverse',
        },
      });
    }, [])

  return (
    <div ref={boxRef} className='opacity-0'>
      <PhotoLoop className={"border-2 border-gray-300"} photos={oneMinuteItems} bgColor={"#D3FFB9"}/>
    </div>
         
  )
}

export default OneMinute