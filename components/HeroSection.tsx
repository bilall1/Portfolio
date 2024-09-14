import Image from "next/image";
import React from "react";

import TeamImage from "@/images/team.jpg";
import { FaDatabase } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

export default function HeroSection() {
  const handleDownload = () => {
    // URL of the hosted CV file
    const cvUrl = 'https://drive.google.com/drive/folders/1dERxVhtlXpKt3ZCTDHcORrpjKOtKCjA-?usp=drive_link';
    // Open the CV file in a new tab
    window.open(cvUrl, '_blank');
  };
  return (
    <div>
      <main className="bg-white text-black  dark:bg-gray-950 dark:text-white duration-300">
        <div className="container flex pt-10 sm:pt-0">
          <div className="grid min-h-[620px] grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            <div className="order-1 sm:order-2 relative">
              <Image
                src={TeamImage}
                alt="Team Image"
                className="rounded-2xl"
                height={400}
                width={400}
              />
            </div>

            <div className="order-2 sm:order-1  xl:pr-40">
              <h1 className="text-4xl sm:text-5xl font-semibold mb-5">
                Full Stack Developer
              </h1>

              <p>
                Enthusiastic computer science expert with a robust foundation in
                web development. I have refined my expertise in both front-end
                and back-end domains.
              </p>

              <button className="mt-2 flex bg-primary text-white hover:bg-primary/80 rounded-lg py-1 px-2 items-center" onClick={handleDownload}>
                <GoDownload className="text-2xl text-black" />
                Download Cv
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
