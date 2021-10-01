import React from "react";
import "./system.scss";
import { MenuBook } from "@material-ui/icons";
import { useTranslation } from 'react-i18next'
export default function System({workData}) {
  const { t } = useTranslation();
  return (
    <div className="system" id="system">
      <div className="title">
        <p className="code">03 {t("system")}</p>
      </div>
      <div className="content">
        {workData.system.map((work)=>{
          return(
            <div className="card">
              <div className="iconArea">
                <img src={"../"+work.languageIcon} alt="" className="icon" />
              </div>
              <div className="featureArea">
              {work.library.map((l)=>{
                return(
                  <div className="featured">
                    <MenuBook className="featuredIcon"/>
                         {l.title}
                    </div>
                )
              })} 
              </div>
          </div>
          )
        })}
      </div>
    </div>
  );
}
