import { useState } from "react"
import { data, Link } from "react-router"
import { useNavigate } from "react-router"
export default function SignUp(){
    const[phone,setPhone]=useState([])
    const[userinfo,setUserinfo]=useState({
        phone:'',
        password:'',
        confirmpassword:''
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
        else if(userinfo.password!==userinfo.confirmpassword){
                setError("Enter Same password")
                  setShowotp(false)
                return
            }
        else{   
         setPhone((previnfo)=>[...previnfo,userinfo])
        setShowotp(true)
        setError('otp sended')
        // navigate('/otpgen',{state:{phone}})
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
        <div className="flex justify-center items-center flex-col">
        < h1 className="header">SignUp page</h1>
        
        <div className="">
           {!showotp? <form className="flex flex-col my-25" onSubmit={handleCsubmit}>
                <input type='text'
                name="phone"
                id="phone"
                value={userinfo.phone}
                required
                onChange={handlePhonesubmit}
                 placeholder="Enter Phone Number/Email"  className="inputs" />
                 <input type="password" 
                 className="inputs"
                onChange={handlePhonesubmit}
                 value={phone.password}
                 required
                 name="password" id="password" 
                 placeholder="enter password" />
                  <input type="password" 
                  className="inputs "
                onChange={handlePhonesubmit}
                  value={userinfo.confirmpassword}
                  required
                 name="confirmpassword" id="cpassword" 
                 placeholder="confirm password" />
                 <button type="submit" className="btns">submit</button>
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