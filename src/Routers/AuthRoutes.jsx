import { Outlet,Route,Routes } from "react-router-dom";
import SignUp from "../website/Auth/Signin/SignUp";
import SignIn from "../website/Auth/Signin/SignIn"
import  Home  from "../website/component/Templates/Home";
import Otpgen from '../website/Auth/PAsswordManagements/Otpgen'
import ResetPassword from '../website/Auth/PAsswordManagements/Resetpassword'
export default function AuthRoute(){
    return(
        <Routes>
            <Route element={<Home/>}>
                  <Route path="login" element={<SignIn/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="otpgen" element={<Otpgen/>}/>
                <Route path='resetpassword' element={<ResetPassword/>}/>


            </Route>
        </Routes>
    )

}