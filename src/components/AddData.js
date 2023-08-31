import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddData({data,setData}) {
//states

    const navigate = useNavigate()
    const [name,setName]=useState('');
    const [role,setRole]=useState('');

    
//create the add job function using API
const addJobs = async()=>{
    const newData={
        name,
        role
    }
  
    const response = await fetch("https://64f05ab38a8b66ecf7798374.mockapi.io/developers " ,{
      method:"POST",
      body:JSON.stringify(newData),
      headers :{
        'Content-Type':'application/json'
      }
    })
    const datas = await response.json()
   setData([...data, datas])
   navigate("/dashboard")
}

  return (
    <Base>
      <div className='inp1'>
            <div className='inp'>
            <TextField sx={{ width: '50ch' }}
            id="outlined-basic" 
            label="Company Name" 
            variant="outlined"
            color="secondary"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <TextField id="outlined-basic" 
            label="Role" 
            variant="outlined"
            color="secondary"
            value={role}
            onChange={(e)=>setRole(e.target.value)}
            />

            </div>
            <div className='a-btn'>
            <Button variant="contained" color="secondary" 
            onClick={addJobs}
            >
            Submit</Button>
            </div>
        </div>
        </Base>
  )
}

export default AddData;