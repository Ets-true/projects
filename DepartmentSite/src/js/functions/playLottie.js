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


