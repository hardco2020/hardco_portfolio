import Topbarme from "../../components/topbarme/Topbarme";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import './aboutme.scss'
import { useState } from "react";
import MenuMe from "../../components/menuMe/MenuMe"
import Goal from "../../components/goal/Goal";
import Skill from "../../components/skill/Skill";
import Thanks from "../../components/thanks/Thanks";
import smoothscrollPolyfill from 'smoothscroll-polyfill';

// Import this package to apply the smoothscroll to anchor links
// import smoothscrollAnchorPolyfill from 'smoothscroll-anchor-polyfill';
// (Unlike this package, smoothscroll-polyfill needs to be actively invoked: )
smoothscrollPolyfill.polyfill();

function AboutMe() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="aboutme">
      <Topbarme menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MenuMe menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
      <div className="sections">
        <About/>
        <Goal/>
        <Experience/>
        <Skill/>
        <Thanks/>
      </div>
    </div>
  );
}

export default AboutMe;
