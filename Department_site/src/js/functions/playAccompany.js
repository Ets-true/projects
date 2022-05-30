function playAccompany(){
    AccompanyVideo_position = AccompanyVideo_block.getBoundingClientRect().top;

    if (AccompanyVideo_position <= winHeight/4 && AccompanyNumber == 0){
        AccompanyNumber = 1;
        setTimeout(function(){
            AccompanyVideo.play()
            setTimeout(function(){
                $(".Accompany__title1").css({'transition' : 'all 0.8s'});
                $(".Accompany__title2").css({'transition' : 'all 0.8s'});

                $(".Accompany__title1").css({'visibility' : 'visible'});
                $(".Accompany__title2").css({'visibility' : 'visible'});

                $(".Accompany__title1").css({'opacity' : '1'});
                setTimeout(function(){
                    $(".Accompany__title1").css({'opacity' : '0'});
                    setTimeout(function(){
                        $(".Accompany__title2").css({'opacity' : '1'});
                    },500)
                },3300)
            },4000)
        }, 500)
    }
}

