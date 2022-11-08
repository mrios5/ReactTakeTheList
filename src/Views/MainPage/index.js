import { Button } from '@mui/material'
import { Container, Box } from '@mui/system'
import React from 'react'
import './styles.css'

const MainPage = () => {
  return (
    <Box className='container'>
        <Button
          href='/scanner'
          className='JustButton'>Scanner</Button>
        <Button 
          href='/grupos' 
          className='JustButton'>Grupos</Button>
    </Box>
  )
}


export default MainPage