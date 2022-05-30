import React from 'react'
import skladImg from './img/sklad2.jpg'
import fanSvg from './img/fan.svg'
import driver from './functions/driveUnit'

export default function Water({State}) {
    function lightUp(){
        var points = document.querySelectorAll(".point")
        points[2].style.backgroundColor = "red"
    }
    function lightDown(){
        var points = document.querySelectorAll(".point")
        points[2].style.backgroundColor = "grey"
    }
    var countDriver = 0;
    function driverFunc(){
        if(countDriver==0){
            driver("e")
            countDriver=1
        }else{
            driver("d")
            countDriver=0
        }
    }
   
    function light(){
      var points = document.querySelectorAll(".point")
      if(State[1]>=50){
          points[2].style.backgroundColor = "red"
      }else{
          points[2].style.backgroundColor = "green"
      }
    }
  
    setTimeout(() => {
      light();
    }, 300);
    document.addEventListener("DOMContentLoaded",light);
    // light()

    console.log(State[1])
  return (
    <div className='body__wrapper'>
        <div className="component__title">Герметичность</div>
        <div className='waterBody'>
          <img src={skladImg} alt="" className='waterImg'/>
          <div className="point p1"></div>
          <div className="point p2"></div>
          <div className="point p3"></div>
          <div className="point p4"></div>
          <div className="point p5"></div>
        </div>
        <div className="buttonPersonal buttonReaction"  onClick={driverFunc} >
              <div className="phone__icon"><img src={fanSvg} alt=""></img></div>
              Вентилятор
        </div>
    </div>
  )
}
