import Nav from './Nav'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
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
