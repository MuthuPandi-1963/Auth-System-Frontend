import { useEffect, useState } from "react"
export default function Resend({...onResend}){
        const [seconds,setSeconds]=useState(30)
    const [canResend,setCanResend]= useState(false)
    useEffect(()=>{
        if(seconds>0){
            const timer =setTimeout(()=>setSeconds(seconds-1),1000);
            return ()=>clearTimeout(timer)
        }
        else{
            setCanResend(true)
        }
    },[seconds])
    const HandleResend=async ()=>{
        if(canResend){
            console.log("otp resent");
            setSeconds(30);
            setCanResend(false)
            
        }
        try{
            const res=await fetch('/resendotp',{
                method:'POST',
                headers:{
                    'Content-Type':"appilcation/json"
                },
                body:JSON.stringify({
                    phone:onResend.phone,
                })
            })
            const data =await res.json()
            if(res.ok){
                alert('otp send successfully')
            }
            else{
                alert(data.message)
            }
        }
        catch(err){
            alert(err,"network error")

        }
    }
    return(
        <button disabled={!canResend} onClick={HandleResend}>
            {canResend?"resend otp":`resent in ${seconds}s`}
        </button>
    )
}