import React from "react";
import { PixelImage } from "@/components/ui/pixel-image";
import { Highlighter } from "@/components/ui/highlighter";
import { WordRotate } from "@/components/ui/word-rotate";
import { TextAnimate } from "@/components/ui/text-animate";
import DivssLink from "../BuildsSmall/DivssLink";

const resumeLink = {
  Name: "Resume",
  icoans: "/download-solid.svg",
  linsk: "/Suman_Resume (2).pdf",
  desc: "Download my latest resume",
};

const SkillPill = ({ slug, name }) => (
  <span
    className="inline-flex items-center gap-2 mx-2 px-3 py-1.5 rounded-lg
      hover:border-cyan-500/40 hover:bg-cyan-500/5
      transition-all duration-300 cursor-default shrink-0"
    style={{ background: 'var(--pill-bg)', border: '1px solid var(--pill-border)' }}
  >
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={name}
      className="w-4 h-4 object-contain"
    />
    <span className="text-xs font-medium whitespace-nowrap" style={{ color: 'var(--pill-text)' }}>
      {name}
    </span>
  </span>
);

const row1 = [
  { slug: "javascript",  name: "JavaScript" },
  { slug: "typescript",  name: "TypeScript" },
  { slug: "react",       name: "React" },
  { slug: "nodedotjs",   name: "Node.js" },
  { slug: "express",     name: "Express" },
  { slug: "mongodb",     name: "MongoDB" },
  { slug: "postgresql",  name: "PostgreSQL" },
  { slug: "mysql",       name: "MySQL" },
  { slug: "redux",       name: "Redux" },
  { slug: "tailwindcss", name: "Tailwind" },
];

const row2 = [
  { slug: "html5",      name: "HTML5" },
  { slug: "css",        name: "CSS3" },
  { slug: "vite",       name: "Vite" },
  { slug: "git",        name: "Git" },
  { slug: "github",     name: "GitHub" },
  { slug: "postman",    name: "Postman" },
  { slug: "figma",      name: "Figma" },
  { slug: "c",          name: "C" },
  { slug: "cplusplus",  name: "C++" },
  { slug: "threedotjs", name: "Three.js" },
];

const About = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-24">

      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xs font-mono text-cyan-500 tracking-[0.2em] uppercase">
          03 / About
        </span>
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, var(--section-line), transparent)' }} />
      </div>

      {/* Hero row */}
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-12 md:gap-16">

        {/* Text */}
        <div className="flex-1 flex flex-col gap-5">

          <TextAnimate
            animation="slideLeft"
            by="word"
            duration={1.0}
            as="p"
            className="text-xs font-mono text-cyan-500 tracking-[0.25em] uppercase"
          >
            {"Hello, world — I'm"}
          </TextAnimate>

          <TextAnimate
            animation="slideLeft"
            by="word"
            duration={1.2}
            delay={0.3}
            as="h1"
            style={{ color: 'var(--text-primary)' }}
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
          >
            {"Suman Basak"}
          </TextAnimate>

          <div className="flex items-center gap-2 flex-wrap">
            <Highlighter color="#0e7490" strokeWidth={2} animationDuration={900} padding={4}>
              <TextAnimate
                animation="slideLeft"
                by="word"
                duration={1.2}
                delay={0.7}
                as="span"
                className="text-lg sm:text-xl font-semibold text-cyan-500"
              >
                {"Full-Stack Developer"}
              </TextAnimate>
            </Highlighter>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-cyan-500/50" />
            <WordRotate
              words={["Building scalable apps.", "Crafting clean UI.", "Solving real problems.", "Shipping fast."]}
              duration={2400}
              className="text-xs font-mono text-cyan-500/60 tracking-widest uppercase"
            />
          </div>

          <div className="h-px w-full" style={{ background: 'linear-gradient(to right, var(--section-line), transparent)' }} />

          {/* Bio with Kolkata tooltip */}
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Based in{" "}
            <span className="relative inline-block group">
              <span className="text-cyan-600 underline underline-offset-2 cursor-pointer font-medium">
                Kolkata
              </span>
              <span
                className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-30 w-72
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 rounded-xl shadow-2xl p-4"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', backdropFilter: 'blur(16px)' }}
              >
                <span className="grid grid-cols-5 gap-3">
                  <span className="col-span-3">
                    <h3 className="font-semibold mb-1 text-sm" style={{ color: 'var(--text-primary)' }}>About Kolkata</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      A major cultural and tech hub in Eastern India.
                    </p>
                  </span>
                  <img src="/Kolkata.png" alt="Kolkata" className="col-span-2 rounded-lg object-cover" />
                </span>
                <a
                  href="https://en.wikipedia.org/wiki/Kolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  Read more →
                </a>
              </span>
            </span>
            {" "}— passionate about building clean, scalable, mobile-first web applications.
            I enjoy solving complex problems and turning ideas into reliable products that deliver real impact.
            Focused on maintainable code and seamless user experiences, I'm always learning and pushing myself
            to create solutions that truly matter.
          </p>

        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-2xl scale-110 -z-10" />
            <div
              className="w-[200px] h-[240px] sm:w-[220px] sm:h-[260px] md:w-[250px] md:h-[290px]
                rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.08)] border"
              style={{ borderColor: 'var(--card-border)' }}
            >
              <PixelImage src="/pic2.jpeg" alt="Profile" />
            </div>
          </div>
        </div>

      </div>

      {/* Resume */}
      <div className="mt-12">
        <DivssLink {...resumeLink} index={0} />
      </div>

      {/* Skills */}
      <div className="mt-14">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-mono text-cyan-500 tracking-[0.2em] uppercase">Skills</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, var(--section-line), transparent)' }} />
        </div>

        <div
          className="relative overflow-hidden rounded-2xl backdrop-blur-xl py-5 space-y-3"
          style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
            style={{ background: 'linear-gradient(to right, var(--fade-edge), transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
            style={{ background: 'linear-gradient(to left, var(--fade-edge), transparent)' }} />

          <div className="flex w-max marquee-left">
            {[...row1, ...row1].map((s, i) => <SkillPill key={i} {...s} />)}
          </div>
          <div className="flex w-max marquee-right">
            {[...row2, ...row2].map((s, i) => <SkillPill key={i} {...s} />)}
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
