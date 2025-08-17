import React, { useContext } from 'react'
import Nav from './Nav'
import { Link, useNavigate } from 'react-router'
import { AppContext } from '../context/AppContext'
const Home = () => {
  const navigate = useNavigate()
  const {userData} = useContext(AppContext)
  const Redirect=()=>{
    navigate('/login')
  }
  return (
    <div className='grid '>
      <Nav/>
      <div className="flex justify-center background items-center h-screen flex-col ">
    <h1 className='text-[24px] font-bold '>hello{userData?userData.name:'coder'}!</h1>
    <p className='para'>welcome to the auth control system</p>
    <button type='submit' className='rounded-tr-lg font-semibold uppercase rounded-bl-md px-3 py-2 bg-gradient-to-b from-crayan-500 to-blue-400 hover:text-white' onClick={Redirect}>login</button>
      </div>
    </div>
  )
}

export default Home
