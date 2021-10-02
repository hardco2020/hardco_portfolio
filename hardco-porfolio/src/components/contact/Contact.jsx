import React from 'react'
import "./contact.scss"
import { useState } from 'react'
import Bounce from 'react-reveal/Bounce';
import { useTranslation } from 'react-i18next'
export default function Contact() {
    const { t } = useTranslation();
    const [message,setMessage] = useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
           <div className="left">
            <Bounce left duration={1000}>
               <img src="assets/selfie2.jpg" alt=""/>
            </Bounce>
           </div>
           <div className="right">
               <h2>{t("contact")}</h2>
               <form onSubmit={(e)=>handleSubmit(e)}>
                   <input type="text" placeholder={t("email")} className="text" />
                   <textarea placeholder={t("message")}></textarea>
                   <button type="submit">送出</button>
                   {message && <span>謝謝你的聯絡，我會盡快回覆</span>}
               </form>
            </div> 
        </div>
    )
}
