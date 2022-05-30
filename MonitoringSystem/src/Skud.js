import React from 'react'
// import video from "./img/sklad.mp4"
import Video from "./Video"
import sklad1 from "./img/sklad1.jpg"
// import "node_modules/video-react/dist/video-react.css";
// import { Player } from 'video-react';
import lightSvg from './img/light.svg'
import driver from './functions/driveUnit'

export default function Skud({State}) {
    
    function motion(){
        var cameras = document.querySelectorAll(".camera")
        if(State[2]==1){
            cameras[2].style.border = "2px solid red"
        }else{
            cameras[2].style.border = "0px solid red"
        }
    }
    // console.log(State[2])
    setTimeout(() => {
        motion();
    }, 300);
    document.addEventListener("DOMContentLoaded",motion);
    // motion()
    
    var countDriver = 0;
    function driverFunc(){
        if(countDriver==0){
            driver("m")
            countDriver=1
        }else{
            driver("p")
            countDriver=0
        }
    }
    return (
        <div className='body__wrapper '>
            <div className="component__title">Контроль доступа</div>
            <div className="skud__body">
                <div id="camera1" className="camera">
                    <div className="mask"></div>
                    <Video />
                </div>
                <div id="camera2" className="camera">
                    <div className="mask"></div>
                </div>
                <div id="camera3" className="camera">
                    <div className="mask"></div>
                </div>
                <div id="camera4" className="camera">
                    <div className="mask"></div>
                </div>
            </div>


            <div className="buttonPersonal buttonReaction"  onClick={driverFunc} >
                <div className="phone__icon"><img src={lightSvg} alt=""></img></div>
                Освещение
            </div>
        </div>
    )
}
