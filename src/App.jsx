import Backgrounds from '../BuildsSmall/Backgrounds'
import About from '../Pages/About'
import Homepage from '../Pages/Homepage'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div >
      
      <Backgrounds>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Backgrounds>
      
    </div >
    
  )
}

export default App
