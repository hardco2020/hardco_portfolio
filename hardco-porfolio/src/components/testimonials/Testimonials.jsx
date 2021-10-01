import { ArrowForward, YouTube } from "@material-ui/icons";
import React from "react";
import "./testimonials.scss";
import { useTranslation } from 'react-i18next'
export default function Testimonials() {
  const { t } = useTranslation();
  const data = [
      {
          id:1,
          name:"Iren Chen",
          title:"Chinese Teacher",
          img:"./assets/avatar2.jpg",
          icon:"assets/facebook.png",
          desc:"讚"
      },
      {
        id:2,
        name:"Iren Chen",
        title:"Chinese Teacher",
        img:"./assets/avatar3.jpg",
        icon:"assets/facebook.png",
        desc:"讚",
        featured:true
      },
      {
        id:3,
        name:"Iren Chen",
        title:"Chinese Teacher",
        img:"assets/avatar4.jpeg",
        icon:"assets/facebook.png",
        desc:"讚",
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
            <ArrowForward className="imgLeft" />
            <img className="user" src={d.img} alt="" />
            <YouTube className="imgRight" />
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
