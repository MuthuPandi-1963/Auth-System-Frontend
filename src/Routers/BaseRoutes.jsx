import { Outlet,Route,Routes } from "react-router-dom";
import Hero from "../website/component/Templates/Hero";
import Home from "../website/component/Templates/Home";
import About from '../website/component/About'
export default function baseRoutes() {
    return(
            <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Hero />} />
        <Route path="about" element={<About />} />
        
      </Route>
    </Routes>
  );
    
  
}
