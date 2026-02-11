import Backgrounds from '../BuildsSmall/Backgrounds'
import Top from '../component/Top'
import About from '../Pages/About'
import Carer from '../Pages/Carer'
import Homepage from '../Pages/Homepage'
import Linkss from '../Pages/Linkss'
import Project from '../Pages/Project'
import './App.css'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

function App() {
  const Navigate = useNavigate();
  return (
    <div >
      
      <Backgrounds>
        <Top/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Project/>}/>
          <Route path='/links' element={<Linkss/>}/>
          <Route path='/career' element={<Carer/>}/>
        </Routes>
      </Backgrounds>
      
    </div >
    
  )
}

export default App
