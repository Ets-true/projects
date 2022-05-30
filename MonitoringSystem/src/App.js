import React, { useState, createContext } from 'react';
import NavBar from './NavBar'
import Chart from './Chart'
import Skud from './Skud'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import phone from './img/phone.svg'
import Water from './Water';
import Moment from "react-moment";
import ReactAudioPlayer from 'react-audio-player';
import audio from "./img/alarm.mp3"



function App() {

  var warn
  const [value, onChange] = useState(new Date());

  const [State, setState] = useState([10, 0, 0, "00:00:00"]);
  
  const newState = [0, 0, 0, "00:00:00"]
  var otv;



  function subscribe() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://0meka0.hopto.org/", true);

    window.storage = {};
    window.storage.getXhr = xhr;

    xhr.onload = function () {
      otv = JSON.parse(this.responseText)
      console.log(otv)
      newState[0] = otv.Fire
      newState[1] = otv.Moisture
      newState[2] = otv.Motion
      newState[3] = otv.Time
      // console.log(newState[3])
      handleClick()
      setTimeout(subscribe, 500);
    }
    xhr.onerror = function () {
      // newState[1][0] = 100
      // handleClick()
      setTimeout(subscribe, 500);
    }
    xhr.send('');
    showAttention(newState)
    // xhr.abort();
  }
  subscribe();
  function handleClick() {
    setState(newState)
  }

  function showAttention(newState){
    // setTimeout(() => {
    //   console.log(newState)
    //   if(State[0]>470){
    //       console.log("nice")
    //       // document.location.href = "fire";
    //       document.querySelector('.attention__text').innerHTML = "Превышен допустимый уровень CO2 <br /> Возгорание в отсеке хранения №3"
    //   }
    //   if(State[1]>50){
    //     console.log("nice")
    //     document.querySelector('.attention__text').innerHTML = "Превышен допустим уровень влажности <br /> Протечка в отсеке погрузки"
    //   }
    //   if(State[2]>0){
    //     console.log("nice")
    //     document.querySelector('.attention__text').innerHTML = "Несанкционированный доступ <br /> Движение у главного входа"
    //   }
    //   document.querySelector('.attention').style.display = "block"

    // }, 500);
    
     
      // if(newState[1]>50){
      //   warning = "water" 
      //   document.querySelector('.attention').innerHTML = "Превышен допустим уровень влажности <br /> Протечка в отсеке погрузки"
      // }
      // if(newState[2]>0){
      //   warning = "skud" 
      //   document.querySelector('.attention').innerHTML = "Несанкционированный доступ <br /> Движение у главного входа"
      // } 
      // document.querySelector('.attention').style.display = "block"
  }

  function closeAttention(){
      console.log(State[0])

      // if(warning == "water"){
      //   document.location.href = "water";
      // }
      // if(warning == "skud"){
      //   document.location.href = "skud";
      // } 
      document.querySelector('.attention').style.display = "none"
  }


  

  
  


  return (
    <div className="main">
      <div className="attention">
        <div className="attention__wrap">
            <div className="attention__background"></div>
            <div className="attention__info">
              <div className="attention__text"></div>
              <div className="attention__button" onClick={closeAttention}>Закрыть</div>
              {/* <ReactAudioPlayer src={audio} autoPlay={true} controls={false} loop={true} listenInterval={5000}/> */}
            </div>
            
        </div>
      </div>
      <Router>
        <NavBar />
        <div className="clock">
          <Moment format="HH:mm:ss" interval={1000} />
        </div>
        <div className="chart">
          <Routes>
            <Route path="/fire" element={<Chart State={State} />} />
            <Route path="/water" element={<Water State={State}/>} />
            <Route path="/skud" element={<Skud State={State}/>} />
            <Route path="/" element={<Chart State={State} />} />
          </Routes>
        </div>
        <div className="calendarPersonal">
          <Calendar />
        </div>
        <div className="buttonPersonal buttonCalling1">
          <a href="tel: 89036217032"> 
          <div className="phone__icon"><img src={phone} alt=""></img></div>
          Помещение
          </a>
        </div>
        <div className="buttonPersonal buttonCalling2">
          <a href="tel: 89036217032">
            <div className="phone__icon"><img src={phone} alt=""></img></div>
            Служба 112
          </a>
        </div>
        <div className="developers">
          powered by<div className="department"><a href="https://departmentview.ru" target="_blank">department</a></div>
        </div>
      </Router>
      {/* <button onClick={showAttention}></button> */}
    </div>
  )
}

export default App;

