import { ArrowForward, YouTube } from "@material-ui/icons";
import React from "react";
import "./testimonials.scss";
export default function Testimonials() {
  const data = [
      {
          id:1,
          name:"Iren Chen",
          title:"Chinese Teacher",
          img:"./assets/avatar.jpg",
          icon:"assets/facebook.png",
          desc:"讚"
      },
      {
        id:2,
        name:"Iren Chen",
        title:"Chinese Teacher",
        img:"./assets/avatar.jpg",
        icon:"assets/facebook.png",
        desc:"讚",
        featured:true
      },
      {
        id:3,
        name:"Iren Chen",
        title:"Chinese Teacher",
        img:"assets/avatar.jpg",
        icon:"assets/facebook.png",
        desc:"讚",
    }
  ]
  return (
    <div className="testimonials" id="testimonials">
      <h1>顧客評論</h1>
      <div className="container">
        {data.map((d)=>(
        <div className={d.featured ? "card featured" : "card"}>
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
    </div>
  );
}
