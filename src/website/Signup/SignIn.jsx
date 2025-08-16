import React from "react";
import { useState } from "react"
import { Link } from 'react-router-dom';
import Otpgen from "./Otpgen";
import Googlelogin from './Googlelogin'
import { useNavigate } from "react-router-dom";
export default function Authform(){
    const [isLogin,setIsLogin] =useState(true)
    const [error,setError] =useState(null)
    const [loading,setLoading]=useState(false)
    const navigate =useNavigate()
    const [formData,setFormData]=useState(
        {
            name:'',
            password:'',
        }
    )
    
   const HandleChange= (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    }
    const HandleSub =async (e)=>{
        e.preventDefault()
        setLoading(true)
        setError(null)
    
    }
    const Gotoprofile =()=>{
      navigate('/login/profile/:id')
    }
    return(
        <div className="  m-auto p-21 justify-center items-center " id="auth">
      <form className=" flex flex-col gap-3" onSubmit={HandleSub} >
        <h2 className="headers py-2 font-bold uppercase  text-3xl">Login</h2>
          <input
            type="text"
            name="name"
            placeholder="User Name"
            value={formData.name}
            onChange={HandleChange}
            required
            className="inputs w-fit"
          />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={HandleChange}
                    required
            className="inputs w-fit"

        />
        {error && <p className="text-red-800 font-sarif">{error}</p>}

        <button type="submit" className="bg-gray-700 p-2 px-4 rounded text-white font-serif hover:bg-gray-500 hover:text-white w-fit " disabled={loading}>
          {loading ? 'Please wait...' : isLogin ? 'login  ' : 'Sign Up'}
        </button>
        <Link to='/resetpassword'> <button className="text-gray-500 font-serif text-sm underline p-2 hover:text-blue-700 cursor-pointer">Reset password</button></Link>
        <p className="toggle"  onClick={() => setIsLogin(!isLogin)}></p>
             {isLogin ? <p> Don't have an account?<Link to="/signup">
             <button className="text-gray-500 font-serif text-sm underline p-2 hover:text-blue-700 cursor-pointer">Sign Up here</button>
             </Link>
            </p>:  'Already have an account? Log in'}

      
      </form>
      <Googlelogin/>
    </div>
  )
}