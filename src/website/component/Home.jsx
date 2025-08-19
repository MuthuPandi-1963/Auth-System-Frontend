import Nav from './Nav'
import { Link, useNavigate } from 'react-router'
import { AppContext } from '../context/AppContext'
const Home = () => {
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
