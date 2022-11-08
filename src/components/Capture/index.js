import { Button } from '@mui/material';
import React, { useState } from 'react'
import './styles.css'

const CaptureButton = () => {

	const [color, setColor] = useState('yellowgreen')
	const [text, setText] = useState('Tomar Lista')
	const [status, setStatus] = useState(false)
	
	const changeStatus = () => {
		if(status){
			setColor('red')
			setText('Parar Lista')
			setStatus(false)
		}
		else{
			setColor('yellowgreen')
			setText('Tomar Lista')
			setStatus(true)
		}
	}

  return (
    <div className="App">
      <Button
				style={{
					backgroundColor: color,
					color:'black',
					marginTop: '40px'
				}} 
				onClick={()=>{ changeStatus() }}>
				{text}
			</Button>
    </div>
  );
}

export default CaptureButton