import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className="grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Muhammad Bilal
            </h1>
            <p className="text-sm">
              Enthusiastic computer science expert with a robust foundation in
              web development. I have refined my expertise in both front-end and
              back-end domains.
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <Link href="https://bilall1.github.io/">
                <FaGithub className="text-2xl hover:text-primary duration-300" />
              </Link>
              <Link href="https://www.linkedin.com/in/mbilal19/">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </Link>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact Details
                </h1>
                <div className={`flex flex-col gap-3`}>
                  <span className="cursor-pointer hover:translate-x-1 duration-300 space-x-1 text-gray-400 ">
                    +92 3087408128
                  </span>
                  <span className="cursor-pointer hover:translate-x-1 duration-300 space-x-1 text-gray-400 ">
                    {" "}
                    Muhammad.bilal0636@gmail.com{" "}
                  </span>
                  <span className="cursor-pointer hover:translate-x-1 duration-300 space-x-1 text-gray-400 ">
                    Passau, Germany{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
