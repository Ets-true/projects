function diplay_hide (blockId){ 
    if ($(blockId).css('display') == 'none') { 
        $(blockId).animate({height: 'show'}, 500); 
    } 
    else {     
                $(blockId).animate({height: 'hide'}, 500); 
    }
} 

const button = document.querySelector('.burger__button');
if (button) {
    const line = document.querySelector('.header__burger');
    button.addEventListener("click", function (e) {
        line.classList.toggle('_active');
    })
}