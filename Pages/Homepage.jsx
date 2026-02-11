import React from 'react'
import Top from '../component/Top'
import MiddleCom from '../component/MiddleCom'
import Project from './Project'
import Carer from "./Carer";
const Homepage = () => {
  return (
    <div>
        <div className='scroll-smooth'>
        
        <MiddleCom/>
        <Project/>
        <Carer/>
        </div>
    </div>
  )
}

export default Homepage