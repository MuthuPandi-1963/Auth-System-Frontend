
export default function ResetPassword(){

    return(
        <div className="grid content-center h-full
         justify-center">
            <h1 className="header">reset password</h1>
            <form action="" className="grid">
                <input type="password" placeholder="Enter old pin" required className="inputs"/>
                <input type="password" placeholder="Enter new pin" required className="inputs" />
                <input type="password" placeholder="Enter Confirm pin" required  className="inputs"/>
                <button type="submit" className="btns">submit</button>


            </form>
        </div>
    )
}