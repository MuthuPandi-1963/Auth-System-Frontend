import React from 'react'
import Nav from './Nav'
import { Link, useNavigate } from 'react-router'
const Home = () => {
  const navigate = useNavigate()
  const Redirect=()=>{
    navigate('/login')
  }
  return (
    <div className='grid '>
      <Nav/>
      <div className="flex justify-center background items-center h-screen flex-col ">
    <h1 className='text-[24px] font-bold '>hello coder</h1>
    <p className='para'>welcome to the auth control system</p>
    <button type='submit' className='rounded-tr-lg font-semibold uppercase rounded-bl-md px-3 py-2 bg-gradient-to-b from-crayan-500 to-blue-400 hover:text-white' onClick={Redirect}>login</button>
      </div>
    </div>
  )
}

export default Home
