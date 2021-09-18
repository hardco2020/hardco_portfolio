import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { KeyboardArrowDown } from "@material-ui/icons";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay:  1500,
      backSpeed: 60,
      strings: ["前端工程師", "後端工程師","部落格創作者"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/porfolio.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>你好，我是</h2>
          <h1>游旻昌</h1>
          <h3>
            正在學習的 <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#porfolio">
          <KeyboardArrowDown className="pulldown" />
        </a>
      </div>
    </div>
  );
}
