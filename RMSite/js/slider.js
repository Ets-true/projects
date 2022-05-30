$('.slider__sliderBody').slick({
    slidesToShow: 3,
    speed: 1000,
    nextArrow: '.slider__button_right',
    prevArrow: '.slider__button_left',
    dots: false,
    infinite: false,
    focusOnSelect: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});

// $('.slider__sliderBody_mobile').slick({
//     slidesToShow: 1,
//     speed: 1000,
//     nextArrow: '.slider__button_right',
//     prevArrow: '.slider__button_left',
//     dots: false,
//     infinite: false,
//     focusOnSelect: false,
// });


// const button_left = document.querySelector('.slider__button_left');
// const button_right = document.querySelector('.slider__button_right');
// if (button_left && button_right) {


//     const element = document.querySelector('.clients__arrow_bottom');
//     button.addEventListener("click", function (e) {
//         arrow.classList.toggle('clients__arrow_bottom_active');
//     })
// }


// function position() {
//     var obj = document.getElementById('element'); // берем интересующий элемент  
//     var posX = obj.offsetTop;  // верхний отступ эл-та от родителя
//     var posY = obj.offsetLeft; // левый отступ эл-та от родителя
//     console.log('x=[' + posX + '] y=[' + posY + ']'); // печатаем координаты
//   }

// $('.engineer__slider').slick({
//     slidesToShow: 3,
//     speed: 1000,
//     nextArrow: '.slider__button_right',
//     prevArrow: '.slider__button_left',
//     dots: false,
//     infinite: false,
//     focusOnSelect: false,
// });


$('.engineer__slider').slick({
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    nextArrow: '.slider__button_right',
    prevArrow: '.slider__button_left',
    centerMode: true,
    variableWidth: true
  });