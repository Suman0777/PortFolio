import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Open Source Contributor",
    company: "Girl Summer of Code",
    time: "2024",
    type: "Open Source",
    desc: "Contributed to open-source projects by collaborating with mentors and peers, improving code quality, and gaining hands-on experience in real-world development workflows.",
  },
];

const Carer = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">

      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase">
          05 / Career
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px
          bg-gradient-to-b from-cyan-500/60 via-cyan-500/20 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-8">

              {/* Node */}
              <div className="relative shrink-0 mt-5">
                <span className="absolute -left-[3px] top-0 w-[18px] h-[18px] rounded-full
                  bg-cyan-400 animate-ping opacity-30" />
                <span className="relative block w-3 h-3 rounded-full
                  bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              </div>

              {/* Card */}
              <div className="group flex-1 relative rounded-2xl overflow-hidden
                bg-[#060d18]/70 backdrop-blur-xl
                border border-white/8
                hover:border-cyan-500/40
                hover:shadow-[0_0_30px_rgba(6,182,212,0.07)]
                transition-all duration-400 p-5">

                {/* Top glow line */}
                <div className="absolute top-0 left-0 right-0 h-px
                  bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20
                      flex items-center justify-center shrink-0">
                      <Briefcase size={14} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm tracking-wide">
                        {exp.role}
                      </h3>
                      <p className="text-white/45 text-xs mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className="font-mono text-xs text-cyan-400/70 bg-cyan-500/10
                      border border-cyan-500/20 px-2 py-0.5 rounded-md">
                      {exp.time}
                    </span>
                    <span className="text-[10px] text-white/30 tracking-wide">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/6 mb-3" />

                {/* Description */}
                <p className="text-white/45 text-xs leading-relaxed">
                  {exp.desc}
                </p>

                {/* Bottom status */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400
                    shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
                  <span className="text-[10px] font-mono text-cyan-400/60 tracking-widest uppercase">
                    Completed
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Carer;
