function hideMenu(){
    setTimeout(function(){
        // $(".menu__page").css({'transition' : 'all 0.3s'});
        // $(".main").css({'transition' : 'all 0.3s'});
    
        $(".menu__page").css({'opacity' : '0'});
        $(".main").css({'opacity' : '1'});
    },300)
    setTimeout(function(){
        $(".menu__page").css({'display' : 'none'});
    },1200)
    $('body').css({'overflow-y' : 'scroll'})
    $('body').css({ 'margin-right': '0px' })
}
