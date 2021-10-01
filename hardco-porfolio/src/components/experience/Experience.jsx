import React from 'react'
import './experience.scss'
import Zoom from 'react-reveal/Zoom';     
import {useTranslation} from 'react-i18next'
export default function Experience() {
    const { t } = useTranslation();
    return (
        <div className="experience" id="experience">
            <div className="title">
                <p className="titleFont">{t("experience")}</p>
            </div>
            <div className="content">
                <div className="contentLeft">
                    <div className="time">
                        2020 - 2021
                    </div>
                    <div className="time">
                        2020 - 2021
                    </div>
                    <div className="time">
                        2019 - 2020
                    </div>
                    <div className="time">
                        2019 - 2020
                    </div>
                </div>
                <div className="contentCenter">
                    <view className="verticalLine">|</view>
                    {/* <img src="assets/minus.png" alt="" /> */}
                </div>
                <div className="contentRight">
                <Zoom left cascade>
                    <div className="wrapItem">
                        <div className="item">
                        {t("experience1")}
                        </div>
                        <div className="item">
                        {t("experience2")}
                        </div>
                        <div className="item">
                        {t("experience3")}
                        </div>
                        <div className="item">
                        {t("experience4")}
                        </div>
                    </div>
                </Zoom>
                </div>
            </div>
        </div>
    )
}
