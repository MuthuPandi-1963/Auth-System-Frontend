import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { authAPI } from '../../../Service/api';
import { logout } from '../../slice/userSlice';
import { useDispatch } from 'react-redux';
const Profile = () => {
  
  const [isLogout,setIsLogOut]=useState(false)
  const {id}=useParams();
  const dispatch =useDispatch()
  const navigate =useNavigate()
  const HandleLogout=()=>{
      setIsLogOut(!isLogout)
      dispatch(logout())
      
  }
  const isAuthenticated =async () => {
    // ✅ Replace with real auth logic
    const response = await authAPI.user({id})
     if(response?.data){
              console.log(response.data);
           }
    
  };

  try{
    if(!isAuthenticated || !authAPI.user ){   
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
