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
            <div className="titleSideBar">Тип устройства</div>
            <div className="type__choose">
              <div id="keyboard" className="type typeActive">/ Клавиатура</div>
              <div id="mouse" className="type typeActive">/ Мышь</div>
              <div className="type unactive">/ Камера</div>
              <div className="type unactive">/ Наушники</div>
              <div className="type unactive">/ Колонки</div>
              <div className="type unactive">/ Флеш-накопители</div>
            </div>
            <div className="titleSideBar">Бренд</div>
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
            <div className="product__name">Клавиатура1 </div>
            <div className="costAction">
                <div className="product__cost">5500 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          <div className="product keyboard">
            <img className="product__img" src={k[1]} alt="" />
            <div className="product__name">Клавиатура проводная Logitech Comfort K280E</div>
            <div className="costAction">
                <div className="product__cost">1399 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          <div className="product keyboard">
            <img className="product__img" src={k[2]} alt="" />
            <div className="product__name">Игровая клавиатура Logitech G213 Prodigy Gaming</div>
            <div className="costAction">
                <div className="product__cost">4999 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          <div className="product keyboard">
            <img className="product__img" src={k[3]} alt="" />
            <div className="product__name">Клавиатура беспроводная Logitech K380 Gray</div>
            <div className="costAction">
                <div className="product__cost">3199 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div> 
          <div className="product keyboard">
            <img className="product__img" src={k[4]} alt="" />
            <div className="product__name">Клавиатура проводная A4Tech FStyler Black/Grey</div>
            <div className="costAction">
                <div className="product__cost">1665 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          <div className="product keyboard">
            <img className="product__img" src={k[5]} alt="" />
            <div className="product__name">Клавиатура A4Tech Bloody B125N</div>
            <div className="costAction">
                <div className="product__cost">1455 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          <div className="product keyboard">
            <img className="product__img" src={k[6]} alt="" />
            <div className="product__name">Игровая клавиатура Defender Dominant GK-092L</div>
            <div className="costAction">
                <div className="product__cost">2190 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          <div className="product keyboard">
            <img className="product__img" src={k[7]} alt="" />
            <div className="product__name">Клавиатура Defender Element HB-190</div>
            <div className="costAction">
                <div className="product__cost">3900 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          {/* ///////////////////////////////////////////////// */}
          <div className="product mouse">
            <img className="product__img" src={m[0]} alt="" />
            <div className="product__name">Игровая мышь DELL CLUTCH GM08</div>
            <div className="costAction">
                <div className="product__cost">1299 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          <div className="product mouse">
            <img className="product__img" src={m[1]} alt="" />
            <div className="product__name">Мышь беспроводная Logitech M185 Grey</div>
            <div className="costAction">
                <div className="product__cost">1999 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          <div className="product mouse">
            <img className="product__img" src={m[2]} alt="" />
            <div className="product__name">Мышь беспроводная Logitech M190</div>
            <div className="costAction">
                <div className="product__cost">2899 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          <div className="product mouse">
            <img className="product__img" src={m[3]} alt="" />
            <div className="product__name">Игровая мышь A4Tech V8</div>
            <div className="costAction">
                <div className="product__cost">1199 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          <div className="product mouse">
            <img className="product__img" src={m[4]} alt="" />
            <div className="product__name">Игровая мышь A4Tech X-710BK Black</div>
            <div className="costAction">
                <div className="product__cost">2165 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          <div className="product mouse">
            <img className="product__img" src={m[5]} alt="" />
            <div className="product__name">Мышь беспроводная A4Tech FStyler FG30 Grey</div>
            <div className="costAction">
                <div className="product__cost">1849 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          <div className="product mouse">
            <img className="product__img" src={m[6]} alt="" />
            <div className="product__name">Мышь Dell D569</div>
            <div className="costAction">
                <div className="product__cost">3290 р.</div>
                <div className="action">В корзину</div>
            </div>
          </div>
          
      </div>
    </div>
  )
}
