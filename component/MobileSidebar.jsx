import React from "react";

const MobileSidebar = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm z-40
          transition-opacity duration-500
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64
          rounded-r-[13px] bg-[#191E24]
          z-50
          ${open ? "slide-blur-in-left" : ""}
        `}
      >
        <div className="p-6 space-y-6">

          <div className="flex justify-end">
            <img
              onClick={onClose}
              className="w-8 h-8 cursor-pointer transition-transform duration-300 hover:rotate-90"
              src="/Cross.svg"
              alt="Close"
            />
          </div>

          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "About", path: "/about" },
            { name: "Links", path: "/links" },
            { name: "Career", path: "/career" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.path}
              onClick={onClose}
              className="
                text-xl text-[#F5F2F2] font-semibold block
                transition-all duration-300 hover:text-cyan-400
              "
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
