import { Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const MainPage = () => {
  return (
    <Container>
        <Button href='/scanner'>Scanner</Button>
        <Button href='/grupos'>Grupos</Button>
    </Container>
  )
}


export default MainPage