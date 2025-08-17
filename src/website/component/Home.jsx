import Nav from './Nav'
import {  Outlet } from 'react-router'
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
