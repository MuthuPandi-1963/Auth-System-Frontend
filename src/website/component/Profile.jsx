import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
const Profile = () => {
  const [isLogout,setIsLogOut]=useState(false)
  const {id}=useParams();
  const HandleLogout=()=>{
      setIsLogOut(!isLogout)
  }
  try{
    if(isLogout){
      alert('logout')
      
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
