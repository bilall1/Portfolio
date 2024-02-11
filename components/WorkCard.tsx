import Image from 'next/image'
import React from 'react'

import img from "@/components/image/Image.png"
import ArrowSvg from './svg/ArrowSvg'
import { access } from 'fs'


interface Props{
    imageurl :string
    title:string
    technologies:string;
    link?: string
    access:boolean
}

export default function WorkCard({imageurl,title,link,access,technologies}:Props) {

  const handleClick =()=>{
    window.open(link, '_blank');
  }
  return (
    <div className='flex flex-col w-full '>
        <div >
            <Image src={imageurl} alt='Image' width={550} height={550}/>
        </div>
        <span className='font-lg text-lg font-semibold mt-[2%]'>{title}</span>
        <span className=' text-sm my-[1%]'>{technologies}</span>

        {access ?
        <button className='flex items-center' onClick={handleClick}>
        <span className='text-green-500 mt-[1%]'>See project</span>
        <div className='ml-3'>
        <ArrowSvg/>
        </div>
        </button>
        :
        <div className='flex'>
        <span className='text-green-500 mt-[1%]'>Code Hidden</span>
        <div className='ml-3'>
        <ArrowSvg/>
        </div>
        </div>

        }
        
        
    </div>
  )
}
