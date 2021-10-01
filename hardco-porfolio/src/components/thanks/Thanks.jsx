import React from 'react'
import './thanks.scss'
import Spin from 'react-reveal/Spin';

export default function Thanks() {
    return (
        <div className="thanks" id="slogan">
            <div className="left">
                <div className="imgContainerLeft">
                    <img src="assets/surf.JPG" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="upper">
                {/* <ScrollAnimation
                    animateIn="fadeInLeft"
                > */}
                <Spin>
                    <div>
                    <h1 className="slogan">
                    The Life is about challenge yourself 
                    to make the impossible again and again.
                    </h1>
                    </div>
                </Spin>
                {/* </ScrollAnimation> */}
                </div>
                <div className="down">
                    <img src="assets/adventure.gif" alt="" className="gif"/>
                </div>
            </div>
            <div className="right">
                <div className="imgContainerRight">
                    <img src="assets/surf2.JPG" alt="" />
                </div>
            </div>
        </div>
    )
}
