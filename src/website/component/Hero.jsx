import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router'

export default function Hero() {
    const {userData} = useContext(AppContext)
  return (
    <div className="flex justify-center background items-center h-screen flex-col ">
    <h1 className='text-[24px] font-bold '>hello{userData?userData.name:'coder'}!</h1>
    <p className='para'>welcome to the auth control system</p>
    <Link to={"/login"} type='submit' className='rounded-tr-lg font-semibold uppercase rounded-bl-md px-3 py-2 bg-gradient-to-b from-crayan-500 to-blue-400 hover:text-white' >login</Link>
      </div>
  )
}
