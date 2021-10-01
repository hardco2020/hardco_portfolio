import React from 'react'
import './menu.scss'
import { useTranslation } from 'react-i18next'
export default function Menu({menuOpen,setMenuOpen}) {
    const { t } = useTranslation();
    return (
        <div className={"menu " +  (menuOpen && "active")}>
            <ul>
            <li onClick={()=>setMenuOpen(false)}>
                    <a href="/aboutme">{t("aboutme")}</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">{t("index")}</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#porfolio">{t("portfolio")}</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">{t("work")}</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">{t("comment")}</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">{t("contact")}</a>
                </li>

            </ul>
        </div>
    )
}
