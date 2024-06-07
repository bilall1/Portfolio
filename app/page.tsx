
"use client"
import Image from 'next/image'
import Navbar from "@/components/Navbar"
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import Testomonial from '@/components/Testomonial'
import { useEffect } from 'react'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'


export default function Home() {
 
  return (
    <div className='overflow-x-hidden font-sans'>
      <Navbar />
      <HeroSection/>
      <Services />
      <Projects />
      <Footer />
    </div>
       )
}
