import React from "react";

const Project = () => {
  const cardsElement = [
    { imgins: "/project1.png", desc: "Project One" },
    { imgins: "/project2.png", desc: "Project Two" },
    { imgins: "/project3.png", desc: "Project Three" },
    { imgins: "/project4.png", desc: "Project Four" },
  ];

  return (
    <div className="mx-auto mt-12 max-w-5xl px-2">
      
      {/* BIG cards layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {cardsElement.map((item, index) => (
          <div
            key={index}
            className="
              bg-[#00000089] rounded-2xl
              p-8 flex flex-col gap-6
              transition-all duration-300
              hover:scale-105 hover:shadow-2xl
            "
          >
            {/* Bigger image */}
            <div className="h-64 w-full bg-[#92475231] rounded-xl flex items-center justify-center">
              <img
                src={item.imgins}
                alt="project"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bigger text */}
            <p className="text-lg font-semibold text-center text-amber-50">
              {item.desc}
            </p>

            {/* Bigger links */}
            <div className="flex justify-between text-sm font-medium px-2">
              <a href="#" className="text-blue-500 hover:underline">
                GitHub
              </a>
              <a href="#" className="text-green-500 hover:underline">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
