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
        
        