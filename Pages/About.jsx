import React from 'react'
import Buttonicon from '../BuildsSmall/Buttonicon'
import Top from '../component/Top'
import Imagess from '../BuildsSmall/Imagess'

const About = () => {
  return (
    <div >

    <div className='mx-auto max-w-4xl px-4 py-12 md:px-0 md:py-24'>
            {/* Main Content */}
      <div
        className="
          flex flex-col-reverse
          md:flex-row md:items-center
          gap-12 md:gap-20
        "
      >
        {/* Text Section */}
        <div className="md:flex-1 bg-black/30 backdrop-blur-md p-5 sm:p-6 rounded-2xl">
          <div className="text-[#ACBAC4] text-sm sm:text-base leading-relaxed">

            Hi, I’m Suman, a full-stack developer from India,&nbsp;

            {/* Tooltip */}
            <span className="relative inline-block group">
              <span className="font-medium underline cursor-pointer text-[#296374]">
                Kolkata
              </span>

              <span
                className="
                  absolute bottom-full left-1/2 -translate-x-1/2 mb-3
                  z-20 w-[90vw] max-w-sm sm:max-w-md
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-300
                  bg-[#232B3B]
                  border border-white/10
                  rounded-lg shadow-xl
                  p-4
                "
              >
                <span className="grid grid-cols-5 gap-3">
                  <span className="col-span-3">
                    <h3 className="font-semibold mb-1 text-white">
                      About Kolkata
                    </h3>
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

                <a
                  href="https://en.wikipedia.org/wiki/Kolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[#3B82F6]"
                >
                  Read more →
                </a>
              </span>
            </span>

            &nbsp;with a passion for building clean, scalable, and mobile-first web applications.
            I enjoy solving complex problems and turning ideas into reliable products that deliver real impact.
            Focused on maintainable code and seamless user experiences,
            I’m always learning, building, and pushing myself to create solutions that truly matter.
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div
            className="
              w-[170px] h-[210px]
              sm:w-[200px] sm:h-[240px]
              md:w-[240px] md:h-[270px]
              rounded-3xl overflow-hidden
              bg-white/10 backdrop-blur-xl
              border border-white/20
              shadow-xl
            "
          >
            <img
              src="/profileimage.png"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
          
      {/* Resume Section */}
        <div className="mt-16 flex justify-center">
        <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
            bg-white/10 backdrop-blur-xl
            p-5 rounded-2xl
            w-full max-w-2xl
            flex items-center justify-between
            cursor-pointer
            hover:bg-white/20
             transition
              
            "
        >
            <p className="text-[#ACBAC4] font-medium">
            Resume
            </p>

            <img
            src="/download-solid.svg"
            alt="Download resume"
            className="w-6 h-6 caret-amber-50 sm:w-5 sm:h-5"
            />
        </a>
        </div>

      


    {/* Skill Section */}

      <div className='mt-16 flex justify-center'>
          <div className='bg-[#232B3B]/20 backdrop-blur-xl
            p-5 rounded-3xl
            w-full max-w-xl
            flex flex-col gap-3.5 items-center
            cursor-pointer
            hover:bg-[#232B3B]/40
             transition'>
            <h1 className='text-white font-medium'>
                Skills
            </h1>
            <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 gap-6 place-items-center">
                <img src="https://cdn.simpleicons.org/javascript" width="30" className=' rounded-b-sm'/>
                <img src="https://cdn.simpleicons.org/typescript" width="40" />
                <img src="https://cdn.simpleicons.org/c" width="40" />
                <img src="https://cdn.simpleicons.org/cplusplus" width="40" />
                <img src="https://cdn.simpleicons.org/html5" width="40" />
                <img src="https://cdn.simpleicons.org/css" width="40" />
                <img src="https://cdn.simpleicons.org/react" width="40" />
                <img src="https://cdn.simpleicons.org/redux" width="40" />
                <img src="https://cdn.simpleicons.org/tailwindcss" width="40" />
                <img src="https://cdn.simpleicons.org/vite" width="40" />
                <img src="https://cdn.simpleicons.org/mongodb" width="40" />
                <img src="https://cdn.simpleicons.org/mysql" width="40" />
                <img src="https://cdn.simpleicons.org/postgresql" width="40" />
                <img src="https://cdn.simpleicons.org/express" width="40" />
                <img src="https://cdn.simpleicons.org/nodedotjs" width="40" />
                <img src="https://cdn.simpleicons.org/git" width="40" />
                <img src="https://cdn.simpleicons.org/github" width="40" />
                <img src="https://cdn.simpleicons.org/postman" width="40" />
                <img src="https://cdn.simpleicons.org/figma" width="40" />
            </div>
          </div>
      </div>



    </div>

          </div>
  )
}

export default About
