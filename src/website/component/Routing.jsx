import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import SignIn from '../Signup/SignIn'
import Social from '../Signup/Social'
import Otpgen from '../Signup/Otpgen'
import SignUp from '../Signup/SignUp'
export default function Routing(){
    return(
        <Routes>  
            <Route path='/' element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>

        <Route path="/otpgen" element={<Otpgen/>}/>
        <Route path="/social" element={<Social/>}/>
        <Route path='*' element={<Error/>}/>
        </Routes>
    )
  
}
