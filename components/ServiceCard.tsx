import React from 'react'
import Code from './svg/Code';

interface Props{
    title : string;
    descripton: string;
}

export default function ServiceCard({title,descripton}: Props) {
  return (
    <div className='flex flex-col bg-custom-gray    '>

        <div className='h-36 flex flex-col justify-center ml-[5%]'> 
        <Code/>         
        </div>
        <span className='font-lg text-lg font-semibold ml-4'>{title}</span>
        <span className='text-gray-400 ml-4 text-xs mt-[1%] mb-[15%] pr-1'>{descripton}</span>
        <div className='h-[3%] bg-green-500'>

        </div>
    </div>
  )
}
