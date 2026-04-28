import React from "react";
import DivssLink from "../BuildsSmall/DivssLink";

const links = [
  { Name: "Resume",   icoans: "/download (1).gif", linsk: "/Suman_Resume (2).pdf",                              desc: "Download my latest resume" },
  { Name: "GitHub",   icoans: "/github (1).png",      linsk: "https://github.com/suman0777",                      desc: "github.com/suman0777" },
  { Name: "LeetCode", icoans: "/leetcode copy.svg",         linsk: "https://leetcode.com/u/Suman0777/",                 desc: "leetcode.com/u/Suman0777" },
  { Name: "LinkedIn", icoans: "/linkedin.png",       linsk: "https://www.linkedin.com/in/suman-basak-191237290/",desc: "linkedin.com/in/suman-basak" },
  { Name: "Twitter",  icoans: "/twitter.png",       linsk: "https://x.com/sunzuu077",                          desc: "x.com/sunzuu077" },
];

const Linkss = () => {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">

      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase">
          04 / Links
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
      </div>

      {/* Link list */}
      <div className="flex flex-col gap-3">
        {links.map((item, index) => (
          <DivssLink key={item.Name} {...item} index={index} />
        ))}
      </div>

    </section>
  );
};

export default Linkss;
