import React from 'react'
import Imagess from '../BuildsSmall/Imagess'
import Buttonicon from '../BuildsSmall/Buttonicon'

const Top = () => {
  return (
    <div className="mx-auto mt-9 max-w-2xl flex justify-between items-center px-4">

      {/* Navigation */}
      <div className="flex gap-6">
        <Buttonicon label="Home" to="/" />
        <Buttonicon label="Project" to="/projects" />
        <Buttonicon label="About" to="/about" />
        <Buttonicon label="Link" to="/links" />
        <Buttonicon label="Career" to="/career" />
      </div>

      {/* Social Links */}
      <div className="flex gap-5 items-center">
        <Imagess Link="https://github.com/suman0777" imagesss="/githubLOgo.svg" />
        <Imagess Link="https://leetcode.com/u/Suman0777/" imagesss="/LeetCode.svg" />
        <Imagess Link="https://www.linkedin.com/in/suman-basak-191237290/" imagesss="/LinkdinPic.svg" />
        <Imagess Link="https://github.com/suman0777" imagesss="/twitterpic.svg" />
      </div>
    </div>
  )
}

export default Top
