import { useState } from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Googlelogin from '../../Sociallog/Googlelogin'
import { useNavigate } from "react-router-dom";
import Inputs from "../../Inputs/Inputs";
import { loginUser } from "../../../website/slice/userSlice";
import {useDispatch,useSelector} from 'react-redux'

export default function Authform(){
    const [isLogin,setIsLogin] =useState(false)
    const [errors,setErrors]=useState({})
    const [loading,setLoading]=useState(false)
    const navigate =useNavigate()
    const dispatch =useDispatch()
    const [formData,setFormData]=useState(
        {
            username:'',
            password:'',
        }
    )
      const {  isAuthenticated } = useSelector((state) => state.userInfo||{});
     useEffect(() => {
    if (isAuthenticated) {
      alert('welcome user')
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

   
      const HandleChange=(e)=>{
    setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
    setErrors((prev)=>({...prev,[e.target.name]:''}))
 
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
         setLoading(true)
      const validationerr =validate()
      
      if(Object.keys(validationerr).length>0)
        {
          setErrors(validationerr)
        }
        dispatch(loginUser(formData))
        setIsLogin(!isLogin)
      
      
       try {
           await dispatch(loginUser(formData)).unwrap(); 
            setIsLogin(true);
          } catch (err) {
            console.error("Login failed:", err);
          } finally {
            setLoading(false);
          }
    }
      // const Gotoprofile =()=>{
      // if(formData.name.trim()){
      // navigate(`/login/profile/${encodeURIComponent(formData.name)}`)

      
    return(
          <div className=''>
        <div className="relative     p-8  bg-gray-300  rounded-2xl shadow-lg" id="auth">

      <form className=" flex flex-col gap-3 " onSubmit={OnsubmitHandle} >
        <h2 className="headers py-2 font-bold uppercase  text-3xl">sign in</h2>
          <Inputs
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={HandleChange}
            required     
            error={errors?.username}    
            />
            <Inputs
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={HandleChange}
                  required
                  error={errors?.password}
                  className="inputs  border-black w-fit"      
                  />
   
     {
        loading  ?<h2 className="text-sm font-light text-gray-700 ">loading ....</h2>:
    <button type="submit" className="graybtn w-1/2  p-1 px-4 text-md " >submit
        </button>  }  
      <button className="text-gray-900 font-serif text-sm underline py-2 hover:text-blue-700 text-start cursor-pointer">   <Link to='/auth/resetpassword'>forget password</Link></button>
             {!isLogin ? <p> Don't have an account?
             <button className="text-gray-900 font-serif text-sm underline p-2 hover:text-indigo-900 cursor-pointer"><Link to="/auth/signup" > Sign Up here    </Link></button>
         
            </p>:<p>
               
            </p>}

      
      </form>
      <Googlelogin/>
    </div>
     </div>
  )
}