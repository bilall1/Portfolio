
"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from "@/svg/Logo"
import DarkMode from './DarkMode';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import MobileMenu from './MobileMenu';

export default function Navbar() {

  const MenuLinks = [
    {
      id: 1,
      name: "About",
      link: "/#about",
    },
    {
      id: 2,
      name: "Services",
      link: "/#services",
    },
    {
      id: 3,
      name: "Projects",
      link: "/#projects",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className='bg-white text-black dark:bg-black dark:text-white duration-300'>
      <div className='container py-3'>
        <div className="flex justify-between items-center">
          
          <div>
            <Link href={'#'} className='flex items-center gap-3'>
            <Logo/>
              <span className='text-2xl sm:text-3xl font-semibold'>Muhammad Bilal</span>
            </Link>
          </div>
          
          <div className='hidden md:block'>
          <ul className='flex justify-between items-center gap-8'>
            {MenuLinks.map(({id,name,link})=>{
              return(
                <li key={id} className=' cursor-pointer'>
                  <Link href={link} className='text-lg font-medium py-2 hover:border-b-2 hover:border-primary transition-colors duration-500 '>
                    {name}
                  </Link>
                </li>
              )
            })}
             <DarkMode/>    
          </ul>   

          </div>

          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
         
        </div>
        <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} MenuLinks={MenuLinks}/>
      </div>
    </nav>
  )
}
