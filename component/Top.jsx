import React, { useState } from "react";
import Buttonicon from "../BuildsSmall/Buttonicon";
import Imagess from "../BuildsSmall/Imagess";
import MobileSidebar from "./MobileSidebar";

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
    <div className="mx-auto mt-9 max-w-2xl flex justify-between items-center px-4">



      {/* Navigation */}
      <div className=" hidden  lg:flex gap-6 ">
        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`
              transition-all duration-300 cursor-pointer
              ${selected === index ? "scale-110 font-extrabold" : ""}
            `}
          >
            <Buttonicon label={item.label} to={item.to} />
          </div>
        ))}
      </div>

      <div>
        <img 
        onClick={()=>sethumburger(true)}
        className="lg:hidden h-10 w-10"
        src="/bar.png" alt="Humbargar" />
      </div>
      
      {humbugerrr && (
        <MobileSidebar
          open={humbugerrr}
          onClose={() => sethumburger(false)}
        />
      )}


      {/* Social Links */}
      <div className="flex gap-5 items-center">
        <Imagess Link="https://github.com/suman0777" imagesss="/githubLOgo.svg" />
        <Imagess Link="https://leetcode.com/u/Suman0777/" imagesss="/LeetCode.svg" />
        <Imagess Link="https://www.linkedin.com/in/suman-basak-191237290/" imagesss="/LinkdinPic.svg" />
        <Imagess Link="https://x.com/sunzuu077" imagesss="/twitterpic.svg" />
      </div>

    </div>
  );
};

export default Top;
