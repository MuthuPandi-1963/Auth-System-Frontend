import { useNavigate } from 'react-router-dom'
const Error = () => {
    const navigate=useNavigate();
    const HandleReload=()=>{
        navigate('/',{replace:true})
    }
  return (
    <div className=' p-12 grid  content-center justify-center font-bold '>
      <p className='error text-5xl uppercase'>404 error</p>
      <h1></h1>
      <h1 className='header uppercase'> page Not found</h1>
      <button className='a btns' onClick={HandleReload}>reload</button>
    </div>
  )
}

export default Error
