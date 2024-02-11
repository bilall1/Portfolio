import React from 'react'

export default function NavBar() {
  return (
    <div className='w-full flex justify-between py-5 text-lg font-medium'>

    <div className='w-3/6'>
    <span className='font-semibold text-2xl'>Bilal</span> 
    <span className='text-4xl text-green-500'>.</span> 
    </div>

     <div className='flex justify-between w-3/6'>
        <a href='#about'>Home</a>
        <a href='#service'>Services</a>
        <a href='#work'>Work</a>
        <a href='#aboutme'>About Me</a>
        <a href='#contact'>Contact</a>
        
    </div>    
      
    </div>
  )
}
