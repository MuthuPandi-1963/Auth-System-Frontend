import React from 'react'
import {  useNavigate } from 'react-router'
export default function Nav() {
  const links = ["Home","About",'Profile',"Product"] 
  const navigate =useNavigate() 
  const HandleNavigate=(path)=>{
    { if(path== 'home'){
      navigate('/')
    }
    else if (path =='profile'){
      navigate('/login/profile')
    }
            navigate(`/${path.toLowerCase()}`)
    }
    
  }
  return (
   
      <div className="flex justify-around bg-cyan-950 py-4 text-white">
        <h2 className='mask-t-from-neutral-600 text-lg'>auth control project</h2>
        <ol className='items-center flex gap-2 font-semibold'>
            {
              links.map((items,id)=>( <li key={id} className='mask-t-from-10% hover:text-white hover:border-b-2 ' onClick={()=>HandleNavigate(items)}>
                {items.toLowerCase()}
                </li>
              ))
            }
        </ol>
            </div>
    
  )
}
