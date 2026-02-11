import React from "react";

const MobileSidebar = ({ open, onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm z-40
          transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      <div
        className={`
          fixed top-0 left-0 h-full w-64 rounded-r-[13px] bg-[#191E24]
          z-50
          transform
          transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${open ? "translate-x-0" : "-translate-x-full"}
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
          ].map((item, i) => (
            <a
              key={item.name}
              href={item.path}
              onClick={onClose}
              className={`
                text-xl text-[#F5F2F2] font-semibold block hover:text-cyan-400
                transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
              `}
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
