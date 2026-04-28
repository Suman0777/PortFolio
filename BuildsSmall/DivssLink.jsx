import { ExternalLink } from "lucide-react";

const DivssLink = ({ Name, icoans, linsk, desc, index }) => {
  return (
    <a
      href={linsk}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-5 px-5 py-4
        rounded-2xl overflow-hidden
        bg-[#060d18]/70 backdrop-blur-xl
        border border-white/8
        hover:border-cyan-500/40
        hover:shadow-[0_0_30px_rgba(6,182,212,0.07)]
        transition-all duration-400"
    >
      {/* Glowing left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px
        bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Index */}
      <span className="font-mono text-xs text-cyan-400/50 w-6 shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10
        flex items-center justify-center
        group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5
        transition-all duration-300">
        <img src={icoans} alt={Name} className="w-5 h-5 object-contain" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-white/90 font-medium text-sm tracking-wide">{Name}</p>
        {desc && <p className="text-white/35 text-xs mt-0.5 truncate">{desc}</p>}
      </div>

      {/* Arrow */}
      <ExternalLink
        size={14}
        className="text-white/20 group-hover:text-cyan-400 transition-colors duration-300 shrink-0"
      />

      {/* Status dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/30
        group-hover:bg-cyan-400 group-hover:shadow-[0_0_6px_rgba(6,182,212,0.8)]
        transition-all duration-300 shrink-0" />
    </a>
  );
};

export default DivssLink;
