import Nav from './Nav'
import Hero from './Hero'
import { Link ,useNavigate} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import uesState from 'react'
import useEffect from 'react'

const Home = () => {
  const navigate =useNavigate()
      useEffect(()=>{
        if(!ishome){
          navigate('/',{replace:true})
        }
      },[home,navigate])
  return (
    <>
      <Nav/>
    <div className='grid '>
    <Outlet/>
    </div>
    </>
  )
}

export default Home
