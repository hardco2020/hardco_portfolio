import React from 'react'
import './menuMe.scss'
import { HashLink as Link}  from 'react-router-hash-link'
import { useTranslation } from 'react-i18next'
export default function MenuMe({menuOpen,setMenuOpen}) {
    const { t } = useTranslation();
    return (
        <div className={"menu " +  (menuOpen && "active")}>
            <ul>
            <li onClick={()=>setMenuOpen(false)}>
                    <Link to='#about'>{t("aboutme")}</Link>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                    <a href="/">{t("index")}</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <Link to='#goal'>{t("goal")}</Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <Link to='#experience'>{t("experience")}</Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <Link to='#skill'>{t("skill")}</Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                <Link to='#slogan'>{t("slogan")}</Link>
                </li>

            </ul>
        </div>
    )
}
