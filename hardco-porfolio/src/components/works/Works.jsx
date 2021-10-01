import React, { useState } from "react";
import "./works.scss";
import { ArrowBack, ArrowForward} from "@material-ui/icons";
import { useTranslation } from "react-i18next";
export default function Works() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/blogging.png",
      title: t("blog"),
      desc: t("blog-Desc"),
      img: "./assets/blog.png",
    },
    {
      id: "2",
      icon: "./assets/smartphone.png",
      title: t("app"),
      desc:t("app-Desc"),
      img: "./assets/phoneWork.jpg", 
    },
    {
      id: "3",
      icon: "./assets/website.png",
      title: t("web"),
      desc: t("web-Desc"),
      img: "./assets/webWork.png",
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
                    <img src={d.icon} alt="" className="imgPhone" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <span>projects</span> */}
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
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
