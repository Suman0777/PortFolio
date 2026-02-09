import React, { useState } from "react";
import Buttonicon from "../BuildsSmall/Buttonicon";
import Imagess from "../BuildsSmall/Imagess";

const Top = () => {
  const [selected, setSelected] = useState(null);

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
      <div className="flex gap-6">
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

      {/* Social Links */}
      <div className="flex gap-5 items-center">
        <Imagess Link="https://github.com/suman0777" imagesss="/githubLOgo.svg" />
        <Imagess Link="https://leetcode.com/u/Suman0777/" imagesss="/LeetCode.svg" />
        <Imagess Link="https://www.linkedin.com/in/suman-basak-191237290/" imagesss="/LinkdinPic.svg" />
        <Imagess Link="https://github.com/suman0777" imagesss="/twitterpic.svg" />
      </div>

    </div>
  );
};

export default Top;
