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
