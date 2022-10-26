import { Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import '../../arUcoLib/cv.js'
import '../../arUcoLib/aruco.js'
import '../../arUcoLib/magicCode.js'
import '../../arUcoLib/backend.js'
import './styles.css'

const ScannerPage = () => {
  return (
    <Container>
        <video id='video' autoPlay={true} className='camera'></video>
        <canvas id='canvas' style={{width: 680, height: 480 }} className='capture'></canvas>
    </Container>
  )
}


export default ScannerPage