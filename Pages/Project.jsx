import React, { useState } from "react";

const Project = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const cardsElement = [
    {
      imgins: "/project1.png",
      dec: "Chattix is a real-time chat app with secure authentication and a modern, responsive interface.",
      topic: "Chattix",
      github: "https://github.com/Suman0777/chattix",
      live: "https://chattix-nine.vercel.app/login",
    },
    {
      imgins: "/project2.png",
      dec: "Skillora is a front-end UI website built with HTML, CSS, and JavaScript, designed to practice layout, styling, and user interface concepts.",
      topic: "Skillora",
      github: "https://github.com/Suman0777/Skillora",
      live: "https://skillora-kappa.vercel.app/",
    },
    {
      imgins: "/project3.png",
      dec: "Aura is a front-end UI project created with HTML and CSS, showcasing a modern and visually appealing design.",
      topic: "Aura",
      github: "https://github.com/Suman0777/Aura",
      live: "https://aura-ashen-delta.vercel.app/",
    },
    
  ];

  return (
    <div className="mx-auto mt-12 max-w-4xl px-2">
      <div className=" m-4 grid grid-cols-1 md:grid-cols-2 gap-7">
        {cardsElement.map((item, index) => (
          <div
            key={index}
            className="relative h-96 cursor-pointer"
            onClick={() =>
              setFlippedIndex(flippedIndex === index ? null : index)
            }
          >
            {/* Card container */}
            <div
              className={`relative h-full w-full rounded-2xl transition-transform duration-700
                [transform-style:preserve-3d]
                ${flippedIndex === index ? "rotate-y-180" : ""}
              `}
            >
              {/* FRONT SIDE */}
              <div className="absolute inset-0 bg-[#192628] rounded-2xl p-3 m-2 flex flex-col gap-4
                [backface-visibility:hidden]"
              >
                <div className="h-64 overflow-hidden w-full bg-[#BFC9D1] rounded-xl">
                  <img
                    src={item.imgins}
                    alt="project"
                    className="w-full  h-full object-cover"
                  />
                </div>
                <p className="text-lg font-bold text-center text-[#6f8b9d]">
                  {item.topic}
                </p>
                <p className="text-sm text-center text-[#6f8b9d]">
                    {item.dec}
                </p>
              </div>

              {/* BACK SIDE */}
              <div
                className="absolute inset-0 bg-[#192628] rounded-2xl p-8
                  flex flex-col items-center justify-center gap-6
                  rotate-y-180 [backface-visibility:hidden]"
              >
                <p className="text-xl font-semibold text-white">
                    Project Link 
                </p>

                <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="
                    inline-flex items-center justify-center
                    text-white font-medium text-sm
                    px-5 py-2.5 leading-5
                    rounded-lg
                    bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                    shadow-md shadow-blue-500/40
                    hover:bg-gradient-to-br
                    hover:shadow-lg hover:shadow-blue-600/50
                    focus:outline-none focus:ring-4 focus:ring-blue-300
                    transition-all duration-300
                "
                >
                GitHub
                </a>


                <a
                href={item.live}
                target="_blank"
                rel="noreferrer"
                className="
                    inline-flex items-center justify-center
                    text-white font-medium text-sm
                    px-5 py-2.5 leading-5
                    rounded-lg
                    bg-gradient-to-r from-green-400 via-green-500 to-green-600
                    shadow-md shadow-green-500/40
                    hover:bg-gradient-to-br
                    hover:shadow-lg hover:shadow-green-600/50
                    focus:outline-none focus:ring-4 focus:ring-green-300
                    transition-all duration-300
                "
                >
                Live Demo
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
