import React from "react";
import { useState } from "react"
import { Link } from 'react-router-dom';
import Otpgen from "./Otpgen";
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
        <div className=" grid items-center justify-center p-2 m-2 rounded h-96 shadow-2xl" id="auth">
      <form className=" flex flex-col gap-3  w-auto" onSubmit={HandleSub} >
        <h2 className="headers">Login</h2>
          <input
            type="text"
            name="name"
            placeholder="User Name"
            value={formData.name}
            onChange={HandleChange}
            required
            className="inputs"
          />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={HandleChange}
                    required
            className="inputs"

        />
        {error && <p className="text-red-800 font-sarif">{error}</p>}

        <button type="submit" className="btns" disabled={loading}>
          {loading ? 'Please wait...' : isLogin ? 'login  ' : 'Sign Up'}
        </button>

        <p className="toggle"  onClick={() => setIsLogin(!isLogin)}></p>
             {isLogin ? <p> Don't have an account?<Link to="/signup"><button className="btns">Sign Up here</button></Link></p> : 'Already have an account? Log in'}
      
      </form>
    </div>
  )
}