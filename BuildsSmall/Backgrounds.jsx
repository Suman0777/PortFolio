import React from 'react'

const Backgrounds = ({children}) => {
  return (
    <div 
      className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgroundimg.jpg')" }}
    >
      
      {children}
    </div>    
)
}

export default Backgrounds