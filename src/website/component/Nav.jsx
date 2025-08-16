import React from 'react'
import {  useNavigate } from 'react-router'
export default function Nav() {
  const links = ["Home","Login","About",'Profile'] 
  const navigate =useNavigate() 
  const HandleNavigate=(path)=>{
    {
            navigate(`/${path.toLowerCase()}`)
    }
    
  }
  return (
    <div className='flex items-center justify-end pr-12 p-4  bg-blue-800'>
        <ol className='items-center flex gap-2 font-semibold'>
            {
              links.map((items,id)=>( <li key={id} onClick={()=>HandleNavigate(items)}>
                {items}
                </li>
              ))
              }
        </ol>
    </div>
  )
}
