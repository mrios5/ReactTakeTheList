import { Button } from '@mui/material'
import React from 'react'
import './styles.css'

const JustAButton = (data, href) => {
  return (
    <>
    <Button href={href} className='JustButton'>
        {data}asasa
    </Button>
    </>
  )
}


export default JustAButton