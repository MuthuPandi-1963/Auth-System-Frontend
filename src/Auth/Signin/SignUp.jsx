import { useState } from "react"
import {  Link } from "react-router"
import { setUsers } from "../../website/slice/userSlice"
import { useNavigate } from "react-router"
import Inputs from "../Inputs/Inputs"
import { useDispatch } from "react-redux"
export default function SignUp(){
    const[phone,setPhone]=useState([])
    const[userinfo,setUserinfo]=useState({
        phone:'',
        password:'',
        name:''
    })
    const [showotp,setShowotp]=useState(false)
    const [error,setError]=useState()
    const navigate =useNavigate();
    console.log(phone);
    
    const dispatch =useDispatch()
      const HandleChange=async (e)=>{
       setUserinfo((prev)=>({...prev,[e.target.name]:e.target.value}))
       setError((prev)=>({...prev,[e.target.name]:''}))
       }
         const validate = () => {
           const newErrors = {};
           if (!userinfo.username) newErrors.username = 'Username is required';
           if (!userinfo.password) newErrors.password = 'Password is required';
           else if (userinfo.password.length < 6) newErrors.password = 'Password too short';
           return newErrors;
         };
       
   
       const OnsubmitHandle =async (e)=>{
         e.preventDefault()
         const validationerr =validate()
         
         if(Object.keys(validationerr).length>0)
           {
             setError(validationerr)
           }
           dispatch(setUsers(userinfo))
           setShowotp(true)
           if(showotp){
           navigate('/auth/otpgen')     
           setPhone(((prev)=>[...prev,userinfo.phone])) 
           }
       }
    return(
        <div className="background ">
            <div className="blurbg">
        < h1 className="font-semibold text-[20px] my-2 uppercase text-white">SignUp page</h1>
        
           {!showotp? <form className="flex flex-col gap-3 " onSubmit={HandleChange}>
               <Inputs
            type="text"
            name="name"
            placeholder="User Name"
            value={userinfo.name}
            onChange={OnsubmitHandle}
            required     
            error={error?.name}    
            />
             <Inputs
                  type="phone"
                  name="phone"
                  placeholder="phone"
                  value={userinfo.phone}
                  onChange={OnsubmitHandle}
                  required
                  error={error?.phone}
                  className="inputs  border-black w-fit"      
                  />
                 
            <Inputs
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={userinfo.password}
                  onChange={OnsubmitHandle}
                  required
                  error={error?.password}
                  className="inputs  border-black w-fit"      
                  />
                 
                 <button type="submit" className="bg-gray-200 rounded py-1 my-4  hover:bg-gray-400">submit</button>
                 <p className="items-center" onClick={()=>{navigate('/auth/login')}}>Already have a account ?<span className="hover:underline pl-2 text-shadow-blue-950">Log In</span></p>
            </form>:<div>
            <p>check the phone number {userinfo.phone}</p>
            
               
              </div>}  
             
        </div>
        <p className="error">
            {error}
        </p>
                  </div>
    )
}