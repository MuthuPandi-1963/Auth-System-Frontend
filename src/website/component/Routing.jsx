import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import SignIn from '../Signup/SignIn'
import Social from '../Signup/Social'
import Otpgen from '../Signup/Otpgen'
import SignUp from '../Signup/SignUp'
import About from './About'
import Profile from './Profile'
import Error from './Error'
import ResetPassword from '../Signup/Resetpassword'
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
