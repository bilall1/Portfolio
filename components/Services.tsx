import React from 'react'
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { FaCode, FaDatabase } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { SiAzuredevops } from 'react-icons/si';


const skillsData = [
    {
      name: "Front End Development",
      icon: <FaCode className="text-4xl text-primary" />,
      link: "#",
      description:
        "NEXT JS, REACT JS, TAILWIND CSS, JQUERY",
      aosDelay: "0",
    },
    {
      name: "Back End Development",
      icon: <AiOutlineCodeSandbox className="text-4xl text-primary" />,
      link: "#",
      description:
        "GOLANG, MICROSERVCES,NODE JS, EXPRESS JS",
      aosDelay: "300",
    },
    {
      name: "Data Bases",
      icon: <FaDatabase className="text-4xl text-primary" />,
      link: "#",
      description:
        "MONGO DB, SQL, NOSQL, POSTGRESQL",
      aosDelay: "500",
    },
    {
      name: "Dev Ops",
      icon: <SiAzuredevops className="text-4xl text-primary" />,
      link: "#",
      description:
        "GITHUB, GITLAB, GITHUB ACTIONS, DOCKER",
      aosDelay: "700",
    },
  ];

export default function Services() {
    return (
        <>
          <span id="services"></span>
          <div className="bg-gray-100 text-black dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
            <div className="container">
              {/* Header */}
              <div className="pb-12 text-center space-y-3">
                <h1
                  className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
                >
                  Explore my Services
                </h1>
                <p
                  className="text-gray-600 dark:text-gray-400 text-sm"
                >
                 Discover the best services I offer, designed to ensure the success of your project.
                </p>
              </div>
    
              {/* services cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {skillsData.map((skill) => (
                  <div
                    key={skill.name}
                    className="card space-y-3 sm:space-y-4 p-4"
                  >
                    <div>{skill.icon}</div>
                    <h1 className="text-lg font-semibold">{skill.name}</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
    
            </div>
          </div>
        </>
      );
}
