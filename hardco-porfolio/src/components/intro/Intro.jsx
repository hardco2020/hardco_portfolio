import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { KeyboardArrowDown } from "@material-ui/icons";
import Fade from "react-reveal/Fade";
import { init } from "ityped";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Intro() {
  const { t } = useTranslation();
  const front = t("frontend");
  console.log(front)
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 100,
      strings: ["Front-end", "Back-end","Creator"],
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
          <Fade down cascade>
            <h2>{t("hello")}</h2>
          </Fade>
          <Fade right cascade>
            <h1>{t("name")}</h1>
          </Fade>
          <h3>
          {t("learning")} <span ref={textRef}></span>
          </h3>
         <div className="aboutmeArea">
          <Link to="/aboutme" className="tome">
            <img src="assets/video.png" alt="" className="aboutme" />
          </Link>
          </div>
        </div>
        <a href="#porfolio" className="anchor">
          <KeyboardArrowDown className="pulldown" />
        </a>
      </div>
    </div>
  );
}
