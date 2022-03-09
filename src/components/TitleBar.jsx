import React from 'react'
import './TitleBar.css'

function TitleBar() {
  return (
    <div className="titleBarContainer">
      <div className="titleBarLogo">
        <p className='titleBarLogoTime'>Time</p>
        <p className='titleBarLogoShare'>Share</p>
      </div>
    </div>
  )
}

export default TitleBar