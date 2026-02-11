import React from "react";
import { NavLink } from "react-router-dom";

const MobileSidebar = ({ open, onClose }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Links", path: "/links" },
    { name: "Career", path: "/career" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-opacity duration-500
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-50
          h-full w-64
          rounded-r-[13px]
          bg-[#191E24]
          ${open ? "slide-blur-in-left" : ""}
        `}
      >
        <div className="p-6 space-y-6">
          {/* Close button */}
          <div className="flex justify-end">
            <img
              src="/Cross.svg"
              alt="Close"
              onClick={onClose}
              className="
                w-8 h-8 cursor-pointer
                transition-transform duration-300
                hover:rotate-90
              "
            />
          </div>

          {/* Navigation links */}
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `
                block text-xl font-semibold
                transition-all duration-300
                ${
                  isActive
                    ? "text-cyan-400"
                    : "text-[#F5F2F2] hover:text-cyan-400"
                }
              `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
