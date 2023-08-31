import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import DashBoard from './components/DashBoard';
import { useEffect, useState } from 'react';
import AddData from './components/AddData';
import EditData from './components/EditData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data,setData]=useState([]);
    //1.create the function for get the data fro the API
useEffect(()=>{
  const  teachersData= async()=>{
    const response = await fetch("https://64f05ab38a8b66ecf7798374.mockapi.io/developers",
    {method:'GET',});
    const data= await response.json();
    setData(data)
  }
  teachersData();
},[])

  return (
    <div className="App">
      <header className="App-header">
      <ToastContainer theme='colored' />
      <Routes>
      <Route exact path='/' element={ <Login/>} />

      <Route path='/signup' element={ <Signup/>} />

      <Route path='/dashboard' element={ <DashBoard data={data} setData={setData}/>} />

      <Route path='/addData' element={ <AddData data={data} setData={setData}/>} />

      <Route path='/edit/:id' element={ <EditData data={data} setData={setData}/>} />

      </Routes>
      </header>
    </div>
  );
}

export default App;
