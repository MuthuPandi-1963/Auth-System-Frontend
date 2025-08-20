
export default function ResetPassword(){
        //  if(userinfo.password!==userinfo.confirmpassword){
        //         setError("Enter Same password")
        //           setShowotp(false)
        //         return
        //     }
    return(
        <div className="grid bg-blur background content-center h-screen 
         justify-center">
            <div className="z-10 bg-white/40  rounded-xl shadow-xl p-5 mx-2">

            <h1 className="header ">forget password</h1>
            <form action="" className="grid">
                <input type="password" placeholder="Enter old pin" required className="inputs "/>
                <input type="password" placeholder="Enter new pin" required className="inputs" />
                <input type="password" placeholder="Enter Confirm pin" required  className="inputs"/>
                <button type="submit" className="btns">submit</button>
            </form>
            </div>
        </div>
    )
}