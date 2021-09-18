import React from 'react'
import './porfolioList.scss'
export default function PorfolioList({id,title,active,setSelected}) {
    return (
        <li className={active ? "porfolioList active" : "porfolioList"} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
