"use client"
import NavBar from '@/components/NavBar'
import ServiceCard from '@/components/ServiceCard'
import WorkCard from '@/components/WorkCard'
import DownloadSvg from '@/components/svg/DownloadSvg'
import LineSvg from '@/components/svg/LineSvg'
import Aurora from "@/components/image/aurora.jpeg"
import Zuntech from "@/components/image/zuntech.jpeg"
import Image from 'next/image'


export default function Home() {
  const handleClick = () => {
    window.location.href = 'mailto:muhammad.bilal0636@gmail.com';
  };

  const handleDownload = () => {
    // URL of the hosted CV file
    const cvUrl = 'https://drive.google.com/file/d/1RoX9_h9Nj_SDOa7NiESVuYdH98Dh_dED/view?usp=sharing';
    // Open the CV file in a new tab
    window.open(cvUrl, '_blank');
  };
  return (
    <div className='h-screen w-screen mb-[50%]'>

      <div className='pl-[10%] pr-[10%]'>
      <NavBar/>
      </div>

      {/* About  */}
      <div  id="about" className='w-full mt-[5%] flex flex-col pl-[10%] pr-[10%]'>
        <span className='text-green-500 text-3xl font-semibold'>Hello, I'm Muhammad Bilal</span>
        <span className='text-5xl font-semibold pt-3'>Full Stack Developer |</span>

        <p className='w-2/6 mt-[3%] text-sm text-gray-400'>Enthusiastic computer science expert with a robust foundation in web development. I've refined my expertise in
        both front-end and back-end domains.</p>

        <div className='flex mt-[2%]'>
        <button className='bg-green-500 text-sm px-4 font-semibold' onClick={handleClick}>
          Email Me
        </button>

        <button className='flex ml-10 py-4 px-3 text-sm items-center font-semibold text-gray-400' onClick={handleDownload}>
          <DownloadSvg/>
          <span className='ml-3'>Download Cv</span>
        </button>
        </div>
      
      </div>

      {/* Services */}
      <div id="service" className='mt-[8%] flex justify-between pl-[10%] pr-[10%]'>

        <span className='text-3xl font-semibold w-2/6'> 1+ years experience working</span>

        <div className='flex flex-col w-2/6'>

          <div className='flex items-center'> 
            <LineSvg/>
            <span className='text-green-500 ml-2 text-lg'>Services </span>
          </div>
          <span>Discover the best services I offer, designed to ensure the success of your project.</span>
        </div>
   
      </div>

      {/* cards */}

      <div className='flex justify-between mt-[4%] gap-4 pl-[10%] pr-[10%]'>
        <ServiceCard title='Front End Development' descripton='NEXT JS, REACT JS, TAILWIND CSS, JQUERY'/>
        <ServiceCard title='Back End  Development' descripton='NODE JS, EXPRESS JS, GOLANG, MICROSERVCES'/>
        <ServiceCard title='Full Stack Development' descripton='MERN, MONGO DB, SQL, NOSQL, POSTGRESQL,  '/>
      </div> 


      {/* Recent Work */}
      <div id="work" className='bg-custom-gray pl-[10%] pr-[10%] pb-[5%]'>
        
        <div className='flex flex-col mt-[10%] pt-[5%]'>

            <div className='flex items-center'>  
              <LineSvg/>
              <span className='text-green-500 ml-2 text-lg'>Recent Work</span>
              </div> 
            
            <span className='text-3xl font-semibold w-2/6 mt-[1%]'>Some of my favourite projects.</span>
            </div>

        <div className='flex justify-between mt-[4%] gap-4'>
        <WorkCard imageurl='/Image/Cell.png' title='Cell Admin - SuperStore Management App' technologies='Technologies: NEXT JS, Tailwind CSS, NEST JS' access={false}/>
        <WorkCard imageurl='/Image/twitter.png' title='Twitter Clone - Social App' technologies='Technologies: NEXT JS, Tailwind CSS, GOLANG, POSTGRESQL' access={false}/>     
         </div> 
        <div className='flex justify-between mt-[4%] gap-4'>
        <WorkCard imageurl='/Image/veteran.png' title='Veteran Meet - Social App' technologies='Technologies: MONGO DB, EXPRESS JS, REACT JS, NODE JS'  link='https://github.com/bilall1/Veteran-Meet-Mern-Stack' access={true}/>
        <WorkCard imageurl='/Image/gym.png' title='Fitme - Workout App' technologies='Technologies: HTML, CSS, PHP' link='https://github.com/bilall1/Gym-Management-System' access={true}/>
        </div> 
        
      </div>    


      {/* About Me */}

      <div id="aboutme" className='w-full mt-[4%] flex flex-col items-center mb-[5%]'>

              <div className='flex items-center'>  
              <LineSvg/>
              <span className='text-green-500 ml-2 text-lg'>About Me</span>
              </div> 

              <div className='text-3xl font-semibold mt-[2%]'>
                My Recent Jobs
              </div>

              <div className='flex gap-20 mt-[5%]'>

                <div className='flex flex-col items-center'>

                <Image src={Aurora} alt='Image' width={100} height={100}/>

                  <span className='mt-[10%] text-lg'>Junior Developer</span>
                  <span>@Aurora Solutions</span>

                </div>


                <div className='flex flex-col items-center'>

                <Image src={Zuntech} alt='Image' width={100} height={100}/>
                <span className='mt-[8%] text-lg'>Full Stack Developer</span>
                <span>@Zuntech Technologies</span>

                </div>
              </div>
  
      </div>
 
       {/* Contact */}
       <div id="contact" className=' pl-[10%] pr-[10%] flex justify-between pt-[1%] bg-custom-black'>
        
        <div className='w-2/6'>
        <span className='font-semibold'>Bilal</span> 
        <span className='text-4xl text-green-500'>.</span> 
        </div>

        <div className='w-2/6 flex justify-between mt-2'>
          <div className='flex flex-col'>
            <span className='font-semibold'>Information</span>
            <span className='text-xs text-gray-400 mt-3'>+92 3087408128</span>
            <span className='text-xs text-gray-400 mt-2'>Muhammad.bilal0636@gmail.com</span>
            <span className='text-xs text-gray-400 mt-2'>Lahore, Pakistan</span>
          </div>

          <div className='flex flex-col'>
            <span className='font-semibold'>Social</span>
            <a href='https://www.linkedin.com/in/mbilal19/' className='text-xs text-gray-400 mt-3'>Linkedin</a>

            <a href="https://www.fiverr.com/bilalch12"className='text-xs text-gray-400 mt-3'>Fiverr</a>
            
          </div>

        </div>

       </div>

       <div className='pl-[10%] pr-[10%] bg-custom-black pt-[1%] text-xs mb-1'>
            Develop by <span className='text-green-500'>Muhammad Bilal</span>
      </div>
    

    </div>

    

    
    
  )
}
