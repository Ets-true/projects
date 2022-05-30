import React, {useState} from 'react'
import doorSvg from './img/door.svg'
import driver from './functions/driveUnit'



export default function Chart({State}) {
    
    

    var FireStateStart = [[10,"10:20:00"], [10,"10:20:05"], [10,"10:20:10"], [10,"10:20:15"], [10,"10:20:20"], [10,"10:20:25"], [10,"10:20:30"], [10,"10:20:35"], [10,"10:20:40"]]
    const [FireState,setFireState] = useState(FireStateStart);
    
    let FireStateWork = FireState;

    FireStateWork.splice(0, 1)
    var NewData = [State[0], State[3]]
    FireStateWork.push(NewData)
    
    function changeColumns(){
        var obj = document.querySelectorAll(".filling")
        var time = document.querySelectorAll(".time")
        obj.forEach(function(item, i, arr) {
            item.style.height = FireStateWork[i][0]*10 + "px";
            if(FireStateWork[i][0]>=470){
                item.style.backgroundColor = "red"
                item.style.opacity = "0.6"
            }else{
                item.style.backgroundColor = "purple"
                item.style.opacity = "0.3"
            }
            time[i].innerHTML = FireStateWork[i][1]
        }) 
    }
    document.addEventListener("DOMContentLoaded",changeColumns );
    changeColumns()
    var countDriver = 0;
    // localStorage.setItem("countDriverFire", 0);
    // localStorage.setItem("countDriverWater", 0);
    // localStorage.setItem("countDriver", 0);
    function driverFunc(){
        if(countDriver==0){
            driver("o", "w")
            countDriver=1
        }else{
            driver("b", "n")
            countDriver=0
        }
    }
  return (
    <div className='body__wrapper'>
        <div className="component__title">Пожарная безопасность</div>
        <div className='chart__body'>
            <div className="chart__X"></div>
            <div className="chart__Y"></div>
            <div className="limit">
                <div className="limit__text">Допустимый предел</div>
                <div className="limit__line"></div>
                <div className="limit__line_punctir"></div>
            </div>
            <div className="XY__body">
                <div className="XY__body_wrapper">
                    <div className="capacity">
                        <div className="filling _1"></div>
                        <div className="time"></div>
                    </div>
                    <div className="capacity">
                        <div className="filling _2"></div>
                        <div className="time"></div>
                    </div>
                    <div className="capacity">
                        <div className="filling _3"></div>
                        <div className="time"></div>
                    </div>
                    <div className="capacity">
                        <div className="filling _4"></div>
                        <div className="time"></div>
                    </div>
                    <div className="capacity">
                        <div className="filling _5"></div>
                        <div className="time"></div>
                    </div>
                    <div className="capacity">
                        <div className="filling _6"></div>
                        <div className="time"></div>
                    </div>
                    <div className="capacity">
                        <div className="filling _7"></div>
                        <div className="time"></div>
                    </div>
                    <div className="capacity">
                        <div className="filling _8"></div>
                        <div className="time"></div>
                    </div>
                    <div className="capacity">
                        <div className="filling _9"></div>
                        <div className="time"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="buttonPersonal buttonReaction" onClick={driverFunc}>
            <div className="phone__icon"><img src={doorSvg} alt=""></img></div>
            Двери
        </div>
    </div>
  )
}
