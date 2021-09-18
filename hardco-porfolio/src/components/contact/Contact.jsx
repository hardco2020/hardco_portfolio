import React from 'react'
import "./contact.scss"
export default function Contact() {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <div className="contact" id="contact">
           <div className="left">
               <img src="assets/selfie2.jpg" alt=""/>
           </div>
           <div className="right">
               <h2>Contact.</h2>
               <form onSubmit={(e)=>handleSubmit(e)}>
                   <input type="text" placeholder="Email" className="text" />
                   <textarea placeholder="Message"></textarea>
                   <button type="submit">送出</button>
               </form>
            </div> 
        </div>
    )
}
