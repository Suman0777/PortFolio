import Homepage from '../Pages/Homepage'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div >
      <Routes>
      <Route path="/" element={<Homepage />} />
      </Routes>
    </div >
    
  )
}

export default App
