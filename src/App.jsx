import Backgrounds from '../BuildsSmall/Backgrounds'
import Homepage from '../Pages/Homepage'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div >
      
      <Backgrounds>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Backgrounds>
      
    </div >
    
  )
}

export default App
