import React, { useState } from 'react'


export default function Editor() {

    const [Edit, setEdit] = useState(["classicForm", "whiteColor", "noLed"]);
    setTimeout(() => {
        document.querySelectorAll('.formFactor').forEach(element => {
            element.addEventListener('click', function (){
                if(element.id != Edit[0]){
                    // alert(Edit[0])
                    if(element.id=="classicForm"){
                        if(document.querySelector('.touchPad').style.display=='block'){
                            document.querySelector('.touchPad').style.display="none"
                        }
                    } else if(element.id=="touchPad"){
                        if(document.getElementById('touchPadPanel').style.display=='' || document.getElementById('touchPadPanel').style.display=='none' ){
                            document.getElementById('touchPadPanel').style.display="block"
                        }
                    }
                    document.getElementById(Edit[0]).style.borderBottom = "0px rgba(48, 213, 199, 0.6) solid"
                    element.style.borderBottom = "1px rgba(48, 213, 199, 0.6) solid"
                    var newEdit = [element.id, Edit[1], Edit[2]]
                    setEdit(newEdit)
                    
                }
            })
        })
        document.querySelectorAll('.colorFactor').forEach(element => {
            element.addEventListener('click', function (){
                if(element.id != Edit[1]){
                    if(element.id=="whiteColor"){
                        document.querySelector('.keyboardEditor').style.backgroundColor="white" 
                    } else if(element.id=="spaceGreyColor"){
                        document.querySelector('.keyboardEditor').style.backgroundColor="grey" 
                    }else if(element.id=="pinkColor"){
                        document.querySelector('.keyboardEditor').style.backgroundColor="pink" 

                    }

                    document.getElementById(Edit[1]).style.borderBottom = "0px rgba(48, 213, 199, 0.6) solid"
                    element.style.borderBottom = "1px rgba(48, 213, 199, 0.6) solid"
                    var newEdit = [Edit[0], element.id, Edit[2]]
                    setEdit(newEdit)
                }
            })
        })
        document.querySelectorAll('.ledFactor').forEach(element => {
            element.addEventListener('click', function (){
                if(element.id != Edit[2]){
                    if(element.id=="Led"){
                        document.querySelectorAll('li').forEach(element =>{
                            element.style.animation = "rgbLed 7s infinite"
                        })
                    } else if(element.id=="noLed"){
                        document.querySelectorAll('li').forEach(element =>{
                            element.style.animation = "rgbLed 7s 0"
                        })
                    }

                    document.getElementById(Edit[2]).style.borderBottom = "0px rgba(48, 213, 199, 0.6) solid"
                    element.style.borderBottom = "1px rgba(48, 213, 199, 0.6) solid"
                    var newEdit = [Edit[0], Edit[2], element.id]
                    setEdit(newEdit)
                }
            })
        })
    }, 300)


  return (
    <div>
        <div className="sidebar">
            <div className="titleSideBar">Тип клавиатуры</div>
            <div className="type__choose">
                <div id="classicForm" className="type formFactor typeActive">Классический</div>
                <div className="type formFactor unactive">Развернутая</div>
                <div id="touchPad" className="type formFactor typeActive">С тачпадом</div>
            </div>
            <div className="titleSideBar">Выбор цвета</div>
            <div className="type__choose">
                <div id="whiteColor" className="type colorFactor typeActive df">Белый<div className="color w"></div></div>
                <div id="spaceGreyColor" className="type colorFactor typeActive df">Серый космос <div className="color sg"></div></div>
                <div id="pinkColor" className="type colorFactor typeActive df">(PRODUCT)PINK<div className="color pink"></div></div>

            </div>
            <div className="titleSideBar">Подсветка</div>
            <div className="type__choose">
                <div id="Led" className="type ledFactor typeActive">Классическая RGB</div>
                <div id="noLed" className="type ledFactor typeActive">Без подсветки</div>
            </div>
        </div>
        <div className="editor__body">
            <div className="keyboardEditor">
            <ul id="keyboardPanel">
                <li className="symbol"><span className="off">`</span><span className="on">~</span></li>
                <li className="symbol"><span className="off">1</span><span className="on">!</span></li>
                <li className="symbol"><span className="off">2</span><span className="on">@</span></li>
                <li className="symbol"><span className="off">3</span><span className="on">#</span></li>
                <li className="symbol"><span className="off">4</span><span className="on">$</span></li>
                <li className="symbol"><span className="off">5</span><span className="on">%</span></li>
                <li className="symbol"><span className="off">6</span><span className="on">^</span></li>
                <li className="symbol"><span className="off">7</span><span className="on">*;</span></li>
                <li className="symbol"><span className="off">8</span><span className="on">*</span></li>
                <li className="symbol"><span className="off">9</span><span className="on">(</span></li>
                <li className="symbol"><span className="off">0</span><span className="on">)</span></li>
                <li className="symbol"><span className="off">-</span><span className="on">_</span></li>
                <li className="symbol"><span className="off">=</span><span className="on">+</span></li>
                <li className="delete lastitem">delete</li>
                <li className="tab">tab</li>
                <li className="letter">q</li>
                <li className="letter">w</li>
                <li className="letter">e</li>
                <li className="letter">r</li>
                <li className="letter">t</li>
                <li className="letter">y</li>
                <li className="letter">u</li>
                <li className="letter">i</li>
                <li className="letter">o</li>
                <li className="letter">p</li>
                <li className="symbol"><span className="off">[</span><span className="on">f</span></li>
                <li className="symbol"><span className="off">]</span><span className="on">f</span></li>
                <li className="symbol lastitem"><span className="off">\</span><span className="on">|</span></li>
                <li className="capslock">caps lock</li>
                <li className="letter">a</li>
                <li className="letter">s</li>
                <li className="letter">d</li>
                <li className="letter">f</li>
                <li className="letter">g</li>
                <li className="letter">h</li>
                <li className="letter">j</li>
                <li className="letter">k</li>
                <li className="letter">l</li>
                <li className="symbol"><span className="off">;</span><span className="on">:</span></li>
                <li className="symbol"><span className="off">'</span><span className="on">&quot;</span></li>
                <li className="return lastitem">return</li>
                <li className="left-shift">shift</li>
                <li className="letter">z</li>
                <li className="letter">x</li>
                <li className="letter">c</li>
                <li className="letter">v</li>
                <li className="letter">b</li>
                <li className="letter">n</li>
                <li className="letter">m</li>
                <li className="symbol"><span className="off">,</span><span className="on">&lt;</span></li>
                <li className="symbol"><span className="off">.</span><span className="on">&gt;</span></li>
                <li className="symbol"><span className="off">/</span><span className="on">?</span></li>
                <li className="right-shift lastitem">shift</li>
                <li className="space lastitem">space</li>
            </ul>
            <div id='touchPadPanel' className="touchPad">

            </div>
            </div>
            <div className="action save">Сохранить</div>
        </div>
    </div>
  )
}
