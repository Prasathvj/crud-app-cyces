import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UilTrashAlt } from '@iconscout/react-unicons'
import { Link, useNavigate } from 'react-router-dom';
import { UilEdit } from '@iconscout/react-unicons'

function DashBoard({data,setData}) {
    const navigate= useNavigate()

    //delete function
    async function deleteDev(dev){
        const response = await fetch(`https://64f05ab38a8b66ecf7798374.mockapi.io/developers/${dev}`,{
           method:'DELETE',
        })
        const datas = await response.json();
        if(datas){
       const remainstudents= data.filter((stud,idx)=>stud.id !==dev)
       setData(remainstudents)
       navigate("/dashboard")
        }
   }

  return (
    // 1.add new data field
    <Base>
        <div className='flex justify-end p-3 mr-14 mt-10'>
            <Link
            to={'/addData'}
            >
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              + Create
            </button>
            </Link>
          </div>


    {/* 2.table field */}
     <div className='user-table'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='heading'>
            <TableCell style={{color:'white',fontFamily:'monospace'}}>S.No</TableCell>
            <TableCell style={{color:'white',fontFamily:'monospace'}} >Company Name</TableCell>
            <TableCell style={{color:'white',fontFamily:'monospace'}} >Roles</TableCell>
            <TableCell style={{color:'white',fontFamily:'monospace'}} >Edit</TableCell>
            <TableCell style={{color:'white',fontFamily:'monospace'}} >Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 && data ? (data.length > 0 && data.map((item,index) => {
            return <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1} 
              </TableCell>

              <TableCell style={{fontFamily:"cursive"}} >
                <p>{item.name}</p>
              </TableCell>
              
              <TableCell style={{color:'',fontFamily:"cursive"}} > 
              <p>{item.role}</p>
              </TableCell>

              <TableCell style={{color:'blue'}}><button onClick={()=>navigate(`/edit/${item.id}`)}>< UilEdit/></button></TableCell>

              <TableCell>
                <button style={{color:'red'}} type="button" onClick={()=>deleteDev(item.id)}
                >< UilTrashAlt /></button>
              </TableCell>

            </TableRow>
         })) : (<div className= "message" > <h4 style={{color:'rgb(99,102,241)',fontFamily:'monospace'}}>Please provide the company name and role...</h4> </div>)}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </Base>
  )
}

export default DashBoard