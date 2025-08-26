import {Link} from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Googlelogin from '../Sociallog/Googlelogin'
export default function UI(){
    return(
        <div className="bg-white h-fit items-center w-1/2">
            <h1 className='text-center  text-2xl'>Create Account</h1>
            <div className="">
                <Googlelogin/>
            </div>
            <div className="">
                <p className='px-2 text-center text-gray-600 py-4 m-4'>
                    <span>-----</span>
                    or Continue with email
                    <span>-----</span></p>
                <SignUp/>
            </div>
        </div>
    )
}