import { Button } from '@mui/material';
import React, { useState } from 'react'
import './styles.css'

const CaptureButton = () => {
	const [status, setStatus] = useState(false)
	
  return (
    <div className="App">
      <Button
				style={{
					backgroundColor: status ? 'red' : 'yellowgreen',
					color:'black',
					marginTop: '40px'
				}} 
				onClick={()=>{ status ? setStatus(false) : setStatus(true)}}>
				{!status ? 'Tomar Lista' : 'Para Lista'}
			</Button>
    </div>
  );
}

export default CaptureButton