import { Icon } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Buttonicon = ({ label, to }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={()=> to && navigate(to)}
      className="relative text-[1rem] font-medium group  cursor-pointer flex items-center gap-1"
    >
      {label}

      {/* animated underline */}
      <span
        className="
          pointer-events-none
          absolute left-0 -bottom-1
          h-[2px] w-full
          bg-foreground
          scale-x-0 origin-left
          transition-transform duration-300 ease-out
          group-hover:scale-x-100
        "
      />
    </button>
  )
}

export default Buttonicon
