import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { Tuple } from '@reduxjs/toolkit';
const Profile = () => {
  const [isLogout,setIsLogOut]=useState(false)
  const {id}=useParams();
  const navigate =useNavigate()
  const HandleLogout=()=>{
      setIsLogOut(!isLogout)
  }
  const isAuthenticated = () => {
    // ✅ Replace with real auth logic
    return localStorage.getItem("token");
  };

  try{
    if(!isAuthenticated){
      
      navigate('/login',{replace:true})
      
    }
  }
  catch(err){
    alert(err)
  }
  return (
    <div className='justify-center self-center items-center m-2 p-2'>
      <h1 className='header '>Profile</h1>
      <p className='para'>user id:{id}</p>
      <button type='submit' className='redbtn' onClick={HandleLogout}>logout</button>
      <button type='submit' className='graybtn'>Edit</button>

    </div>
  )
}

export default Profile
