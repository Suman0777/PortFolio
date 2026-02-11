import React from "react";

const experiences = [
  {
  role: "Open Source Contributor",
  company: "Girl Summer of Code",
  time: "2024",
  desc: "Contributed to open-source projects by collaborating with mentors and peers, improving code quality, and gaining hands-on experience in real-world development workflows."
  },
];

const Carer = () => {
  return (
    <div className="relative max-w-3xl mx-auto px-4 m-20">
      
      <div className="absolute left-4 top-0 h-full w-[2px] bg-white/20" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start gap-6">
            
            <div className="relative">
              <span className="absolute left-[-7px] top-1 h-4 w-4 rounded-full bg-cyan-400 animate-ping opacity-75" />
              <span className="absolute left-[-7px] top-1 h-4 w-4 rounded-full bg-cyan-400" />
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl w-full">
              <h3 className="text-white font-semibold text-lg">
                {exp.role}
              </h3>
              <p className="text-sm text-[#ACBAC4]">
                {exp.company} • {exp.time}
              </p>
              <p className="text-sm text-[#ACBAC4] mt-2">
                {exp.desc}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Carer;
