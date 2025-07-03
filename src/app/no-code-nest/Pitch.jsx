'use client'

import CtaButton from '@/components/ui/CtaButton'
import React from 'react'
import PhotoLoop from '../../components/ui/PhotoLoop'
import { pitchItems } from '@/utils/constants'

const Pitch = () => {
  return ( 
    <div className='escape flex flex-col gap-20 pt-2 px-2'>
      <h1 className=' text-3xl lg:text-4xl text-center font-bold text-emerald-500 leading-[1.4]'> Why Choose No Code Nest? </h1>
     
     <div className='-mt-14 flex flex-col gap-20'>
      {pitchItems?.sections?.map((section,index)=>(
    <div className={`restrict flex flex-col gap-10 md:gap-20 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : 'md:flex-row'}`} key={index}>
        {/* Texts */}
     <div className='w-full flex flex-col gap-5 lg:gap-6 md:grow'>
       <h1 className='text-gray-900 text-3xl md:text-4xl font-bold text-center md:text-start leading-[1.4] text-balance'>{section?.title}</h1>
       
       {section?.features?.map((feature,featureIndex)=>(
        <div className='flex flex-col gap-1'>
            <h1 className='text-center md:text-start text-3xl text-balance text-emerald-500 font-bold'>{feature?.title}</h1>
        <ul className={`flex flex-col gap-3`}>
        {feature?.description?.map((desc,index)=>(
            <li key={index} className={`${feature?.description?.length > 1 ? "list-disc " : "text-center md:text-start"} text-gray-700 leading-[1.7]`}>{desc}</li>
        ))}
       </ul>
            </div>
       ))}
       
      </div>

{/* Images */}

    <PhotoLoop index={index} photos={section?.images} bgColor={section?.bgColor}/>
</div>
     ))}
     </div>
     

     <CtaButton className="self-center" text={"Compare With Other Platforms"}/>
    </div>
  )
}

export default Pitch