import { GitHubCalendar } from "react-github-calendar";
import "../src/App.css";

function GithubStats() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">

      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase">
          01 / GitHub Activity
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
      </div>

      {/* Card */}
      <div className="relative rounded-2xl overflow-hidden
        bg-[#060d18]/70 backdrop-blur-xl
        border border-white/8
        hover:border-cyan-500/30
        hover:shadow-[0_0_40px_rgba(6,182,212,0.07)]
        transition-all duration-500 p-5 sm:p-7">

        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px
          bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        {/* Calendar — overflowX scroll on small screens */}
        <div className="react-github-calendar overflow-x-auto">
          <GitHubCalendar
            username="Suman0777"
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            colorScheme="dark"
            theme={{
              dark: ["#0d1117", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
          />
        </div>

        {/* Bottom status row */}
        <div className="mt-5 pt-4 border-t border-white/6
          flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400
              shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
            <span className="text-[11px] font-mono text-cyan-400/60 tracking-widest uppercase">
              Live · github.com/Suman0777
            </span>
          </div>
          <a
            href="https://github.com/Suman0777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-white/30 hover:text-cyan-400
              transition-colors duration-200 font-mono"
          >
            View Profile →
          </a>
        </div>
      </div>

    </section>
  );
}

export default GithubStats;
