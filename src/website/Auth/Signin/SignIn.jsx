import React, { useContext } from "react";
import { useState } from "react"
import { Link } from 'react-router-dom';
import Googlelogin from '../Sociallog/Googlelogin'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {AppContext} from "../../context/AppContext";

export default function Authform(){
    const [isLogin,setIsLogin] =useState(false)
    const [error,setError] =useState(null)
    const [loading,setLoading]=useState(false)
    const navigate =useNavigate()
    const {backendurl,setLoggedIn,getUserData}=useContext(AppContext)
    const [formData,setFormData]=useState(
        {
            name:'',
            password:'',
        }
    )
    
    
   const HandleChange=async (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    }
    const OnsubmitHandle =async (e)=>{
      isLogin(true)
      axios.defaults.withCredentials=true
      try{
        e.preventDefault()
       const {data}= await axios.post(backendurl+'/auth/profile',formData.name,formData.password)
       if(data.success){
        setLoggedIn(true)
        getUserData()
        navigate('/')
        setLoading(false)
       }
       else{
        setError(true)
        setLoading(true)
        alert(data.message)
       }
      }
      catch(err){
        alert(err)
      }

    }
  
      const Gotoprofile =()=>{
      if(formData.name.trim()){
      navigate(`/login/profile/${encodeURIComponent(formData.name)}`)

      }
  
    }
    return(
          <div className="background">
        <div className="relative z-10 max-w-md mx-auto  p-8  bg-gray-300  rounded-2xl shadow-lg" id="auth">

      <form className=" flex flex-col gap-3 " onSubmit={OnsubmitHandle} >
        <h2 className="headers py-2 font-bold uppercase  text-3xl">Login</h2>
          <input
            type="text"
            name="name"
            placeholder="User Name"
            value={formData.name}
            onChange={HandleChange}
            required
            className="inputs  border-black w-fit"
            />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={HandleChange}
                  required
                  className="inputs  border-black w-fit"
                  
                  />
        {error && <p className="text-red-800 font-sarif">{error}</p>}

        <button type="submit" onClick={OnsubmitHandle} className="graybtn w-1/2  p-1 px-4 text-md " disabled={loading}>
          {loading ? 'Please wait...' : 'login  '}
        </button>
        <Link to='/resetpassword'> <button className="text-gray-900 font-serif text-sm underline p-2 hover:text-blue-700 cursor-pointer">forget password</button></Link>
             {setIsLogin ? <p> Don't have an account?<Link to="/signup" >
             <button className="text-gray-900 font-serif text-sm underline p-2 hover:text-indigo-900 cursor-pointer">Sign Up here</button>
             </Link>
            </p>:'Already have an account? Log in'}

      
      </form>
      <Googlelogin/>
    </div>
     </div>
  )
}