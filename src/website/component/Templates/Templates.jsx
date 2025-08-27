import Nav from './Nav'
import Hero from './Hero'
import { Link ,useNavigate} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import uesState from 'react'
import useEffect from 'react'
import Utilities from '../../../Auth/Signin/userinterface/Utilities'

export default function Templates(){
    return(
        <>
          <Nav/>
    <div className='grid '>
    <Outlet/>
    </div>
    <Utilities/>
    </>
        
    )
}