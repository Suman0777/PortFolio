import React from "react";
import { NavLink } from "react-router-dom";
import { X, Home, FolderGit2, User, Link2, Briefcase } from "lucide-react";

const links = [
  { name: "Home",     path: "/",        icon: Home },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "About",    path: "/about",    icon: User },
  { name: "Links",    path: "/links",    icon: Link2 },
  { name: "Career",   path: "/career",   icon: Briefcase },
];

const MobileSidebar = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40
          bg-black/50 backdrop-blur-sm
          transition-opacity duration-400
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-50
          h-full w-72
          bg-[#0a0f1a]/80 backdrop-blur-2xl
          border-r border-white/10
          rounded-r-2xl
          flex flex-col
          shadow-[4px_0_40px_rgba(0,0,0,0.6)]
          ${open ? "slide-blur-in-left" : ""}
        `}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 pt-7 pb-5 border-b border-white/10">
          <span className="text-white font-semibold text-lg tracking-wide">
            Suman<span className="text-cyan-400">.</span>
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {links.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/25"
                    : "text-white/60 hover:text-white hover:bg-white/8 border border-transparent"
                }`
              }
            >
              <Icon size={18} strokeWidth={1.8} />
              {name}
            </NavLink>
          ))}
        </nav>

        {/* Bottom badge */}
        <div className="px-6 pb-8">
          <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-xs text-white/35 text-center tracking-wide">
            Portfolio · 2025
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
