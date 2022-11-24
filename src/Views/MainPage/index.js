import { Button } from '@mui/material'
import { Container, Box } from '@mui/system'
import React from 'react'
import './styles.css'

const MainPage = () => {
  return (
    <>
    <Box className='title'>Selecciona tu opcion</Box>
    <Container className='containerM'>
        <Button
          href='/scanner'
          className='JustButtonM'
          style={{marginRight: '10px'}}>Scanner</Button>
        <Button 
          href='/grupos' 
          className='JustButtonM'>Grupos</Button>
    </Container>
    </>
  )
}


export default MainPage