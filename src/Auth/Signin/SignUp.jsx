import  {useState } from "react"
import { setUsers } from "../../website/slice/userSlice"
import { useNavigate } from "react-router-dom"
import Inputs from "../Inputs/Inputs"
import {authAPI} from '../../Service/api'
import { useDispatch } from "react-redux"
export default function SignUp(){
    const[formData,setFormData]=useState({
        email:"",
        password:"",
        username:""
    })
        const [error,setError]=useState()
    const navigate =useNavigate();    
    const dispatch =useDispatch()
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
       
   
       const OnsubmitHandle =async(e)=>{
         e.preventDefault()
         const validationerr =validate()
         
           if(Object.keys(validationerr).length>0)
           {
             setError(validationerr)
             return
           }

           dispatch(setUsers(formData))
           
           try{
             const response =await authAPI.register(formData)
             if(response?.data){
              console.log(response.data);
           navigate('/auth/otpgen',{state:response.data}) 
           alert('go to otp page')
           }
           
           }
           catch(err){
            alert(err||'register fails')
           }
       
       }
    return(
        <div className="background ">
            <div className="blurbg">
        < h1 className="font-semibold text-[20px] my-2 uppercase text-white">SignUp page</h1>
        
            <form className="flex flex-col gap-3 " onSubmit={OnsubmitHandle}>
               <Inputs
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={HandleChange}
            required     
            error={error?.username}    
            />
             <Inputs
                  type="email"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={HandleChange}
                  required
                  error={error?.email}
                  className="inputs  border-black w-fit"      
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
                 <button type="submit" className="bg-gray-200 rounded py-1 my-4  hover:bg-gray-400">submit</button>
                 <p className="items-center" onClick={()=>{navigate('/auth/login')}}>Already have a account ?<span className="hover:underline pl-2 text-shadow-blue-950">Log In</span></p>
                  <p className="error">
            {error?.general}
        </p>
            </form>
       </div>
                  </div>
    )
}