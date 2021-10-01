import React from "react";
import "./topbar.scss";
import { Mail} from '@material-ui/icons'
import LanguageOption from "../language/language";

export default function Topbar({menuOpen , setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Hardco.</a>
          <a href="https://github.com/hardco2020" className="link">
          <div className="itemContainer">
            <img src="assets/Github.png" alt="" className="icon"/>
            <span>hardco2020</span>
          </div>
          </a>
          <div className="itemContainer"> 
            <Mail className="icon" />
            <span>school021195@gmail.com</span>
          </div>
  
        </div>  
        <div className="right">
            <LanguageOption/>
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  );
}
