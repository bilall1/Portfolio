import React from 'react'
import ProjectCard from './ProjectCard';
import Cell from "@/images/Cell.png"
import Twitter from "@/images/twitter.png"
import Veteran from "@/images/veteran.png"
import Link from 'next/link';

const projectData = [
    {
      id: 1,
      image: Cell,
      title: "Cell",
    description:
      "Technologies: NEXT JS, Tailwind CSS, NEST JS",
      author: "Someone",
      date: "April 22, 2022",
    },
    {
      id: 2,
      image: Twitter,
      title: "Twitter Clone",
      description:
        "Technologies: NEXT JS, Tailwind CSS, GOLANG, POSTGRESQL",
      author: "Someone",
      date: "April 22, 2022",
    },
    {
      id: 3,
      image: Veteran,
      title: "Veteran Meet",
      description:
        "Technologies: MONGO DB, EXPRESS JS, REACT JS, NODE JS",
      author: "Someone",
      date: "April 22, 2022",
    },
  ];
  

export default function Projects() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14" id='projects'>
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            My Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((item) => (
              <ProjectCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <Link href={'https://github.com/bilall1'}>
            <button className="bg-primary text-white hover:bg-primary/80 rounded-lg py-1 px-2 ">View all Projects</button>
            </Link>
            
          </div>
        </section>
      </div>
    </>
  )
}
