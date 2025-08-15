import { useState } from "react"
import { data, Link } from "react-router"
import { useNavigate } from "react-router"
export default function Login(){
    const[phone,setPhone]=useState(null)
    const [showotp,setShowotp]=useState(false)
    const navigate =useNavigate();
    const handlePhonesubmit=(e)=>{
        setPhone(e.target.value)

    } 
    const handleCsubmit=async (e)=>{
        e.preventDefault();
        const regex =/[^0-9]/g;
       try{
        
        if( phone.length==0||phone.length<10||regex.test(phone)){
                alert('invalid phone number')
                return
        }
        else{    
        alert('otp sended')
        navigate('/otpgen',{state:{phone}})
        setShowotp(false)
           } 
       }
       catch(err){
        alert(data.message||err)
       }
       
       
      //call api backed
    }
    return(
        <div className="grid content-center">
        < h1 className="header">SignUp page</h1>
        <div className="">
           {!showotp? <form onSubmit={handleCsubmit}>
                <input type='tel'
                name:phone
                id:phone
                value={phone}
                onChange={handlePhonesubmit}
                 placeholder="Enter phone numeber"  className="inputs" />
                 <input type="text" /> 
                 <button type="submit" className="btns">submit</button>
            </form>:<div>
            <p>check the phone number {phone}</p>
               
              </div>}  
        </div>
        </div>
    )
}