import React from 'react'

const Nav = () => {
  return (
    <div className='flex items-center justify-end pr-12 p-4  bg-blue-800'>
        <ol className='items-center flex gap-2 text-lg font-semibold'>
            <li><a href='auth'Name='hover:text-white capitalize '>home</a></li>
            <li><a href=''>login</a></li>
        </ol>
      
    </div>
  )
}

export default Nav
