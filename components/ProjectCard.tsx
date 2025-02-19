import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function ProjectCard({image,title,description,link }:any) {
  return (
    <div className=" dark:text-white group">
    <div>
      <Image
        src={image}
        alt="No image"
        className="mx-auto w-full object-cover group-hover:scale-105 duration-300"
      />
    </div>
    <div className="space-y-2 p-4 ml-6 bg-gray-200 dark:bg-slate-950 -translate-y-8">
      <h1 className="line-clamp-1 text-2xl font-semibold">{title}</h1>
      <p className="line-clamp-4 text-gray-500 text-sm">{description}</p>
      <div className="flex justify-end pr-4 text-gray-500">

        {link?
        <Link href={link} >
          <FaArrowRight className="group-hover:text-primary group-hover:translate-x-2 duration-300" />
        </Link>
        :
        <p className='text-xs'>Code Hidden</p>
        
      }

        
      </div>
    </div>
  </div>
  )
}


