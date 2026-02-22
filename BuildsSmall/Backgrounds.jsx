import React from "react";

const Backgrounds = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      
      <img
        src="/backgroundimg.jpg"
        alt="background"
        className="fixed inset-0 -z-10 w-full h-full object-cover"
        loading="eager"
      />

      {children}
    </div>
  );
};

export default Backgrounds;