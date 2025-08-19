import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from '../website/component/Templates/Home'
import SignIn from '../website/Auth/Signin/SignIn'
import Social from '../website/Auth/Social'
import Otpgen from '../website/Auth/PAsswordManagements/Otpgen'
import SignUp from '../website/Auth/Signin/SignUp'
import About from '../website/component/About'
import Profile from '../website/component/usertemp/Profile'
import Error from '../website/component/Templates/Error'
import ResetPassword from '../website/Auth/PAsswordManagements/Resetpassword'
import Hero from '../website/component/Templates/Hero'
export default function Routing(){
    return(
        <Routes>  
            <Route path='/' element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/otpgen" element={<Otpgen/>}/>
        <Route path="/social" element={<Social/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/login/profile/:id' element={<Profile/>}/>
        <Route path='*' element={<Error/>}/>
        </Routes>
    )
  
}
