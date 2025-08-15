import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from 'react-router-dom'
import SignIn from './website/Signup/SignIn'
import SignUp from './website/Signup/SignUp'
import Social from './website/Signup/Social'
import Otpgen from './website/Signup/Otpgen'
export default function App()
{
  return(  
    <Router>

      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/otpgen" element={<Otpgen/>}/>
        <Route path="/social" element={<Social/>}/>

      </Routes>

    </Router>
 
    )
}