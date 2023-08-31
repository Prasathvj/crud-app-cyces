import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

//edit or update the data
function EditData({data,setData}) {
    const navigate = useNavigate()
    const {id}=useParams();
    const editDatas= data[id]
    const [name,setName]=useState('');
    const [role,setRole]=useState('');


    useEffect(()=>{
        setName(editDatas.name)
        setRole(editDatas.role)
        
    },[editDatas])

const editJobs=async()=>{
    const newData={
        name,
        role
    }
   const response = await fetch(`https://64f05ab38a8b66ecf7798374.mockapi.io/developers/${editDatas.id}`,{
    method:'PUT',
    body:JSON.stringify(newData),
    headers:{
        'Content-Type':'application/json'
    }
   });
   const datas = await response.json();
   if(datas){
    data[id]=newData
    setData([...data])
    navigate("/dashboard")
   }
}

  return (
     <Base
     tittle={'edit your details'}
     describe={''}
     >
        <div className='inp1'>
            <div className='inp'>
            <TextField sx={{ width: '50ch' }}
            id="outlined-basic" 
            label="Name" 
            variant="outlined"
            color="secondary" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <TextField id="outlined-basic" 
            label="role" 
            variant="outlined"
            color="secondary" 
            value={role}
            onChange={(e)=>setRole(e.target.value)}
            />

            </div>
            <div className='a-btn'>
            <Button variant="contained" color="secondary" 
            onClick={editJobs}
            >
            Submit</Button>
            </div>
        </div>
     </Base>
  )
}

export default EditData;