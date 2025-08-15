import { useState } from "react"
import { data, Link } from "react-router"
import { useNavigate } from "react-router"
export default function Login(){
    const[phone,setPhone]=useState(null)
    const [showotp,setShowotp]=useState(false)
    const [error,setError]=useState()
    const navigate =useNavigate();
    const handlePhonesubmit=(e)=>{
        setPhone(e.target.value)
    } 
    const handleCsubmit=async (e)=>{
        e.preventDefault();
        const regex =/[^0-9]/g;
       try{
        
        if( phone.length==0||phone.length<10||regex.test(phone)||null||undefined||phone==" "){
            setError("Invalid Entry")
             setShowotp(false)

                return
        }
        else{   
        setError('otp sended')
        navigate('/otpgen',{state:{phone}})
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
                name:phone
                id:phone
                value={phone}
                onChange={handlePhonesubmit}
                 placeholder="Enter Phone Number/Email"  className="inputs" />
                 <button type="submit" className="btns">submit</button>
            </form>:<div>
            <p>check the phone number {phone}</p>
            
               
              </div>}  
             
        </div>
        <p className="error">
            {error}
        </p>
        </div>
    )
}