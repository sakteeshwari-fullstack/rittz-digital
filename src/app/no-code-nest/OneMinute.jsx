import PhotoLoop from '@/components/ui/PhotoLoop'
import React from 'react'

import { oneMinuteItems } from '@/utils/constants'

const OneMinute = () => {
    
  return (
         <PhotoLoop className={"border-2 border-gray-300"} photos={oneMinuteItems} bgColor={"#D3FFB9"}/>
  )
}

export default OneMinute