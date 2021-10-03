import React from 'react'
import './menuwork.scss'
import { HashLink as Link}  from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'
export default function MenuWork({menuOpen,setMenuOpen}) {
    const { t } = useTranslation();
    return (
        <div className={"menu " +  (menuOpen && "active")}>
            <ul>
            <li onClick={()=>setMenuOpen(false)}>
                    <a href="/">{t("index")}</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#product">{t("intro")}</a>
                    {/* <Link to='#product'>{t("intro")}</Link> */}
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#story">{t("story")}</a>
                    {/* <Link to='#story'>{t("story")}</Link> */}
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#userflow">{t("userflow")}</a>
                {/* <Link to='#userflow'>{t("userflow")}</Link> */}
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#system">{t("system")}</a>
                {/* <Link to='#system'>{t("system")}</Link> */}
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#finalDesign">{t("finaldesign")}</a>
                {/* <Link to='#finalDesign'>{t("finaldesign")}</Link> */}
                </li>

            </ul>
        </div>
    )
}
