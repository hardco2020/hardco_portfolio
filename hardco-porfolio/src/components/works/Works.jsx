import React, { useState } from "react";
import "./works.scss";
import { ArrowBack, ArrowForward, PhoneIphone } from "@material-ui/icons";
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/blog.png",
      title: "部落格",
      desc: "將自己腦海裡記得的技術都化為文章，希望能幫助到所有在這條路上努力的人",
      img: "./assets/blog.png",
    },
    {
      id: "2",
      icon: "./assets/blog.png",
      title: "手機",
      desc: "將自己腦海裡記得的技術都化為文章，希望能幫助到所有在這條路上努力的人",
      img: "./assets/blog.png",
    },
    {
      id: "3",
      icon: "./assets/blog.png",
      title: "網頁",
      desc: "將自己腦海裡記得的技術都化為文章，希望能幫助到所有在這條路上努力的人",
      img: "./assets/blog.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <PhoneIphone className="imgPhone" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>projects</span>
                </div>
              </div>
              <div className="right">
                <img src="assets/blog.png" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowForward
        className="arrow left"
        onClick={() => handleClick("right")}
      />
      <ArrowBack className="arrow right" onClick={() => handleClick("left")} />
    </div>
  );
}
