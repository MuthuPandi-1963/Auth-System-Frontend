import Nav from './Nav'
import { Link } from 'react-router'
import { Outlet } from 'react-router'
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
