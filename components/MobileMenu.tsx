import ArrowSvg from "@/svg/Arrow";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function MobileMenu({ showMenu, MenuLinks ,setShowMenu }: any) {
  
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="text-black dark:text-white cursor-pointer w-1/6 mb-4" onClick={()=>setShowMenu(!showMenu)}>
          <ArrowSvg color="red" />
        </div>

        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Muhammad Bilal</h1>
            <h1 className="text-sm text-slate-500">Software Engineer</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map((data: any) => (
              <li key={data.name}>
                <a href={data.link} className="mb-5 inline-block" onClick={()=>setShowMenu(!showMenu)}>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          Made with ❤ by <a href="https://bilall1.github.io/">Bilal</a>{" "}
        </h1>
      </div>
    </div>
  );
}
