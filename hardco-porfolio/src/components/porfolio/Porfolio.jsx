import React, { useEffect, useState } from "react";
import PorfolioList from "../porfolioList/PorfolioList";
import "./porfolio.scss";
import { webPorfolio,blogPorfolio,appPorfolio,microService } from '../../work'
import { useHistory } from 'react-router-dom'
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import Zoom from 'react-reveal/Zoom'
export default function Porfolio() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [selected, setSelected] = useState("featured");
  const [currentData,setCurrentData] = useState([]);
  const history = useHistory();
  const list = [
    {
      id: "web",
      title: t("web"),
    },
    {
      id: "app",
      title: "APP",
    },
    {
      id: "blog",
      title: t("blog"),
    },
    {
      id:"microService",
      title:t("microservice")
    }
  ];
  const toMyWork = (work)=>{
    history.push({
      pathname:`/mywork/${work.title}`,
      // state: { workData:work}
    })
  }

  useEffect(() => {
    switch(selected){
      case "web":
        setCurrentData(webPorfolio)
        break;
      case "app":
        setCurrentData(appPorfolio)
        break;
      case "blog":
        setCurrentData(blogPorfolio)
        break;
      case "microService":
        setCurrentData(microService)
        break;
      default:
        setCurrentData(webPorfolio)
    }

  }, [selected])

  return (
    <div className="porfolio" id="porfolio">
      <h1>{t("portfolio")}</h1>
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
      <Zoom spy={currentData}>
      <div className="container">
        {currentData.map((work)=>{
          if(work.featured!==undefined){
            console.log(work.featured)
            return(
              <div className="item">
                <img src={work.productImg} alt="" className="porfolioImg" />
                <h3 onClick={()=>toMyWork(work)}>{work.title}</h3>
              </div>
            )
          }else{
            if(work.mobilesize===true){
              if (isMobile===false){
                return(
                  <div className="item" style={{width:"225px",height:"450px"}}>
                    <img src={work.productImg} alt="" className="porfolioImg" style={{width:"90%",height:"90%"}}/>
                    <h3><a href={work.url}>{work.title}</a></h3>
                  </div>
                )
              }else{
                return(
                  <div className="item" style={{width:"110px",height:"220px"}}>
                    <img src={work.productImg} alt="" className="porfolioImg" style={{width:"90%",height:"90%"}}/>
                    <h3><a href={work.url}>{work.title}</a></h3>
                  </div>
                )
              }
            }else{
              return(
                <div className="item">
                  <img src={work.productImg} alt="" className="porfolioImg"/>
                  <h3><a href={work.url}>{work.title}</a></h3>
                </div>
              )
            }
          }
        })}
        {/* <div className="item">
          <img src="assets/facebookClone_3.png" alt="" className="porfolioImg" />
          <h3 onClick={()=>toMyWork()}>HardCo.Social</h3>
        </div>
        <div className="item">
          <img src="assets/hardco-todo.png" alt="" className="porfolioImg" />
          <h3>HardCo.Todo</h3>
        </div>
        <div className="item">
          <img src="assets/facebookClone_5.png" alt="" className="porfolioImg" />
          <h3>中山小幫手</h3>
        </div>
        <div className="item">
          <img src="assets/facebookClone_6.png" alt="" className="porfolioImg" />
          <h3>中山小幫手</h3>
        </div> */}
       
      
      </div>
      </Zoom>
    </div>
  );
}
