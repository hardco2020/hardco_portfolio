import React from "react";
import "./goal.scss";
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import { useMediaQuery } from 'react-responsive'
import {useTranslation} from 'react-i18next'
export default function Goal() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })
  console.log(isMobile)
  return (
    <div className="goal" id="goal">
      <div className="left">
        <Slide left>
          <div className="title">
            <p className="titleFont">{t("goal_title")}</p>
          </div>
        </Slide>
        <div className="imgContainer1">
          <img src={isMobile ? "assets/goal_9.jpg": "assets/blog.png"} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
        <img src={isMobile ? "assets/goal_6.jpeg": "assets/goal_7.jpeg"} alt="" />
        </div>
        <div className="content">
            <p className="titleFont">
            <Rotate top right cascade >
              <div>
                <p className="contents">{t("goal1")}</p>
                <p className="contents">{t("goal2")}</p>
                <p className="contents">{t("goal3")}</p>
                </div>
            </Rotate>
            </p>
        </div>
      </div>
    </div>
  );
}
