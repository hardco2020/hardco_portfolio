import React from "react";
import "./testimonials.scss";
import { useTranslation } from 'react-i18next'
export default function Testimonials() {
  const { t } = useTranslation();
  const data = [
      {
          id:1,
          name:"鄭竹秀",
          title:t("testimonial1_title"),
          img:"./assets/testimonials/testimonial2.png",
          icon:"assets/facebook.png",
          desc:t("testimonial1_desc"),
      },
      {
        id:2,
        name:"江明軒",
        title:t("testimonial2_title"),
        img:"./assets/testimonials/testimonial3.jpg",
        icon:"assets/facebook.png",
        desc:t("testimonial2_desc"),
        featured:true
      },
      {
        id:3,
        name:"陳妍君",
        title:t("testimonial3_title"),
        img:"./assets/testimonials/testimonial3.png",
        icon:"assets/facebook.png",
        desc:t("testimonial3_desc"),
    }
  ]
  return (
    <div className="testimonials" id="testimonials">
      <h1>{t("comment")}</h1>
      {/* <Zoom right cascade transition="all 2s ease"> */}
      <div className="container">
        {data.map((d)=>(
        // <div className={d.featured ? "card featured" : "card"}>
        <div className="card">
          <div className="top">
            {/* <ArrowForward className="imgLeft" /> */}
            <img className="user" src={d.img} alt="" />
            {/* <YouTube className="imgRight" /> */}
          </div>
          <div className="center">
           {d.desc}
          </div>
          <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
      {/* </Zoom> */}
    </div>
  );
}
