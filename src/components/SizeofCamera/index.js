import React, { useState }  from 'react'
import '../../arUcoLib/magicCode.js'
import './styles.css'

const CanvaCamera = (status) => {
	const DesktopAndMobileCamera = [{width: 680, height: 480}, {width: 360, height: 240}]

  return (
    <>
      <video id='video' autoPlay={true} className='camera'></video>
      <canvas id='canvas' 
        style={status ? DesktopAndMobileCamera[1] : DesktopAndMobileCamera[0]} 
				  className='capture'>
      </canvas>
    </>
  )
}

export default CanvaCamera