import React, { useEffect, useState } from "react";
import Buttonicon from "../BuildsSmall/Buttonicon";
import Imagess from "../BuildsSmall/Imagess";
import MobileSidebar from "./MobileSidebar";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const Top = () => {
  const [selected, setSelected] = useState(null);
  const [humbugerrr, sethumburger] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Project", to: "/projects" },
    { label: "About", to: "/about" },
    { label: "Link", to: "/links" },
    { label: "Career", to: "/career" },
  ];

  return (
    <div className="mx-auto mt-9 max-w-2xl flex justify-between items-center px-4 ">
      {/* Navigation */}
      <div className=" hidden lg:flex gap-6 ">
        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`
              transition-all duration-300 cursor-pointer
              ${selected === index ? "scale-110 font-extrabold" : ""}
            `}
          >
            <Buttonicon label={item.label} icon={item.icon} to={item.to} />
          </div>
        ))}
      </div>

      <div>
        <img
          onClick={() => sethumburger(true)}
          className="lg:hidden h-10 w-10 cursor-pointer"
          src="/001-menu.png"
          alt="Humbargar"
        />
      </div>

      {humbugerrr && (
        <MobileSidebar open={humbugerrr} onClose={() => sethumburger(false)} />
      )}

      {/* Social Links */}
      <div className="flex gap-3 items-center">
        <Imagess Link="https://github.com/suman0777" imagesss="/github.png" />
        {/* <Imagess
          Link="https://leetcode.com/u/Suman0777/"
          imagesss="/LeetCode.svg"
        /> */}
        <a href="https://leetcode.com/u/Suman0777/ " target="_blank" rel="noopener noreferrer">
           <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="hover:scale-120 transition"
        >
          <path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z" />
          <path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24" />
        </svg>
        </a>
        <Imagess
          Link="https://www.linkedin.com/in/suman-basak-191237290/"
          imagesss="/linkedin (1).png"
        />
        <Imagess Link="https://x.com/sunzuu077" imagesss="/twitter.png" />
        <AnimatedThemeToggler className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Top;
