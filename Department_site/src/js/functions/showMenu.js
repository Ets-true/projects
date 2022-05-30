function showMenu(){
    // $(".menu__page").css({ 'display': 'block' });
    document.querySelector('.menu__page').style.display = "block"
    // document.querySelector('.menu__page').style.opacity = 1
    // document.querySelector('.menu').style.opacity = 0

    setTimeout(function () {
        $(".menu__page").css({ 'transition': 'all 0.3s' });
        $(".main").css({ 'transition': 'all 0.3s' });
    
        $(".menu__page").css({ 'opacity': '1' });
        $(".main").css({ 'opacity': '0' });
    
    }, 300)
    $('body').css({ 'overflow-y': 'hidden' })
    $('body').css({ 'margin-right': '7px' });
}

