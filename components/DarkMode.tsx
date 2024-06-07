"use client";

import React, { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

export default function DarkMode() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleTheme = (mode: string) => {
    setTheme(mode);
  };

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun onClick={() => handleTheme("light")} className="text-2xl cursor-pointer" />
      ) : (
        <BiSolidMoon onClick={() => handleTheme("dark")} className="text-2xl cursor-pointer" />
      )}
    </>
  );
}
