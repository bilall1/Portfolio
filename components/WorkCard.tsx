import Image from 'next/image'
import React from 'react'

import img from "@/components/image/Image.png"
import ArrowSvg from './svg/ArrowSvg'

export default function WorkCard() {
  return (
    <div className='flex flex-col w-full '>
        <div >
            <Image src={img} alt='Image' width={550} height={550}/>
        </div>
        <span className='font-lg text-lg font-semibold mt-[2%]'>Veteran Meet - Social App</span>

        <button className='flex items-center'>
        <span className='text-green-500 mt-[1%]'>See project</span>
        <div className='ml-3'>
        <ArrowSvg/>
        </div>
        </button>
        
    </div>
  )
}
