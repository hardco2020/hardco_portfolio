import React from 'react'
import { Build } from '@material-ui/icons'
import "./story.scss"
import Zoom from 'react-reveal/Zoom';
import { useTranslation } from 'react-i18next'
export default function Story({workData}) {
    const { t } = useTranslation();
    return (
        <div className="story" id="story">
            <div className="left">
                <p className="code">
                    01
                </p>
            </div>
            <div className="right">
                <div className="content">
                    <p className="title">
                        {t("story")}
                    </p>
                    <Zoom left cascade>
                    <div>
                    {workData.story.map((s)=>{
                        return(
                            <div className="featured">
                            <Build className="featuredIcon"/>
                             {s.title}
                            </div>
                        )
                    })}
                    </div>
                    </Zoom>
                    
                    
                </div>
            </div>
        </div>
    )
}
