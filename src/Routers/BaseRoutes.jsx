import { Outlet,Route,Routes } from "react-router-dom";
import Hero from "../website/component/Templates/Hero";
import Home from "../website/component/Templates/Home";
import About from '../website/component/Templates/About'
export default function baseRoutes() {
      const home=false

    return(
            <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="hero" element={<Hero />} />  
      </Route>
        <Route path="home" element={<Home home={home}/>}/>

    </Routes>
  );
    
  
}
