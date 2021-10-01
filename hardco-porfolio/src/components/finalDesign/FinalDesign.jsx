import React from 'react'
import './finalDesign.scss'
import Roll from 'react-reveal/Roll';
import { useTranslation } from 'react-i18next'
export default function FinalDesign({workData}) { 
    const { t } = useTranslation();
    return (
        <div className="finalDesign" id="finalDesign">
            <div className="title">
                <p className="code">
                    04 {t("finaldesign")}
                </p>
            </div>
            <Roll left cascade>
            <div className="content">
                {workData.finalDesign.map((f)=>{
                    return(
                            <img src={"../"+f.link} alt="" />
                    )
                })}
            </div>
            </Roll>
        </div>
    )
}
