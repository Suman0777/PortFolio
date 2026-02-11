import React from "react";
import DivssLink from "../BuildsSmall/DivssLink";

const Linkss = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-0">

      <DivssLink Name={"Resume"} icoans={"/download-solid.svg"} linsk={'/resume.pdf'} />
      <DivssLink Name={"Github"} icoans={"/githubLOgo.svg"} linsk={'https://github.com/suman0777'} />
      <DivssLink Name={"LeetCode"} icoans={"/LeetCode.svg"} linsk={'https://leetcode.com/u/Suman0777/'} />
      <DivssLink Name={"Linkdin"} icoans={"/LinkdinPic.svg"} linsk={'https://www.linkedin.com/in/suman-basak-191237290/'} />
      <DivssLink Name={"Twitter"} icoans={"/twitterpic.svg"} linsk={'https://x.com/sunzuu077'} />

    </div>
  );
};

export default Linkss;
