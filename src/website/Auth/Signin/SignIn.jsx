import { useState } from "react";
import { Link } from 'react-router-dom';
import Googlelogin from '../Sociallog/Googlelogin'
import { useNavigate } from "react-router-dom";
import {setUsers} from '../../slice/userSlice'
import Inputs from "../Inputs/Inputs";
import {useDispatch} from 'react-redux'
export default function Authform(){
    const [isLogin,setIsLogin] =useState(false)
    const [error,setError]=useState({})
    const navigate =useNavigate()
    const dispatch =useDispatch()
    const [formData,setFormData]=useState(
        {
            name:'',
            password:'',
        }
    )
   const HandleChange=async (e)=>{
    setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
    setError((prev)=>({...prev,[e.target.name]:''}))
    }
      const validate = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) newErrors.password = 'Password too short';
        return newErrors;
      };
    

    const OnsubmitHandle =async (e)=>{
      e.preventDefault()
      const validationerr =validate()
      
      if(Object.keys(validationerr).length>0)
        {
          setError(validationerr)
        }
        dispatch(setUsers(formData))
        setIsLogin(true)
        if(isLogin){
        navigate('/')      


        }
    }
      // const Gotoprofile =()=>{
      // if(formData.name.trim()){
      // navigate(`/login/profile/${encodeURIComponent(formData.name)}`)

      
    return(
          <div className="background">
        <div className="relative z-10 max-w-md mx-auto  p-8  bg-gray-300  rounded-2xl shadow-lg" id="auth">

      <form className=" flex flex-col gap-3 " onSubmit={OnsubmitHandle} >
        <h2 className="headers py-2 font-bold uppercase  text-3xl">Login</h2>
          <Inputs
            type="text"
            name="name"
            placeholder="User Name"
            value={formData.name}
            onChange={HandleChange}
            required     
            error={error?.name}    
            />
            <Inputs
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={HandleChange}
                  required
                  error={error?.password}
                  className="inputs  border-black w-fit"      
                  />
   
        <button type="submit" onClick={OnsubmitHandle} className="graybtn w-1/2  p-1 px-4 text-md " >submit
        </button>
      <button className="text-gray-900 font-serif text-sm underline py-2 hover:text-blue-700 text-start cursor-pointer">   <Link to='/resetpassword'>forget password</Link></button>
             {isLogin ? <p> Don't have an account?
             <button className="text-gray-900 font-serif text-sm underline p-2 hover:text-indigo-900 cursor-pointer"><Link to="/signup" > Sign Up here    </Link></button>
         
            </p>:<p>
               
            </p>}

      
      </form>
      <Googlelogin/>
    </div>
     </div>
  )
}