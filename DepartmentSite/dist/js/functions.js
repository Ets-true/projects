function addSlider(){
    var controller = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax() 
        .to("#slideContainer", 1, {z: 0, delay: 4})
        .to("#slideContainer", 3,   {x: "-20%"})	
        .to("#slideContainer", 1, {z: 0, delay: 1})
        .to("#slideContainer", 3,   {x: "-40%"})
        .to("#slideContainer", 1, {z: 0, delay: 1})
        .to("#slideContainer", 3,   {x: "-60%"})
        .to("#slideContainer", 1, {z: 0, delay: 1})
        .to("#slideContainer", 3,   {x: "-80%"})
        .to("#slideContainer", 1, {z: 0, delay: 1})

    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "1000%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addTo(controller);
}
function addVideos() {
    var sliderTitles = document.querySelectorAll(".slide__title")
    var sliderVideos = document.querySelectorAll(".slider__video")
    const titleNames = ['IT_title', 'Art_title', 'Industry_title', 'Science_title', 'Media_title']
    const videoNames = ['IT', 'Art', 'Industry', 'Science', 'Media']

    for (let i = 0; i < sliderVideos.length; i++) {
        sliderTitles[i].innerHTML =
            `<video class="title__video" id="${videoNames[i]}__titleVideo"  width="100%" height="50%" no-controls autoplay loop muted ><source src="media/video/${titleNames[i]}.mp4"/></video>`
        sliderVideos[i].innerHTML =
            `<video id="${videoNames[i]}__backVideo" class="video_background" autoplay no-controls loop muted><source src="media/video/${videoNames[i]}.mp4"/></video>`
    }
    document.getElementById('AccompanyVideo_block').innerHTML =
        '<div class="Accompany__title1">Сопровождение.<br>Постепенное совершенствование каждой детали</div><div class="Accompany__title2">Поддерживаем работоспособность сайта, улучшаем функционал и обепечиваем безопасность</div><video id="AccompanyVideo" class="" width="100%" height="50%" no-controls muted ><source src="media/video/accompany.mp4"/></video>'
}
function changeHelper() {
    if(helperStarted == 1){
        if (first_position + 500 < scrollTop) {
            if (document.documentElement.clientWidth < 1920) {
                var prop = 37 * (document.documentElement.clientWidth / 1910)
            }
            else {
                var prop = 37
            }
            var change = "translateY(-" + prop + "px)"
            helperText1.style.transform = change
            helperText2.style.transform = change
        }
        if (scrollTop >= 6000) {
            helper.style.opacity = 0;
            setTimeout(function () {
                helper.style.display = "none";
            }, 3000)
        }
    }
}
function loadAnim_func() {
    loadAnim.goToAndPlay(0, true);
    setTimeout(() => {
       if (accept == 1) {
          document.location.href = "catalog/";
       }
    }, 3200);
 }

 function changePage(){
    if (document.querySelector(".change__page").getBoundingClientRect().top <= document.documentElement.clientHeight - $(".change__page").height()) {
        accept = 1
        loadAnim_func()
     }
     if (document.querySelector(".change__page").getBoundingClientRect().top > document.documentElement.clientHeight - $(".change__page").height()) {
        accept = 0
     }
 }
function changeSlide(){
    art_block_position = art_block.getBoundingClientRect().left;
    Industry_block_position = Industry_block.getBoundingClientRect().left;
    Science_block_position = Science_block.getBoundingClientRect().left;
    Media_block_position = Media_block.getBoundingClientRect().left;

    if( (-(vidblock_width/2) <= art_block_position && art_block_position <= (winWidth-vidblock_width/2)) && ArtNumber == 0){
        ArtNumber = 1;
        slideMP4[1].play()
        titleMP4[1].play();
        art_Title.style.opacity = 1
        art_Title.style.visibility = "visible"
    }

    if( (-(vidblock_width/2) >= art_block_position || art_block_position >= (winWidth-vidblock_width/2)) && ArtNumber == 1){
        ArtNumber = 0;
        slideMP4[1].pause();
        titleMP4[1].pause();
        art_Title.style.opacity = 0
        art_Title.style.visibility = "hidden"
        setTimeout(function(){
            slideMP4[1].currentTime = 0; 
            titleMP4[1].currentTime = 0;
        }, 2000)

    }

    if( (-(vidblock_width/2) <= Industry_block_position && Industry_block_position <= (winWidth-vidblock_width/2)) && IndustryNumber == 0){
        IndustryNumber = 1;
        slideMP4[2].play()
        titleMP4[2].play();
        industry_Title.style.opacity = 1
        industry_Title.style.visibility = "visible"

    }
    if( (-(vidblock_width/2) >= Industry_block_position || Industry_block_position >= (winWidth-vidblock_width/2)) && IndustryNumber == 1){
        IndustryNumber = 0;
        slideMP4[2].pause();
        titleMP4[2].pause();
        industry_Title.style.opacity = 0
        industry_Title.style.visibility = "hidden"
        setTimeout(function(){
            slideMP4[2].currentTime = 0; 
            titleMP4[2].currentTime = 0;
        }, 2000)

    }

    if( (-(vidblock_width/2) <= Science_block_position && Science_block_position <= (winWidth-vidblock_width/2)) && ScienceNumber == 0){
        ScienceNumber = 1;
        slideMP4[3].play()
        titleMP4[3].play();
        science_Title.style.opacity = 1
        science_Title.style.visibility = "visible"

    }
    if( (-(vidblock_width/2) >= Science_block_position || Science_block_position >= (winWidth-vidblock_width/2)) && ScienceNumber == 1){
        ScienceNumber = 0;
        slideMP4[3].pause();
        titleMP4[3].pause();
        science_Title.style.opacity = 0
        science_Title.style.visibility = "hidden"
        setTimeout(function(){
            slideMP4[3].currentTime = 0; 
            titleMP4[3].currentTime = 0;
        }, 2000)

    }

    if( (-(vidblock_width/2) <= Media_block_position && Media_block_position <= (winWidth-vidblock_width/2)) && MediaNumber == 0){
        MediaNumber = 1;
        slideMP4[4].play()
        titleMP4[4].play();
        media_Title.style.opacity = 1
        media_Title.style.visibility = "visible"

    }
    if( (-(vidblock_width/2) >= Media_block_position || Media_block_position >= (winWidth-vidblock_width/2)) && MediaNumber == 1){
        MediaNumber = 0;
        slideMP4[4].pause();
        titleMP4[4].pause();
        media_Title.style.opacity = 0
        media_Title.style.visibility = "hidden"
        setTimeout(function(){
            slideMP4[4].currentTime = 0; 
            titleMP4[4].currentTime = 0;
        }, 2000)

    }
}     
            
function hideJobs(){
    if(scrollTop > winHeight*0.2){
        var scrollCoef = 0.001;
        var res = scrollCoef * (scrollTop-winHeight*0.2)
        var res2 = 1 - res;
        if (res2>=0.1){
            $('.content_wrap').css({
                'transform'         : 'scale(' +res2+ ')'
        
            });
        
        
            $('.iphone').css({
                'box-shadow'         : '0px 0px 0px white'
            });
        }
    
    }
}


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

function initialize() {

  animData = {
    container: document.getElementById('lottie-1'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'media/lottie/newUXUI.json'
  };
  anim = bodymovin.loadAnimation(animData);

  animData_2 = {
    container: document.getElementById('lottie-2'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'media/lottie/lottie-2.json'
  };
  anim_2 = bodymovin.loadAnimation(animData_2);

  load = {
    container: document.getElementById('load_lottie'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'media/lottie/load.json'
 };

 setTimeout(() => {
    loadAnim = bodymovin.loadAnimation(load)
 }, 2000);

  winHeight = $(window).height();



  animDuration = document.querySelector('.lottie_wrap').offsetHeight;
  scrollToElem = document.querySelector('.lottie_wrap').offsetTop + document.querySelector('.lottie_animation').offsetHeight / 2 - winHeight;

  animDuration_2 = document.querySelector('.lottie_wrap_2').offsetHeight;
  scrollToElem_2 = document.querySelector('.lottie_wrap_2').offsetTop + document.querySelector('.lottie_animation_2').offsetHeight / 2 - winHeight;

  winHeightSpec = $(window).height();
  winWidthSpec = $(window).width()


  if (winWidthSpec <= 1920) {
    if (winHeightSpec / winWidthSpec >= 0.48958) {
      SpecVar = 0;
    } else if (winHeightSpec / winWidthSpec < 0.48958) {
      SpecVar = (winWidthSpec * 0.48958 - winHeightSpec) / 2
    }
  } else {
    SpecVar = 0;
  }

  titleMP4 = document.querySelectorAll('.title__video')
  slideMP4 = document.querySelectorAll('.video_background')

  // helperStarted = 0


  video = document.querySelector('.video__IT')
  // video.pause();

  num = 0;
  chapters = document.querySelectorAll('.chapter__title');
  //   chapter;
  //   chapter_position;

  winHeight = $(window).height();
  winHeight_2 = winHeight / 2;

  //   scrollToChapter;
  //   scrollTop;


  number = 0;
  number_2 = 0;

  lottie_Wrap_Position = $(".lottie_wrap").offset().top;
  lottie_Wrap_Height = $(".lottie_wrap").height();

  sum_Height = lottie_Wrap_Position + lottie_Wrap_Height


  video_up = document.querySelector('.video_up');
  lottie_animation = document.querySelector('.lottie_animation');
  slider_arc = document.querySelector('.slider__arc');
  slider_title = document.querySelector('.slider__title');


  vidblock = document.querySelector('.slider__video');
  vidblock_width = $(".slider__video").width()


  it_block = document.querySelector('#IT_block');
  art_block = document.querySelector('#Art_block');
  industry_block = document.querySelector('#Industry_block');
  science_block = document.querySelector('#Science_block');
  media_block = document.querySelector('#Media_block');


  it_Title = document.querySelector('.title__IT');
  art_Title = document.querySelector('.title__Art');
  industry_Title = document.querySelector('.title__Industry');
  science_Title = document.querySelector('.title__Science');
  media_Title = document.querySelector('.title__Media');

  ////Видосы



  ITNumber = 0;
  ArtNumber = 0;
  IndustryNumber = 0;
  ScienceNumber = 0;
  MediaNumber = 0;

  AccompanyNumber = 0;


  AccompanyVideo_block = document.querySelector('#AccompanyVideo_block');
  //   AccompanyVideo =  document.querySelector('#AccompanyVideo');

  winWidth = $(window).width();

  video_up_height = $(".video_up").height()
  scrollToSlider = winHeight / 2 - video_up_height / 2;
}

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


function animatebodymovin(duration, animObject, scrollToElem) {
    var winScrollTop = $(this).scrollTop();
    var scrollPosition = winScrollTop - scrollToElem;
    if (scrollPosition >= 0) {
       var maxFrames = animObject.totalFrames;
       var frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
       animObject.goToAndStop(frame, true);
    }
 }


function playLottie(){
    if (scrollTop > scrollToElem && scrollTop < scrollToElem_2) {
        animatebodymovin(animDuration, anim, scrollToElem);
     }
     if (scrollTop > scrollToElem_2) {
        animatebodymovin(animDuration_2, anim_2, scrollToElem_2);
     }
}



function showChapter(){
    chapter_position =  chapters[num].getBoundingClientRect().top;
    if (chapter_position <= winHeight/2){
        chapters[num].style.opacity = 1;
        num++;
        if (num >=3){
            num = 0;
        }
    }

    if (chapter_position > $(window).height()/2){
        chapters[num].style.opacity = 0;
        num++;
        if (num >=3){
            num = 0;
        }
    }
}
function showHelper() {
    if (scrollTop < 1000) {
        helper = document.querySelector('.main__helper');
        helperText1 = document.querySelector('.helper__text_1');
        helperText2 = document.querySelector('.helper__text_2');
        helper.style.transform = "translate3d(-52%, 0, 0)"
        first_position = scrollTop
        helperStarted = 1
    }
}
function showJobs() {
    setTimeout(function () {
        $('.iphone').addClass('active')
    }, 100);

    setTimeout(function () {
        $('.quote').addClass('active')
    }, 500);
}
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


function showSlider(){

    video_up_position = video_up.getBoundingClientRect().top - SpecVar;

    if(scrollToSlider >= video_up_position && number==0){
            number=1
            lottie_animation.style.opacity = 0;
            video_up.style.opacity = 1;
            slider_arc.style.opacity = 1;
            slider_title.style.opacity = 1;

            it_Title.style.transition = "all 0.5s"
            it_Title.style.opacity = 1
            it_Title.style.visibility = "visible"

            console.log(slideMP4)            
            titleMP4[0].play();
            slideMP4[0].play()
            ITNumber = 1;
    }

    if(scrollToSlider < video_up_position && number==1){
            number = 0;
            lottie_animation.style.opacity = 1;
            video_up.style.opacity = 0;
            slider_arc.style.opacity = 0;
            slider_title.style.opacity = 0;
    

            it_Title.style.transition = "all 0s"
            it_Title.style.opacity = 0;
            it_Title.style.visibility = "hidden"

            titleMP4[0].pause();
            titleMP4[0].currentTime = 0;

            slideMP4[0].pause();
            slideMP4[0].currentTime = 1;
            ITNumber = 0;
    }
}

function stopVideos(){
    for(i=0;i<slideMP4.length;i++){
        titleMP4[i].pause();
        titleMP4[i].currentTime = 0;

        slideMP4[i].pause();
        slideMP4[i].currentTime = 0;
    }
    const AccompanyVideo =  document.querySelector('#AccompanyVideo');
    AccompanyVideo.pause()
    AccompanyVideo.currentTime = 0;
} 
        
        
function translation() {
    setTimeout(function () {
        var invis = document.querySelectorAll("#invis")
        var iteration = 0;
        var max = invis.length
        function invisible(invis, it, max) {
            invis[it].style.transition = "0.3s";
            invis[it].style.opacity = 0;
            it++;
            if (it < max) {
                setTimeout(function () {
                    invisible(invis, it, max)
                }, 160)
            }
        }
        invisible(invis, iteration, max)
    }, 500)

    setTimeout(function () {
        var letters = document.querySelectorAll('.letter')
        var iteration_2 = 0;
        var max_2 = letters.length
        function round(letters, it, max) {
            letters[it].style.opacity = 1;
            letters[it].style.animation = "letter 0.7s";
            it++;
            if (it < max) {
                setTimeout(function () {
                    round(letters, it, max)
                }, 50)
            }
        }
        round(letters, iteration_2, max_2)
    }, 700)

    setTimeout(function () {
        if (document.documentElement.clientWidth >= 1024) {
            setTimeout(function () {
                document.querySelector(".iphone__blur").style.opacity = 1;
                // setTimeout(function () {
                //     document.querySelector(".iphone").style.opacity = 0;
                // })
            }, 2500)
        }

    }, 300);
}