import React from 'react'
import './librarylogo.css'

const LibraryLogo = ({src, title, width, height}) => {
  return (
    <div style={{marginTop: "50px"}}>
        <img style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}} width={width} height={height} src={src}/>
        <p className="librarylogotitle" style={{textAlign: 'center', fontSize: "24px", fontWeight: "600", marginTop: "10px"}}>{title}</p>
    </div>
  )
}

export default LibraryLogo