import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";
import Porfolio from "../../components/porfolio/Porfolio";
import Testimonials from "../../components/testimonials/Testimonials";
import Topbar from "../../components/topbar/Topbar";
import Works from "../../components/works/Works";
import './home.scss'
import { useState } from "react";
import Menu from "../../components/menu/Menu";
function Home() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="home">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
      <div className="sections">
        <Intro/>
        <Porfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default Home;
