import React from "react";
import { ExternalLink } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
const cardsElement = [
  {
    imgins: "/Project6.png",
    dec: "AI-powered web app for image generation, background removal, and interactive chat. Built with React, Node.js, Express, MongoDB, and Hugging Face.",
    topic: "Aivon",
    tag: "AI · Full-Stack",
    github: "https://github.com/Suman0777/Aivon",
    live: "https://aivon-iota.vercel.app/",
  },
  {
    imgins: "/Project7.png",
    dec: "3D T-shirt design studio with real-time customization powered by Three.js and AI-generated designs via Stable Diffusion.",
    topic: "Drape",
    tag: "3D · AI · Three.js · React",
    github: "https://github.com/Suman0777/drape",
    live: "https://drape-ten.vercel.app/",
  },
  {
    imgins: "/project1.png",
    dec: "Real-time chat application with secure JWT authentication, Socket.io messaging, and a clean responsive interface.",
    topic: "Chattix",
    tag: "Real-time · Full-Stack",
    github: "https://github.com/Suman0777/chattix",
    live: "https://chattix-nine.vercel.app/login",
  },
  {
    imgins: "/Project5.png",
    dec: "Browser-based facial recognition app that detects faces and live expressions in real time using face-api.js and the device camera.",
    topic: "FaceApp",
    tag: "ML · React",
    github: "https://github.com/Suman0777/FaceRecognitaion",
    live: "https://faceapp-pi.vercel.app/",
  },
  {
    imgins: "/project2.png",
    dec: "Front-end UI website built with HTML, CSS, and JavaScript to practice advanced layout, styling, and interface concepts.",
    topic: "Skillora",
    tag: "UI · Frontend",
    github: "https://github.com/Suman0777/Skillora",
    live: "https://skillora-kappa.vercel.app/",
  },
  {
    imgins: "/Project4.png",
    dec: "A curated collection of 15 JavaScript mini-projects covering DOM manipulation, API integration, and interactive UI components.",
    topic: "JS Projects",
    tag: "JavaScript · DOM",
    github: "https://github.com/Suman0777/15-javaScript-projects",
    live: "",
  },
];

const Project = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase">
          02 / Projects
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardsElement.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col rounded-2xl overflow-hidden
              bg-[#060d18]/70 backdrop-blur-xl
              border border-white/8
              hover:border-cyan-500/40
              transition-all duration-500
              hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]"
          >
            {/* Glowing top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Image + overlay */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.imgins}
                alt={item.topic}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay always present at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d18] via-[#060d18]/30 to-transparent" />

              {/* Index badge */}
              <span className="absolute top-3 left-3 font-mono text-xs text-cyan-400/70 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md border border-cyan-500/20">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Tag badge */}
              <span className="absolute top-3 right-3 text-[10px] font-medium text-white/60 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/10 tracking-wide">
                {item.tag}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-5 pt-4 pb-5 gap-3">
              <h3 className="text-white font-semibold text-base tracking-wide">
                {item.topic}
              </h3>

              <p className="text-white/45 text-xs leading-relaxed line-clamp-3">
                {item.dec}
              </p>

              {/* Divider */}
              <div className="mt-auto pt-3 border-t border-white/8 flex items-center gap-3">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-white/60
                    hover:text-white transition-colors duration-200"
                >
                  <img
                    src="githubLOgo.svg"
                    className="w-5 h-auto bg-gray-300 rounded-full border border-white/20"
                    alt="github_logo"
                  />
                  Source
                </a>

                {item.live && (
                  <>
                    <div className="w-px h-3.5 bg-white/15" />
                    {/* <a
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-cyan-400/80
                        hover:text-cyan-300 transition-colors duration-200"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a> */}
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-cyan-400/80
                        hover:text-cyan-300 transition-colors duration-200"
                    >
                      <InteractiveHoverButton
                        className="flex items-center gap-1.5 text-xs font-medium text-cyan-400/80
                        hover:text-cyan-300 transition-colors duration-200 w-37"
                      >
                        <span className="flex gap-1">
                          Live Demo
                          <ExternalLink size={13} />
                        </span>
                      </InteractiveHoverButton>
                    </a>
                  </>
                )}

                {/* Right side glow dot */}
                <div
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400
                  group-hover:shadow-[0_0_6px_rgba(6,182,212,0.8)] transition-all duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
