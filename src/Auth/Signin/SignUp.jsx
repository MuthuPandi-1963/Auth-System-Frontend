import { useState } from "react"
import { data, Link } from "react-router"
import { useNavigate } from "react-router"
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

    const handlePhonesubmit=(e)=>{
        const {name,value}= e.target;
        setUserinfo((info)=>{
            return {
                ...info,
                [name]:value
            }
        })
       
    } 
    
    const handleCsubmit=async (e)=>{
        
        const regex =/[^0-9]/g;
       try{
        
        if(userinfo.phone.length===0||userinfo.phone.length<10||regex.test(userinfo.phone)||userinfo.phone==" "){
            setError("Invalid Entry")
           
             setShowotp(false)
                return
        }
        else{   
         setPhone((previnfo)=>[...previnfo,userinfo])
        setShowotp(true)
        setError('otp sended')
        if(setShowotp){
        navigate('/otpgen',{state:{phone}})

        }
        console.log(setPhone);
        e.preventDefault()
           } 
       }
       catch(err){
        setError(data.message||err)

       }
     
       
       
      //call api backed
    }
    return(
        <div className="background ">
            <div className="blurbg">
        < h1 className="font-semibold text-[20px] my-2 uppercase text-white">SignUp page</h1>
        
           {!showotp? <form className="flex flex-col " onSubmit={handleCsubmit}>
             <input type="password" 
                  className="inputs "
                  onChange={handlePhonesubmit}
                  value={userinfo.name}
                  required
                  name="name" id="name" 
                  placeholder="name" />
                <input type='text'
                name="phone"
                id="phone"
                value={userinfo.phone}
                required
                onChange={handlePhonesubmit}
                placeholder="Enter Phone Number/Email"  className="inputs" />
                 <input type="password" 
                 className="inputs "
                 onChange={handlePhonesubmit}
                 value={phone.password}
                 required
                 name="password" id="password" 
                 placeholder="enter password" />
                 
                 <button type="submit" className="bg-gray-200 rounded py-1 my-4  hover:bg-gray-400">submit</button>
                 <p className="items-center" onClick={()=>{navigate('/login')}}>Already have a account ?<span className="hover:underline pl-2 text-shadow-blue-950">Log In</span></p>
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