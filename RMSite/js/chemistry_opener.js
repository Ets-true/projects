function diplay_hide (blockId){ 
    if ($(blockId).css('display') == 'none') { 
        $(blockId).animate({height: 'show'}, 300); 
    } 
    else {     
            $(blockId).animate({height: 'hide'}, 300); 
    }
} 

// const button = document.querySelector('.clients__button');
// if (button) {
//     const arrow = document.querySelector('.clients__arrow_bottom');
//     button.addEventListener("click", function (e) {
//         arrow.classList.toggle('clients__arrow_bottom_active');
//     })
// }