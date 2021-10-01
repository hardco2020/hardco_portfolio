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
                    <Link to='#product'>{t("intro")}</Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <Link to='#story'>{t("story")}</Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <Link to='#userflow'>{t("userflow")}</Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <Link to='#system'>{t("system")}</Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <Link to='#finalDesign'>{t("finaldesign")}</Link>
                </li>

            </ul>
        </div>
    )
}
