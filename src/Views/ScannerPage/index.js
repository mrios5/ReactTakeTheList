import { Box, Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import '../../arUcoLib/cv.js'
import '../../arUcoLib/aruco.js'
import '../../arUcoLib/magicCode.js'
import '../../arUcoLib/backend.js'
import './styles.css'
import CaptureButton from '../../components/Capture/index.js'

const ScannerPage = () => {
  return (
    <Container>
      <div>Pase de lista</div>
        <video id='video' autoPlay={true} className='camera'></video>
        <Box className='container'>
          <canvas id='canvas' style={{width: 680, height: 480 }} className='capture'></canvas>
        </Box>
        <CaptureButton/>
    </Container>
  )
}


export default ScannerPage