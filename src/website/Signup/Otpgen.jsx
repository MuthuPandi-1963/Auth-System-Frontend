import { useState } from "react";
import { Link } from "react-router";
import { useLocation, useNavigate } from "react-router"
import Resend from "./Resendotp";
export default function Otpgen(){
    const [otp,setOtp]=useState('')
    const [verify,setVerifying]=useState(false)
  const [redirect,setRedirect]=useState(false)
    const navigate =useNavigate()
    const location =useLocation();
    const phone =location.state?.phone;
  const HandleRedirect=()=>{
    setRedirect(!redirect)
  }
    const otpVerify=async (e)=>{
        e.preventDefault();
        if(otp.length !==6){
            alert('enter the 6-digit otp');
            return
        }
    setVerifying(true);
    try {
      const response = await fetch('https://localhost:3000/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('OTP verified successfully!');
        // Redirect to dashboard or home
        navigate('/social'); // Or whatever route
      } else {
        alert(data.message || 'Invalid OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Verification failed');
    } finally {
      setVerifying(false);
    }

    }
    if(!phone){
        return <p>404 error</p>
    }
    return(
        <div className="otpgent  text-center shadow p-2 justify-center grid w-auto h-max items-center">
            <h1 className="header uppercase underline">Enter  Otp</h1>
            <p className="para">Otp sended to the {phone}</p>
            <form  onSubmit={otpVerify} className="flex flex-col p-2 justify-center items-center">
                <label htmlFor="" className="uppercase p-2 flex font-mono">enter otp :</label>
                <input type="text"
                onChange={(e)=>setOtp(e.target.value)}
                value={otp}
                placeholder="Enter Otp"
                required
                 className="inputs border w-fit " maxLength={6}/>
                 <Resend onResend={otpVerify} className="text-sm font-serif text-blue-800 underline curser-pointer hover:text-blue-600 ">resend</Resend>
                 <button type="submit" className="btns"disabled={verify}>
                    {verify?'verify....':"verify otp"}
                 </button>
                 <button type="submit" className="links" onClick={HandleRedirect}>
                    {redirect?navigate('/signup'):"edit"} 
                 </button>
            </form>
         </div>
    )
}