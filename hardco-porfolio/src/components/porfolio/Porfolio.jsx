import React, { useState } from "react";
import PorfolioList from "../porfolioList/PorfolioList";
import "./porfolio.scss";
export default function Porfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "web",
      title: "網頁",
    },
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "app",
      title: "APP",
    },
    {
      id: "branding",
      title: "Branding",
    },
    {
      id: "designing",
      title: "Designing",
    },
  ];
  return (
    <div className="porfolio" id="porfolio">
      <h1>作品集</h1>
      <ul>
        {list.map((item) => (
          <PorfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/facebookClone_3.png" alt="" className="porfolioImg" />
          <h3>中山小幫手</h3>
        </div>
        <div className="item">
          <img src="assets/facebookClone_4.png" alt="" className="porfolioImg" />
          <h3>中山小幫手</h3>
        </div>
        <div className="item">
          <img src="assets/facebookClone_5.png" alt="" className="porfolioImg" />
          <h3>中山小幫手</h3>
        </div>
        <div className="item">
          <img src="assets/facebookClone_6.png" alt="" className="porfolioImg" />
          <h3>中山小幫手</h3>
        </div>
       
      
      </div>
    </div>
  );
}
