import { Button } from '@mui/material'
import { Container, Box } from '@mui/system'
import React from 'react'
import './styles.css'

const LoginPage = () => {
  return (
    <Box className='viewcontainer'>
      <Box className='title' >Login</Box>
      <Button href='/mainpage' className='loginButton' title='Login'>Login</Button>
    </Box>
  )
}


export default LoginPage