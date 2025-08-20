import  { useContext } from 'react'
import { Link } from 'react-router'

export default function Hero() {
  return (
    <div className="flex  justify-center items-center h-screen flex-col ">
    <h1 className='text-[24px] bg-custombg font-bold '>hello!</h1>
    <p className='para'>welcome to the auth control system</p>
    <Link to={"/auth/login"} type='submit' className='rounded-tr-lg font-semibold uppercase rounded-bl-md px-3 py-2 bg-gradient-to-b from-crayan-500 to-blue-400 hover:text-white' >login</Link>
      </div>
  )
}
