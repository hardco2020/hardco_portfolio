import React from "react";
import "./about.scss";
import { Star, Stars } from "@material-ui/icons";
import Flip from 'react-reveal/Flip';
import {useTranslation} from 'react-i18next'
export default function About() {
  const { t } = useTranslation();
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundImage: `url("assets/ocean.png")` }}
    >
      <div className="left">
      {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
      <Flip left>
        <div className="imageContainer">
        
          <img src="assets/selfie_2.jpg" alt="" /> 
        </div>
      </Flip>
      </div>
      <div className="right">
        <div className="title">
          <div className="rate">
            <Star className="rateIcon" />
            <Star className="rateIcon" />
            <Star className="rateIcon" />
            <Star className="rateIcon" />
            <Star className="rateIcon" />
          </div>
          <div className="name">{t("title")}</div>
        </div>
        <div className="content">
          <p className="subtitle">
            {t("desc")}
          </p>
          <div className="featured">
            <Stars className="featuredIcon" />
            {t("point1")}
            {/* 我專精於React/Express的全端開發設計，努力學習並開發能夠回饋社會的應用。 */}
          </div>
          <div className="featured">
            <Stars className="featuredIcon" />
            {t("point2")}
          </div>
          <div className="featured">
            <Stars className="featuredIcon" />
            {t("point3")}
          </div>
          <div className="featured">
            <Stars className="featuredIcon" />
            {t("point4")}
          </div>
          <div className="featured">
            <Stars className="featuredIcon" />
            {t("point5")}
          </div>
        </div>
      </div>
    </div>
  );
}
