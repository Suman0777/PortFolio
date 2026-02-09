import Backgrounds from '../BuildsSmall/Backgrounds'
import Top from '../component/Top'
import About from '../Pages/About'
import Homepage from '../Pages/Homepage'
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


          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Backgrounds>
      
    </div >
    
  )
}

export default App
