import { Outlet,Route,Routes } from "react-router-dom";
import Hero from "../website/component/Templates/Hero";
import Home from "../website/component/Templates/Home";
import About from '../website/component/Templates/About'
import Error from "./Error";
import Templates from '../website/component/Templates/Templates'
export default function baseRoutes() {
    
    return(
     <Routes >
      <Route element={<Templates/>}>
        <Route index element={<Templates/>}/>
      <Route path="home" element={<Home />}/>
        <Route path="about" element={<About />} />
      </Route>
       <Route path="*" element={<Error/>}/>    
    </Routes>
  );
    
  
}
