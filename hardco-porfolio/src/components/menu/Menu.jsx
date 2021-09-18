import React from 'react'
import './menu.scss'
export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu " +  (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">首頁</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#porfolio">作品集</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">專業領域</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">顧客評論</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">聯絡我</a>
                </li>

            </ul>
        </div>
    )
}
