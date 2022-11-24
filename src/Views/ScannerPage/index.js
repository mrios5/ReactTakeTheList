import { Box, Button } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState, useEffect }  from 'react'
import '../../arUcoLib/magicCode.js'
import './styles.css'
import CaptureButton from '../../components/Capture/index.js'
import CanvaCamera from '../../components/SizeofCamera/index.js'

const ScannerPage = () => {
  const DesktopAndMobileCamera = [{width: 680, height: 480}, {width: 360, height: 240}]
  const DesktopAndMobileBorder = [{width: 700, height: 500}, {width: 380, height: 260}]

	const [status, setStatus] = useState(false)
  const [takelist, settakelist] = useState(false)

  useEffect(() => {
    <CanvaCamera props={takelist}/>
  }, [takelist])

  return (
    <Container>
      <div className='title'>{status ? 'Pase de lista para Mobile' : 'Pase de lista para Desktop'}</div>
        <Box className='container' style={status ? DesktopAndMobileBorder[1] : DesktopAndMobileBorder[0]}>
          <video id='video' autoPlay={true} className='camera'></video>
          <canvas id='canvas' 
           style={status ? DesktopAndMobileCamera[1] : DesktopAndMobileCamera[0]} 
				   className='capture'>
          </canvas>
          {/*!takelist ? <CanvaCamera props={status}/> : <Box>Presiona Tomar Lista para iniciar</Box>*/}
        </Box>
        <Button
				  style={{
            backgroundColor: takelist ? 'red' : 'yellowgreen',
            color:'black',
            marginTop: '10px',
            marginBottom: '20px',
          }} 
				  onClick={()=>{ takelist ? settakelist(false) : settakelist(true)}}>
				  {!takelist ? 'Tomar Lista' : 'Para Lista'}
			  </Button>
        <Button
          style={{
            backgroundColor: status ? 'LightBlue' : 'lightgreen',
            color:'black',
            marginTop: '10px',
            marginBottom: '20px',
            marginLeft: '20px'
          }} 
          onClick={()=>{ status ?  setStatus(false) : setStatus(true)}}>
          {status ? 'Cambiar a Desktop' : 'Cambiar a Mobile'}
			</Button>
    </Container>
  )
}



export default ScannerPage