import React from 'react'
import Top from '../component/Top'
import MiddleCom from '../component/MiddleCom'
import Project from './Project'
import Carer from "./Carer";
import GithubStats from '../BuildsSmall/GithubStats';

const Homepage = () => {
  return (
    <div className="scroll-smooth">
      <MiddleCom />

      <div className="my-2 flex justify-center">
      <GithubStats/>
      </div>

      <Project />
      <Carer />
    </div>
  );
};

export default Homepage;
