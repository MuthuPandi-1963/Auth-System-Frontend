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

    return(
        <div className=" h-screen shadow  justify-center flex flex-col  items-center bg-gradient-to-bl from-gray-400 to-white">
          <div className=" bg-gray-200 rounded-md w-auto shadow-2xl p-12 items-start ">

            <h1 className="header uppercase text-center">Enter  Otp</h1>
            <form  onSubmit={otpVerify} className="flex flex-col  justify-center items-center">
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
         </div>
    )
}