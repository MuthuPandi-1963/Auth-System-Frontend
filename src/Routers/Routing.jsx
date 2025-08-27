import React, { Children, } from 'react'
import {Routes,Route,Link, Outlet} from 'react-router-dom'
import Social from '../Auth/Sociallog/Social'
import Profile from '../website/component/usertemp/Profile'
 function   RequireAuth({Children}){
        const isAuthenticated=false
        return isAuthenticated?Children:<Link to='/login'></Link>
    }
export default function Routing(){
    return(
        <Routes >  
       <Route path='/profile/:id' element={<Profile/>}/>
       <Route path='social' element={<Social/>}/>
        <Route path="*" element={<Error/>}/>    
        </Routes>
    )
  
}
