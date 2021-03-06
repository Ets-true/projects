import React, { useState } from 'react'
import k from './imgKeyboard.js';
import m from './imgMouse.js'

export default function Shop() {
  const [Choise, setChoise] = useState(["unchosen", "All", "unchosen", "All"]);
  setTimeout(() => {
    document.querySelectorAll('.typeActive').forEach(element => {
      element.addEventListener('click', function (){
        if(Choise[0]=="unchosen"){
          var newChoise = ["chosen", element.id, Choise[2], Choise[3]]
          setChoise(newChoise)
          document.querySelectorAll('.product').forEach(product => {
              if(product.classList.contains(element.id)){
                if(product.classList.contains("none")){
                  product.classList.remove("none")
                }
              }else{
                product.classList.add("none")
              }
          })
          element.style.borderBottom = "1px rgba(48, 213, 199, 0.79) solid"
        }
        if(Choise[0]=="chosen"){
          if(element.id == Choise[1]){
            var newChoise = ["unchosen", "All", Choise[2], Choise[3]]
            setChoise(newChoise)
            document.querySelectorAll('.product').forEach(product => {
              if(product.classList.contains("none")){
                product.classList.remove("none")
              }
            })
            element.style.borderBottom = "0px rgba(48, 213, 199, 0.79) solid"
          } else{
            document.getElementById(Choise[1]).style.borderBottom = "0px rgba(48, 213, 199, 0.79) solid"
            var newChoise = ["chosen", element.id, Choise[2], Choise[3]]
            setChoise(newChoise)
            document.querySelectorAll('.product').forEach(product => {
              if(product.classList.contains(element.id)){
                if(product.classList.contains("none")){
                  product.classList.remove("none")
                }
              }else{
                product.classList.add("none")
              }
            })
          }
          
          
        }
          
      })
    })
  }, 300);
  setTimeout(() => {
    document.querySelectorAll('.brand').forEach(element => {
      element.addEventListener('click', function (){
          // alert(element.id)
      })
    })
  }, 300)
  var basket = [];
  setTimeout(() => {
    document.querySelectorAll('.action').forEach(element => {
      element.addEventListener('click', function (){
        var newItem = {
          "name": element.parentElement.previousSibling.textContent,
          "cost": element.previousSibling.textContent,
          "img": element.parentElement.previousSibling.previousSibling.getAttribute('src')
        }
        basket.push(newItem)
        localStorage.setItem('basket',  JSON.stringify(basket));
        console.log(JSON.parse(localStorage.getItem('basket')))
      })
    })
  }, 300);
  return (
    <div>
        <div className="sidebar">
            <div className="titleSideBar">?????? ????????????????????</div>
            <div className="type__choose">
              <div id="keyboard" className="type typeActive">/ ????????????????????</div>
              <div id="mouse" className="type typeActive">/ ????????</div>
              <div className="type unactive">/ ????????????</div>
              <div className="type unactive">/ ????????????????</div>
              <div className="type unactive">/ ??????????????</div>
              <div className="type unactive">/ ????????-????????????????????</div>
            </div>
            <div className="titleSideBar">??????????</div>
            <div className="type__choose">
              <div className="brand unactive">/ A4Tech</div>
              <div className="brand unactive">/ Dell</div>
              <div className="brand unactive">/ Logitech</div>
              <div className="brand unactive">/ Apple</div>
              <div className="brand unactive">/ Defender</div>
              <div className="brand unactive">/ Oklick</div>
            </div>
      </div>
      <div className="content">
          <div className="product keyboard">
            <img className="product__img" src={k[0]} alt="" />
            <div className="product__name">????????????????????1 </div>
            <div className="costAction">
                <div className="product__cost">5500 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          <div className="product keyboard">
            <img className="product__img" src={k[1]} alt="" />
            <div className="product__name">???????????????????? ?????????????????? Logitech Comfort K280E</div>
            <div className="costAction">
                <div className="product__cost">1399 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          <div className="product keyboard">
            <img className="product__img" src={k[2]} alt="" />
            <div className="product__name">?????????????? ???????????????????? Logitech G213 Prodigy Gaming</div>
            <div className="costAction">
                <div className="product__cost">4999 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          <div className="product keyboard">
            <img className="product__img" src={k[3]} alt="" />
            <div className="product__name">???????????????????? ???????????????????????? Logitech K380 Gray</div>
            <div className="costAction">
                <div className="product__cost">3199 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div> 
          <div className="product keyboard">
            <img className="product__img" src={k[4]} alt="" />
            <div className="product__name">???????????????????? ?????????????????? A4Tech FStyler Black/Grey</div>
            <div className="costAction">
                <div className="product__cost">1665 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          <div className="product keyboard">
            <img className="product__img" src={k[5]} alt="" />
            <div className="product__name">???????????????????? A4Tech Bloody B125N</div>
            <div className="costAction">
                <div className="product__cost">1455 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          <div className="product keyboard">
            <img className="product__img" src={k[6]} alt="" />
            <div className="product__name">?????????????? ???????????????????? Defender Dominant GK-092L</div>
            <div className="costAction">
                <div className="product__cost">2190 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          <div className="product keyboard">
            <img className="product__img" src={k[7]} alt="" />
            <div className="product__name">???????????????????? Defender Element HB-190</div>
            <div className="costAction">
                <div className="product__cost">3900 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          {/* ///////////////////////////////////////////////// */}
          <div className="product mouse">
            <img className="product__img" src={m[0]} alt="" />
            <div className="product__name">?????????????? ???????? DELL CLUTCH GM08</div>
            <div className="costAction">
                <div className="product__cost">1299 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          <div className="product mouse">
            <img className="product__img" src={m[1]} alt="" />
            <div className="product__name">???????? ???????????????????????? Logitech M185 Grey</div>
            <div className="costAction">
                <div className="product__cost">1999 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          <div className="product mouse">
            <img className="product__img" src={m[2]} alt="" />
            <div className="product__name">???????? ???????????????????????? Logitech M190</div>
            <div className="costAction">
                <div className="product__cost">2899 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          <div className="product mouse">
            <img className="product__img" src={m[3]} alt="" />
            <div className="product__name">?????????????? ???????? A4Tech V8</div>
            <div className="costAction">
                <div className="product__cost">1199 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          <div className="product mouse">
            <img className="product__img" src={m[4]} alt="" />
            <div className="product__name">?????????????? ???????? A4Tech X-710BK Black</div>
            <div className="costAction">
                <div className="product__cost">2165 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          <div className="product mouse">
            <img className="product__img" src={m[5]} alt="" />
            <div className="product__name">???????? ???????????????????????? A4Tech FStyler FG30 Grey</div>
            <div className="costAction">
                <div className="product__cost">1849 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          <div className="product mouse">
            <img className="product__img" src={m[6]} alt="" />
            <div className="product__name">???????? Dell D569</div>
            <div className="costAction">
                <div className="product__cost">3290 ??.</div>
                <div className="action">?? ??????????????</div>
            </div>
          </div>
          
      </div>
    </div>
  )
}
