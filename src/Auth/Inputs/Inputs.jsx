import React from 'react'

const Inputs = ({label,name,value,error,type,onChange,placeholder}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
      id={name}name={name}
      type={type}value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`inputs p-4 w-fit ${error?'border-red-600':'border-black'}`}/>
{error && <p className='text-red-900 text-sm'>{error.message ||JSON.stringify(error)}</p>      }
    </div>
  )
}

export default Inputs
