import React from "react";
import "./userflow.scss";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button } from "@material-ui/core";
import { ZoomIn, ZoomOut } from "@material-ui/icons";
import Rotate from 'react-reveal/Rotate'
import { useTranslation } from 'react-i18next'
export default function Userflow({workData}) {
  const { t } = useTranslation();
  return (
    <div className="userflow" id="userflow">
      <div className="title">
        <p className="code">02 {t("userflow")}</p>
      </div>
      <Rotate bottom left cascade>
      <div className="content">
        {workData.userflow.map((u)=>{
          return(
          <div className="contentImg">
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <div className="tools">
                  <Button
                    variant="contained"
                    onClick={() => zoomIn()}
                    startIcon={<ZoomIn />}
                    className="toolButton"
                  >
                    In
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => zoomOut()}
                    startIcon={<ZoomOut />}
                    className="toolButton"
                  >
                    Out
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => resetTransform()}
                    className="toolButton"
                  >
                    Reset
                  </Button>
                </div>
                <TransformComponent>
                  <img src={"../"+u.img} alt="" className="pic1" />
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
        
        )})}

        
      </div>
      </Rotate>
    </div>
  );
}
