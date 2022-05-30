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
            