import React from 'react'
import Buttonicon from '../BuildsSmall/Buttonicon'

const MiddleCom = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-0 md:py-24">
      
      {/* Top About Label */}
      <div className="flex items-center gap-1 md: justify-center pb-4">
        <Buttonicon label="About" to="/about" />
        <img className="w-3 h-3" src="/Linkkss.png" alt="link icon" />
        <button className=''><img src="" alt="" /></button>
      </div>

      {/* Main Content */}
      <div className="
        flex flex-col-reverse
        md:flex-row
        md:items-center
        gap-10 md:gap-20
      ">

        {/* Text Section */}
        <div className="md:flex-1 bg-black/30 backdrop-blur-md p-4 rounded-2xl ">
        <p className="text-[#ACBAC4] text-sm sm:text-base leading-relaxed">
            Hi, I’m Suman, a full-stack developer from India,&nbsp;

            {/* Hover Wrapper */}
            <span className="relative inline-block group">
            <span className="text-fg-brand font-medium underline cursor-pointer text-[#296374] ">
                Kolkata
            </span>

            {/* Hover Card */}
            <span
                className="
                absolute bottom-full left-1/2 -translate-x-1/2 mb-3
                z-20 w-96
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-300
                bg-[#232B3B] text-black
                border border-neutral-700
                rounded-lg shadow-xl
                p-4
                "
            >
                <span className="grid grid-cols-5 gap-3">
                <span className="col-span-3">
                    <h3 className="font-semibold mb-1 text-white text-heading">About Kolkata</h3>
                    <p className="text-sm text-[#6f8b9d]">
                    Kolkata is a major cultural and tech hub in Eastern India.
                    </p>
                </span>
                <img
                    src="/Kolkata.png"
                    alt="Kolkata"
                    className="col-span-2 rounded"
                />
                </span>
                <span className='text-[#3B82F6]'> 
                    <a 
                    href="https://en.wikipedia.org/wiki/Kolkata"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Read more </a>
                    
                </span>
            </span>
            </span>

            &nbsp;with a passion for building clean, scalable, and mobile-first web applications.
            I enjoy solving complex problems and turning ideas into reliable products that deliver real impact.
            Focused on maintainable code and seamless user experiences,
            I’m always learning, building, and pushing myself to create solutions that truly matter.
            
        </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="
            w-[180px] h-[220px]
            sm:w-[200px] sm:h-[240px]
            md:w-[240px] md:h-[270px]
            rounded-3xl overflow-hidden
            bg-white/10 backdrop-blur-xl
            border border-white/20
            shadow-xl
          ">
            <img
              src="/profileimage.png"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>

      <div className="mt-20 flex justify-center">
  <a
    href="mailto:sumanbasakpl@gmail.com"
    className="
      w-full max-w-xl
      flex items-center justify-center gap-3
      rounded-2xl
      bg-white/10 backdrop-blur-xl
      px-6 py-5
      text-center text-sm sm:text-base
      text-white font-medium
      hover:bg-white/20
      hover:scale-[1.02]
      transition-all duration-300
    "
    aria-label="Send email to Suman Basak"
  >
    <span>Email me</span>
    <span className="opacity-70 hidden sm:inline">
      — sumanbasakpl@gmail.com
    </span>
  </a>
</div>

    </div>
  )
}

export default MiddleCom
