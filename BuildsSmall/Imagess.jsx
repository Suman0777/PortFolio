import React from 'react'

const Imagess = ({Link, imagesss}) => {
  return (
    <a
      href={Link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src= {imagesss}
        alt="Twitter"
        className="w-9 hover:scale-120 transition"
      />
    </a>
  )
}

export default Imagess