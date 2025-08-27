import { Outlet,Route,Routes } from "react-router-dom";
import SignUp from "../Auth/Signin/SignUp";
import Signin from "../Auth/Signin/Layouts/Signin"
import Error from "./Error";
import Signup from "../Auth/Signin/Layouts/Signup";
import Templates from '../website/component/Templates/Templates'
import  Home  from "../website/component/Templates/Home";
import Otpgen from '../Auth/PAsswordManagements/Otpgen'
import ResetPassword from '../Auth/PAsswordManagements/Resetpassword'
export default function AuthRoute(){
    return(
        <Routes>
            <Route >
                  <Route path="login" element={<Signin/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route path="otpgen" element={<Otpgen/>}/>
                <Route path='resetpassword' element={<ResetPassword/>}/>
                <Route path="/*" element={<Error/>}/>    
                        </Route>
        </Routes>
    )

}