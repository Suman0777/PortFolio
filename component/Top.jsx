import React from 'react'

const Top = () => {
  return (
    <div className="m-9 flex justify-between items-center">
      
      {/* Navigation */}
      <div className="flex gap-6">
        <button className="text-xl font-medium hover:scale-120 transition">Home</button>
        <button className="text-xl font-medium hover:scale-120 transition">Project</button>
        <button className="text-xl font-medium hover:scale-120 transition">About</button>
        <button className="text-xl font-medium hover:scale-120 transition">Link</button>
        <button className="text-xl font-medium hover:scale-120 transition">Career</button>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/suman0777"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/githubLOgo.svg"
            alt="GitHub"
            className="w-6 hover:scale-130 transition"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/suman-basak-191237290/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/LinkdinPic.svg"
            alt="LinkedIn"
            className="w-6 hover:scale-120 transition"
          />
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/twitterpic.svg"
            alt="Twitter"
            className="w-6 hover:scale-120 transition"
          />
        </a>


      </div>
    </div>
  )
}

export default Top
